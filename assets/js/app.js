/* ==========================================================
   app.js - hash router, views, sidebar, theme, search
   All user-visible text is set with textContent. Code blocks
   are highlighted from escaped text only.
   ========================================================== */
(function () {
  'use strict';

  var C = window.Course;
  var P = window.Progress;
  var PROJECTS = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  var REFERENCE = Array.isArray(window.REFERENCE) ? window.REFERENCE : [];

  var main = document.getElementById('app');
  var sidebar = document.getElementById('sidebar');
  var sidebarTree = document.getElementById('sidebar-tree');
  var layout = document.getElementById('layout');
  var overlay = document.getElementById('overlay');
  var menuBtn = document.getElementById('menu-toggle');
  var collapseBtn = document.getElementById('sidebar-collapse');
  var themeBtn = document.getElementById('theme-toggle');
  var themeLabel = document.getElementById('theme-label');
  var topNav = document.getElementById('top-nav');
  var searchInput = document.getElementById('search-input');
  var backTop = document.getElementById('back-to-top');

  var ROUTES = [
    { key: 'home', label: 'ড্যাশবোর্ড', hash: '#/' },
    { key: 'html', label: 'HTML', hash: '#/course/html' },
    { key: 'css', label: 'CSS', hash: '#/course/css' },
    { key: 'tailwind', label: 'Tailwind', hash: '#/course/tailwind' },
    { key: 'javascript', label: 'JavaScript', hash: '#/course/javascript' },
    { key: 'projects', label: 'প্রজেক্ট', hash: '#/projects' },
    { key: 'playground', label: 'প্লেগ্রাউন্ড', hash: '#/playground' },
    { key: 'reference', label: 'রেফারেন্স', hash: '#/reference' },
    { key: 'progress', label: 'অগ্রগতি', hash: '#/progress' }
  ];

  /* ---------- DOM helpers ---------- */
  function h(tag, attrs, kids) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (typeof v === 'function') node.addEventListener(k.replace(/^on/, ''), v);
        else if (k === 'class') node.className = v;
        else if (k === 'text') node.textContent = String(v);
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, String(v));
      });
    }
    append(node, kids);
    return node;
  }

  function append(node, kids) {
    if (kids === null || kids === undefined || kids === false) return;
    if (Array.isArray(kids)) {
      kids.forEach(function (k) { append(node, k); });
      return;
    }
    if (kids instanceof Node) {
      node.appendChild(kids);
      return;
    }
    node.appendChild(document.createTextNode(String(kids)));
  }

  /* Inline formatting: `code` and **bold** only, built with DOM nodes */
  function rich(text) {
    var frag = document.createDocumentFragment();
    String(text).split(/(`[^`]+`|\*\*[^*]+\*\*)/).forEach(function (part) {
      if (!part) return;
      if (part.length > 2 && part.charAt(0) === '`' && part.charAt(part.length - 1) === '`') {
        frag.appendChild(h('code', { text: part.slice(1, -1) }));
      } else if (part.length > 4 && part.slice(0, 2) === '**' && part.slice(-2) === '**') {
        frag.appendChild(h('strong', { text: part.slice(2, -2) }));
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    return frag;
  }

  function para(text, cls) {
    return h('p', { class: cls || null }, rich(text));
  }

  /* ---------- Syntax highlighting (escaped input only) ---------- */
  var RULES = {
    html: [
      ['com', /<!--[\s\S]*?-->/],
      ['kw', /<!DOCTYPE[^>]*>/i],
      ['str', /"[^"]*"|'[^']*'/],
      ['tag', /<\/?[A-Za-z][\w:-]*/],
      ['attr', /\s[\w:@.-]+(?==)/]
    ],
    css: [
      ['com', /\/\*[\s\S]*?\*\//],
      ['str', /"[^"]*"|'[^']*'/],
      ['sel', /[^{};\n]+(?=\s*\{)/],
      ['prop', /[\w-]+(?=\s*:)/],
      ['num', /#[0-9a-fA-F]{3,8}\b|-?\b\d+(?:\.\d+)?(?:px|em|rem|%|vw|vh|vmin|vmax|s|ms|deg|fr)?\b/]
    ],
    js: [
      ['com', /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ['str', /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`/],
      ['kw', /\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|this|null|undefined|true|false|typeof|instanceof|async|await|try|catch|finally|throw|import|export|default|of|in)\b/],
      ['num', /\b\d+(?:\.\d+)?\b/],
      ['fn', /\b[A-Za-z_$][\w$]*(?=\()/]
    ]
  };
  RULES.javascript = RULES.js;

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlight(code, lang) {
    var rules = RULES[lang];
    if (!rules) return escapeHtml(code);
    var source = rules.map(function (r) { return '(?<' + r[0] + '>' + r[1].source + ')'; }).join('|');
    var re = new RegExp(source, 'g');
    var out = '';
    var last = 0;
    var m;
    while ((m = re.exec(code)) !== null) {
      if (m[0] === '') { re.lastIndex++; continue; }
      out += escapeHtml(code.slice(last, m.index));
      var name = 'punct';
      for (var i = 0; i < rules.length; i++) {
        if (m.groups[rules[i][0]] !== undefined) { name = rules[i][0]; break; }
      }
      out += '<span class="tok-' + name + '">' + escapeHtml(m[0]) + '</span>';
      last = m.index + m[0].length;
    }
    out += escapeHtml(code.slice(last));
    return out;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = h('textarea', { readonly: true });
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) resolve(); else reject(new Error('copy failed'));
    });
  }

  /* Code block with label, copy button and highlighted code */
  function codeBlock(lang, code, label) {
    var raw = String(code).replace(/\s+$/, '');
    var btn = h('button', { type: 'button', class: 'copy-btn', text: 'কপি' });
    btn.setAttribute('aria-label', (label || lang) + ' কোড কপি করুন');
    btn.addEventListener('click', function () {
      copyText(raw).then(function () {
        btn.textContent = 'কপি হয়েছে';
        setTimeout(function () { btn.textContent = 'কপি'; }, 1500);
      }, function () {
        btn.textContent = 'কপি ব্যর্থ';
      });
    });
    var code2 = h('code');
    code2.innerHTML = highlight(raw, lang); // escaped by highlight()
    var pre = h('pre', { tabindex: '0' }, code2);
    pre.setAttribute('aria-label', (label || lang) + ' কোড');
    return h('div', { class: 'code-block' }, [
      h('div', { class: 'code-block-head' }, [h('span', { text: label || lang.toUpperCase() }), btn]),
      pre
    ]);
  }

  function filesFromExample(example) {
    var files = { html: '', css: '', js: '' };
    (example.files || []).forEach(function (f) {
      var key = f.lang === 'javascript' ? 'js' : f.lang;
      if (!(key in files)) return;
      files[key] = files[key] ? files[key] + '\n' + f.code : f.code;
    });
    return files;
  }

  function usesTailwind(files) {
    return /@tailwindcss\/browser/.test(files.html || '');
  }

  function openInPlayground(title, files) {
    if (!window.bdlearnPlayground) return;
    window.bdlearnPlayground.openWith({ title: title, files: files, tailwind: usesTailwind(files) });
  }

  function sectionTitle(text) {
    return h('h2', { class: 'section-title', text: text });
  }

  function pct(done, total) {
    return total ? Math.round((done / total) * 100) : 0;
  }

  function progressBar(done, total, label) {
    var percent = pct(done, total);
    var bar = h('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(percent), 'aria-label': label || 'অগ্রগতি' });
    bar.appendChild(h('span', { style: 'width:' + percent + '%' }));
    return h('div', null, [
      h('div', { class: 'progress-label' }, [h('span', { text: label || 'অগ্রগতি' }), h('span', { text: done + ' / ' + total + ' (' + percent + '%)' })]),
      bar
    ]);
  }

  function setTitle(text) {
    document.title = text + ' | ওয়েব শিখি';
  }

  function notFound(message) {
    setTitle('পাওয়া যায়নি');
    main.textContent = '';
    main.appendChild(h('div', { class: 'container empty-state' }, [
      h('h1', { text: 'পেজটি পাওয়া যায়নি' }),
      para(message || 'আপনি যে লিংকটি খুলেছেন তা সঠিক নয় বা লেসনটি এখনো যুক্ত হয়নি।'),
      h('a', { class: 'btn', href: '#/', text: 'ড্যাশবোর্ডে ফিরে যান' })
    ]));
  }

  /* ---------- Sidebar ---------- */
  var currentLessonId = null;

  function statusDot(done, current, index) {
    var cls = 'status-dot' + (done ? ' is-done' : '') + (current ? ' is-current' : '');
    return h('span', { class: cls, 'aria-hidden': 'true', text: done ? '✓' : String(index) });
  }

  function renderSidebar(filterText) {
    sidebarTree.textContent = '';
    var q = String(filterText || '').trim();
    if (q) {
      var results = C.searchLessons(q);
      if (!results.length) {
        sidebarTree.appendChild(h('p', { class: 'nav-empty', text: '"' + q + '" দিয়ে কোনো লেসন পাওয়া যায়নি।' }));
        return;
      }
      var list = h('ul', { class: 'nav-results', 'aria-label': 'খোঁজার ফলাফল' });
      results.slice(0, 40).forEach(function (lesson) {
        var course = C.getCourse(lesson.course);
        var li = h('li', { class: 'nav-lesson' });
        li.appendChild(h('a', { href: '#/lesson/' + lesson.id }, [
          statusDot(P.isCompleted(lesson.id), false, ''),
          h('span', null, [lesson.title, h('span', { class: 'small muted', text: ' - ' + course.title })])
        ]));
        list.appendChild(li);
      });
      sidebarTree.appendChild(list);
      return;
    }

    C.COURSES.forEach(function (course) {
      var modules = C.getModules(course.key);
      var block = h('div', { class: 'nav-course' });
      block.appendChild(h('a', { class: 'nav-course-title', href: '#/course/' + course.key, text: course.title }));
      if (!modules.length) {
        block.appendChild(h('p', { class: 'nav-empty', text: 'এই কোর্সের লেসন এখনো যুক্ত হয়নি।' }));
      }
      modules.forEach(function (mod) {
        var containsCurrent = mod.lessons.some(function (l) { return l.id === currentLessonId; });
        var done = P.completedCount(mod.lessons.map(function (l) { return l.id; }));
        var details = h('details', { class: 'nav-module' });
        if (containsCurrent) details.setAttribute('open', '');
        var summary = h('summary', null, [
          h('span', { text: mod.title }),
          h('span', { class: 'small', text: done + '/' + mod.lessons.length })
        ]);
        details.appendChild(summary);
        var ul = h('ul');
        mod.lessons.forEach(function (lesson, idx) {
          var isCurrent = lesson.id === currentLessonId;
          var li = h('li', { class: 'nav-lesson' });
          var link = h('a', { href: '#/lesson/' + lesson.id }, [
            statusDot(P.isCompleted(lesson.id), isCurrent, idx + 1),
            h('span', { text: lesson.title })
          ]);
          if (isCurrent) link.setAttribute('aria-current', 'page');
          li.appendChild(link);
          ul.appendChild(li);
        });
        details.appendChild(ul);
        block.appendChild(details);
      });
      sidebarTree.appendChild(block);
    });
  }

  function renderTopNav(active) {
    topNav.textContent = '';
    ROUTES.forEach(function (r) {
      var a = h('a', { href: r.hash, text: r.label });
      if (r.key === active) a.setAttribute('aria-current', 'page');
      topNav.appendChild(a);
    });
  }

  function openSidebar(open) {
    sidebar.classList.toggle('is-open', !!open);
    overlay.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function closeSidebarIfMobile() {
    if (window.matchMedia('(max-width: 1023px)').matches) openSidebar(false);
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeLabel.textContent = theme === 'dark' ? 'লাইট' : 'ডার্ক';
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'লাইট থিমে যান' : 'ডার্ক থিমে যান');
  }

  /* ---------- Dashboard ---------- */
  function recommendedLesson() {
    var all = C.LESSONS;
    for (var i = 0; i < all.length; i++) {
      if (!P.isCompleted(all[i].id)) return all[i];
    }
    return null;
  }

  function dashboardView() {
    setTitle('ড্যাশবোর্ড');
    var all = C.LESSONS;
    var total = all.length;
    var done = P.completedCount(all.map(function (l) { return l.id; }));
    var next = recommendedLesson();
    var last = P.getLastLesson() && C.getLesson(P.getLastLesson());
    var container = h('div', { class: 'container' });

    container.appendChild(h('section', { class: 'page-head' }, [
      h('h1', { text: 'স্বাগতম! বাংলায় ওয়েব ডেভেলপমেন্ট শিখুন' }),
      para('শূন্য থেকে শুরু করে HTML, CSS, Tailwind CSS ও JavaScript পর্যন্ত ধাপে ধাপে শিখুন। প্রতিটি লেসনে ব্যাখ্যা, কোড উদাহরণ, অনুশীলন ও কুইজ আছে।', 'lead')
    ]));

    var actions = h('div', { class: 'btn-row' });
    if (next) {
      actions.appendChild(h('a', { class: 'btn', href: '#/lesson/' + (last && !P.isCompleted(last.id) ? last.id : next.id), text: 'শেখা চালিয়ে যান' }));
    }
    actions.appendChild(h('a', { class: 'btn btn-ghost', href: '#/playground', text: 'কোড প্লেগ্রাউন্ড খুলুন' }));
    container.appendChild(actions);

    var stats = h('div', { class: 'grid-cards three' });
    stats.appendChild(h('div', { class: 'card' }, [h('p', { class: 'muted small', text: 'মোট লেসন' }), h('p', { style: 'font-size:1.6rem;font-weight:700;margin:0', text: String(total) })]));
    stats.appendChild(h('div', { class: 'card' }, [h('p', { class: 'muted small', text: 'সম্পন্ন লেসন' }), h('p', { style: 'font-size:1.6rem;font-weight:700;margin:0', text: String(done) })]));
    stats.appendChild(h('div', { class: 'card' }, [h('p', { class: 'muted small', text: 'বাকি লেসন' }), h('p', { style: 'font-size:1.6rem;font-weight:700;margin:0', text: String(total - done) })]));
    container.appendChild(stats);

    container.appendChild(h('div', { class: 'card' }, [
      progressBar(done, total, 'সামগ্রিক অগ্রগতি'),
      next
        ? h('p', { class: 'small muted', style: 'margin-top:12px' }, [
          'সুপারিশকৃত পরবর্তী লেসন: ',
          h('a', { href: '#/lesson/' + next.id, text: next.title })
        ])
        : h('p', { class: 'small', style: 'margin-top:12px', text: 'অভিনন্দন! সব লেসন সম্পন্ন হয়েছে। এখন প্রজেক্টে নিজের দক্ষতা যাচাই করুন।' })
    ]));

    container.appendChild(sectionTitle('শেখার পথ (Roadmap)'));
    var roadmap = h('ol', { class: 'plain-list roadmap' });
    [
      ['HTML', 'পেজের কাঠামো, টেক্সট, লিংক, ছবি, ফর্ম', '#/course/html'],
      ['CSS', 'রঙ, লেআউট, Flexbox, Grid, অ্যানিমেশন', '#/course/css'],
      ['রেসপন্সিভ ডিজাইন', 'মিডিয়া কোয়েরি, মোবাইল-ফার্স্ট লেআউট', '#/course/css'],
      ['Tailwind CSS', 'ইউটিলিটি ক্লাস দিয়ে দ্রুত UI', '#/course/tailwind'],
      ['JavaScript', 'DOM, ইভেন্ট, ফর্ম ভ্যালিডেশন, Fetch', '#/course/javascript'],
      ['প্রজেক্ট', 'প্রোফাইল পেজ থেকে ব্যবসায়িক ওয়েবসাইট', '#/projects']
    ].forEach(function (item) {
      roadmap.appendChild(h('li', { style: 'margin-bottom:8px' }, [
        h('a', { href: item[2], text: item[0] }),
        h('span', { class: 'muted', text: ' - ' + item[1] })
      ]));
    });
    container.appendChild(h('div', { class: 'card' }, roadmap));

    container.appendChild(sectionTitle('কোর্স'));
    var cards = h('div', { class: 'grid-cards three' });
    C.COURSES.forEach(function (course) {
      var lessons = C.getCourseLessons(course.key);
      var doneCount = P.completedCount(lessons.map(function (l) { return l.id; }));
      var card = h('a', { class: 'card course-card', href: '#/course/' + course.key }, [
        h('span', { class: 'course-icon', 'aria-hidden': 'true', text: course.icon }),
        h('h3', { text: course.title }),
        h('p', { class: 'small muted', text: course.description }),
        h('span', { class: 'badge', text: course.level })
      ]);
      card.appendChild(progressBar(doneCount, lessons.length, course.title + ' অগ্রগতি'));
      cards.appendChild(card);
    });
    container.appendChild(cards);

    container.appendChild(sectionTitle('শুরু করার নির্দেশনা'));
    container.appendChild(h('ul', { class: 'checklist' }, [
      h('li', { text: 'প্রতিদিন একটি লেসন পড়ুন এবং কোড উদাহরণটি নিজে টাইপ করে দেখুন।' }),
      h('li', { text: 'প্রতিটি লেসনের "Playground-এ চালান" বাটনে ক্লিক করে কোড পরিবর্তন করে ফল দেখুন।' }),
      h('li', { text: 'লেসন শেষে কুইজ দিন। ভুল হলে ব্যাখ্যা পড়ে আবার চেষ্টা করুন।' }),
      h('li', { text: 'তিনটি অনুশীলন (সহজ, মাঝারি, কঠিন) নিজে আগে চেষ্টা করুন, তারপর সাজেস্টেড সমাধান দেখুন।' }),
      h('li', { text: 'লেসন সম্পন্ন হলে "সম্পন্ন হিসেবে চিহ্নিত করুন" চাপুন; অগ্রগতি এই ব্রাউজারে সংরক্ষিত থাকবে।' })
    ]));

    container.appendChild(h('div', { class: 'notice' }, [
      para('**নোট:** অগ্রগতি LocalStorage-এ এই ব্রাউজার ও ডিভাইসের জন্য সংরক্ষিত হয়। ব্রাউজারের ডেটা মুছলে অগ্রগতি হারাতে পারে।')
    ]));

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Course ---------- */
  function courseView(key) {
    var course = C.getCourse(key);
    if (!course) return notFound('এই কোর্সটি পাওয়া যায়নি।');
    setTitle(course.title + ' কোর্স');
    var lessons = C.getCourseLessons(key);
    var modules = C.getModules(key);
    var doneCount = P.completedCount(lessons.map(function (l) { return l.id; }));
    var container = h('div', { class: 'container' });

    container.appendChild(h('nav', { class: 'breadcrumb', 'aria-label': 'ব্রেডক্রাম্ব' }, [
      h('ol', null, [h('li', null, h('a', { href: '#/', text: 'ড্যাশবোর্ড' })), h('li', { 'aria-current': 'page', text: course.title })])
    ]));
    container.appendChild(h('div', { class: 'page-head' }, [
      h('h1', { text: course.title + ' কোর্স' }),
      para(course.description, 'lead'),
      h('span', { class: 'badge', text: course.level })
    ]));
    container.appendChild(h('div', { class: 'card' }, progressBar(doneCount, lessons.length, 'কোর্স অগ্রগতি')));

    if (!modules.length) {
      container.appendChild(h('div', { class: 'callout warn' }, [
        h('strong', { text: 'লেসন যুক্ত করা হয়নি' }),
        h('p', { text: 'এই কোর্সের লেসন ফাইল এখনো যুক্ত হয়নি।' })
      ]));
    }

    modules.forEach(function (mod) {
      var modDone = P.completedCount(mod.lessons.map(function (l) { return l.id; }));
      var card = h('section', { class: 'card', 'aria-labelledby': 'mod-' + key + '-' + mod.number });
      var head = h('div', { class: 'toolbar', style: 'justify-content:space-between' }, [
        h('h2', { id: 'mod-' + key + '-' + mod.number, style: 'margin:0', text: mod.title }),
        modDone === mod.lessons.length ? h('span', { class: 'badge ok', text: 'মডিউল সম্পন্ন' }) : null
      ]);
      card.appendChild(head);
      card.appendChild(progressBar(modDone, mod.lessons.length, 'মডিউলের অগ্রগতি'));
      var ul = h('ul', { class: 'nav-module', style: 'padding:0;margin-top:10px;list-style:none' });
      mod.lessons.forEach(function (lesson, idx) {
        var done = P.isCompleted(lesson.id);
        var li = h('li', { style: 'margin:4px 0' }, [
          h('a', { href: '#/lesson/' + lesson.id, style: 'display:flex;gap:10px;align-items:center;padding:8px;border-radius:8px;text-decoration:none;color:var(--text)' }, [
            statusDot(done, false, idx + 1),
            h('span', { text: lesson.title }),
            done ? h('span', { class: 'badge ok small', text: 'সম্পন্ন' }) : null
          ])
        ]);
        ul.appendChild(li);
      });
      card.appendChild(ul);
      card.appendChild(h('div', { class: 'btn-row' }, [
        h('a', { class: 'btn btn-ghost btn-small', href: '#/quiz/' + key + '/' + mod.number, text: 'মডিউল কুইজ দিন' })
      ]));
      container.appendChild(card);
    });

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Lesson ---------- */
  function lessonView(id) {
    var lesson = C.getLesson(id);
    if (!lesson) return notFound('এই লেসনটি পাওয়া যায়নি।');
    var course = C.getCourse(lesson.course);
    setTitle(lesson.title + ' - ' + course.title);
    P.setLastLesson(lesson.id);
    currentLessonId = lesson.id;

    var container = h('article', { class: 'container', 'aria-labelledby': 'lesson-title' });
    container.appendChild(h('nav', { class: 'breadcrumb', 'aria-label': 'ব্রেডক্রাম্ব' }, [
      h('ol', null, [
        h('li', null, h('a', { href: '#/', text: 'ড্যাশবোর্ড' })),
        h('li', null, h('a', { href: '#/course/' + course.key, text: course.title })),
        h('li', { text: lesson.moduleTitle }),
        h('li', { 'aria-current': 'page', text: lesson.title })
      ])
    ]));

    var completed = P.isCompleted(lesson.id);
    var titleRow = h('div', { class: 'page-head' }, [
      h('h1', { id: 'lesson-title', text: lesson.title }),
      h('div', { class: 'toolbar' }, [
        h('span', { class: 'badge', text: course.title + ' · মডিউল ' + lesson.module }),
        completed ? h('span', { class: 'badge ok', text: 'সম্পন্ন' }) : null
      ])
    ]);
    container.appendChild(titleRow);

    container.appendChild(h('section', { class: 'card', 'aria-label': 'শেখার উদ্দেশ্য' }, [
      h('h2', { style: 'margin-top:0', text: 'শেখার উদ্দেশ্য' }),
      h('ul', { class: 'checklist' }, lesson.objectives.map(function (o) { return h('li', null, rich(o)); }))
    ]));

    container.appendChild(sectionTitle('ব্যাখ্যা'));
    lesson.explanation.forEach(function (p) { container.appendChild(para(p)); });

    container.appendChild(sectionTitle('কেন এটি দরকারী?'));
    container.appendChild(para(lesson.whyUseful));

    if (lesson.syntax && lesson.syntax.code) {
      container.appendChild(sectionTitle('সিনট্যাক্স'));
      container.appendChild(codeBlock(lesson.syntax.lang || 'html', lesson.syntax.code, 'সিনট্যাক্স'));
    }

    container.appendChild(sectionTitle('কোড উদাহরণ'));
    container.appendChild(para(lesson.example.title, 'muted'));
    var exFiles = filesFromExample(lesson.example);
    (lesson.example.files || []).forEach(function (f) {
      container.appendChild(codeBlock(f.lang, f.code, f.lang === 'js' ? 'JavaScript' : f.lang.toUpperCase()));
    });
    container.appendChild(h('div', { class: 'btn-row' }, [
      h('button', {
        type: 'button', class: 'btn btn-ghost btn-small', text: 'Playground-এ চালান',
        onclick: function () { openInPlayground(lesson.example.title, exFiles); }
      })
    ]));

    container.appendChild(sectionTitle('লাইন বাই লাইন ব্যাখ্যা'));
    var table = h('table', { class: 'explain-table' }, [
      h('thead', null, h('tr', null, [h('th', { text: 'কোড' }), h('th', { text: 'ব্যাখ্যা' })])),
      h('tbody', null, lesson.lineByLine.map(function (row) {
        return h('tr', null, [
          h('td', null, h('code', { text: row.code })),
          h('td', null, rich(row.explain))
        ]);
      }))
    ]);
    container.appendChild(h('div', { class: 'table-wrap' }, table));

    container.appendChild(sectionTitle('প্রত্যাশিত আউটপুট'));
    container.appendChild(para(lesson.output));

    container.appendChild(sectionTitle('সাধারণ ভুল'));
    lesson.mistakes.forEach(function (m) {
      var box = h('div', { class: 'callout bad' }, [para(m.explain)]);
      if (m.wrong) box.appendChild(h('div', null, [h('p', { class: 'small', text: 'ভুল:' })]));
      if (m.wrong) box.appendChild(codeBlock('html', m.wrong, 'ভুল'));
      if (m.right) box.appendChild(codeBlock('html', m.right, 'সঠিক'));
      container.appendChild(box);
    });

    container.appendChild(sectionTitle('সেরা অনুশীলন (Best Practices)'));
    container.appendChild(h('ul', { class: 'checklist' }, lesson.bestPractices.map(function (b) { return h('li', null, rich(b)); })));

    container.appendChild(sectionTitle('বাস্তব ব্যবহার'));
    container.appendChild(para(lesson.useCase));

    container.appendChild(sectionTitle('অনুশীলন'));
    container.appendChild(h('p', { class: 'small muted', text: 'নিজে আগে চেষ্টা করুন। নিচের সমাধানগুলো সাজেস্টেড সমাধান; এগুলো স্বয়ংক্রিয়ভাবে যাচাই করা হয় না।' }));
    lesson.practice.forEach(function (p, idx) {
      var levelLabel = { easy: 'সহজ', medium: 'মাঝারি', challenging: 'কঠিন' }[p.level] || p.level;
      var levelClass = { easy: 'level-easy', medium: 'level-medium', challenging: 'level-hard' }[p.level] || '';
      var details = h('details', { class: 'practice-item' });
      details.appendChild(h('summary', null, [
        h('span', { class: 'badge ' + levelClass, text: levelLabel }),
        h('span', { text: ' অনুশীলন ' + (idx + 1) })
      ]));
      details.appendChild(para('**কাজ:** ' + p.task));
      details.appendChild(para('**ইঙ্গিত:** ' + p.hint, 'small muted'));
      var solutionDetails = h('details', null, [h('summary', { text: 'সাজেস্টেড সমাধান দেখুন' })]);
      solutionDetails.appendChild(h('p', { class: 'solution-note', text: 'এটি সাজেস্টেড সমাধান, স্বয়ংক্রিয় যাচাই নয়।' }));
      if (p.solutionLang && p.solutionLang !== 'text') {
        solutionDetails.appendChild(codeBlock(p.solutionLang, p.solution, 'সমাধান'));
        solutionDetails.appendChild(h('button', {
          type: 'button', class: 'btn btn-ghost btn-small', text: 'Playground-এ চেষ্টা করুন',
          onclick: function () {
            var files = Object.assign({}, exFiles);
            var key = p.solutionLang === 'javascript' ? 'js' : p.solutionLang;
            if (key in files) files[key] = p.solution;
            openInPlayground('অনুশীলন ' + (idx + 1), files);
          }
        }));
      } else {
        solutionDetails.appendChild(para(p.solution));
      }
      details.appendChild(solutionDetails);
      container.appendChild(details);
    });

    container.appendChild(sectionTitle('কুইজ'));
    var quizBox = h('div', { id: 'quiz-box' });
    container.appendChild(quizBox);
    window.Quiz.render(quizBox, lesson.quiz);

    var markBtn = h('button', { type: 'button', class: completed ? 'btn btn-ghost' : 'btn' });
    markBtn.setAttribute('aria-pressed', completed ? 'true' : 'false');
    markBtn.textContent = completed ? 'সম্পন্ন চিহ্ন সরান' : 'সম্পন্ন হিসেবে চিহ্নিত করুন';
    markBtn.addEventListener('click', function () {
      var nowDone = P.toggleCompleted(lesson.id);
      markBtn.setAttribute('aria-pressed', nowDone ? 'true' : 'false');
      markBtn.textContent = nowDone ? 'সম্পন্ন চিহ্ন সরান' : 'সম্পন্ন হিসেবে চিহ্নিত করুন';
      markBtn.className = nowDone ? 'btn btn-ghost' : 'btn';
      renderSidebar(searchInput.value);
      var badgeRow = titleRow.querySelector('.toolbar');
      var existing = badgeRow.querySelector('.badge.ok');
      if (nowDone && !existing) badgeRow.appendChild(h('span', { class: 'badge ok', text: 'সম্পন্ন' }));
      if (!nowDone && existing) existing.remove();
    });
    container.appendChild(h('div', { class: 'btn-row' }, [markBtn]));

    var nb = C.getNeighbors(lesson.id);
    var nav = h('nav', { class: 'lesson-nav', 'aria-label': 'লেসন নেভিগেশন' });
    if (nb.prev) {
      nav.appendChild(h('a', { href: '#/lesson/' + nb.prev.id, class: 'prev' }, [
        h('span', { class: 'label', text: '← আগের লেসন' }),
        h('span', { class: 'title', text: nb.prev.title })
      ]));
    } else {
      nav.appendChild(h('span', { class: 'spacer' }));
    }
    if (nb.next) {
      nav.appendChild(h('a', { href: '#/lesson/' + nb.next.id, class: 'next' }, [
        h('span', { class: 'label', text: 'পরের লেসন →' }),
        h('span', { class: 'title', text: nb.next.title })
      ]));
    }
    container.appendChild(nav);

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Module quiz ---------- */
  function moduleQuizView(courseKey, number) {
    var course = C.getCourse(courseKey);
    var mod = C.getModule(courseKey, number);
    if (!course || !mod) return notFound('এই মডিউলটি পাওয়া যায়নি।');
    var key = courseKey + '-' + mod.number;
    setTitle(mod.title + ' - কুইজ');
    var questions = [];
    mod.lessons.forEach(function (l) {
      (l.quiz || []).forEach(function (q) { questions.push(q); });
    });

    var container = h('div', { class: 'container' });
    container.appendChild(h('nav', { class: 'breadcrumb', 'aria-label': 'ব্রেডক্রাম্ব' }, [
      h('ol', null, [
        h('li', null, h('a', { href: '#/', text: 'ড্যাশবোর্ড' })),
        h('li', null, h('a', { href: '#/course/' + courseKey, text: course.title })),
        h('li', { 'aria-current': 'page', text: 'মডিউল কুইজ' })
      ])
    ]));
    container.appendChild(h('div', { class: 'page-head' }, [
      h('h1', { text: mod.title + ': মডিউল কুইজ' }),
      para('এই মডিউলের সব লেসনের প্রশ্ন একসাথে। স্কোর ৬০% বা তার বেশি হলে ভালো। সর্বোচ্চ স্কোর এই ব্রাউজারে সংরক্ষিত হয়।', 'lead')
    ]));

    var best = P.getQuizBest(key);
    var bestEl = h('p', { class: 'small muted', text: best === null ? 'এখনো কোনো স্কোর নেই।' : 'আপনার সর্বোচ্চ স্কোর: ' + best + '%' });
    container.appendChild(bestEl);

    var box = h('div', { id: 'module-quiz' });
    container.appendChild(box);
    window.Quiz.render(box, questions, {
      onComplete: function (score, total, percent) {
        var stored = P.setQuizScore(key, percent);
        bestEl.textContent = 'আপনার সর্বোচ্চ স্কোর: ' + stored + '%';
      }
    });

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Projects ---------- */
  function projectsView() {
    setTitle('প্রজেক্ট');
    var container = h('div', { class: 'container' });
    container.appendChild(h('div', { class: 'page-head' }, [
      h('h1', { text: 'প্র্যাকটিক্যাল প্রজেক্ট' }),
      para('প্রতিটি প্রজেক্টে প্রয়োজনীয়তা, ধাপে ধাপে নির্দেশনা, স্টার্টার কোড ও প্রত্যাশিত ফলাফল আছে। কিছু প্রজেক্টে সম্পূর্ণ সমাধানও দেওয়া আছে।', 'lead')
    ]));
    if (!PROJECTS.length) {
      container.appendChild(h('p', { class: 'empty-state', text: 'প্রজেক্ট ডেটা লোড হয়নি।' }));
    }
    PROJECTS.forEach(function (p) {
      var details = h('details', { class: 'card project-card', id: p.id });
      details.appendChild(h('summary', null, [
        h('h2', { text: p.title }),
        h('span', { class: 'badge', style: 'margin-left:8px', text: p.level })
      ]));
      var body = h('div', { class: 'project-body', style: 'margin-top:12px' });
      body.appendChild(para(p.summary));

      body.appendChild(h('h3', { text: 'প্রয়োজনীয়তা' }));
      body.appendChild(h('ul', null, p.requirements.map(function (r) { return h('li', null, rich(r)); })));
      body.appendChild(h('h3', { text: 'ধাপে ধাপে নির্দেশনা' }));
      body.appendChild(h('ol', null, p.steps.map(function (s) { return h('li', null, rich(s)); })));
      body.appendChild(h('h3', { text: 'HTML কাঠামো' }));
      body.appendChild(para(p.htmlStructure));
      body.appendChild(h('h3', { text: 'CSS স্টাইলিং' }));
      body.appendChild(para(p.cssStyling));
      body.appendChild(h('h3', { text: 'রেসপন্সিভ আচরণ' }));
      body.appendChild(para(p.responsive));
      body.appendChild(h('h3', { text: 'অ্যাক্সেসিবিলিটি' }));
      body.appendChild(para(p.accessibility));
      body.appendChild(h('h3', { text: 'Tailwind CSS বিকল্প' }));
      body.appendChild(para(p.tailwindAlt));
      body.appendChild(h('h3', { text: 'প্রত্যাশিত ফলাফল' }));
      body.appendChild(para(p.expected));

      body.appendChild(h('h3', { text: 'স্টার্টার কোড' }));
      body.appendChild(codeBlock('html', p.starter.html, 'HTML'));
      if (p.starter.css) body.appendChild(codeBlock('css', p.starter.css, 'CSS'));
      var starterFiles = { html: p.starter.html, css: '', js: '' };
      body.appendChild(h('div', { class: 'btn-row' }, [
        h('button', {
          type: 'button', class: 'btn btn-ghost btn-small', text: 'স্টার্টার কোড Playground-এ খুলুন',
          onclick: function () { openInPlayground(p.title + ' (স্টার্টার)', starterFiles); }
        })
      ]));

      if (p.solution) {
        body.appendChild(h('h3', { text: 'সম্পূর্ণ সমাধান' }));
        body.appendChild(codeBlock('html', p.solution.html, 'HTML'));
        if (p.solution.css) body.appendChild(codeBlock('css', p.solution.css, 'CSS'));
        var solFiles = { html: p.solution.html, css: '', js: '' };
        body.appendChild(h('div', { class: 'btn-row' }, [
          h('button', {
            type: 'button', class: 'btn btn-ghost btn-small', text: 'সম্পূর্ণ সমাধান Playground-এ খুলুন',
            onclick: function () { openInPlayground(p.title + ' (সমাধান)', solFiles); }
          })
        ]));
      }
      details.appendChild(body);
      container.appendChild(details);
    });

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Playground ---------- */
  function playgroundView() {
    setTitle('কোড প্লেগ্রাউন্ড');
    var container = h('div', { class: 'container' });
    main.textContent = '';
    main.appendChild(container);
    window.Playground.render(container);
  }

  /* ---------- Reference ---------- */
  function referenceView() {
    setTitle('রেফারেন্স');
    var container = h('div', { class: 'container' });
    container.appendChild(h('div', { class: 'page-head' }, [
      h('h1', { text: 'রেফারেন্স ও চিট শিট' }),
      para('ট্যাগ, প্রপার্টি, সিলেক্টর, DOM মেথড ও সাধারণ ভুলের সমাধান। নিচের খোঁজ বক্সে লিখে দ্রুত খুঁজুন।', 'lead')
    ]));

    var filterInput = h('input', { type: 'search', class: 'text-input', id: 'ref-search', placeholder: 'যেমন: flex, input, পেজ লোড হয় না...' });
    filterInput.setAttribute('aria-label', 'রেফারেন্সে খুঁজুন');
    container.appendChild(h('div', { class: 'toolbar' }, [filterInput]));
    var countLine = h('p', { class: 'small muted', 'aria-live': 'polite' });
    container.appendChild(countLine);

    var toc = h('nav', { class: 'ref-toc', 'aria-label': 'রেফারেন্স বিভাগ' });
    container.appendChild(toc);

    var entries = [];
    if (!REFERENCE.length) {
      container.appendChild(h('p', { class: 'empty-state', text: 'রেফারেন্স ডেটা লোড হয়নি।' }));
    }
    REFERENCE.forEach(function (cat) {
      var tocLink = h('a', { href: '#/reference', text: cat.title });
      tocLink.addEventListener('click', function (event) {
        // Keep the router hash unchanged; just scroll to the section.
        event.preventDefault();
        var target = document.getElementById('ref-' + cat.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      toc.appendChild(tocLink);
      var section = h('section', { class: 'ref-section', id: 'ref-' + cat.id, 'aria-labelledby': 'ref-h-' + cat.id });
      section.appendChild(h('h2', { id: 'ref-h-' + cat.id, text: cat.title }));
      section.appendChild(para(cat.description || '', 'muted'));
      cat.items.forEach(function (item) {
        var node = h('div', { class: 'ref-item' }, [
          h('div', { class: 'term', text: item.term }),
          para(item.explanation, 'small')
        ]);
        if (item.example) node.appendChild(codeBlock(item.lang || 'html', item.example, 'উদাহরণ'));
        section.appendChild(node);
        entries.push({ node: node, section: section, text: (item.term + ' ' + item.explanation + ' ' + (item.example || '')).toLowerCase() });
      });
      container.appendChild(section);
    });

    filterInput.addEventListener('input', function () {
      var q = filterInput.value.trim().toLowerCase();
      var words = q ? q.split(/\s+/) : [];
      var shown = 0;
      entries.forEach(function (e) {
        var ok = words.every(function (w) { return e.text.indexOf(w) !== -1; });
        e.node.hidden = !ok;
        if (ok) shown++;
      });
      REFERENCE.forEach(function (cat) {
        var section = document.getElementById('ref-' + cat.id);
        var visible = section.querySelectorAll('.ref-item:not([hidden])').length;
        section.hidden = visible === 0;
      });
      countLine.textContent = q ? shown + 'টি এন্ট্রি পাওয়া গেছে।' : '';
    });

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Progress & settings ---------- */
  function progressView() {
    setTitle('অগ্রগতি ও সেটিংস');
    var container = h('div', { class: 'container' });
    container.appendChild(h('div', { class: 'page-head' }, [
      h('h1', { text: 'আমার অগ্রগতি' }),
      para('কোন লেসন শেষ হয়েছে, কুইজের স্কোর কত, সব এখানে দেখা যাবে।', 'lead')
    ]));

    var all = C.LESSONS;
    var doneAll = P.completedCount(all.map(function (l) { return l.id; }));
    container.appendChild(h('div', { class: 'card' }, progressBar(doneAll, all.length, 'সামগ্রিক অগ্রগতি')));

    container.appendChild(sectionTitle('কোর্স অনুযায়ী'));
    C.COURSES.forEach(function (course) {
      var lessons = C.getCourseLessons(course.key);
      var d = P.completedCount(lessons.map(function (l) { return l.id; }));
      container.appendChild(h('div', { class: 'card' }, [
        h('h3', { text: course.title }),
        progressBar(d, lessons.length, course.title)
      ]));
    });

    container.appendChild(sectionTitle('মডিউল কুইজের সর্বোচ্চ স্কোর'));
    var quizRows = [];
    C.COURSES.forEach(function (course) {
      C.getModules(course.key).forEach(function (mod) {
        var best = P.getQuizBest(course.key + '-' + mod.number);
        quizRows.push(h('li', null, mod.title + ' - ' + (best === null ? 'এখনো দেওয়া হয়নি' : best + '%')));
      });
    });
    container.appendChild(h('ul', { class: 'plain-list' }, quizRows.length ? quizRows : [h('li', { text: 'কোনো মডিউল নেই।' })]));

    container.appendChild(sectionTitle('ডেটা ও গোপনীয়তা'));
    container.appendChild(para('অগ্রগতি, কুইজের স্কোর ও থিম এই ব্রাউজারের LocalStorage-এ থাকে। কোনো তথ্য সার্ভারে পাঠানো হয় না। ব্রাউজারের ডেটা মুছলে বা অন্য ডিভাইসে গেলে অগ্রগতি দেখা যাবে না।'));
    if (!P.isAvailable()) {
      container.appendChild(h('div', { class: 'callout warn' }, [
        h('strong', { text: 'LocalStorage উপলব্ধ নেই' }),
        h('p', { text: 'এই ব্রাউজারে অগ্রগতি সংরক্ষণ করা যাবে না। অন্য ব্রাউজার বা প্রাইভেট মোড বন্ধ করে চেষ্টা করুন।' })
      ]));
    }

    var resetBtn = h('button', { type: 'button', class: 'btn btn-danger', text: 'অগ্রগতি রিসেট করুন' });
    var resetMsg = h('p', { class: 'small', 'aria-live': 'polite' });
    resetBtn.addEventListener('click', function () {
      var ok = window.confirm('আপনি কি নিশ্চিত? সব সম্পন্ন লেসন, কুইজের স্কোর ও শেষ দেখা লেসন মুছে যাবে। থিম অপরিবর্তিত থাকবে।');
      if (!ok) return;
      P.reset();
      resetMsg.textContent = 'অগ্রগতি রিসেট করা হয়েছে।';
      renderSidebar(searchInput.value);
      renderTopNav('progress');
      progressView();
    });
    container.appendChild(h('div', { class: 'btn-row' }, [resetBtn]));
    container.appendChild(resetMsg);

    main.textContent = '';
    main.appendChild(container);
  }

  /* ---------- Router ---------- */
  function parseHash() {
    var hash = window.location.hash.replace(/^#/, '');
    var parts = hash.split('/').filter(Boolean);
    return parts.map(function (p) {
      try { return decodeURIComponent(p); } catch (e) { return p; }
    });
  }

  var lastRouteKey = null;

  function route() {
    var parts = parseHash();
    var head = parts[0] || '';
    var routeKey = window.location.hash;
    var isSameRoute = routeKey === lastRouteKey;
    lastRouteKey = routeKey;

    closeSidebarIfMobile();
    currentLessonId = head === 'lesson' ? parts[1] : null;

    var active = 'home';
    if (head === 'course') active = parts[1] || 'home';
    else if (head === 'lesson') {
      var l = C.getLesson(parts[1]);
      active = l ? l.course : 'home';
    } else if (head === 'quiz') active = parts[1] || 'home';
    else if (head === 'projects') active = 'projects';
    else if (head === 'playground') active = 'playground';
    else if (head === 'reference') active = 'reference';
    else if (head === 'progress') active = 'progress';
    renderTopNav(active === 'home' ? 'home' : active);

    if (!head) dashboardView();
    else if (head === 'course') courseView(parts[1]);
    else if (head === 'lesson') lessonView(parts[1]);
    else if (head === 'quiz') moduleQuizView(parts[1], parts[2]);
    else if (head === 'projects') projectsView();
    else if (head === 'playground') playgroundView();
    else if (head === 'reference') referenceView();
    else if (head === 'progress') progressView();
    else notFound('এই পেজটি পাওয়া যায়নি।');

    renderSidebar(searchInput.value);
    if (!isSameRoute) window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  /* ---------- Events ---------- */
  menuBtn.addEventListener('click', function () {
    openSidebar(!sidebar.classList.contains('is-open'));
  });

  overlay.addEventListener('click', function () { openSidebar(false); });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      openSidebar(false);
      menuBtn.focus();
    }
  });

  collapseBtn.addEventListener('click', function () {
    var collapsed = layout.classList.toggle('sidebar-collapsed');
    collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
  });

  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    P.setTheme(next);
  });

  searchInput.addEventListener('input', function () {
    renderSidebar(searchInput.value);
  });

  window.addEventListener('scroll', function () {
    backTop.hidden = window.scrollY < 400;
  }, { passive: true });

  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.focus({ preventScroll: true });
  });

  /* Exit: browsers only let a script close a tab that the script opened itself.
     For a tab opened by the user, window.close() is ignored, so we show a message. */
  var exitBtn = document.getElementById('exit-btn');
  var exitMsg = document.getElementById('exit-msg');
  if (exitBtn) {
    exitBtn.addEventListener('click', function () {
      exitMsg.hidden = true;
      window.close();
      setTimeout(function () {
        exitMsg.textContent = 'ব্রাউজার এই ট্যাবটি স্ক্রিপ্ট দিয়ে বন্ধ করতে দেয়নি। ব্রাউজারের ট্যাব বা Back বোতাম থেকে নিজে বন্ধ করুন। আপনার অগ্রগতি ইতিমধ্যে সংরক্ষিত আছে।';
        exitMsg.hidden = false;
      }, 150);
    });
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('bdlearn:rerender', function () {
    lastRouteKey = null;
    route();
  });

  /* ---------- Init ---------- */
  var savedTheme = P.getTheme();
  if (!savedTheme) {
    savedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(savedTheme);
  backTop.hidden = window.scrollY < 400;

  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    route();
  }

  window.App = { route: route };
})();

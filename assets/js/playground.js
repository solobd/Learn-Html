/* ==========================================================
   playground.js - HTML / CSS / JS playground
   Learner code runs ONLY inside a sandboxed iframe
   (sandbox="allow-scripts", no allow-same-origin).
   The main application never runs learner code with eval().
   Exposes window.Playground
   ========================================================== */
(function () {
  'use strict';

  var TW_CDN = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
  var PRESET_KEY = 'bdlearn.pgPreset';
  var MESSAGE_SOURCE = 'bdlearn-playground';

  /* Runs inside the preview iframe before learner code.
     Reports runtime errors to the parent page with postMessage. */
  function captureErrors() {
    function send(message) {
      try {
        window.parent.postMessage({ source: 'bdlearn-playground', type: 'error', message: String(message) }, '*');
      } catch (e) { /* ignore */ }
    }
    window.addEventListener('error', function (event) {
      // Line numbers from inline scripts refer to the whole document, so they are not shown.
      send(event.message || 'অজানা ত্রুটি');
    });
    window.addEventListener('unhandledrejection', function (event) {
      var reason = event.reason && event.reason.message ? event.reason.message : String(event.reason);
      send('Promise ত্রুটি: ' + reason);
    });
  }

  var CAPTURE_SCRIPT = '(' + captureErrors.toString() + ')();';

  var EXAMPLES = [
    {
      id: 'first-page',
      title: '১. প্রথম HTML পেজ',
      description: 'সাধারণ HTML ডকুমেন্ট, শিরোনাম ও প্যারাগ্রাফ।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>আমার প্রথম ওয়েবপেজ</title>\n</head>\n<body>\n  <h1>আমার ওয়েবসাইট</h1>\n  <p>আমি HTML শিখছি।</p>\n</body>\n</html>',
        css: '',
        js: ''
      }
    },
    {
      id: 'text-list',
      title: '২. প্যারাগ্রাফ ও লিস্ট',
      description: 'প্যারাগ্রাফ, লিংক ও আনঅর্ডার্ড লিস্ট।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>শেখার বিষয়</title>\n</head>\n<body>\n  <h1>আজকের শেখার বিষয়</h1>\n  <p>নিচের বিষয়গুলো আমি শিখব:</p>\n  <ul>\n    <li>HTML ট্যাগ</li>\n    <li>CSS স্টাইল</li>\n    <li>JavaScript ইন্টারঅ্যাকশন</li>\n  </ul>\n  <p>আরও জানতে <a href="https://developer.mozilla.org/bn/" target="_blank" rel="noopener noreferrer">MDN</a> দেখুন।</p>\n</body>\n</html>',
        css: '',
        js: ''
      }
    },
    {
      id: 'flex-card',
      title: '৩. Flexbox কার্ড (CSS)',
      description: 'Flexbox দিয়ে কার্ড সাজানো।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Flexbox কার্ড</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <main class="cards">\n    <article class="card">\n      <h2>HTML</h2>\n      <p>ওয়েবপেজের কাঠামো।</p>\n    </article>\n    <article class="card">\n      <h2>CSS</h2>\n      <p>ওয়েবপেজের সাজ-সজ্জা।</p>\n    </article>\n    <article class="card">\n      <h2>JavaScript</h2>\n      <p>ওয়েবপেজের আচরণ।</p>\n    </article>\n  </main>\n</body>\n</html>',
        css: 'body {\n  font-family: system-ui, sans-serif;\n  background: #f1f5f9;\n  margin: 0;\n  padding: 16px;\n}\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.card {\n  flex: 1 1 180px;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);\n}',
        js: ''
      }
    },
    {
      id: 'responsive-grid',
      title: '৪. রেসপন্সিভ গ্রিড (CSS)',
      description: 'CSS Grid ও মিডিয়া কোয়েরি। ব্রাউজারের প্রস্থ পরিবর্তন করে দেখুন।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>রেসপন্সিভ গ্রিড</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <div class="box">১</div>\n    <div class="box">২</div>\n    <div class="box">৩</div>\n    <div class="box">৪</div>\n  </div>\n</body>\n</html>',
        css: 'body {\n  font-family: system-ui, sans-serif;\n  margin: 0;\n  padding: 16px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.box {\n  background: #dbeafe;\n  color: #1e3a8a;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  font-size: 1.4rem;\n}\n\n@media (min-width: 600px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 900px) {\n  .grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}',
        js: ''
      }
    },
    {
      id: 'button-click',
      title: '৫. বাটন ক্লিক (JavaScript)',
      description: 'বাটনে ক্লিক করলে DOM আপডেট হয়।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>ক্লিক কাউন্টার</title>\n</head>\n<body>\n  <h1>ক্লিক কাউন্টার</h1>\n  <p>মোট ক্লিক: <span id="count">0</span></p>\n  <button id="add" type="button">ক্লিক করুন</button>\n  <script src="script.js"></script>\n</body>\n</html>',
        css: '',
        js: 'let count = 0;\nconst output = document.getElementById("count");\nconst button = document.getElementById("add");\n\nbutton.addEventListener("click", () => {\n  count += 1;\n  output.textContent = String(count);\n});'
      }
    },
    {
      id: 'form-validation',
      title: '৬. ফর্ম ভ্যালিডেশন (JavaScript)',
      description: 'ইমেইল ও নামের মান যাচাই করে বার্তা দেখানো।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>ফর্ম ভ্যালিডেশন</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <form id="signup" novalidate>\n    <label for="name">নাম</label>\n    <input id="name" type="text">\n    <p class="error" id="name-error"></p>\n    <label for="email">ইমেইল</label>\n    <input id="email" type="email">\n    <p class="error" id="email-error"></p>\n    <button type="submit">জমা দিন</button>\n    <p id="result" role="status"></p>\n  </form>\n  <script src="script.js"></script>\n</body>\n</html>',
        css: 'body { font-family: system-ui, sans-serif; padding: 16px; }\nlabel { display: block; margin-top: 10px; }\ninput { width: 100%; max-width: 320px; padding: 8px; font-size: 1rem; }\n.error { color: #b91c1c; min-height: 1.2em; margin: 4px 0; }\nbutton { margin-top: 12px; padding: 8px 16px; }',
        js: 'const form = document.getElementById("signup");\nconst nameInput = document.getElementById("name");\nconst emailInput = document.getElementById("email");\nconst nameError = document.getElementById("name-error");\nconst emailError = document.getElementById("email-error");\nconst result = document.getElementById("result");\n\nform.addEventListener("submit", (event) => {\n  event.preventDefault();\n  nameError.textContent = nameInput.value.trim() ? "" : "নাম লিখুন।";\n  const emailOk = emailInput.checkValidity();\n  emailError.textContent = emailOk ? "" : "সঠিক ইমেইল লিখুন।";\n  if (nameInput.value.trim() && emailOk) {\n    result.textContent = "ধন্যবাদ, " + nameInput.value.trim() + "!";\n  } else {\n    result.textContent = "";\n  }\n});'
      }
    },
    {
      id: 'tailwind-card',
      title: '৭. Tailwind CSS কার্ড',
      description: 'Tailwind CDN দিয়ে ইউটিলিটি ক্লাসের কার্ড। ইন্টারনেট লাগে।',
      tailwind: true,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Tailwind কার্ড</title>\n  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>\n</head>\n<body class="bg-slate-100 p-4">\n  <article class="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-md">\n    <h2 class="text-xl font-bold text-slate-800">প্রোডাক্ট কার্ড</h2>\n    <p class="mt-2 text-slate-600">Tailwind দিয়ে দ্রুত স্টাইল করা কার্ড।</p>\n    <button type="button" class="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">কিনুন</button>\n  </article>\n</body>\n</html>',
        css: '',
        js: ''
      }
    },
    {
      id: 'error-demo',
      title: '৮. ইচ্ছাকৃত ত্রুটি (Error Demo)',
      description: 'একটি ভুল এলিমেন্ট খুঁজলে কী ত্রুটি দেখায় তা দেখুন।',
      tailwind: false,
      files: {
        html: '<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>ত্রুটি উদাহরণ</title>\n</head>\n<body>\n  <h1>ত্রুটি উদাহরণ</h1>\n  <p id="message">হ্যালো</p>\n  <script src="script.js"></script>\n</body>\n</html>',
        css: '',
        js: '// এখানে "message-box" নামের কোনো এলিমেন্ট নেই, তাই ত্রুটি আসবে\nconst box = document.getElementById("message-box");\nbox.textContent = "নতুন লেখা";'
      }
    }
  ];

  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  function hasTailwindScript(html) {
    return /@tailwindcss\/browser/.test(html);
  }

  /* Builds the document used inside the sandboxed iframe */
  function buildDocument(files, withTailwind) {
    var html = files.html || '';
    var css = files.css || '';
    var js = files.js || '';
    var head = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    if (withTailwind && !hasTailwindScript(html)) {
      head += '<script src="' + TW_CDN + '" onerror="window.parent.postMessage({source:\'' + MESSAGE_SOURCE +
        '\',type:\'error\',message:\'Tailwind CDN লোড হয়নি। ইন্টারনেট সংযোগ চেক করুন।\'},\'*\')"><\/script>';
    }
    head += '<script>' + CAPTURE_SCRIPT + '<\/script>';
    var styleTag = '<style>\n' + css + '\n<\/style>';
    var scriptTag = '<script>\n' + js + '\n<\/script>';

    if (/<html[\s>]/i.test(html)) {
      var out = html;
      if (/<head[^>]*>/i.test(out)) {
        out = out.replace(/<head[^>]*>/i, function (m) { return m + head; });
      } else {
        out = out.replace(/<html[^>]*>/i, function (m) { return m + '<head>' + head + '</head>'; });
      }
      if (/<\/head>/i.test(out)) {
        out = out.replace(/<\/head>/i, function (m) { return styleTag + m; });
      } else {
        out = styleTag + out;
      }
      if (/<\/body>/i.test(out)) {
        out = out.replace(/<\/body>/i, function (m) { return scriptTag + m; });
      } else {
        out = out + scriptTag;
      }
      return out;
    }

    return '<!DOCTYPE html>\n<html lang="bn">\n<head>\n' + head + '\n' + styleTag + '\n</head>\n<body>\n' +
      html + '\n' + scriptTag + '\n</body>\n</html>';
  }

  /* Standalone, copyable single-file version */
  function buildStandalone(files, withTailwind) {
    var html = files.html || '';
    var css = (files.css || '').trim();
    var js = (files.js || '').trim();
    var tw = withTailwind && !hasTailwindScript(html);
    var lines = ['<!DOCTYPE html>', '<html lang="bn">', '<head>',
      '  <meta charset="UTF-8">', '  <meta name="viewport" content="width=device-width, initial-scale=1.0">'];
    if (tw) lines.push('  <script src="' + TW_CDN + '"></script>');
    if (css) lines.push('  <style>', css, '  </style>');
    lines.push('</head>', '<body>', html.trim(), js ? '<script>\n' + js + '\n</script>' : '', '</body>', '</html>');
    return lines.join('\n');
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
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

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  var activeFrame = null;
  var errorList = null;
  var statusLine = null;

  /* Accept error messages only from the playground iframe we created */
  window.addEventListener('message', function (event) {
    if (!activeFrame || event.source !== activeFrame.contentWindow) return;
    var data = event.data;
    if (!data || data.source !== MESSAGE_SOURCE || data.type !== 'error') return;
    if (!errorList) return;
    var p = el('p', null, 'ত্রুটি: ' + String(data.message).slice(0, 300));
    errorList.appendChild(p);
    if (statusLine) statusLine.textContent = 'প্রিভিউতে ত্রুটি পাওয়া গেছে। নিচের বার্তাটি দেখুন।';
  });

  function readPreset() {
    try {
      var raw = window.sessionStorage.getItem(PRESET_KEY);
      if (!raw) return null;
      window.sessionStorage.removeItem(PRESET_KEY);
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object' || !data.files) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function normalizeFiles(files) {
    return {
      html: typeof files.html === 'string' ? files.html : '',
      css: typeof files.css === 'string' ? files.css : '',
      js: typeof files.js === 'string' ? files.js : ''
    };
  }

  /* Public: open the playground with given files (used by lessons and projects) */
  function openWith(options) {
    var preset = {
      title: options.title || 'কাস্টম উদাহরণ',
      files: normalizeFiles(options.files || {}),
      tailwind: !!options.tailwind
    };
    try {
      window.sessionStorage.setItem(PRESET_KEY, JSON.stringify(preset));
    } catch (e) { /* storage unavailable: fall back to the default example */ }
    if (window.location.hash === '#/playground') {
      window.dispatchEvent(new Event('bdlearn:rerender'));
    } else {
      window.location.hash = '#/playground';
    }
  }

  function render(container) {
    container.textContent = '';
    activeFrame = null;
    errorList = null;
    statusLine = null;

    var preset = readPreset();
    var current = preset
      ? { title: preset.title, files: normalizeFiles(preset.files), tailwind: preset.tailwind, original: normalizeFiles(preset.files) }
      : null;
    if (!current) {
      var first = EXAMPLES[0];
      current = { title: first.title, files: normalizeFiles(first.files), tailwind: first.tailwind, original: normalizeFiles(first.files), id: first.id };
    }

    container.appendChild(el('h1', null, 'কোড প্লেগ্রাউন্ড'));
    container.appendChild(el('p', 'lead', 'HTML, CSS ও JavaScript লিখে সঙ্গে সঙ্গে ফলাফল দেখুন। প্রিভিউ একটি স্যান্ডবক্সড iframe-এর ভেতরে চলে, তাই আপনার কোড মূল ওয়েবসাইটের ডেটা বা LocalStorage-এ প্রবেশ করতে পারে না।'));

    var notice = el('div', 'notice');
    notice.appendChild(el('p', null, 'নিরাপত্তা: অন্যের লেখা কোড চালানোর আগে সেটি বুঝে নিন। এখানে চালানো কোড ব্রাউজারের iframe-এর বাইরের পেজে হাত দিতে পারে না, কারণ iframe-এ শুধু allow-scripts দেওয়া আছে।'));
    notice.appendChild(el('p', null, 'সীমাবদ্ধতা: অসীম লুপ (while(true)) চালালে প্রিভিউ আটকে যেতে পারে। সেক্ষেত্রে পেজ রিফ্রেশ করুন।'));
    container.appendChild(notice);

    /* Toolbar */
    var toolbar = el('div', 'pg-toolbar');
    var select = document.createElement('select');
    select.className = 'select-input';
    select.id = 'pg-example';
    select.setAttribute('aria-label', 'উদাহরণ বেছে নিন');
    EXAMPLES.forEach(function (ex) {
      var opt = document.createElement('option');
      opt.value = ex.id;
      opt.textContent = ex.title;
      if (current.id === ex.id) opt.selected = true;
      select.appendChild(opt);
    });
    if (!current.id) {
      var customOpt = document.createElement('option');
      customOpt.value = '__custom';
      customOpt.textContent = current.title;
      customOpt.selected = true;
      select.insertBefore(customOpt, select.firstChild);
    }
    toolbar.appendChild(select);

    var runBtn = el('button', 'btn', 'কোড চালান');
    runBtn.type = 'button';
    var resetBtn = el('button', 'btn btn-ghost', 'উদাহরণ রিসেট');
    resetBtn.type = 'button';
    var copyBtn = el('button', 'btn btn-ghost', 'সম্পূর্ণ কোড কপি');
    copyBtn.type = 'button';
    toolbar.appendChild(runBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(copyBtn);

    var tailwindLabel = el('label', 'pg-options');
    var tailwindBox = document.createElement('input');
    tailwindBox.type = 'checkbox';
    tailwindBox.id = 'pg-tailwind';
    tailwindBox.checked = !!current.tailwind;
    tailwindLabel.appendChild(tailwindBox);
    tailwindLabel.appendChild(document.createTextNode(' Tailwind CDN'));
    toolbar.appendChild(tailwindLabel);
    container.appendChild(toolbar);

    var layout = el('div', 'pg-layout');

    /* Editors */
    var editors = el('div', 'pg-editors');
    var textareas = {};
    [['html', 'HTML'], ['css', 'CSS'], ['js', 'JavaScript']].forEach(function (pair) {
      var key = pair[0];
      var box = el('div', 'pg-editor');
      var head = el('div', 'pg-editor-head');
      var labelId = 'pg-label-' + key;
      head.appendChild(el('span', null, pair[1]));
      var copyOne = el('button', 'copy-btn', 'কপি');
      copyOne.type = 'button';
      copyOne.setAttribute('aria-label', pair[1] + ' কোড কপি করুন');
      copyOne.addEventListener('click', function () {
        copyText(textareas[key].value).then(function () {
          copyOne.textContent = 'কপি হয়েছে';
          setTimeout(function () { copyOne.textContent = 'কপি'; }, 1500);
        }, function () {
          statusLine.textContent = 'কপি করা যায়নি। টেক্সট নির্বাচন করে নিজে কপি করুন।';
        });
      });
      head.appendChild(copyOne);
      box.appendChild(head);

      var ta = document.createElement('textarea');
      ta.id = 'pg-' + key;
      ta.spellcheck = false;
      ta.setAttribute('autocapitalize', 'off');
      ta.setAttribute('autocorrect', 'off');
      ta.setAttribute('aria-labelledby', labelId);
      ta.setAttribute('aria-label', pair[1] + ' এডিটর');
      ta.value = current.files[key];
      ta.addEventListener('keydown', function (event) {
        // Insert two spaces on Tab instead of moving focus
        if (event.key === 'Tab' && !event.shiftKey) {
          event.preventDefault();
          var start = ta.selectionStart;
          var end = ta.selectionEnd;
          ta.value = ta.value.slice(0, start) + '  ' + ta.value.slice(end);
          ta.selectionStart = ta.selectionEnd = start + 2;
        }
      });
      box.appendChild(ta);
      textareas[key] = ta;
      editors.appendChild(box);
    });
    layout.appendChild(editors);

    /* Preview */
    var previewWrap = el('div', 'pg-preview-wrap');
    var previewHead = el('div', 'pg-preview-head');
    previewHead.appendChild(el('span', null, 'লাইভ প্রিভিউ'));
    previewWrap.appendChild(previewHead);

    var frame = document.createElement('iframe');
    frame.className = 'pg-frame';
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.setAttribute('title', 'লাইভ প্রিভিউ');
    frame.setAttribute('loading', 'lazy');
    previewWrap.appendChild(frame);

    errorList = el('div', 'pg-errors');
    errorList.setAttribute('role', 'alert');
    previewWrap.appendChild(errorList);

    statusLine = el('p', 'pg-status', 'প্রস্তুত। "কোড চালান" চাপুন।');
    statusLine.setAttribute('role', 'status');
    previewWrap.appendChild(statusLine);

    layout.appendChild(previewWrap);
    container.appendChild(layout);

    activeFrame = frame;

    function currentFiles() {
      return { html: textareas.html.value, css: textareas.css.value, js: textareas.js.value };
    }

    function run() {
      errorList.textContent = '';
      var files = currentFiles();
      frame.srcdoc = buildDocument(files, tailwindBox.checked);
      statusLine.textContent = 'প্রিভিউ আপডেট হয়েছে।';
    }

    function loadFiles(files, tailwind) {
      textareas.html.value = files.html;
      textareas.css.value = files.css;
      textareas.js.value = files.js;
      tailwindBox.checked = !!tailwind;
    }

    runBtn.addEventListener('click', run);

    select.addEventListener('change', function () {
      var ex = EXAMPLES.filter(function (e) { return e.id === select.value; })[0];
      if (!ex) return;
      current = { title: ex.title, files: normalizeFiles(ex.files), tailwind: ex.tailwind, original: normalizeFiles(ex.files), id: ex.id };
      loadFiles(current.files, current.tailwind);
      run();
    });

    resetBtn.addEventListener('click', function () {
      loadFiles(current.original, current.tailwind);
      run();
      statusLine.textContent = 'উদাহরণের মূল কোড ফিরিয়ে আনা হয়েছে।';
    });

    copyBtn.addEventListener('click', function () {
      copyText(buildStandalone(currentFiles(), tailwindBox.checked)).then(function () {
        statusLine.textContent = 'সম্পূর্ণ কোড ক্লিপবোর্ডে কপি হয়েছে।';
      }, function () {
        statusLine.textContent = 'কপি করা যায়নি। ব্রাউজারের অনুমতি চেক করুন।';
      });
    });

    run();
  }

  window.Playground = {
    render: render,
    openWith: openWith,
    examples: EXAMPLES
  };

  /* Exposed for the lesson pages */
  window.bdlearnPlayground = {
    openWith: openWith
  };
})();

/* ==========================================================
   lessons.js - course metadata, lesson index and helpers
   Data files push into window.LESSONS / PROJECTS / REFERENCE.
   Exposes window.Course
   ========================================================== */
(function () {
  'use strict';

  var COURSES = [
    {
      key: 'html',
      title: 'HTML',
      description: 'ওয়েবপেজের কাঠামো তৈরি: টেক্সট, লিংক, ছবি, টেবিল, ফর্ম ও সেমান্টিক এলিমেন্ট।',
      level: 'বিগিনার থেকে অ্যাডভান্সড',
      icon: '</>'
    },
    {
      key: 'css',
      title: 'CSS',
      description: 'ওয়েবপেজের ডিজাইন, লেআউট, রেসপন্সিভ ডিজাইন ও অ্যানিমেশন।',
      level: 'বিগিনার থেকে অ্যাডভান্সড',
      icon: '{ }'
    },
    {
      key: 'tailwind',
      title: 'Tailwind CSS',
      description: 'ইউটিলিটি-ফার্স্ট CSS দিয়ে দ্রুত ও রেসপন্সিভ ইন্টারফেস তৈরি।',
      level: 'ইন্টারমিডিয়েট',
      icon: 'TW'
    },
    {
      key: 'javascript',
      title: 'JavaScript',
      description: 'ওয়েবপেজে ইন্টারঅ্যাকশন, ফর্ম ভ্যালিডেশন, LocalStorage ও Fetch API।',
      level: 'বিগিনার থেকে ইন্টারমিডিয়েট',
      icon: 'JS'
    }
  ];

  var courseOrder = {};
  COURSES.forEach(function (c, i) { courseOrder[c.key] = i; });

  var REQUIRED = ['id', 'course', 'module', 'moduleTitle', 'order', 'title', 'objectives', 'explanation', 'example', 'lineByLine', 'practice', 'quiz'];

  var raw = Array.isArray(window.LESSONS) ? window.LESSONS : [];
  var LESSONS = [];
  var byId = {};

  raw.forEach(function (lesson) {
    var missing = REQUIRED.filter(function (f) { return lesson[f] === undefined; });
    if (missing.length) {
      console.warn('[lessons] "' + (lesson.id || '?') + '" এ ফিল্ড নেই: ' + missing.join(', '));
      return;
    }
    if (courseOrder[lesson.course] === undefined) {
      console.warn('[lessons] অজানা কোর্স: ' + lesson.course + ' (' + lesson.id + ')');
      return;
    }
    if (byId[lesson.id]) {
      console.warn('[lessons] ডুপ্লিকেট ID: ' + lesson.id);
      return;
    }
    byId[lesson.id] = lesson;
    LESSONS.push(lesson);
  });

  LESSONS.sort(function (a, b) {
    return (courseOrder[a.course] - courseOrder[b.course]) ||
      (a.module - b.module) ||
      (a.order - b.order);
  });

  function getCourse(key) {
    for (var i = 0; i < COURSES.length; i++) {
      if (COURSES[i].key === key) return COURSES[i];
    }
    return null;
  }

  function getCourseLessons(key) {
    return LESSONS.filter(function (l) { return l.course === key; });
  }

  /* Returns [{ number, title, lessons: [] }] for a course */
  function getModules(key) {
    var modules = [];
    var map = {};
    getCourseLessons(key).forEach(function (l) {
      if (!map[l.module]) {
        map[l.module] = { number: l.module, title: l.moduleTitle, lessons: [] };
        modules.push(map[l.module]);
      }
      map[l.module].lessons.push(l);
    });
    return modules;
  }

  function getModule(key, number) {
    var mods = getModules(key);
    for (var i = 0; i < mods.length; i++) {
      if (String(mods[i].number) === String(number)) return mods[i];
    }
    return null;
  }

  function getLesson(id) {
    return byId[id] || null;
  }

  /* Previous and next lesson across the whole learning path */
  function getNeighbors(id) {
    var index = -1;
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === id) { index = i; break; }
    }
    if (index === -1) return { prev: null, next: null };
    return {
      prev: index > 0 ? LESSONS[index - 1] : null,
      next: index < LESSONS.length - 1 ? LESSONS[index + 1] : null
    };
  }

  function lessonText(lesson) {
    var parts = [lesson.title, lesson.moduleTitle, lesson.whyUseful || '', lesson.useCase || ''];
    parts = parts.concat(lesson.objectives || [], lesson.explanation || []);
    return parts.join(' ').toLowerCase();
  }

  /* Simple multi-word search over title, module and body text */
  function searchLessons(query) {
    var q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    var words = q.split(/\s+/);
    var results = [];
    LESSONS.forEach(function (lesson) {
      var text = lessonText(lesson);
      var titleText = lesson.title.toLowerCase();
      var ok = words.every(function (w) { return text.indexOf(w) !== -1; });
      if (!ok) return;
      var score = 0;
      words.forEach(function (w) {
        if (titleText.indexOf(w) !== -1) score += 3;
        else score += 1;
      });
      results.push({ lesson: lesson, score: score });
    });
    results.sort(function (a, b) { return b.score - a.score; });
    return results.map(function (r) { return r.lesson; });
  }

  /* Flat list of lesson ids in learning order */
  function allIds() {
    return LESSONS.map(function (l) { return l.id; });
  }

  window.Course = {
    COURSES: COURSES,
    LESSONS: LESSONS,
    getCourse: getCourse,
    getCourseLessons: getCourseLessons,
    getModules: getModules,
    getModule: getModule,
    getLesson: getLesson,
    getNeighbors: getNeighbors,
    searchLessons: searchLessons,
    allIds: allIds
  };
})();

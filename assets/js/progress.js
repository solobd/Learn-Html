/* ==========================================================
   progress.js - LocalStorage based progress and theme storage
   Exposes window.Progress
   ========================================================== */
(function () {
  'use strict';

  var KEY = 'bdlearn.v1';

  function defaults() {
    return {
      version: 1,
      theme: null,
      completed: {},   // { lessonId: isoDate }
      quizBest: {},    // { "html-1": 80 }  (percent)
      lastLesson: null
    };
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function storageAvailable() {
    try {
      var testKey = '__bdlearn_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  var available = storageAvailable();
  var state = load();

  function load() {
    var base = defaults();
    if (!available) return base;
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return base;
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return base;
      return Object.assign(base, data, {
        completed: data.completed && typeof data.completed === 'object' ? data.completed : {},
        quizBest: data.quizBest && typeof data.quizBest === 'object' ? data.quizBest : {}
      });
    } catch (e) {
      return base;
    }
  }

  function save() {
    if (!available) return false;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      return false;
    }
  }

  window.Progress = {
    isAvailable: function () {
      return available;
    },

    isCompleted: function (lessonId) {
      return !!state.completed[lessonId];
    },

    setCompleted: function (lessonId, value) {
      if (value) {
        state.completed[lessonId] = new Date().toISOString();
      } else {
        delete state.completed[lessonId];
      }
      save();
      return !!state.completed[lessonId];
    },

    toggleCompleted: function (lessonId) {
      return this.setCompleted(lessonId, !this.isCompleted(lessonId));
    },

    completedCount: function (lessonIds) {
      var n = 0;
      lessonIds.forEach(function (id) {
        if (state.completed[id]) n++;
      });
      return n;
    },

    getLastLesson: function () {
      return state.lastLesson;
    },

    setLastLesson: function (lessonId) {
      state.lastLesson = lessonId;
      save();
    },

    getQuizBest: function (moduleKey) {
      return typeof state.quizBest[moduleKey] === 'number' ? state.quizBest[moduleKey] : null;
    },

    setQuizScore: function (moduleKey, percent) {
      var previous = this.getQuizBest(moduleKey);
      if (previous === null || percent > previous) {
        state.quizBest[moduleKey] = percent;
        save();
      }
      return state.quizBest[moduleKey];
    },

    getTheme: function () {
      return state.theme;
    },

    setTheme: function (theme) {
      state.theme = theme;
      save();
    },

    /* Resets lessons, quiz scores and last lesson. The theme is kept. */
    reset: function () {
      var theme = state.theme;
      state = defaults();
      state.theme = theme;
      save();
    }
  };
})();

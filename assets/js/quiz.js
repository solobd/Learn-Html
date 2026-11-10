/* ==========================================================
   quiz.js - multiple choice quiz renderer
   Exposes window.Quiz.render(container, questions, options)
   Uses textContent only (no innerHTML) for all text.
   ========================================================== */
(function () {
  'use strict';

  var counter = 0;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  /*
    questions: [{ question, options: [4 strings], answer: index, explanation }]
    options:   { onComplete(score, total, percent) }
  */
  function render(container, questions, options) {
    options = options || {};
    counter += 1;
    var uid = 'quiz' + counter;
    container.textContent = '';

    if (!Array.isArray(questions) || questions.length === 0) {
      container.appendChild(el('p', 'muted', 'এই অংশে কোনো কুইজ প্রশ্ন নেই।'));
      return;
    }

    var form = el('form', 'quiz-form');
    form.setAttribute('novalidate', '');
    form.setAttribute('aria-label', 'কুইজ');
    var answers = [];
    var statusLine = el('p', 'small muted', 'প্রতিটি প্রশ্নের একটি উত্তর বেছে নিন, তারপর "উত্তর জমা দিন" চাপুন।');
    statusLine.setAttribute('role', 'status');

    questions.forEach(function (q, qi) {
      var fieldset = el('fieldset', 'quiz-q');
      fieldset.setAttribute('data-q', String(qi));
      var legend = el('legend', null, (qi + 1) + '. ' + q.question);
      fieldset.appendChild(legend);

      var verdict = el('div', 'quiz-verdict');
      verdict.setAttribute('aria-live', 'polite');
      var explain = el('p', 'quiz-explain');
      explain.hidden = true;

      var optionNodes = [];
      q.options.forEach(function (opt, oi) {
        var id = uid + '-q' + qi + '-o' + oi;
        var label = el('label', 'quiz-option');
        label.setAttribute('for', id);
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = uid + '-q' + qi;
        input.id = id;
        input.value = String(oi);
        label.appendChild(input);
        label.appendChild(el('span', null, opt));
        fieldset.appendChild(label);
        optionNodes.push({ label: label, input: input });
      });

      fieldset.appendChild(verdict);
      fieldset.appendChild(explain);
      form.appendChild(fieldset);

      answers.push({ q: q, optionNodes: optionNodes, verdict: verdict, explain: explain, fieldset: fieldset });
    });

    var actions = el('div', 'btn-row');
    var submitBtn = el('button', 'btn', 'উত্তর জমা দিন');
    submitBtn.type = 'submit';
    var retakeBtn = el('button', 'btn btn-ghost', 'আবার দিন');
    retakeBtn.type = 'button';
    retakeBtn.hidden = true;
    actions.appendChild(submitBtn);
    actions.appendChild(retakeBtn);

    var resultBox = el('div', 'quiz-score');
    resultBox.hidden = true;

    form.appendChild(actions);
    form.appendChild(resultBox);
    form.appendChild(statusLine);
    container.appendChild(form);

    var submitted = false;

    function lockInputs(locked) {
      answers.forEach(function (a) {
        a.optionNodes.forEach(function (o) { o.input.disabled = locked; });
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (submitted) return;

      var unanswered = answers.filter(function (a) {
        return !a.optionNodes.some(function (o) { return o.input.checked; });
      });
      if (unanswered.length) {
        statusLine.textContent = 'সব প্রশ্নের উত্তর দিন। বাকি আছে: ' + unanswered.length + 'টি।';
        var firstOpen = unanswered[0].fieldset.querySelector('input');
        if (firstOpen) firstOpen.focus();
        return;
      }

      submitted = true;
      var score = 0;
      answers.forEach(function (a) {
        var chosenIndex = -1;
        a.optionNodes.forEach(function (o, oi) {
          if (o.input.checked) chosenIndex = oi;
        });
        var correct = chosenIndex === a.q.answer;
        if (correct) score += 1;

        a.optionNodes.forEach(function (o, oi) {
          if (oi === a.q.answer) o.label.classList.add('is-correct');
          else if (oi === chosenIndex) o.label.classList.add('is-wrong');
        });

        a.verdict.className = 'quiz-verdict ' + (correct ? 'ok' : 'bad');
        a.verdict.textContent = correct ? 'সঠিক উত্তর' : 'ভুল উত্তর। সঠিক উত্তর: ' + a.q.options[a.q.answer];
        a.explain.textContent = a.q.explanation || '';
        a.explain.hidden = false;
      });

      var total = answers.length;
      var percent = Math.round((score / total) * 100);
      resultBox.hidden = false;
      resultBox.textContent = 'আপনার স্কোর: ' + score + ' / ' + total + ' (' + percent + '%)' +
        (percent >= 60 ? ' - ভালো হয়েছে!' : ' - লেসনটি আবার পড়ে চেষ্টা করুন।');
      statusLine.textContent = 'কুইজ জমা হয়েছে।';
      lockInputs(true);
      submitBtn.disabled = true;
      retakeBtn.hidden = false;
      retakeBtn.focus();

      if (typeof options.onComplete === 'function') {
        options.onComplete(score, total, percent);
      }
    });

    retakeBtn.addEventListener('click', function () {
      submitted = false;
      answers.forEach(function (a) {
        a.optionNodes.forEach(function (o) {
          o.input.checked = false;
          o.label.classList.remove('is-correct', 'is-wrong');
        });
        a.verdict.textContent = '';
        a.verdict.className = 'quiz-verdict';
        a.explain.textContent = '';
        a.explain.hidden = true;
      });
      lockInputs(false);
      resultBox.hidden = true;
      resultBox.textContent = '';
      submitBtn.disabled = false;
      retakeBtn.hidden = true;
      statusLine.textContent = 'নতুন করে উত্তর দিন।';
      if (answers[0]) answers[0].optionNodes[0].input.focus();
    });
  }

  window.Quiz = { render: render };
})();

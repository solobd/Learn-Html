window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...[
  {
    id: "js-01-what-is-javascript",
    course: "javascript",
    module: 1,
    moduleTitle: "মডিউল ১: JavaScript মৌলিক বিষয়",
    order: 1,
    title: "JavaScript কী করে ও কীভাবে যুক্ত হয়",
    objectives: [
      "JavaScript কী এবং ওয়েবপেজে এর ভূমিকা বলতে পারবেন।",
      "`<script>` ট্যাগ দিয়ে JavaScript যুক্ত করার দুটি উপায় জানবেন।",
      "`defer` কেন গুরুত্বপূর্ণ তা বুঝবেন।"
    ],
    explanation: [
      "JavaScript হলো ওয়েব ব্রাউজারে চলা প্রোগ্রামিং ভাষা। HTML কাঠামো দেয়, CSS চেহারা দেয়, আর JavaScript পেজকে কাজ করায়: বাটনে ক্লিক, ফর্ম যাচাই, ডেটা দেখানো।",
      "HTML-এর ভেতরে `<script>` ট্যাগে লেখা যায়, অথবা `src` দিয়ে আলাদা `.js` ফাইল যুক্ত করা যায়। সাধারণত `</body>`-র আগে বা `defer` অ্যাট্রিবিউট দিয়ে যুক্ত করা হয়, যাতে HTML লোড হওয়ার পর কোড চলে।",
      "`defer` দিলে ব্রাউজার HTML পার্স শেষ হওয়ার পর স্ক্রিপ্ট চালায়। এতে `document.getElementById` ইত্যাদি ব্যর্থ হয় না।"
    ],
    whyUseful: "ইন্টারঅ্যাকশন ছাড়া ওয়েবপেজ স্থির থাকে। JavaScript জানলে ফর্ম যাচাই, মেনু খোলা-বন্ধ, ডার্ক মোড সব বানানো যায়।",
    syntax: {
      lang: "html",
      code: `<script src="script.js" defer></script>`
    },
    example: {
      title: "প্রথম JavaScript বার্তা",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>প্রথম JavaScript</title>
</head>
<body>
  <h1>স্বাগতম</h1>
  <p id="greeting">এখানে বার্তা আসবে।</p>
  <button id="hello" type="button">বার্তা দেখান</button>
</body>
</html>`
        },
        {
          lang: "js",
          code: `const button = document.getElementById("hello");
const greeting = document.getElementById("greeting");

button.addEventListener("click", function () {
  greeting.textContent = "JavaScript কাজ করছে!";
});`
        }
      ]
    },
    lineByLine: [
      { code: `const button = document.getElementById("hello");`, explain: "`id=\"hello\"` বাটনটি খুঁজে ভেরিয়েবলে রাখে।" },
      { code: `button.addEventListener("click", function () {`, explain: "বাটনে ক্লিক হলে ভেতরের ফাংশন চলবে।" },
      { code: `greeting.textContent = "...";`, explain: "অনুচ্ছেদের লেখা বদলে দেয়। `textContent` নিরাপদে লেখা বসায়।" }
    ],
    output: "বাটনে ক্লিক করলে \"এখানে বার্তা আসবে।\" লেখাটি বদলে \"JavaScript কাজ করছে!\" হবে।",
    mistakes: [
      {
        wrong: `<script src="script.js"></script>  <!-- head-এ, defer ছাড়া -->`,
        right: `<script src="script.js" defer></script>`,
        explain: "head-এ defer ছাড়া স্ক্রিপ্ট চললে HTML এলিমেন্ট তখনো তৈরি না হওয়ায় `null` ত্রুটি আসে।"
      },
      {
        wrong: `document.getElementById("Hello")`,
        right: `document.getElementById("hello")`,
        explain: "ID-এর নাম বড়-ছোট হাতের অক্ষরে আলাদা। নাম হুবহু মেলাতে হবে।"
      }
    ],
    bestPractices: [
      "JavaScript আলাদা `.js` ফাইলে রাখুন এবং `defer` দিয়ে যুক্ত করুন।",
      "প্রথমে ব্রাউজারের Console (F12) খুলুন; ত্রুটি সেখানে দেখায়।",
      "DOM লেখার সময় `textContent` ব্যবহার করুন, যদি লেখা ব্যবহারকারীর কাছ থেকে আসে।"
    ],
    useCase: "একটি ফর্মে ভুল ইমেইল লিখলে JavaScript তৎক্ষণাৎ বার্তা দেখায়, পেজ রিলোড না করেই।",
    practice: [
      {
        level: "easy",
        task: "একটি বাটন লিখুন যার ক্লিকে কনসোলে `হ্যালো` লেখা যাবে।",
        hint: "`console.log(\"হ্যালো\")` ব্যবহার করুন।",
        solution: "button.addEventListener(\"click\", function () {\n  console.log(\"হ্যালো\");\n});",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি `<script>` ট্যাগ লিখুন যা `main.js` ফাইল লোড করবে এবং `defer` থাকবে।",
        hint: "`src` ও `defer` অ্যাট্রিবিউট একসাথে।",
        solution: "<script src=\"main.js\" defer></script>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "বাটনে ক্লিক হলে অনুচ্ছেদের লেখা বদলাবে, এবং বাটনের লেখা \"আবার\" হবে।",
        hint: "দুটি লাইন লিখুন: একটি `textContent`, অন্যটি বাটনের `textContent`।",
        solution: "button.addEventListener(\"click\", function () {\n  greeting.textContent = \"নতুন বার্তা\";\n  button.textContent = \"আবার\";\n});",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "ওয়েবপেজে আচরণ (ক্লিক, যাচাই) যোগ করে কোন ভাষা?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: 2,
        explanation: "JavaScript ব্রাউজারে পেজের আচরণ নিয়ন্ত্রণ করে।"
      },
      {
        question: "`defer` অ্যাট্রিবিউট কী করে?",
        options: ["স্ক্রিপ্ট মুছে দেয়", "HTML পার্স শেষ হলে স্ক্রিপ্ট চালায়", "স্ক্রিপ্টের রং বদলায়", "স্ক্রিপ্ট সার্ভারে পাঠায়"],
        answer: 1,
        explanation: "`defer` স্ক্রিপ্টকে HTML পার্স শেষ হওয়ার পর চালায়।"
      },
      {
        question: "লেখা বদলাতে কোন প্রপার্টি নিরাপদ?",
        options: ["innerHTML", "textContent", "outerHTML", "document.write"],
        answer: 1,
        explanation: "`textContent` লেখা হিসেবে বসায়, HTML হিসেবে নয়; তাই নিরাপদ।"
      }
    ]
  },
  {
    id: "js-02-variables-data-types",
    course: "javascript",
    module: 1,
    moduleTitle: "মডিউল ১: JavaScript মৌলিক বিষয়",
    order: 2,
    title: "Variables ও Data types",
    objectives: [
      "`let`, `const` ও `var` এর পার্থক্য বলতে পারবেন।",
      "string, number, boolean, null, undefined এর ধারণা পাবেন।",
      "`typeof` দিয়ে ডেটার ধরন যাচাই করতে পারবেন।"
    ],
    explanation: [
      "ভেরিয়েবল হলো মান রাখার নাম। `const` দিয়ে যে মান আর বদলানো হবে না তা ঘোষণা করা হয়। `let` দিয়ে যে মান পরে বদলাতে পারে। আধুনিক কোডে `var` প্রায় ব্যবহৃত হয় না।",
      "মূল ডেটা টাইপ: **string** (লেখা, `\"বাংলা\"`), **number** (সংখ্যা, `42`, `3.14`), **boolean** (`true` বা `false`), **null** (ইচ্ছাকৃত খালি মান), **undefined** (মান দেওয়া হয়নি)।",
      "`typeof` অপারেটর ডেটার ধরন বলে দেয়। যেমন `typeof \"হ্যালো\"` লেখে `\"string\"`।"
    ],
    whyUseful: "সঠিক ডেটা টাইপ না জানলে হিসাব ভুল হয়, যেমন \"৫\" + \"৩\" হয় \"৫৩\" (লেখা জোড়া লাগে)।",
    syntax: {
      lang: "js",
      code: `const name = "করিম";
let age = 25;
let isStudent = true;`
    },
    example: {
      title: "ভেরিয়েবল ও টাইপ দেখা",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ভেরিয়েবল</title>
</head>
<body>
  <h1>ডেটা টাইপ</h1>
  <pre id="output"></pre>
</body>
</html>`
        },
        {
          lang: "js",
          code: `const name = "করিম";
let age = 25;
let isStudent = true;
let score = null;
let nothing;

const lines = [
  "নাম: " + name + " (" + typeof name + ")",
  "বয়স: " + age + " (" + typeof age + ")",
  "ছাত্র: " + isStudent + " (" + typeof isStudent + ")",
  "স্কোর: " + score + " (" + typeof score + ")",
  "কিছু নেই: " + nothing + " (" + typeof nothing + ")"
];

age = age + 1;
lines.push("পরের বছর বয়স: " + age);

document.getElementById("output").textContent = lines.join("\\n");`
        }
      ]
    },
    lineByLine: [
      { code: `const name = "করিম";`, explain: "`const` দিয়ে নির্দিষ্ট মান, এটি পরে বদলানো যাবে না।" },
      { code: `let age = 25;`, explain: "`let` দিয়ে মান, যা পরে বদলানো যায় (এখানে `age + 1`)।" },
      { code: `let score = null;`, explain: "ইচ্ছাকৃতভাবে খালি মান।" },
      { code: `let nothing;`, explain: "মান না দেওয়ায় `undefined`।" },
      { code: `typeof name`, explain: "ডেটার ধরন জানায়, এখানে `\"string\"`।" },
      { code: `textContent = lines.join("\\n")`, explain: "লাইনগুলো জোড়া লাগিয়ে `pre` এলিমেন্টে দেখায়।" }
    ],
    output: "পাঁচটি লাইনে নাম, বয়স, ছাত্র অবস্থা, স্কোর ও কিছু-নেই-এর ধরন দেখাবে। শেষ লাইনে পরের বছরের বয়স (২৬) দেখাবে।",
    mistakes: [
      {
        wrong: `const x = 1; x = 2;`,
        right: `let x = 1; x = 2;`,
        explain: "`const` মান বদলানো যায় না; পরিবর্তনের প্রয়োজন হলে `let` ব্যবহার করুন।"
      },
      {
        wrong: `"৫" + "৩"  // "৫৩"`,
        right: `Number("৫") + Number("৩")`,
        explain: "লেখা (string) জোড়া লাগে। সংখ্যায় রূপান্তর করে যোগ করুন।"
      },
      {
        wrong: `var total = 0;`,
        right: `let total = 0;`,
        explain: "`var` ব্লক স্কোপ মানে না, ফলে অপ্রত্যাশিত বাগ হতে পারে। `let`/`const` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "ডিফল্টে `const` লিখুন; পরিবর্তন দরকার হলে `let`।",
      "ভেরিয়েবলের নাম অর্থবহ রাখুন, যেমন `studentAge`।",
      "`typeof` দিয়ে সন্দেহজনক মান যাচাই করুন।"
    ],
    useCase: "একটি শপিং পেজে পণ্যের দাম (number), পণ্যের নাম (string), এবং স্টকে আছে কিনা (boolean) এই ধরনে সংরক্ষণ করা হয়।",
    practice: [
      {
        level: "easy",
        task: "নিজের নাম ও বয়স দুটি ভেরিয়েবলে রাখুন এবং `typeof` দিয়ে ধরন দেখুন।",
        hint: "নাম string, বয়স number।",
        solution: "const myName = \"রহিম\";\nconst myAge = 22;\nconsole.log(typeof myName, typeof myAge);",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি `let` ভেরিয়েবল দিয়ে স্কোর ১০ থেকে শুরু করে ৫ বাড়ান।",
        hint: "`score = score + 5;`",
        solution: "let score = 10;\nscore = score + 5;\n// score এখন 15",
        solutionLang: "js"
      },
      {
        level: "challenging",
        task: "`\"১২\"` (লেখা) কে সংখ্যায় বদলে ৮ যোগ করুন, ফলাফল `20` হবে।",
        hint: "`Number()` ব্যবহার করুন।",
        solution: "const text = \"১২\";\nconst result = Number(text) + 8;",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "যে ভেরিয়েবলের মান পরে বদলানো যাবে না, তার জন্য কোনটি ব্যবহার হয়?",
        options: ["let", "const", "var", "change"],
        answer: 1,
        explanation: "`const` দিয়ে ঘোষিত ভেরিয়েবলের মান বদলানো যায় না।"
      },
      {
        question: "`typeof \"হ্যালো\"` এর ফলাফল কী?",
        options: ["number", "string", "boolean", "text"],
        answer: 1,
        explanation: "লেখার ডেটা টাইপ `string`।"
      },
      {
        question: "`\"৫\" + \"৩\"` এর ফলাফল কী?",
        options: ["৮", "৫৩", "৮০", "এরর"],
        answer: 1,
        explanation: "দুটিই লেখা (string), তাই জোড়া লেগে \"৫৩\" হয়।"
      }
    ]
  },
  {
    id: "js-03-operators",
    course: "javascript",
    module: 1,
    moduleTitle: "মডিউল ১: JavaScript মৌলিক বিষয়",
    order: 3,
    title: "Operators (অপারেটর)",
    objectives: [
      "গাণিতিক, তুলনামূলক ও লজিক্যাল অপারেটর চিনবেন।",
      "`===` কেন `==` এর চেয়ে নিরাপদ তা বুঝবেন।",
      "`&&`, `||`, `!` দিয়ে শর্ত লিখতে পারবেন।"
    ],
    explanation: [
      "গাণিতিক অপারেটর: `+`, `-`, `*`, `/`, `%` (ভাগশেষ)। অ্যাসাইনমেন্ট: `=`, `+=`। এগুলো সংখ্যা নিয়ে কাজ করে।",
      "তুলনা করতে `===` (সমান, টাইপসহ) ব্যবহার করুন। `==` টাইপ রূপান্তর করে তুলনা করে, যা অনাকাঙ্ক্ষিত ফল দিতে পারে। যেমন `0 == \"\"` সত্য, কিন্তু `0 === \"\"` মিথ্যা।",
      "লজিক্যাল: `&&` (এবং), `||` (অথবা), `!` (নয়)। `&&` দুটিই সত্য হলে সত্য দেয়।"
    ],
    whyUseful: "ফর্ম যাচাই, অনুমতি পরীক্ষা, মূল্য হিসাব সব অপারেটর দিয়ে হয়।",
    syntax: {
      lang: "js",
      code: `const sum = 5 + 3;
const same = 5 === "5";   // false
const ok = age >= 18 && hasId;`
    },
    example: {
      title: "অপারেটরের ব্যবহার",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>অপারেটর</title>
</head>
<body>
  <ul id="list"></ul>
</body>
</html>`
        },
        {
          lang: "js",
          code: `const price = 250;
const discount = 10;
const finalPrice = price - (price * discount) / 100;

const lines = [
  "মূল দাম: " + price,
  "চূড়ান্ত দাম: " + finalPrice,
  "৫ ভাগ ৩ এর ভাগশেষ: " + (5 % 3),
  "0 == \\"\\" : " + (0 == ""),
  "0 === \\"\\" : " + (0 === ""),
  "বয়স ১৮+ ও আইডি আছে: " + (20 >= 18 && true),
  "নয় (!): " + !false
];

const list = document.getElementById("list");
lines.forEach(function (text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});`
        }
      ]
    },
    lineByLine: [
      { code: `price - (price * discount) / 100`, explain: "দাম থেকে ১০% ছাড় বিয়োগ করে চূড়ান্ত দাম।" },
      { code: `5 % 3`, explain: "ভাগশেষ ২।" },
      { code: `0 == ""`, explain: "টাইপ রূপান্তর করে সত্য, তাই এটি বিভ্রান্তিকর।" },
      { code: `0 === ""`, explain: "টাইপ না মিললে মিথ্যা; এজন্য `===` নিরাপদ।" },
      { code: `20 >= 18 && true`, explain: "দুইটি শর্তই সত্য, তাই ফলাফল সত্য।" }
    ],
    output: "একটি তালিকায় মূল দাম ২৫০, চূড়ান্ত দাম ২২৫, ভাগশেষ ২, এবং `==` ও `===` এর ফলাফল আলাদাভাবে দেখাবে।",
    mistakes: [
      {
        wrong: `if (age = 18) { }`,
        right: `if (age === 18) { }`,
        explain: "একটি `=` অ্যাসাইনমেন্ট করে; তুলনার জন্য `===` লিখুন।"
      },
      {
        wrong: `if (x == "5")`,
        right: `if (x === 5)`,
        explain: "টাইপ না মিলিয়ে তুলনা করলে ভুল ধরা কঠিন হয়। সংখ্যা হলে সংখ্যা দিয়ে তুলনা করুন।"
      }
    ],
    bestPractices: [
      "তুলনায় সবসময় `===` ও `!==` ব্যবহার করুন।",
      "জটিল শর্তে বন্ধনী `( )` দিয়ে অগ্রাধিকার স্পষ্ট করুন।",
      "অপ্রয়োজনীয় `== true` লিখবেন না; `if (isOpen)` যথেষ্ট।"
    ],
    useCase: "ই-কমার্সে ডিসকাউন্ট হিসাব, এবং \"স্টক আছে এবং দাম ০ এর বেশি\" শর্ত দিয়ে বাটন সক্রিয় করা হয়।",
    practice: [
      {
        level: "easy",
        task: "দুটি সংখ্যা ৭ ও ৪ এর যোগফল ও গুণফল একটি `console.log` এ দেখান।",
        hint: "`+` ও `*` ব্যবহার করুন।",
        solution: "console.log(7 + 4, 7 * 4);",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি সংখ্যা জোড় কিনা যাচাই করুন (`n % 2 === 0`)।",
        hint: "ভাগশেষ ০ হলে জোড়।",
        solution: "const n = 12;\nconst isEven = n % 2 === 0; // true",
        solutionLang: "js"
      },
      {
        level: "challenging",
        task: "একটি শর্ত লিখুন: বয়স ১৮ বা বেশি এবং দেশ \"বাংলাদেশ\" হলে `canVote` সত্য হবে।",
        hint: "`&&` ব্যবহার করুন।",
        solution: "const age = 20;\nconst country = \"বাংলাদেশ\";\nconst canVote = age >= 18 && country === \"বাংলাদেশ\";",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "`===` অপারেটর কী করে?",
        options: ["শুধু মান তুলনা", "টাইপসহ তুলনা", "অ্যাসাইনমেন্ট", "যোগ"],
        answer: 1,
        explanation: "`===` মান ও টাইপ দুটোই মিলিয়ে দেখে।"
      },
      {
        question: "`10 % 4` এর ফলাফল কী?",
        options: ["2", "2.5", "4", "0"],
        answer: 0,
        explanation: "`%` ভাগশেষ দেয়; ১০ ভাগ ৪ এর ভাগশেষ ২।"
      },
      {
        question: "`true && false` এর ফলাফল কী?",
        options: ["true", "false", "undefined", "null"],
        answer: 1,
        explanation: "`&&` তখনই সত্য যখন দুটিই সত্য; এখানে একটি মিথ্যা, তাই ফল মিথ্যা।"
      }
    ]
  },
  {
    id: "js-04-conditions-loops",
    course: "javascript",
    module: 1,
    moduleTitle: "মডিউল ১: JavaScript মৌলিক বিষয়",
    order: 4,
    title: "Conditions ও Loops",
    objectives: [
      "`if`, `else if`, `else` ও `switch` দিয়ে সিদ্ধান্ত নিতে পারবেন।",
      "`for`, `while` ও `for...of` লুপ লিখতে পারবেন।",
      "অসীম লুপ কী এবং কীভাবে এড়াতে হয় তা বুঝবেন।"
    ],
    explanation: [
      "`if` একটি শর্ত পরীক্ষা করে। শর্ত সত্য হলে ব্লক চলে, না হলে `else` ব্লক চলে। একাধিক শর্তের জন্য `else if` ব্যবহৃত হয়। একটি মানের বিভিন্ন রূপের জন্য `switch` সুবিধাজনক।",
      "লুপ একই কাজ বারবার করে। `for` সংখ্যা নির্দিষ্ট করা থাকলে ভালো (`for (let i = 0; i < 5; i++)`)। `while` শর্ত সত্য থাকা পর্যন্ত চলে। `for...of` তালিকার প্রতিটি আইটেমের উপর দিয়ে যায়।",
      "লুপের শর্ত কখনো মিথ্যা না হলে অসীম লুপ হয় এবং ব্রাউজার আটকে যেতে পারে। তাই প্রতিবার `i++` বা অবস্থা বদলের নিশ্চিত ব্যবস্থা রাখুন।"
    ],
    whyUseful: "তালিকার সব আইটেম দেখানো, নম্বর অনুযায়ী গ্রেড দেওয়া, বারবার যাচাই করা, এসবই লুপ ও শর্ত দিয়ে হয়।",
    syntax: {
      lang: "js",
      code: `if (score >= 80) { }
else if (score >= 50) { }
else { }

for (let i = 0; i < 5; i++) { }
for (const item of list) { }`
    },
    example: {
      title: "গ্রেড ও তালিকা",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>শর্ত ও লুপ</title>
</head>
<body>
  <h1>ফলাফল</h1>
  <ul id="results"></ul>
</body>
</html>`
        },
        {
          lang: "js",
          code: `const scores = [92, 67, 38];
const list = document.getElementById("results");

for (const score of scores) {
  let grade;
  if (score >= 80) {
    grade = "A+";
  } else if (score >= 50) {
    grade = "B";
  } else {
    grade = "ফেল";
  }
  const li = document.createElement("li");
  li.textContent = score + " নম্বর: " + grade;
  list.appendChild(li);
}

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "ধাপ " + i;
  list.appendChild(li);
}`
        }
      ]
    },
    lineByLine: [
      { code: `for (const score of scores) {`, explain: "`scores` তালিকার প্রতিটি সংখ্যার উপর দিয়ে যায়।" },
      { code: `if (score >= 80) {`, explain: "৮০ বা তার বেশি হলে `A+`।" },
      { code: `} else if (score >= 50) {`, explain: "৫০-৭৯ হলে `B`।" },
      { code: `for (let i = 1; i <= 3; i++) {`, explain: "`i` ১ থেকে ৩ পর্যন্ত চলে, প্রতিবার ১ বাড়ে।" }
    ],
    output: "তালিকায় ৯২ নম্বর A+, ৬৭ নম্বর B, ৩৮ নম্বর ফেল, এবং নিচে ধাপ ১, ধাপ ২, ধাপ ৩ দেখাবে।",
    mistakes: [
      {
        wrong: `for (let i = 0; i < 5; i--) { }`,
        right: `for (let i = 0; i < 5; i++) { }`,
        explain: "`i--` মান কমায়, শর্ত কখনো মিথ্যা হবে না; এটি অসীম লুপ।"
      },
      {
        wrong: `if (score = 80) { }`,
        right: `if (score === 80) { }`,
        explain: "`=` অ্যাসাইনমেন্ট; তুলনার জন্য `===`।"
      },
      {
        wrong: `while (true) { doSomething(); }`,
        right: `let count = 0;\nwhile (count < 3) { count++; }`,
        explain: "শর্ত সবসময় সত্য থাকলে লুপ শেষ হবে না; ব্রাউজার আটকে যায়।"
      }
    ],
    bestPractices: [
      "জানা সংখ্যার পুনরাবৃত্তিতে `for`, তালিকায় `for...of` ব্যবহার করুন।",
      "শর্তের ক্রম এমন রাখুন যেন সবচেয়ে নির্দিষ্ট শর্ত আগে আসে।",
      "লুপে বড় কাজের আগে ছোট সংখ্যা দিয়ে পরীক্ষা করুন।"
    ],
    useCase: "একটি অনলাইন পরীক্ষায় প্রতিটি উত্তর যাচাই করতে লুপ এবং নম্বর অনুযায়ী গ্রেড দিতে শর্ত ব্যবহার হয়।",
    practice: [
      {
        level: "easy",
        task: "১ থেকে ৫ পর্যন্ত সংখ্যা `console.log` করার `for` লুপ লিখুন।",
        hint: "`i <= 5`।",
        solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি সংখ্যা ধনাত্মক, ঋণাত্মক, না শূন্য তা জানাতে `if / else if / else` লিখুন।",
        hint: "তিনটি শাখা।",
        solution: "if (n > 0) {\n  console.log(\"ধনাত্মক\");\n} else if (n < 0) {\n  console.log(\"ঋণাত্মক\");\n} else {\n  console.log(\"শূন্য\");\n}",
        solutionLang: "js"
      },
      {
        level: "challenging",
        task: "একটি তালিকার সব সংখ্যার যোগফল `for...of` দিয়ে হিসাব করুন।",
        hint: "একটি `total` ভেরিয়েবল রাখুন।",
        solution: "const nums = [3, 7, 10];\nlet total = 0;\nfor (const n of nums) {\n  total += n;\n}\n// total = 20",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "কোন লুপ একটি তালিকার প্রতিটি আইটেমের উপর দিয়ে যায়?",
        options: ["for...of", "while (false)", "if", "switch"],
        answer: 0,
        explanation: "`for...of` তালিকার প্রতিটি মান ধরে ধরে যায়।"
      },
      {
        question: "`for (let i = 0; i < 3; i++)` কতবার চলবে?",
        options: ["২ বার", "৩ বার", "৪ বার", "অসীম"],
        answer: 1,
        explanation: "`i` ০, ১, ২ এর জন্য চলে; মোট ৩ বার।"
      },
      {
        question: "লুপ আটকে যাওয়া বা অসীম লুপ কী ধরনের ভুল?",
        options: ["সিনট্যাক্স ত্রুটি", "লজিক ত্রুটি (শর্ত বদলায় না)", "CSS ত্রুটি", "নেটওয়ার্ক ত্রুটি"],
        answer: 1,
        explanation: "শর্ত কখনো মিথ্যা না হলে লুপ শেষ হয় না; এটি লজিকের ভুল।"
      }
    ]
  },
  {
    id: "js-05-functions",
    course: "javascript",
    module: 1,
    moduleTitle: "মডিউল ১: JavaScript মৌলিক বিষয়",
    order: 5,
    title: "Functions (ফাংশন)",
    objectives: [
      "ফাংশন ঘোষণা করতে ও ডাকতে (call) পারবেন।",
      "প্যারামিটার, রিটার্ন ও arrow function এর ধারণা বুঝবেন।",
      "ভেরিয়েবলের স্কোপ (scope) এর মৌলিক ধারণা পাবেন।"
    ],
    explanation: [
      "ফাংশন হলো একটি নির্দিষ্ট কাজের নামযুক্ত কোড-ব্লক। `function greet(name) { ... }` লিখে তৈরি হয়, এবং `greet(\"করিম\")` লিখে চালানো হয়। প্যারামিটার হলো ইনপুট, `return` হলো ফলাফল।",
      "Arrow function সংক্ষিপ্ত লেখার উপায়: `const add = (a, b) => a + b;`। ইভেন্ট হ্যান্ডলারে এটি খুব ব্যবহৃত।",
      "একটি ফাংশনের ভেতরে ঘোষিত `let`/`const` সেই ফাংশনের বাইরে দেখা যায় না; এটিকে স্কোপ বলে। ছোট, একটিমাত্র কাজ করা ফাংশন লিখুন; একে বলে ফাংশনকে ছোট ও অর্থবহ রাখা।"
    ],
    whyUseful: "একই কাজ বারবার লিখতে হয় না, কোড পড়া ও পরীক্ষা সহজ হয়, এবং বড় প্রজেক্ট ভাগ করা যায়।",
    syntax: {
      lang: "js",
      code: `function add(a, b) {
  return a + b;
}
const double = (n) => n * 2;`
    },
    example: {
      title: "ফাংশন দিয়ে ছোট হিসাব",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ফাংশন</title>
</head>
<body>
  <h1>বিল হিসাব</h1>
  <p id="bill"></p>
</body>
</html>`
        },
        {
          lang: "js",
          code: `function calculateTotal(price, quantity) {
  return price * quantity;
}

const withTax = (amount) => amount + amount * 0.05;

const total = calculateTotal(120, 3);
const finalAmount = withTax(total);

document.getElementById("bill").textContent =
  "মোট: " + total + " টাকা, কর সহ: " + finalAmount + " টাকা";`
        }
      ]
    },
    lineByLine: [
      { code: "function calculateTotal(price, quantity) {", explain: "দুটি প্যারামিটার: দাম ও সংখ্যা।" },
      { code: "return price * quantity;", explain: "ফলাফল ফেরত দেয়।" },
      { code: "const withTax = (amount) => amount + amount * 0.05;", explain: "Arrow function, ৫% কর যোগ করে।" },
      { code: "const total = calculateTotal(120, 3);", explain: "ফাংশন ডেকে ফলাফল ভেরিয়েবলে রাখা।" }
    ],
    output: "পেজে দেখাবে: মোট: 360 টাকা, কর সহ: 378 টাকা।",
    mistakes: [
      {
        wrong: `function add(a, b) { a + b; }`,
        right: `function add(a, b) { return a + b; }`,
        explain: "`return` না লিখলে ফাংশন `undefined` ফেরত দেয়।"
      },
      {
        wrong: `greet();  // ফাংশন নিচে ঘোষিত ও const দিয়ে ঘোষিত`,
        right: `const greet = () => {...};  greet();`,
        explain: "`const` ঘোষণার আগে ব্যবহার করলে ত্রুটি আসে। ঘোষণা আগে রাখুন।"
      },
      {
        wrong: `function f() { let x = 1; } console.log(x);`,
        right: `let x = 1; function f() { console.log(x); }`,
        explain: "ফাংশনের ভেতরের ভেরিয়েবল বাইরে দেখা যায় না; স্কোপ বুঝুন।"
      }
    ],
    bestPractices: [
      "প্রতিটি ফাংশন একটি কাজ করুক এবং নাম কাজটি বলুক, যেমন `calculateTotal`।",
      "প্যারামিটার সীমিত রাখুন; অনেক প্যারামিটার হলে একটি অবজেক্ট দিন।",
      "ফাংশন থেকে মান `return` করুন, বাইরের ভেরিয়েবল বদলাবেন না।"
    ],
    useCase: "একটি শপিং সাইটে `calculateTotal` ফাংশন কার্টের প্রতিটি আইটেমের দাম মিলিয়ে মোট বের করে, যা একাধিক জায়গায় ব্যবহৃত হয়।",
    practice: [
      {
        level: "easy",
        task: "দুটি সংখ্যার গড় বের করার ফাংশন `average(a, b)` লিখুন।",
        hint: "`(a + b) / 2`।",
        solution: "function average(a, b) {\n  return (a + b) / 2;\n}",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি arrow function লিখুন যা একটি নাম নিয়ে `\"হ্যালো, নাম\"` লেখা ফেরত দেয়।",
        hint: "`const greet = (name) => ...`",
        solution: "const greet = (name) => \"হ্যালো, \" + name;",
        solutionLang: "js"
      },
      {
        level: "challenging",
        task: "একটি ফাংশন লিখুন যা একটি সংখ্যা নিয়ে তার বর্গ ফেরত দেয়, এবং সেটি দিয়ে ১ থেকে ৫ পর্যন্ত বর্গের তালিকা বানান।",
        hint: "লুপের ভেতরে ফাংশন ডাকুন।",
        solution: "const square = (n) => n * n;\nconst squares = [];\nfor (let i = 1; i <= 5; i++) {\n  squares.push(square(i));\n}",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "ফাংশন থেকে ফলাফল ফেরত দিতে কোন কীওয়ার্ড লাগে?",
        options: ["give", "return", "output", "send"],
        answer: 1,
        explanation: "`return` ফাংশনের ফলাফল ফেরত দেয়।"
      },
      {
        question: "`(a, b) => a + b` কী ধরনের ফাংশন?",
        options: ["Arrow function", "Class", "Loop", "Object"],
        answer: 0,
        explanation: "`=>` ব্যবহার করা হলে সেটি arrow function।"
      },
      {
        question: "ফাংশনের ভেতরের `let` ভেরিয়েবল বাইরে কেমন?",
        options: ["সবসময় দেখা যায়", "দেখা যায় না (স্কোপের বাইরে)", "শুধু number হলে দেখা যায়", "সবসময় undefined"],
        answer: 1,
        explanation: "ভেরিয়েবল তার স্কোপ (ফাংশন ব্লক) এর বাইরে দেখা যায় না।"
      }
    ]
  },
  {
    id: "js-06-dom-selection",
    course: "javascript",
    module: 2,
    moduleTitle: "মডিউল ২: DOM, ইভেন্ট ও ডেটা",
    order: 1,
    title: "DOM নির্বাচন ও পরিবর্তন",
    objectives: [
      "`querySelector`, `getElementById` দিয়ে এলিমেন্ট খুঁজতে পারবেন।",
      "`createElement` ও `appendChild` দিয়ে নতুন এলিমেন্ট যোগ করতে পারবেন।",
      "`textContent` ও `setAttribute` দিয়ে এলিমেন্ট বদলাতে পারবেন।"
    ],
    explanation: [
      "DOM (Document Object Model) হলো HTML-এর জীবন্ত রূপ, যেখানে প্রতিটি ট্যাগ একটি অবজেক্ট। JavaScript দিয়ে সেই অবজেক্ট খুঁজে বদলানো যায়। `document.getElementById(\"id\")` একটি এলিমেন্ট দেয়, `document.querySelector(\".card\")` CSS সিলেক্টর দিয়ে প্রথম মিল দেয়।",
      "নতুন এলিমেন্ট বানাতে `document.createElement(\"li\")`, লেখা দিতে `textContent`, এবং পেজে যোগ করতে `appendChild`। এভাবে তালিকা, কার্ড ইত্যাদি তৈরি হয়।",
      "`setAttribute(\"href\", \"...\")` দিয়ে অ্যাট্রিবিউট বদলানো যায়। নির্বাচন ব্যর্থ হলে `null` আসে, তাই ব্যবহারের আগে পরীক্ষা করা ভালো।"
    ],
    whyUseful: "ডাইনামিক পেজ (যেমন অনুসন্ধান ফলাফল, কার্ট) এভাবে তৈরি হয়। DOM না জানলে JavaScript পেজের সাথে কথা বলতে পারে না।",
    syntax: {
      lang: "js",
      code: `const el = document.querySelector(".card");
const li = document.createElement("li");
li.textContent = "নতুন আইটেম";
list.appendChild(li);`
    },
    example: {
      title: "ইনপুট থেকে তালিকায় আইটেম যোগ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM উদাহরণ</title>
</head>
<body>
  <h1>কাজের তালিকা</h1>
  <input id="task" type="text" placeholder="কাজ লিখুন">
  <button id="add" type="button">যোগ করুন</button>
  <ul id="list"></ul>
</body>
</html>`
        },
        {
          lang: "js",
          code: `const input = document.getElementById("task");
const button = document.getElementById("add");
const list = document.getElementById("list");

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
});`
        }
      ]
    },
    lineByLine: [
      { code: `const input = document.getElementById("task");`, explain: "ইনপুট বক্সটি খুঁজে নেওয়া হয়।" },
      { code: `const text = input.value.trim();`, explain: "লেখার দুই পাশের ফাঁকা বাদ দেয়।" },
      { code: `if (text === "") { return; }`, explain: "খালি হলে কিছু যোগ না করে ফাংশন থেকে বেরিয়ে যায়।" },
      { code: `const li = document.createElement("li");`, explain: "নতুন `li` এলিমেন্ট তৈরি।" },
      { code: `li.textContent = text;`, explain: "লেখা নিরাপদভাবে বসায়।" },
      { code: `list.appendChild(li);`, explain: "তালিকায় যোগ করে।" }
    ],
    output: "ইনপুটে কিছু লিখে যোগ করলে তালিকায় নতুন আইটেম আসে এবং ইনপুট খালি হয়ে যায়। খালি ইনপুটে কিছু হয় না।",
    mistakes: [
      {
        wrong: `list.innerHTML = "<li>" + text + "</li>";`,
        right: `li.textContent = text; list.appendChild(li);`,
        explain: "ব্যবহারকারীর লেখা `innerHTML`-এ দিলে HTML/স্ক্রিপ্ট ইনজেক্ট হতে পারে (XSS)।"
      },
      {
        wrong: `document.getElementById("#task")`,
        right: `document.getElementById("task")`,
        explain: "`getElementById`-এ শুধু ID লিখুন, `#` চিহ্ন দেবেন না। `#` শুধু `querySelector`-এ।"
      },
      {
        wrong: `const x = document.querySelector(".nope"); x.textContent = "হ্যাঁ";`,
        right: `const x = document.querySelector(".nope"); if (x) { x.textContent = "হ্যাঁ"; }`,
        explain: "এলিমেন্ট না পেলে `null` আসে; ব্যবহারের আগে যাচাই করুন।"
      }
    ],
    bestPractices: [
      "এলিমেন্টের রেফারেন্স একবার ভেরিয়েবলে রাখুন, বারবার খুঁজবেন না।",
      "ব্যবহারকারীর লেখা সবসময় `textContent` দিয়ে বসান।",
      "নতুন এলিমেন্ট বানানোর পর একবারে `appendChild` করুন।"
    ],
    useCase: "একটি ইউটিউব-স্টাইল মন্তব্য বক্সে ব্যবহারকারী লিখে \"পোস্ট\" চাপলে নতুন মন্তব্য তালিকার উপরে যোগ হয়।",
    practice: [
      {
        level: "easy",
        task: "`id=\"title\"` এলিমেন্টের লেখা \"নতুন শিরোনাম\" করে দিন।",
        hint: "`getElementById` ও `textContent`।",
        solution: "document.getElementById(\"title\").textContent = \"নতুন শিরোনাম\";",
        solutionLang: "js"
      },
      {
        level: "medium",
        task: "একটি `a` এলিমেন্ট তৈরি করুন যার `href` `https://example.com`, এবং `body`-তে যোগ করুন।",
        hint: "`setAttribute` ব্যবহার করুন।",
        solution: "const link = document.createElement(\"a\");\nlink.setAttribute(\"href\", \"https://example.com\");\nlink.textContent = \"লিংক\";\ndocument.body.appendChild(link);",
        solutionLang: "js"
      },
      {
        level: "challenging",
        task: "`.card` ক্লাসের সব এলিমেন্ট খুঁজে প্রত্যেকটির লেখার আগে \"#\" যোগ করুন।",
        hint: "`querySelectorAll` ও `forEach`।",
        solution: "document.querySelectorAll(\".card\").forEach(function (card) {\n  card.textContent = \"# \" + card.textContent;\n});",
        solutionLang: "js"
      }
    ],
    quiz: [
      {
        question: "`document.getElementById` এ ঠিক কী লেখা উচিত?",
        options: ["#title", ".title", "title", "<title>"],
        answer: 2,
        explanation: "`getElementById`-এ শুধু ID-এর নাম লিখতে হয়, চিহ্ন ছাড়া।"
      },
      {
        question: "নতুন একটি এলিমেন্ট বানাতে কোন মেথড?",
        options: ["createElement", "newTag", "makeElement", "addTag"],
        answer: 0,
        explanation: "`document.createElement(\"tag\")` নতুন এলিমেন্ট তৈরি করে।"
      },
      {
        question: "কোন ক্ষেত্রে `null` আসতে পারে?",
        options: ["লেখা খালি থাকলে", "এলিমেন্ট না পেলে", "লুপ চললে", "ফাংশন ডাকলে"],
        answer: 1,
        explanation: "নির্বাচিত সিলেক্টরে এলিমেন্ট না থাকলে `querySelector`/`getElementById` `null` ফেরত দেয়।"
      }
    ]
  }
]);

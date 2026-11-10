window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...[
  {
    id: "html-10-text-formatting",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 1,
    title: "টেক্সট ফরম্যাটিং",
    objectives: [
      "`strong`, `em`, `mark`, `small`, `del`, `ins` ট্যাগের পার্থক্য বুঝবেন।",
      "`sub`, `sup`, `code`, `kbd` ট্যাগ কখন ব্যবহার করতে হয় জানবেন।",
      "টেক্সটের অর্থ বোঝাতে সঠিক ট্যাগ বেছে নিতে পারবেন।"
    ],
    explanation: [
      "HTML-এ লেখাকে গাঢ় বা বাঁকা করার ট্যাগ আছে, কিন্তু সবচেয়ে গুরুত্বপূর্ণ নিয়ম হলো **ট্যাগ বেছে নেওয়া অর্থ দেখে**, চেহারা দেখে নয়। `strong` বলে লেখাটি গুরুত্বপূর্ণ, আর `b` শুধু গাঢ় করে। স্ক্রিন রিডার `strong`-এ জোর দিয়ে পড়ে, কিন্তু `b`-তে বিশেষ জোর দেয় না।",
      "`em` দিয়ে জোর দেওয়া হয় (সাধারণত বাঁকা দেখায়)। `mark` দিয়ে হাইলাইট করা হয়। `del` দিয়ে এমন লেখা বোঝানো হয় যা আর প্রযোজ্য নয়, `ins` দিয়ে নতুন সংযোজন বোঝানো হয়।",
      "`sub` (নিচে) ও `sup` (উপরে) দিয়ে H₂O বা x² লেখা যায়। `code` কোড নির্দেশ করে, আর `kbd` কিবোর্ডের কী নির্দেশ করে, যেমন Ctrl।"
    ],
    whyUseful: "সঠিক ট্যাগ ব্যবহার করলে লেখার অর্থ ঠিক থাকে, সার্চ ইঞ্জিন ও স্ক্রিন রিডার গুরুত্ব বুঝতে পারে, এবং CSS দিয়ে চেহারা বদলানো সহজ হয়।",
    syntax: {
      lang: "html",
      code: `<strong>গুরুত্বপূর্ণ</strong>
<em>জোর দিয়ে</em>
<mark>হাইলাইট</mark>`
    },
    example: {
      title: "টেক্সট ফরম্যাটিংয়ের উদাহরণ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>টেক্সট ফরম্যাটিং</title>
</head>
<body>
  <p><strong>সতর্কতা:</strong> পরীক্ষার আগের রাতে ঘুমান।</p>
  <p>এই কাজটি <em>খুব</em> সহজ।</p>
  <p>আজকের বিষয়: <mark>HTML ট্যাগ</mark></p>
  <p>পানির সংকেত: H<sub>2</sub>O, ক্ষেত্রফল: x<sup>2</sup></p>
  <p>আগের মূল্য <del>৫০০</del> টাকা, নতুন মূল্য <ins>৪০০</ins> টাকা।</p>
  <p>সেভ করতে <kbd>Ctrl</kbd> + <kbd>S</kbd> চাপুন।</p>
  <p>কোড লিখুন: <code>console.log("হ্যালো")</code></p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<strong>সতর্কতা:</strong>", explain: "গুরুত্বপূর্ণ শব্দকে গাঢ় ও অর্থবহ করে। সতর্কবার্তার জন্য সঠিক ট্যাগ।" },
      { code: "<em>খুব</em>", explain: "জোর দিয়ে পড়ার জন্য। \"খুব\" শব্দটির উপর আলাদা জোর পড়ে।" },
      { code: "<mark>HTML ট্যাগ</mark>", explain: "লেখাটি হলুদ আভায় হাইলাইট হয়। এটি অর্থের হাইলাইট, শুধু সাজানো নয়।" },
      { code: "H<sub>2</sub>O", explain: "`sub` সংখ্যাটি নিচে ছোট করে দেখায়, যেমন রাসায়নিক সূত্র।" },
      { code: "<del>৫০০</del> ... <ins>৪০০</ins>", explain: "`del` পুরনো মূল্য কেটে দেখায়, `ins` নতুন মূল্য আলাদা করে বোঝায়।" },
      { code: "<kbd>Ctrl</kbd>", explain: "কিবোর্ডের কী বোঝাতে ব্যবহৃত হয়।" },
      { code: "<code>console.log(...)</code>", explain: "কোডের টুকরো আলাদা মনোস্পেস ফন্টে দেখায়।" }
    ],
    output: "\"সতর্কতা:\" শব্দটি গাঢ় দেখাবে, \"খুব\" বাঁকা, \"HTML ট্যাগ\" হলুদ হাইলাইটে, ৫০০ কাটা, ৪০০ আন্ডারলাইন (ব্রাউজারভেদে) এবং কোডের লাইনটি মনোস্পেস ফন্টে দেখাবে।",
    mistakes: [
      {
        wrong: "<b>সতর্কতা</b>",
        right: "<strong>সতর্কতা</strong>",
        explain: "শুধু চেহারার জন্য `b` ব্যবহার করা যায়, কিন্তু গুরুত্ব বোঝাতে `strong` ব্যবহার করা উচিত।"
      },
      {
        wrong: "<font color=\"red\">লেখা</font>",
        right: "<span class=\"warning\">লেখা</span>",
        explain: "`font` ট্যাগ পুরনো ও অপ্রচলিত। রং ও ফন্টের জন্য CSS ব্যবহার করুন।"
      },
      {
        wrong: "x2",
        right: "x<sup>2</sup>",
        explain: "সুপারস্ক্রিপ্ট না দিলে সূত্রের অর্থ নষ্ট হয়। `sup` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "অর্থ বোঝাতে `strong` ও `em`, চেহারার জন্য CSS ব্যবহার করুন।",
      "কোড বা কিবোর্ড কী লেখার সময় `code` ও `kbd` ব্যবহার করুন।",
      "বেশি জায়গায় গাঢ় লেখা দিলে কোনো কিছুই আলাদা মনে হয় না; সীমিত রাখুন।"
    ],
    useCase: "একটি টিউটোরিয়াল সাইটে শর্টকাট কী দেখাতে `kbd`, কোডের নাম দেখাতে `code`, এবং সংশোধিত মূল্য দেখাতে `del`/`ins` ব্যবহার করা হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি বাক্যে একটি শব্দ `strong` এবং একটি শব্দ `em` দিয়ে লিখুন।",
        hint: "দুইটি আলাদা ট্যাগ ব্যবহার করুন।",
        solution: "<p><strong>জরুরি</strong> কাজটি <em>আজই</em> শেষ করুন।</p>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "পানির সংকেত H₂O এবং গাণিতিক ২ এর বর্গ x² HTML দিয়ে লিখুন।",
        hint: "`sub` ও `sup` ব্যবহার করুন।",
        solution: "<p>পানির সংকেত: H<sub>2</sub>O</p>\n<p>বর্গ: x<sup>2</sup></p>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি তালিকায় দুটি আইটেম লিখুন: একটি আগের মূল্য কাটা অবস্থায়, অন্যটি `mark` দিয়ে হাইলাইট করা।",
        hint: "`del` ও `mark` একসাথে ব্যবহার করুন।",
        solution: "<ul>\n  <li>আগের মূল্য: <del>৫০০</del> টাকা</li>\n  <li><mark>নতুন অফার</mark>: ৪০০ টাকা</li>\n</ul>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "অর্থের দিক থেকে গুরুত্ব বোঝাতে কোন ট্যাগ সঠিক?",
        options: ["<b>", "<strong>", "<i>", "<u>"],
        answer: 1,
        explanation: "`strong` গুরুত্ব বোঝায় এবং স্ক্রিন রিডারও এটি চিনতে পারে। `b` শুধু গাঢ় করে।"
      },
      {
        question: "H₂O সংকেতে ২ কে নিচে দেখাতে কোন ট্যাগ লাগে?",
        options: ["<sup>", "<sub>", "<small>", "<del>"],
        answer: 1,
        explanation: "`sub` লেখাকে নিচে ছোট করে দেখায়।"
      },
      {
        question: "কিবোর্ডের কী (যেমন Ctrl) বোঝাতে কোন ট্যাগ ব্যবহার করা হয়?",
        options: ["<kbd>", "<code>", "<mark>", "<ins>"],
        answer: 0,
        explanation: "`kbd` কিবোর্ড ইনপুট নির্দেশ করে।"
      }
    ]
  },
  {
    id: "html-11-links-navigation",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 2,
    title: "লিংক ও নেভিগেশন",
    objectives: [
      "`a` ট্যাগ দিয়ে লিংক তৈরি করতে পারবেন।",
      "Absolute ও relative URL-এর পার্থক্য বুঝবেন।",
      "Hash লিংক ও নতুন ট্যাবে লিংকের নিরাপদ নিয়ম জানবেন।"
    ],
    explanation: [
      "লিংক হলো `a` (anchor) ট্যাগ। `href` অ্যাট্রিবিউটে গন্তব্যের ঠিকানা লেখা হয়। ওয়েবের বিভিন্ন পেজ এভাবে একে অপরের সাথে যুক্ত থাকে।",
      "**Absolute URL** সম্পূর্ণ ঠিকানা দেয়, যেমন `https://example.com/about`। **Relative URL** বর্তমান পেজের সাপেক্ষে পথ দেয়, যেমন `about.html` বা `../contact.html`। নিজের ওয়েবসাইটের ভেতরের লিংকে relative URL ভালো, কারণ ডোমেন বদলালেও কাজ করে।",
      "একই পেজের ভেতরের একটি অংশে যেতে `#id` ব্যবহার করা যায়, যেমন `href=\"#contact\"` তাহলে `id=\"contact\"` এলিমেন্টে যাবে। `target=\"_blank\"` দিলে নতুন ট্যাবে খোলে, এবং সাথে `rel=\"noopener noreferrer\"` দেওয়া নিরাপদ।"
    ],
    whyUseful: "লিংক ছাড়া ওয়েব একটি বিচ্ছিন্ন পাতার সমষ্টি হতো। নেভিগেশন ঠিক থাকলে ব্যবহারকারী সহজে সাইট ঘুরতে পারেন।",
    syntax: {
      lang: "html",
      code: `<a href="ঠিকানা">লিংকের লেখা</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">নতুন ট্যাব</a>`
    },
    example: {
      title: "লিংকের বিভিন্ন ধরন",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>লিংক উদাহরণ</title>
</head>
<body>
  <nav>
    <a href="#about">আমাদের সম্পর্কে</a> |
    <a href="https://developer.mozilla.org/bn/" target="_blank" rel="noopener noreferrer">MDN (নতুন ট্যাব)</a>
  </nav>

  <h2 id="about">আমাদের সম্পর্কে</h2>
  <p>এই পেজে একটি অভ্যন্তরীণ লিংক ব্যবহার করা হয়েছে।</p>
  <p>পরের পেজে যেতে <a href="contact.html">যোগাযোগ</a> পেজে যান।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<a href="#about">আমাদের সম্পর্কে</a>`, explain: "`#about` বর্তমান পেজের `id=\"about\"` এলিমেন্টে নিয়ে যায়।" },
      { code: `<a href="https://developer.mozilla.org/bn/" target="_blank" rel="noopener noreferrer">`, explain: "অন্য সাইটের Absolute URL। `target=\"_blank\"` নতুন ট্যাবে খোলে, `rel` নিরাপত্তা বাড়ায়।" },
      { code: `<h2 id="about">`, explain: "লিংকের গন্তব্য। `id` একটি পেজে একবারই হওয়া উচিত।" },
      { code: `<a href="contact.html">`, explain: "একই ফোল্ডারের অন্য পেজে যাওয়ার Relative URL।" }
    ],
    output: "নেভিগেশনে দুইটি লিংক দেখা যাবে। \"আমাদের সম্পর্কে\" ক্লিক করলে পেজ ওই শিরোনামে স্ক্রল করবে। MDN লিংকটি নতুন ট্যাবে খুলবে।",
    mistakes: [
      {
        wrong: `<a href="https://example.com" target="_blank">`,
        right: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">`,
        explain: "নতুন ট্যাবের পেজ আপনার পেজের কিছু তথ্য ব্যবহার করতে পারে। `rel=\"noopener noreferrer\"` দিন।"
      },
      {
        wrong: `<a href="C:\\files\\doc.pdf">`,
        right: `<a href="files/doc.pdf">`,
        explain: "কম্পিউটারের নিজস্ব পথ ওয়েবসাইটে কাজ করে না। ওয়েবসাইটের ফাইলের জন্য relative path ব্যবহার করুন।"
      },
      {
        wrong: `<a href="#">ক্লিক করুন</a>`,
        right: `<button type="button">ক্লিক করুন</button>`,
        explain: "কাজের জন্য বাটন ব্যবহার করুন; `href=\"#\"` শুধু ওপরে স্ক্রল করে, তাই এটি অর্থহীন লিংক।"
      }
    ],
    bestPractices: [
      "লিংকের লেখা এমন হোক যা বোঝা যায়, যেমন \"আরও জানুন\" নয়, \"HTML লিংক শিখুন\" লিখুন।",
      "বাইরের লিংকে `target=\"_blank\"` এর সাথে `rel=\"noopener noreferrer\"` দিন।",
      "নিজের সাইটের ভেতরে relative URL ব্যবহার করুন।"
    ],
    useCase: "একটি ব্লগের হোম পেজে \"সর্বশেষ লেখা\", \"যোগাযোগ\" ও \"সূচি\" লিংক থাকে। পাঠক এগুলো ক্লিক করে সরাসরি সেই পেজে যান।",
    practice: [
      {
        level: "easy",
        task: "\"আমাদের সম্পর্কে\" নামে একটি লিংক লিখুন যা `about.html` পেজে যায়।",
        hint: "`href` এর মানে ফাইলের নাম লিখুন।",
        solution: "<a href=\"about.html\">আমাদের সম্পর্কে</a>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি `id=\"contact\"` এলিমেন্ট এবং সেখানে যাওয়ার একটি হাশ লিংক লিখুন।",
        hint: "লিংকে `#contact` লিখুন।",
        solution: "<a href=\"#contact\">যোগাযোগ</a>\n<section id=\"contact\">\n  <h2>যোগাযোগ</h2>\n</section>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি বাইরের লিংক লিখুন যা নতুন ট্যাবে খোলে এবং নিরাপত্তা অ্যাট্রিবিউট সহ। পাশাপাশি একটি ইমেইল লিংক (`mailto:`) লিখুন।",
        hint: "`mailto:` প্রোটোকল দিয়ে ইমেইল ঠিকানা লেখা যায়।",
        solution: "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">আমাদের সাইট</a>\n<a href=\"mailto:info@example.com\">ইমেইল করুন</a>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "লিংকের গন্তব্য কোন অ্যাট্রিবিউটে লেখা হয়?",
        options: ["src", "href", "alt", "link"],
        answer: 1,
        explanation: "`href` অ্যাট্রিবিউট লিংকের গন্তব্য ঠিকানা ধরে।"
      },
      {
        question: "নতুন ট্যাবে লিংক খোলার জন্য কোনটি সঠিক?",
        options: ["target=\"_blank\"", "new=\"tab\"", "open=\"new\"", "window=\"true\""],
        answer: 0,
        explanation: "`target=\"_blank\"` লিংককে নতুন ট্যাবে খোলে।"
      },
      {
        question: "কোন URL-টি relative?",
        options: ["https://example.com/about", "about.html", "http://site.bd", "ftp://server/file"],
        answer: 1,
        explanation: "`about.html` বর্তমান পেজের সাপেক্ষে পথ, তাই এটি relative URL।"
      }
    ]
  },
  {
    id: "html-12-images-alt-text",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 3,
    title: "ছবি ও বিকল্প টেক্সট (alt)",
    objectives: [
      "`img` ট্যাগে `src`, `alt`, `width`, `height` ব্যবহার করতে পারবেন।",
      "ভালো `alt` টেক্সট কেমন হওয়া উচিত তা বুঝবেন।",
      "সজ্জার (decorative) ছবি ও তথ্যমূলক ছবির পার্থক্য জানবেন।"
    ],
    explanation: [
      "ছবি দেখাতে `img` ট্যাগ ব্যবহার করা হয়। এটি একটি void element, অর্থাৎ শেষ ট্যাগ লাগে না। `src` অ্যাট্রিবিউটে ছবির ঠিকানা লেখা হয়।",
      "`alt` অ্যাট্রিবিউট ছবির বিকল্প বর্ণনা। ছবি লোড না হলে, বা স্ক্রিন রিডার ব্যবহার করলে এই লেখা শোনা যায়। ছবিতে কী আছে তা সংক্ষেপে লিখুন, যেমন \"ঢাকার রিকশা\" বা \"আমাদের দোকানের লোগো\", \"ছবি\" বা \"photo123\" লিখবেন না।",
      "শুধু সাজানোর জন্য ছবি হলে `alt=\"\"` (খালি) দিন, যাতে স্ক্রিন রিডার সেটি বাদ দেয়। `width` ও `height` দিলে ব্রাউজার আগে থেকে জায়গা ঠিক রাখতে পারে, ফলে পেজ লাফায় না।"
    ],
    whyUseful: "`alt` ছাড়া দৃষ্টিহীন ব্যবহারকারীরা ছবির তথ্য জানতে পারেন না। সার্চ ইঞ্জিনও ছবির বিষয় বুঝতে `alt` ব্যবহার করে।",
    syntax: {
      lang: "html",
      code: `<img src="images/photo.jpg" alt="ছবির বর্ণনা" width="400" height="300">`
    },
    example: {
      title: "ছবি ও alt এর উদাহরণ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ছবি উদাহরণ</title>
</head>
<body>
  <h1>আমাদের দোকান</h1>
  <img src="images/shop.jpg" alt="রঙিন সাইনবোর্ডসহ একটি মুদির দোকান" width="400" height="300">
  <p>উপরের ছবিটি আমাদের দোকানের সামনের দৃশ্য।</p>
  <img src="images/divider.png" alt="" width="200" height="8">
  <p>সজ্জার জন্য ছবিটির alt খালি রাখা হয়েছে।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<img src="images/shop.jpg" alt="রঙিন সাইনবোর্ডসহ একটি মুদির দোকান" width="400" height="300">`, explain: "তথ্যমূলক ছবি। `alt` ছবির বিষয় বর্ণনা করে, `width` ও `height` জায়গা আগে থেকে ঠিক করে।" },
      { code: `<img src="images/divider.png" alt="" width="200" height="8">`, explain: "শুধু সাজানোর ছবি। খালি `alt` স্ক্রিন রিডারকে এটি বাদ দিতে বলে।" },
      { code: "<h1>আমাদের দোকান</h1>", explain: "পেজের শিরোনাম। ছবির আগে শিরোনাম থাকলে পেজের বিষয় আগেই বোঝা যায়।" },
      { code: "<p>উপরের ছবিটি ...</p>", explain: "ছবির সাথে সংশ্লিষ্ট লেখা। এতে ছবির প্রসঙ্গ পাঠক বুঝতে পারেন।" }
    ],
    output: "ছবিটি পেজে দেখা যাবে (ফাইল না থাকলে ভাঙা আইকনে alt লেখা দেখা যাবে)। দ্বিতীয় ছবিটি সরু একটি বিভাজক হিসেবে দেখাবে।",
    mistakes: [
      {
        wrong: `<img src="shop.jpg">`,
        right: `<img src="shop.jpg" alt="মুদির দোকান">`,
        explain: "`alt` না দিলে অ্যাক্সেসিবিলিটি ও SEO দুটোই ক্ষতিগ্রস্ত হয়।"
      },
      {
        wrong: `<img src="shop.jpg" alt="image">`,
        right: `<img src="shop.jpg" alt="মুদির দোকানের সামনের দৃশ্য">`,
        explain: "\"image\" বা \"ছবি\" লিখলে কোনো তথ্য দেয় না। ছবিতে কী আছে তা লিখুন।"
      },
      {
        wrong: `<img src="a.jpg" width="4000">`,
        right: `<img src="a.jpg" width="400" height="300" style="max-width:100%;height:auto">`,
        explain: "বড় ছবি ছোট স্ক্রিনে ভেঙে যায়। CSS দিয়ে `max-width: 100%` দিন (বিস্তারিত CSS মডিউলে)।"
      }
    ],
    bestPractices: [
      "প্রতিটি তথ্যমূলক ছবিতে ছোট ও নির্দিষ্ট `alt` লিখুন।",
      "সজ্জার ছবিতে `alt=\"\"` দিন।",
      "ছবির `width` ও `height` দিন, যাতে লোড হওয়ার সময় লেআউট না নড়ে।",
      "ছবির ফাইলের আকার ছোট রাখুন; ওয়েব-উপযোগী ফরম্যাট (JPG, PNG, WebP) ব্যবহার করুন।"
    ],
    useCase: "একটি রেসিপি সাইটে প্রতিটি খাবারের ছবির `alt` এ খাবারের নাম ও উপাদান লেখা হয়, যাতে সবাই খাবারটি বুঝতে পারে।",
    practice: [
      {
        level: "easy",
        task: "`images/rose.jpg` ছবি যোগ করুন যার alt \"লাল গোলাপ\"।",
        hint: "`src` ও `alt` দুটোই লিখুন।",
        solution: "<img src=\"images/rose.jpg\" alt=\"লাল গোলাপ\">",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি ছবি যার আকার 300×200, সাথে শুধু সজ্জার একটি ছবি যার alt খালি।",
        hint: "দুটি আলাদা `img` লিখুন।",
        solution: "<img src=\"images/hero.jpg\" alt=\"শহরের সকালের দৃশ্য\" width=\"300\" height=\"200\">\n<img src=\"images/line.png\" alt=\"\" width=\"300\" height=\"4\">",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি ছবিকে লিংকের ভেতরে রাখুন, যাতে ক্লিক করলে `products.html` খোলে। ছবির alt লিংকের উদ্দেশ্য বোঝাবে।",
        hint: "`a` ট্যাগের ভেতরে `img` রাখুন।",
        solution: "<a href=\"products.html\">\n  <img src=\"images/products.jpg\" alt=\"সব পণ্যের তালিকা দেখুন\" width=\"240\" height=\"160\">\n</a>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "ছবির বিকল্প বর্ণনা কোন অ্যাট্রিবিউটে লেখা হয়?",
        options: ["src", "title", "alt", "href"],
        answer: 2,
        explanation: "`alt` অ্যাট্রিবিউট ছবির বিকল্প টেক্সট দেয়, যা স্ক্রিন রিডার ও ছবি লোড না হলে দেখায়।"
      },
      {
        question: "শুধু সাজানোর জন্য একটি ছবির alt কেমন হওয়া উচিত?",
        options: ["\"decoration\"", "\"ছবি\"", "খালি (alt=\"\")", "\"image1\""],
        answer: 2,
        explanation: "সজ্জার ছবিতে খালি `alt` দিলে স্ক্রিন রিডার সেটি বাদ দেয়।"
      },
      {
        question: "`width` ও `height` দেওয়ার মূল সুবিধা কী?",
        options: ["ছবি রঙিন হয়", "লোড হওয়ার সময় লেআউট না নড়ে", "ছবি লিংক হয়", "ছবি ডাউনলোড হয়"],
        answer: 1,
        explanation: "আগে থেকে আকার জানা থাকলে ব্রাউজার জায়গা ঠিক রাখতে পারে, ফলে পেজ লাফায় না।"
      }
    ]
  },
  {
    id: "html-13-lists",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 4,
    title: "ordered ও unordered লিস্ট",
    objectives: [
      "`ul`, `ol` ও `li` ট্যাগ দিয়ে তালিকা তৈরি করতে পারবেন।",
      "`ol`-এর `start` ও `type` অ্যাট্রিবিউট ব্যবহার করতে পারবেন।",
      "নেস্টেড (ভেতরে ভেতরে) তালিকা তৈরি করতে পারবেন।"
    ],
    explanation: [
      "**Unordered list** (`ul`) হলো বুলেট পয়েন্টের তালিকা, যেখানে ক্রম গুরুত্বপূর্ণ নয়। **Ordered list** (`ol`) হলো ১, ২, ৩ সংখ্যার তালিকা, যেখানে ক্রম গুরুত্বপূর্ণ, যেমন ধাপে ধাপে নির্দেশনা। প্রতিটি আইটেম `li` (list item) ট্যাগে লেখা হয়।",
      "`ol`-এ `start=\"5\"` লিখলে তালিকা ৫ থেকে শুরু হয়। `type=\"a\"` দিলে a, b, c; `type=\"i\"` দিলে i, ii, iii দেখায়। `reversed` দিলে উল্টো ক্রমে গণনা হয়।",
      "তালিকার ভেতরে আরেকটি তালিকা রাখাকে **নেস্টেড লিস্ট** বলে। সেক্ষেত্রে নতুন `ul` বা `ol` একটি `li`-এর ভেতরে থাকে।"
    ],
    whyUseful: "মেনু, ধাপে ধাপে নির্দেশনা, পণ্যের বৈশিষ্ট্য, বিষয়সূচি সবকিছুই তালিকা দিয়ে তৈরি হয়। ব্রাউজার ও স্ক্রিন রিডার তালিকা চিনে সঠিক সংখ্যা ও বুলেট দেখায়।",
    syntax: {
      lang: "html",
      code: `<ul>
  <li>আইটেম</li>
</ul>

<ol>
  <li>প্রথম ধাপ</li>
</ol>`
    },
    example: {
      title: "তালিকার বিভিন্ন ধরন",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>তালিকা উদাহরণ</title>
</head>
<body>
  <h2>প্রিয় ফল (unordered)</h2>
  <ul>
    <li>আম</li>
    <li>কাঁঠাল</li>
    <li>লিচু</li>
  </ul>

  <h2>রেসিপির ধাপ (ordered)</h2>
  <ol>
    <li>পেঁয়াজ কাটুন।</li>
    <li>তেলে ভাজুন।</li>
    <li>মসলা দিন।</li>
  </ol>

  <h2>বিষয়সূচি (nested)</h2>
  <ol type="I">
    <li>HTML
      <ul>
        <li>ট্যাগ</li>
        <li>অ্যাট্রিবিউট</li>
      </ul>
    </li>
    <li>CSS</li>
  </ol>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<ul> ... <li>আম</li> ... </ul>", explain: "`ul` বুলেট তালিকা। প্রতিটি `li` একটি আইটেম।" },
      { code: "<ol> ... <li>পেঁয়াজ কাটুন।</li> ... </ol>", explain: "`ol` সংখ্যাযুক্ত তালিকা। ধাপের ক্রম ঠিক থাকে।" },
      { code: `<ol type="I">`, explain: "সংখ্যার বদলে রোমান অঙ্ক (I, II, III) ব্যবহার করে।" },
      { code: "<li>HTML <ul> ... </ul> </li>", explain: "`ul` `li`-এর ভেতরে আছে, তাই এটি নেস্টেড তালিকা। ভেতরের তালিকা `HTML`-এর অংশ।" }
    ],
    output: "প্রথম তালিকায় বুলেট, দ্বিতীয়টিতে ১, ২, ৩ এবং তৃতীয়টিতে I, II ও HTML-এর নিচে বুলেটে ট্যাগ ও অ্যাট্রিবিউট দেখাবে।",
    mistakes: [
      {
        wrong: "<ul>\n  <p>আম</p>\n</ul>",
        right: "<ul>\n  <li>আম</li>\n</ul>",
        explain: "`ul`-এর সরাসরি সন্তান হবে শুধু `li`। অন্য ট্যাগ দিলে তালিকা ভেঙে যায়।"
      },
      {
        wrong: "<li>আম</li>",
        right: "<ul>\n  <li>আম</li>\n</ul>",
        explain: "`li` একা থাকতে পারে না; তালিকার ভেতরেই থাকতে হবে।"
      },
      {
        wrong: "<ul>\n  <li>HTML</li>\n  <ul><li>ট্যাগ</li></ul>\n</ul>",
        right: "<ul>\n  <li>HTML\n    <ul><li>ট্যাগ</li></ul>\n  </li>\n</ul>",
        explain: "নেস্টেড তালিকা সবসময় একটি `li`-এর ভেতরে রাখতে হয়।"
      }
    ],
    bestPractices: [
      "ক্রম গুরুত্বপূর্ণ হলে `ol`, না হলে `ul` ব্যবহার করুন।",
      "তালিকার লেখা ছোট ও স্পষ্ট রাখুন।",
      "নেভিগেশন মেনুর জন্যও `ul` ব্যবহার করা হয়; এটি স্ক্রিন রিডারের জন্য ভালো।"
    ],
    useCase: "একটি অনলাইন কোর্সের পাঠ্যসূচি `ol` দিয়ে, আর পণ্যের বৈশিষ্ট্য `ul` দিয়ে দেখানো হয়।",
    practice: [
      {
        level: "easy",
        task: "তিনটি প্রিয় রঙের একটি `ul` তালিকা লিখুন।",
        hint: "প্রতিটি রঙ একটি `li`-তে।",
        solution: "<ul>\n  <li>লাল</li>\n  <li>নীল</li>\n  <li>সবুজ</li>\n</ul>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি `ol` তালিকা লিখুন যা ৩ থেকে শুরু হবে এবং তিনটি ধাপ থাকবে।",
        hint: "`start=\"3\"` ব্যবহার করুন।",
        solution: "<ol start=\"3\">\n  <li>প্রথম ধাপ</li>\n  <li>দ্বিতীয় ধাপ</li>\n  <li>তৃতীয় ধাপ</li>\n</ol>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি তালিকা লিখুন যেখানে \"ফ্রন্টএন্ড\" আইটেমের ভেতরে \"HTML\", \"CSS\", \"JavaScript\" সাব-আইটেম থাকবে।",
        hint: "নেস্টেড `ul` একটি `li`-এর ভেতরে রাখুন।",
        solution: "<ul>\n  <li>ফ্রন্টএন্ড\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n</ul>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "সংখ্যাযুক্ত (১, ২, ৩) তালিকা তৈরি করতে কোন ট্যাগ ব্যবহার হয়?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: 1,
        explanation: "`ol` (ordered list) সংখ্যাযুক্ত তালিকা তৈরি করে।"
      },
      {
        question: "তালিকার প্রতিটি আইটেম কোন ট্যাগে লেখা হয়?",
        options: ["<item>", "<li>", "<p>", "<list>"],
        answer: 1,
        explanation: "`li` (list item) ট্যাগ প্রতিটি আইটেম ধরে।"
      },
      {
        question: "`ol` তালিকাকে ৫ থেকে শুরু করতে কোন অ্যাট্রিবিউট লাগবে?",
        options: ["begin=\"5\"", "start=\"5\"", "from=\"5\"", "first=\"5\""],
        answer: 1,
        explanation: "`start` অ্যাট্রিবিউট দিয়ে `ol`-এর প্রথম সংখ্যা ঠিক করা যায়।"
      }
    ]
  },
  {
    id: "html-14-tables",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 5,
    title: "টেবিল ও অ্যাক্সেসিবল টেবিল",
    objectives: [
      "`table`, `tr`, `th`, `td` দিয়ে টেবিল তৈরি করতে পারবেন।",
      "`caption`, `thead`, `tbody`, `tfoot` এর ব্যবহার বুঝবেন।",
      "`th scope`, `colspan`, `rowspan` ব্যবহার করে অ্যাক্সেসিবল টেবিল বানাতে পারবেন।"
    ],
    explanation: [
      "টেবিল হলো সারি ও কলামে সাজানো তথ্য। `table` ট্যাগ পুরো টেবিল, `tr` একটি সারি (row), `th` একটি শিরোনাম ঘর (header cell) এবং `td` একটি সাধারণ ঘর (data cell)। টেবিলকে **লেআউটের জন্য ব্যবহার না করে শুধু তথ্যের জন্য ব্যবহার করুন।**",
      "`caption` টেবিলের শিরোনাম। `thead` শিরোনাম সারির দল, `tbody` মূল তথ্যের দল, `tfoot` সারাংশ বা মোট। এতে টেবিলের কাঠামো স্পষ্ট হয়।",
      "`th` এর `scope=\"col\"` বা `scope=\"row\"` দিলে স্ক্রিন রিডার বুঝতে পারে কোন শিরোনাম কোন তথ্যের জন্য। `colspan` একাধিক কলাম মেলায়, `rowspan` একাধিক সারি মেলায়।"
    ],
    whyUseful: "টেবিল দিয়ে মূল্য তালিকা, রেজাল্ট, সময়সূচি দেখানো যায়। সঠিক কাঠামো থাকলে দৃষ্টিহীন ব্যবহারকারীও প্রতিটি ঘরের মান কোন শিরোনামের অধীনে তা জানতে পারেন।",
    syntax: {
      lang: "html",
      code: `<table>
  <caption>শিরোনাম</caption>
  <thead>
    <tr><th scope="col">নাম</th></tr>
  </thead>
  <tbody>
    <tr><td>রহিম</td></tr>
  </tbody>
</table>`
    },
    example: {
      title: "পরীক্ষার ফলাফল টেবিল",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ফলাফল টেবিল</title>
</head>
<body>
  <table>
    <caption>শ্রেণি ৮ - ফলাফল</caption>
    <thead>
      <tr>
        <th scope="col">নাম</th>
        <th scope="col">বাংলা</th>
        <th scope="col">ইংরেজি</th>
        <th scope="col">মোট</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">রহিম</th>
        <td>৮২</td>
        <td>৭৫</td>
        <td>১৫৭</td>
      </tr>
      <tr>
        <th scope="row">করিম</th>
        <td>৯০</td>
        <td>৮৮</td>
        <td>১৭৮</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="3">সর্বোচ্চ মোট</th>
        <td>১৭৮</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<caption>শ্রেণি ৮ - ফলাফল</caption>", explain: "টেবিলের শিরোনাম। স্ক্রিন রিডার টেবিলের বিষয় আগে ঘোষণা করে।" },
      { code: `<th scope="col">বাংলা</th>`, explain: "এই শিরোনামটি একটি কলামের জন্য (`col`)।" },
      { code: `<th scope="row">রহিম</th>`, explain: "এই শিরোনামটি একটি সারির জন্য (`row`)।" },
      { code: `<th scope="row" colspan="3">`, explain: "একটি ঘর তিনটি কলাম জুড়ে থাকে।" },
      { code: "<tfoot> ... </tfoot>", explain: "সারাংশ বা মোট সারি, সাধারণত সবার নিচে।" }
    ],
    output: "একটি সীমানাযুক্ত টেবিলে শিরোনাম, নামের তালিকা, নম্বর ও মোট দেখা যাবে। (CSS না থাকায় সীমানা সহজ, তবে কাঠামো ঠিক থাকবে।)",
    mistakes: [
      {
        wrong: "<table>\n  <tr><td>নাম</td><td>বয়স</td></tr>\n</table>",
        right: "<table>\n  <tr><th scope=\"col\">নাম</th><th scope=\"col\">বয়স</th></tr>\n</table>",
        explain: "শিরোনাম ঘরে `th` ব্যবহার না করলে স্ক্রিন রিডার বুঝতে পারে না কোনটি শিরোনাম।"
      },
      {
        wrong: "<table><div>...</div></table>",
        right: "<table><tr><td>...</td></tr></table>",
        explain: "`table`-এর ভেতরে শুধু `caption`, `thead`, `tbody`, `tfoot`, `tr` থাকে।"
      },
      {
        wrong: "<table><tr><td>বাটন</td></tr></table> (লেআউটের জন্য)",
        right: "CSS Grid বা Flexbox দিয়ে লেআউট করুন",
        explain: "টেবিল লেআউটের জন্য ব্যবহার করলে মোবাইলে ভেঙে যায় এবং অ্যাক্সেসিবিলিটি কমে।"
      }
    ],
    bestPractices: [
      "শিরোনাম সারি/কলামে `th` ও `scope` দিন।",
      "বড় টেবিলে `caption` দিন, যাতে বিষয় বোঝা যায়।",
      "টেবিলকে তথ্যের জন্য ব্যবহার করুন, লেআউটের জন্য নয়।"
    ],
    useCase: "একটি ব্যাংকের সুদের হার, একটি ট্রেনের সময়সূচি, বা একটি ক্রিকেট দলের পরিসংখ্যান দেখাতে টেবিল ব্যবহার হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি টেবিল লিখুন যেখানে দুটি কলাম: \"ফল\" ও \"দাম\", এবং দুটি সারি।",
        hint: "প্রথম সারিতে `th`, পরের সারিতে `td`।",
        solution: "<table>\n  <tr><th scope=\"col\">ফল</th><th scope=\"col\">দাম</th></tr>\n  <tr><td>আম</td><td>১২০</td></tr>\n  <tr><td>কলা</td><td>৪০</td></tr>\n</table>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি টেবিলে `caption`, `thead` ও `tbody` ব্যবহার করুন।",
        hint: "`thead`-এ শিরোনাম সারি, `tbody`-তে তথ্য।",
        solution: "<table>\n  <caption>সাপ্তাহিক সময়সূচি</caption>\n  <thead><tr><th scope=\"col\">দিন</th><th scope=\"col\">বিষয়</th></tr></thead>\n  <tbody><tr><th scope=\"row\">শনিবার</th><td>HTML</td></tr></tbody>\n</table>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি টেবিলে একটি ঘর দুটি কলাম জুড়ে (`colspan`) থাকবে, যাতে শিরোনাম \"সাধারণ তথ্য\" লেখা থাকে।",
        hint: "প্রথম সারিতে `th colspan=\"2\"`।",
        solution: "<table>\n  <tr><th colspan=\"2\" scope=\"colgroup\">সাধারণ তথ্য</th></tr>\n  <tr><td>নাম</td><td>রহিম</td></tr>\n</table>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "টেবিলের একটি শিরোনাম ঘর (header cell) কোন ট্যাগে লেখা হয়?",
        options: ["<td>", "<th>", "<tr>", "<tb>"],
        answer: 1,
        explanation: "`th` শিরোনাম ঘরের জন্য, `td` সাধারণ তথ্যের জন্য।"
      },
      {
        question: "একটি ঘর দুই কলাম জুড়ে থাকতে কোন অ্যাট্রিবিউট লাগবে?",
        options: ["rowspan=\"2\"", "colspan=\"2\"", "span=\"2\"", "wide=\"2\""],
        answer: 1,
        explanation: "`colspan` কলাম জোড়া লাগায়, `rowspan` সারি জোড়া লাগায়।"
      },
      {
        question: "টেবিলের শিরোনাম বোঝাতে কোন ট্যাগ?",
        options: ["<title>", "<caption>", "<head>", "<label>"],
        answer: 1,
        explanation: "`caption` টেবিলের শিরোনাম বা বিবরণ দেয়।"
      }
    ]
  },
  {
    id: "html-15-block-inline",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 6,
    title: "Block ও Inline এলিমেন্ট",
    objectives: [
      "Block ও inline এলিমেন্টের পার্থক্য বলতে পারবেন।",
      "`div` ও `span` কখন ব্যবহার করতে হয় বুঝবেন।",
      "এলিমেন্টের ডিফল্ট আচরণ চিনে লেআউট বোঝার ভিত্তি তৈরি করবেন।"
    ],
    explanation: [
      "**Block-level** এলিমেন্ট (যেমন `p`, `div`, `h1`, `ul`) পুরো লাইন দখল করে এবং তার আগে-পরে লাইন ভাঙে। **Inline** এলিমেন্ট (যেমন `a`, `span`, `strong`, `img`) শুধু নিজের প্রয়োজনমতো জায়গা নেয় এবং লেখার মাঝখানে থাকে।",
      "`div` একটি সাধারণ block কনটেইনার। এর কোনো অর্থ নেই, শুধু কনটেন্ট গোষ্ঠীবদ্ধ করতে বা CSS লাগাতে ব্যবহার হয়। `span` একটি সাধারণ inline কনটেইনার, লেখার একটি অংশ আলাদা করতে ব্যবহৃত হয়।",
      "অর্থবহ ট্যাগ থাকলে `div` ও `span` কম ব্যবহার করুন। যেমন নেভিগেশনের জন্য `nav`, মূল কনটেন্টের জন্য `main`।"
    ],
    whyUseful: "block ও inline এর পার্থক্য না বুঝলে CSS দিয়ে লেআউট ঠিক করা কঠিন হয়। কেন একটি `span`-এর পাশে আরেকটি `span` লাইনে থাকে, কিন্তু `div` থাকে না, তা এখান থেকে বোঝা যায়।",
    syntax: {
      lang: "html",
      code: `<div>block এলিমেন্ট</div>
<span>inline এলিমেন্ট</span>`
    },
    example: {
      title: "block ও inline পাশাপাশি",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Block ও Inline</title>
</head>
<body>
  <div>এটি একটি div (block)। এর পরের এলিমেন্ট নতুন লাইনে যাবে।</div>
  <div>দ্বিতীয় div-ও নতুন লাইনে।</div>
  <p>
    <span>প্রথম span</span>
    <span>দ্বিতীয় span</span>
    <span>তৃতীয় span</span>
    একই লাইনে থাকে।
  </p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<div>এটি একটি div (block) ...</div>", explain: "Block এলিমেন্ট। এর চওড়া পুরো লাইন জুড়ে থাকে।" },
      { code: "<span>প্রথম span</span>", explain: "Inline এলিমেন্ট। নিজের লেখার আকারের সমান জায়গা নেয়।" },
      { code: "<p> ... </p>", explain: "এখানে তিনটি `span` একই লাইনে বসে, কারণ inline এলিমেন্ট পাশাপাশি থাকে।" }
    ],
    output: "প্রথম দুটি div আলাদা লাইনে থাকবে। তিনটি span একই লাইনে পাশাপাশি দেখাবে।",
    mistakes: [
      {
        wrong: "<span><p>লেখা</p></span>",
        right: "<div><p>লেখা</p></div>",
        explain: "inline এলিমেন্টের ভেতরে block এলিমেন্ট রাখা নিয়মের বাইরে। বাইরের অংশ `div` হওয়া উচিত।"
      },
      {
        wrong: "<div>সবকিছু</div> (প্রতিটি ছোট লেখার জন্য)",
        right: "<span>শব্দ</span> বা `strong`/`em`",
        explain: "লেখার ছোট অংশ আলাদা করতে `span` বা অর্থবহ inline ট্যাগ ব্যবহার করুন।"
      },
      {
        wrong: "<div><div><div>...</div></div></div>",
        right: "<main><section>...</section></main>",
        explain: "অনেক বেশি `div` কাঠামো বোঝা কঠিন করে। অর্থবহ ট্যাগ দিন।"
      }
    ],
    bestPractices: [
      "অর্থবহ ট্যাগ (main, section, article) আগে ভাবুন, তারপর `div`।",
      "লেখার ভেতরের ছোট অংশে `span` ব্যবহার করুন।",
      "block-inline আচরণ বদলাতে CSS-এর `display` প্রপার্টি ব্যবহার করুন (CSS মডিউলে বিস্তারিত)।"
    ],
    useCase: "একটি কার্ডে ছবি ও শিরোনাম block হিসেবে আলাদা লাইনে থাকে, কিন্তু শিরোনামের ভেতরের \"নতুন\" ব্যাজ inline হয়।",
    practice: [
      {
        level: "easy",
        task: "দুটি `span` এবং একটি `div` লিখুন; `span` দুটি একই লাইনে থাকবে, `div` আলাদা লাইনে।",
        hint: "`div` সাধারণত আলাদা লাইনে বসে।",
        solution: "<span>এক</span> <span>দুই</span>\n<div>তিন</div>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি বাক্যে একটি শব্দ `span` দিয়ে আলাদা করুন, যাতে পরে CSS দিয়ে রং বদলানো যায়।",
        hint: "`span` এর একটি `class` দিন।",
        solution: "<p>আজ আমি <span class=\"highlight\">HTML</span> শিখছি।</p>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি কার্ড লিখুন যার ভেতরে একটি শিরোনাম (block) এবং শিরোনামের শেষে একটি `span` ব্যাজ \"নতুন\" থাকবে।",
        hint: "`h2`-এর ভেতরে `span` রাখুন।",
        solution: "<div class=\"card\">\n  <h2>নতুন কোর্স <span class=\"badge\">নতুন</span></h2>\n  <p>বিস্তারিত দেখুন।</p>\n</div>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "নিচের কোনটি block-level এলিমেন্ট?",
        options: ["<span>", "<a>", "<div>", "<strong>"],
        answer: 2,
        explanation: "`div` block এলিমেন্ট, তাই এটি নিজের জন্য পুরো লাইন নেয়।"
      },
      {
        question: "লেখার ভেতরের একটি ছোট অংশ আলাদা করতে কোনটি উপযুক্ত?",
        options: ["<section>", "<span>", "<table>", "<ul>"],
        answer: 1,
        explanation: "`span` একটি inline কনটেইনার, লেখার ছোট অংশ আলাদা করতে ব্যবহৃত হয়।"
      },
      {
        question: "`span`-এর ভেতরে `p` রাখা কেন সমস্যা?",
        options: ["সমস্যা নেই", "block এলিমেন্ট inline-এর ভেতরে নিয়মের বাইরে", "ব্রাউজার চলে না", "শুধু ছবির জন্য সমস্যা"],
        answer: 1,
        explanation: "inline এলিমেন্টের ভেতরে block এলিমেন্ট রাখা HTML-এর কাঠামোগত নিয়মের বিপরীত।"
      }
    ]
  },
  {
    id: "html-16-semantic-elements",
    course: "html",
    module: 2,
    moduleTitle: "মডিউল ২: HTML অত্যাবশ্যক এলিমেন্ট",
    order: 7,
    title: "সেমান্টিক HTML এলিমেন্ট",
    objectives: [
      "`header`, `nav`, `main`, `article`, `section`, `aside`, `footer` এর অর্থ বুঝবেন।",
      "সেমান্টিক ট্যাগ কেন গুরুত্বপূর্ণ তা ব্যাখ্যা করতে পারবেন।",
      "একটি ব্লগ পেজের কাঠামো সেমান্টিক ট্যাগে সাজাতে পারবেন।"
    ],
    explanation: [
      "**সেমান্টিক (semantic)** ট্যাগ হলো যেগুলো নিজেই অর্থ বহন করে। `div` শুধু একটি বাক্স, কিন্তু `nav` বলে এটি নেভিগেশন লিংকের সমষ্টি, `footer` বলে এটি পেজের নিচের অংশ।",
      "`header` পেজ বা সেকশনের উপরের অংশ। `nav` প্রধান নেভিগেশন লিংক। `main` পেজের মূল কনটেন্ট, একটি পেজে একটি `main` থাকে। `article` স্বয়ংসম্পূর্ণ লেখা (যেমন ব্লগ পোস্ট)। `section` বিষয়ভিত্তিক বিভাগ। `aside` মূল বিষয়ের সাথে সংশ্লিষ্ট কিন্তু আলাদা তথ্য (যেমন পাশের বার)। `footer` নিচের অংশ।",
      "সেমান্টিক ট্যাগ CSS-এ কোনো আলাদা রূপ দেয় না, কিন্তু এগুলো ব্রাউজার, সার্চ ইঞ্জিন ও স্ক্রিন রিডারকে পেজের কাঠামো বুঝতে সাহায্য করে।"
    ],
    whyUseful: "স্ক্রিন রিডার ব্যবহারকারী `main` বা `nav` ল্যান্ডমার্ক দিয়ে সরাসরি সেই অংশে যেতে পারেন। সার্চ ইঞ্জিনও কনটেন্টের গুরুত্ব বুঝতে পারে।",
    syntax: {
      lang: "html",
      code: `<header>...</header>
<nav>...</nav>
<main>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>`
    },
    example: {
      title: "সেমান্টিক ব্লগ পেজ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমার ব্লগ</title>
</head>
<body>
  <header>
    <h1>আমার ব্লগ</h1>
    <nav>
      <ul>
        <li><a href="#">হোম</a></li>
        <li><a href="#">লেখা</a></li>
        <li><a href="#">যোগাযোগ</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>HTML শেখার শুরু</h2>
      <p>HTML হলো ওয়েবপেজের কাঠামো তৈরির ভাষা।</p>
    </article>
    <aside>
      <h3>জনপ্রিয় বিষয়</h3>
      <ul>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© ২০২৬ আমার ব্লগ</p>
  </footer>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<header> ... </header>", explain: "পেজের উপরের অংশ, যেখানে শিরোনাম ও নেভিগেশন থাকে।" },
      { code: "<nav> ... </nav>", explain: "প্রধান নেভিগেশন লিংকের গ্রুপ। স্ক্রিন রিডার এটি আলাদা ল্যান্ডমার্ক হিসেবে চিনে।" },
      { code: "<main> ... </main>", explain: "পেজের মূল কনটেন্ট। একটি পেজে একটি `main` থাকে।" },
      { code: "<article> ... </article>", explain: "একটি স্বয়ংসম্পূর্ণ লেখা, যা আলাদাভাবে পুনঃব্যবহার করা যায়।" },
      { code: "<aside> ... </aside>", explain: "মূল লেখার পাশের সংশ্লিষ্ট তথ্য, যেমন জনপ্রিয় বিষয়ের তালিকা।" },
      { code: "<footer> ... </footer>", explain: "পেজের নিচের অংশ, যেমন কপিরাইট ও যোগাযোগ।" }
    ],
    output: "উপরে শিরোনাম ও মেনু, মাঝখানে একটি লেখা এবং পাশে বা নিচে জনপ্রিয় বিষয় ও কপিরাইট দেখা যাবে। (CSS না থাকায় সব অংশ একের পর এক দেখাবে।)",
    mistakes: [
      {
        wrong: "<div class=\"header\">...</div>",
        right: "<header>...</header>",
        explain: "শুধু ক্লাস দিলে অর্থ যোগ হয় না; সঠিক সেমান্টিক ট্যাগ ব্যবহার করুন।"
      },
      {
        wrong: "<main> দুইটি",
        right: "<main> একটি",
        explain: "একটি পেজে একটি মূল `main` থাকে।"
      },
      {
        wrong: "<section> শুধু সাজানোর জন্য",
        right: "<div> সাজানোর জন্য, <section> বিষয়ভিত্তিক বিভাগে",
        explain: "`section` একটি বিষয়ের বিভাগ বোঝায়। শুধু সাজানোর জন্য হলে `div` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "প্রতিটি পেজে `header`, `main`, `footer` কাঠামো রাখুন।",
      "নেভিগেশনের জন্য `nav` ব্যবহার করুন।",
      "শিরোনাম (h1-h6) সেমান্টিক ট্যাগের ভেতরে ক্রম অনুযায়ী দিন।"
    ],
    useCase: "একটি সংবাদপত্রের ওয়েবসাইটে মূল খবর `article`, পাশের জনপ্রিয় খবর `aside`, এবং উপরের মেনু `nav` হিসেবে কাঠামো করা হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি `header` এর ভেতরে `h1` ও একটি `nav` লিখুন, যাতে তিনটি লিংক থাকে।",
        hint: "`nav` এর ভেতরে `ul` ও `li` ব্যবহার করুন।",
        solution: "<header>\n  <h1>আমার সাইট</h1>\n  <nav>\n    <ul>\n      <li><a href=\"#\">হোম</a></li>\n      <li><a href=\"#\">সেবা</a></li>\n      <li><a href=\"#\">যোগাযোগ</a></li>\n    </ul>\n  </nav>\n</header>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি `main` এর ভেতরে দুটি `section` লিখুন, প্রতিটিতে একটি শিরোনাম ও একটি অনুচ্ছেদ থাকবে।",
        hint: "প্রতিটি `section`-এ `h2` দিন।",
        solution: "<main>\n  <section>\n    <h2>আমাদের লক্ষ্য</h2>\n    <p>মানসম্মত শিক্ষা।</p>\n  </section>\n  <section>\n    <h2>আমাদের সেবা</h2>\n    <p>অনলাইন কোর্স।</p>\n  </section>\n</main>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি পূর্ণ পেজ কাঠামো লিখুন: `header`, `main` (ভেতরে `article` ও `aside`), এবং `footer`।",
        hint: "সব সেমান্টিক ট্যাগ একই `body`-র ভেতরে থাকবে।",
        solution: "<body>\n  <header><h1>আমার ব্লগ</h1></header>\n  <main>\n    <article><h2>প্রথম লেখা</h2><p>লেখার বিষয়বস্তু।</p></article>\n    <aside><h3>পাশের তথ্য</h3></aside>\n  </main>\n  <footer><p>যোগাযোগ: info@example.com</p></footer>\n</body>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "একটি পেজে সাধারণত কয়টি `main` ট্যাগ থাকে?",
        options: ["একটি", "দুটি", "তিনটি", "যতগুলো খুশি"],
        answer: 0,
        explanation: "পেজের মূল কনটেন্ট একটি `main` ট্যাগে থাকে।"
      },
      {
        question: "স্বয়ংসম্পূর্ণ লেখা, যেমন ব্লগ পোস্ট, কোন ট্যাগে রাখা উচিত?",
        options: ["<aside>", "<article>", "<footer>", "<nav>"],
        answer: 1,
        explanation: "`article` স্বয়ংসম্পূর্ণ ও আলাদাভাবে পুনঃব্যবহারযোগ্য কনটেন্টের জন্য।"
      },
      {
        question: "প্রধান নেভিগেশন লিংক কোন ট্যাগে রাখা হয়?",
        options: ["<nav>", "<figure>", "<details>", "<time>"],
        answer: 0,
        explanation: "`nav` নেভিগেশন লিংকের গ্রুপের জন্য।"
      }
    ]
  }
]);

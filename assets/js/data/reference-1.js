window.REFERENCE = window.REFERENCE || [];
window.REFERENCE.push(...[
  {
    id: "html-tags",
    title: "সাধারণ HTML ট্যাগ",
    description: "ওয়েব পেজ তৈরিতে সবচেয়ে বেশি ব্যবহৃত HTML ট্যাগ এবং তাদের কাজ। ট্যাগ সাধারণত শুরু ও শেষ দুটি অংশে লেখা হয়, যেমন একটি প্যারাগ্রাফের শুরুতে একটি ট্যাগ এবং শেষে আরেকটি ট্যাগ থাকে।",
    items: [
      { term: "<!DOCTYPE html>", explanation: "ডকুমেন্ট টাইপ ঘোষণা করে। এটি ফাইলের সবচেয়ে প্রথম লাইনে থাকে এবং ব্রাউজারকে HTML5 মোডে পেজ দেখাতে বলে।", example: `<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8">
    <title>আমার পেজ</title>
  </head>
  <body></body>
</html>`, lang: "html" },
      { term: "<html>", explanation: "পুরো ডকুমেন্টের মূল ট্যাগ। lang অ্যাট্রিবিউট দিয়ে পেজের ভাষা জানানো হয়, যা স্ক্রিন রিডার ও সার্চ ইঞ্জিনের জন্য কাজে লাগে।", example: `<html lang="bn">
  <body>পেজের কনটেন্ট</body>
</html>`, lang: "html" },
      { term: "<head>", explanation: "পেজের মেটা তথ্য, টাইটেল এবং CSS ফাইলের লিংক রাখার জায়গা। এখানের কনটেন্ট সরাসরি পেজে দেখা যায় না।", example: `<head>
  <meta charset="UTF-8">
  <title>হোম পেজ</title>
  <link rel="stylesheet" href="style.css">
</head>`, lang: "html" },
      { term: "<meta>", explanation: "পেজ সম্পর্কে অতিরিক্ত তথ্য দেয়, যেমন অক্ষর এনকোডিং বা মোবাইলের ভিউপোর্ট সেটিং। charset বাংলা লেখা ঠিকভাবে দেখাতে জরুরি।", example: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`, lang: "html" },
      { term: "<title>", explanation: "ব্রাউজারের ট্যাবে এবং সার্চ ফলাফলে দেখানো শিরোনাম। প্রতিটি পেজের আলাদা ও অর্থবহ টাইটেল রাখা উচিত।", example: `<title>আমাদের সম্পর্কে | আমার সাইট</title>`, lang: "html" },
      { term: "<body>", explanation: "পেজের সব দৃশ্যমান কনটেন্ট, যেমন লেখা, ছবি ও বাটন, এখানে লেখা হয়।", example: `<body>
  <h1>স্বাগতম</h1>
  <p>এটি আমার প্রথম পেজ।</p>
</body>`, lang: "html" },
      { term: "<h1>", explanation: "পেজের সবচেয়ে বড় ও প্রধান শিরোনাম। প্রতি পেজে সাধারণত একটি h1 ব্যবহার করা ভালো।", example: `<h1>HTML শেখার গাইড</h1>`, lang: "html" },
      { term: "<h2>", explanation: "বড় শিরোনামের অধীনে থাকা উপ-শিরোনাম বা বিভাগের শিরোনাম। h1 এর পরের স্তর হিসেবে ব্যবহার হয়।", example: `<h1>কোর্স</h1>
<h2>প্রথম অধ্যায়</h2>`, lang: "html" },
      { term: "<h3>", explanation: "h2 এর অধীনে থাকা ছোট শিরোনাম। শিরোনামগুলো ক্রমানুসারে ব্যবহার করলে পেজের গঠন বোঝা সহজ হয়।", example: `<h2>প্রথম অধ্যায়</h2>
<h3>HTML কী?</h3>`, lang: "html" },
      { term: "<p>", explanation: "সাধারণ লেখার অনুচ্ছেদ (প্যারাগ্রাফ) তৈরি করে। ব্রাউজার প্যারাগ্রাফের আগে ও পরে সামান্য ফাঁকা জায়গা রাখে।", example: `<p>HTML দিয়ে ওয়েব পেজের কাঠামো তৈরি হয়।</p>`, lang: "html" },
      { term: "<a>", explanation: "লিংক তৈরি করে। href অ্যাট্রিবিউটে গন্তব্যের ঠিকানা লেখা হয়। অন্য পেজ, ওয়েবসাইট বা ফাইলে যাওয়ার জন্য এটি ব্যবহার হয়।", example: `<a href="https://example.com">ওয়েবসাইট দেখুন</a>`, lang: "html" },
      { term: "<img>", explanation: "পেজে ছবি দেখায়। src এ ছবির পথ এবং alt এ ছবির বিকল্প বর্ণনা লেখা হয়। এটি একটি খালি (void) ট্যাগ, তাই শেষ ট্যাগ লাগে না।", example: `<img src="images/logo.png" alt="কোম্পানির লোগো" width="120">`, lang: "html" },
      { term: "<ul>", explanation: "বুলেট পয়েন্ট ব্যবহার করে তালিকা তৈরি করে। তালিকার ক্রম গুরুত্বপূর্ণ না হলে এটি ব্যবহার করা হয়।", example: `<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>`, lang: "html" },
      { term: "<ol>", explanation: "সংখ্যা বা ক্রমিক চিহ্ন দিয়ে তালিকা তৈরি করে। ধাপে ধাপে নির্দেশনা বা ক্রমযুক্ত তালিকার জন্য এটি উপযোগী।", example: `<ol>
  <li>ফাইল খুলুন</li>
  <li>কোড লিখুন</li>
</ol>`, lang: "html" },
      { term: "<li>", explanation: "ul বা ol এর একটি আইটেম বা সারি। এটি সবসময় একটি তালিকা ট্যাগের ভেতরে থাকে।", example: `<li>প্রথম আইটেম</li>`, lang: "html" },
      { term: "<div>", explanation: "একটি সাধারণ ব্লক কন্টেইনার, যা অন্য উপাদানগুলোকে একসাথে গ্রুপ করতে ব্যবহার হয়। এর নিজস্ব কোনো অর্থ নেই, তাই শুধু লেআউট বা স্টাইলের জন্য ব্যবহার করুন।", example: `<div class="card">
  <h3>কার্ডের শিরোনাম</h3>
  <p>কার্ডের লেখা</p>
</div>`, lang: "html" },
      { term: "<span>", explanation: "একটি ইনলাইন কন্টেইনার, যা লেখার একটি অংশ আলাদাভাবে স্টাইল করতে ব্যবহার হয়। এটি নতুন লাইন শুরু করে না।", example: `<p>এই <span class="highlight">শব্দটি</span> হাইলাইট করা হয়েছে।</p>`, lang: "html" },
      { term: "<header>", explanation: "পেজ বা কোনো বিভাগের শুরুর অংশ, যেমন লোগো, শিরোনাম বা উপরের মেনু। এটি semantic (অর্থবহ) ট্যাগ।", example: `<header>
  <h1>আমার ব্লগ</h1>
</header>`, lang: "html" },
      { term: "<nav>", explanation: "প্রধান নেভিগেশন লিংকের গ্রুপ রাখে, যেমন মেনু। স্ক্রিন রিডার ব্যবহারকারীদের জন্যও এটি গুরুত্বপূর্ণ।", example: `<nav>
  <a href="index.html">হোম</a>
  <a href="about.html">পরিচিতি</a>
</nav>`, lang: "html" },
      { term: "<main>", explanation: "পেজের মূল কনটেন্ট রাখে। একটি পেজে সাধারণত একটিই main থাকা উচিত।", example: `<main>
  <article>...মূল লেখা...</article>
</main>`, lang: "html" },
      { term: "<section>", explanation: "সম্পর্কিত কনটেন্টের একটি বিভাগ। সাধারণত এর ভেতরে একটি শিরোনাম থাকে।", example: `<section>
  <h2>আমাদের সেবা</h2>
  <p>আমরা ওয়েব ডিজাইন করি।</p>
</section>`, lang: "html" },
      { term: "<article>", explanation: "নিজে থেকেই সম্পূর্ণ এমন কনটেন্ট, যেমন ব্লগ পোস্ট, সংবাদ বা মন্তব্য। আলাদাভাবে পুনরায় ব্যবহার বা শেয়ার করা যায় এমন কনটেন্টের জন্য ভালো।", example: `<article>
  <h2>নতুন সংবাদ</h2>
  <p>আজ একটি নতুন সুবিধা চালু হলো।</p>
</article>`, lang: "html" },
      { term: "<aside>", explanation: "মূল কনটেন্টের সাথে সম্পর্কিত কিন্তু আলাদা তথ্য, যেমন সাইডবার বা পাশের নোট।", example: `<aside>
  <h2>সম্পর্কিত লিংক</h2>
  <a href="blog.html">ব্লগ</a>
</aside>`, lang: "html" },
      { term: "<footer>", explanation: "পেজ বা বিভাগের শেষ অংশ, যেমন কপিরাইট, যোগাযোগের তথ্য বা ছোট লিংক।", example: `<footer>
  <p>&copy; ২০২৬ আমার সাইট</p>
</footer>`, lang: "html" },
      { term: "<form>", explanation: "ব্যবহারকারীর কাছ থেকে তথ্য নেওয়ার ফর্ম তৈরি করে। action এ তথ্য কোথায় যাবে এবং method এ কোন পদ্ধতিতে (get বা post) যাবে তা লেখা হয়।", example: `<form action="/submit" method="post">
  <input type="text" name="name">
  <button type="submit">পাঠান</button>
</form>`, lang: "html" },
      { term: "<input>", explanation: "ফর্মের ইনপুট ফিল্ড তৈরি করে। type অ্যাট্রিবিউট ঠিক করে ফিল্ডটি কী ধরনের হবে, যেমন টেক্সট, ইমেইল বা চেকবক্স। এটিও একটি খালি ট্যাগ।", example: `<input type="email" name="email" placeholder="ইমেইল লিখুন">`, lang: "html" },
      { term: "<button>", explanation: "ক্লিক করার মতো বাটন তৈরি করে। ফর্মের ভেতরে type submit দিলে ফর্ম জমা হয়, button দিলে কোনো ডিফল্ট কাজ হয় না।", example: `<button type="button" onclick="alert('হ্যালো')">ক্লিক করুন</button>`, lang: "html" },
      { term: "<label>", explanation: "ইনপুটের নাম বা বর্ণনা দেয়। for অ্যাট্রিবিউটে ইনপুটের id লিখলে লেবেলে ক্লিক করেও ইনপুট ফোকাস পায়, যা ব্যবহারযোগ্যতা ও অ্যাক্সেসিবিলিটির জন্য জরুরি।", example: `<label for="name">আপনার নাম</label>
<input type="text" id="name">`, lang: "html" },
      { term: "<textarea>", explanation: "একাধিক লাইনের লেখা লেখার বড় ঘর তৈরি করে। এর ভেতরের লেখাই ঘরের ডিফল্ট মান হয়।", example: `<textarea name="message" rows="4" cols="30">আপনার বার্তা লিখুন</textarea>`, lang: "html" },
      { term: "<select>", explanation: "ড্রপডাউন তালিকা তৈরি করে। এর ভেতরে option ট্যাগ দিয়ে পছন্দের আইটেমগুলো লেখা হয়।", example: `<select name="city">
  <option value="dhaka">ঢাকা</option>
  <option value="sylhet">সিলেট</option>
</select>`, lang: "html" },
      { term: "<table>", explanation: "সারি ও কলামে সাজানো তথ্য দেখায়। ডেটার জন্য টেবিল ব্যবহার করুন, পেজের লেআউটের জন্য নয়।", example: `<table>
  <tr>
    <th>নাম</th>
    <th>নম্বর</th>
  </tr>
  <tr>
    <td>রহিম</td>
    <td>৮৫</td>
  </tr>
</table>`, lang: "html" },
      { term: "<strong>", explanation: "গুরুত্বপূর্ণ লেখাকে ঘন (বোল্ড) করে এবং অর্থের দিক থেকেও গুরুত্ব বোঝায়।", example: `<p><strong>সতর্কতা:</strong> ফাইলটি মুছে ফেলবেন না।</p>`, lang: "html" },
      { term: "<em>", explanation: "লেখায় জোর বা ঝোঁক দেওয়ার জন্য ব্যবহার হয়, সাধারণত তির্যক (ইটালিক) আকারে দেখায়।", example: `<p>এটি <em>খুবই</em> সহজ।</p>`, lang: "html" },
      { term: "<br>", explanation: "একটি লাইন ভেঙে নতুন লাইন শুরু করে। প্যারাগ্রাফের ভেতরে ছোট লাইন ভাঙার জন্য ব্যবহার হয়, পুরো লেআউটের জন্য নয়।", example: `<p>নাম: রহিম<br>শহর: ঢাকা</p>`, lang: "html" },
      { term: "<hr>", explanation: "বিষয়বস্তুর মাঝে একটি আনুভূমিক বিভাজক রেখা টানে।", example: `<p>প্রথম অংশ</p>
<hr>
<p>দ্বিতীয় অংশ</p>`, lang: "html" },
      { term: "<video>", explanation: "পেজে ভিডিও চালায়। controls অ্যাট্রিবিউট দিলে প্লে, পজ ও ভলিউমের নিয়ন্ত্রণ দেখায়।", example: `<video src="intro.mp4" controls width="480">
  আপনার ব্রাউজার ভিডিও সমর্থন করে না।
</video>`, lang: "html" },
      { term: "<link>", explanation: "বাইরের রিসোর্সের সাথে সম্পর্ক দেখায়, সবচেয়ে বেশি CSS ফাইল যুক্ত করতে ব্যবহার হয়। এটি head এর ভেতরে থাকে।", example: `<link rel="stylesheet" href="css/style.css">`, lang: "html" },
      { term: "<script>", explanation: "JavaScript কোড যুক্ত করে বা বাইরের JS ফাইল লোড করে। ফাইল লোড করলে src দেওয়া হয়, এবং স্ক্রিপ্ট শেষে body এর নিচে রাখলে পেজ দ্রুত দেখা যায়।", example: `<script src="js/main.js"></script>`, lang: "html" }
    ]
  },
  {
    id: "html-attributes",
    title: "HTML অ্যাট্রিবিউট",
    description: "অ্যাট্রিবিউট ট্যাগের অতিরিক্ত তথ্য দেয়। এগুলো সাধারণত শুরুর ট্যাগের ভেতরে name=\"value\" আকারে লেখা হয়।",
    items: [
      { term: "href", explanation: "লিংকের গন্তব্য ঠিকানা লেখে। anchor (a) এবং link ট্যাগে এটি ব্যবহার হয়।", example: `<a href="contact.html">যোগাযোগ</a>`, lang: "html" },
      { term: "src", explanation: "ছবি, ভিডিও, অডিও বা স্ক্রিপ্ট ফাইলের পথ দেয়। ফাইলের পথ আপেক্ষিক (relative) বা সম্পূর্ণ URL হতে পারে।", example: `<img src="images/photo.jpg" alt="ছবি">`, lang: "html" },
      { term: "alt", explanation: "ছবির বিকল্প বর্ণনা। ছবি লোড না হলে বা স্ক্রিন রিডারে এটি পড়া হয়। সজ্জার ছবি হলে alt=\"\" ফাঁকা রাখা যায়।", example: `<img src="cat.jpg" alt="সাদা বিড়াল ঘাসের উপর বসে আছে">`, lang: "html" },
      { term: "id", explanation: "একটি উপাদানকে পেজে অনন্য নাম দেয়। একই পেজে একটি id একবারই ব্যবহার করা উচিত। লিংকের টার্গেট বা JavaScript দিয়ে খুঁজতে এটি কাজে লাগে।", example: `<h1 id="main-title">শিরোনাম</h1>
<a href="#main-title">উপরে যান</a>`, lang: "html" },
      { term: "class", explanation: "একাধিক উপাদানকে একই গ্রুপ নাম দেয়। CSS ও JavaScript দিয়ে একই ধরনের উপাদানকে একসাথে স্টাইল করতে এটি ব্যবহার হয়। একটি উপাদানে একাধিক ক্লাস দেওয়া যায়।", example: `<p class="note important">গুরুত্বপূর্ণ নোট</p>`, lang: "html" },
      { term: "style", explanation: "উপাদানের উপর সরাসরি CSS লেখার সুযোগ দেয়। ছোট পরীক্ষার জন্য ভালো, তবে বড় প্রজেক্টে আলাদা CSS ফাইল ব্যবহার করাই উত্তম।", example: `<p style="color: blue; font-size: 18px;">নীল লেখা</p>`, lang: "html" },
      { term: "title", explanation: "মাউস নিয়ে গেলে ছোট টুলটিপ দেখায়। অতিরিক্ত তথ্য দিতে ব্যবহার করা যায়, তবে মূল তথ্য শুধু এর উপর নির্ভর করা উচিত নয়।", example: `<abbr title="হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ">HTML</abbr>`, lang: "html" },
      { term: "lang", explanation: "উপাদান বা পেজের ভাষা জানায়। html ট্যাগে lang=\"bn\" দিলে বাংলা ভাষা বোঝা যায়, যা স্ক্রিন রিডার ও ব্রাউজারের বানান পরীক্ষায় কাজে লাগে।", example: `<html lang="bn">`, lang: "html" },
      { term: "type", explanation: "উপাদানের ধরন ঠিক করে, যেমন ইনপুটের ধরন, বাটনের ধরন বা স্ক্রিপ্টের ধরন।", example: `<input type="password" name="pass">
<button type="submit">জমা দিন</button>`, lang: "html" },
      { term: "name", explanation: "ফর্মের ফিল্ড নাম। ফর্ম জমা দেওয়ার সময় এই নাম দিয়ে সার্ভার ডেটা চিনতে পারে। একই নামের রেডিও বোতাম একটি গ্রুপ তৈরি করে।", example: `<input type="text" name="username">`, lang: "html" },
      { term: "value", explanation: "ইনপুট, বাটন বা অপশনের মান। ইনপুটে ডিফল্ট লেখা দেখাতে বা ফর্ম জমা দেওয়ার মান হিসেবে এটি ব্যবহার হয়।", example: `<input type="text" name="city" value="ঢাকা">`, lang: "html" },
      { term: "placeholder", explanation: "ইনপুট ফাঁকা থাকলে ভেতরে হালকা রঙে একটি সংকেত লেখা দেখায়। এটি লেবেলের বিকল্প নয়, বরং উদাহরণ দেখানোর জন্য।", example: `<input type="text" placeholder="আপনার নাম লিখুন">`, lang: "html" },
      { term: "required", explanation: "ফর্ম জমা দেওয়ার আগে এই ফিল্ড পূরণ করা বাধ্যতামূলক করে। এটি একটি বুলিয়ান অ্যাট্রিবিউট, শুধু লিখে দিলেই হয়।", example: `<input type="email" name="email" required>`, lang: "html" },
      { term: "disabled", explanation: "উপাদানটিকে নিষ্ক্রিয় করে, ফলে ব্যবহারকারী সেটিতে কিছু লিখতে বা ক্লিক করতে পারেন না।", example: `<button type="submit" disabled>জমা দিন</button>`, lang: "html" },
      { term: "checked", explanation: "চেকবক্স বা রেডিও বোতাম পেজ লোড হওয়ার সময় ডিফল্টভাবে নির্বাচিত অবস্থায় থাকে।", example: `<input type="checkbox" name="news" checked> নিউজলেটার নিন`, lang: "html" },
      { term: "target", explanation: "লিংকটি কোথায় খুলবে তা ঠিক করে। _blank দিলে নতুন ট্যাবে খোলে; _self হলে একই ট্যাবে খোলে, যা ডিফল্ট।", example: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">নতুন ট্যাবে খুলুন</a>`, lang: "html" },
      { term: "rel", explanation: "লিংকের সাথে বর্তমান পেজের সম্পর্ক বোঝায়। target=\"_blank\" এর সাথে noopener ব্যবহার করলে নতুন পেজ আসল পেজকে নিয়ন্ত্রণ করতে পারে না।", example: `<a href="https://example.com" target="_blank" rel="noopener">লিংক</a>`, lang: "html" },
      { term: "action", explanation: "ফর্ম জমা দেওয়ার পর ডেটা কোন ঠিকানায় পাঠানো হবে তা ঠিক করে। এটি form ট্যাগের অ্যাট্রিবিউট।", example: `<form action="/contact" method="post">...</form>`, lang: "html" },
      { term: "method", explanation: "ফর্ম ডেটা কোন HTTP পদ্ধতিতে পাঠানো হবে তা বলে। get সাধারণত অনুসন্ধানের জন্য এবং post তথ্য জমা দেওয়ার জন্য ব্যবহার হয়।", example: `<form action="/search" method="get">...</form>`, lang: "html" },
      { term: "for", explanation: "লেবেল ট্যাগের for অ্যাট্রিবিউট কোন ইনপুটের সাথে যুক্ত হবে তা বলে। মান হবে সেই ইনপুটের id।", example: `<label for="email">ইমেইল</label>
<input type="email" id="email">`, lang: "html" },
      { term: "min, max, step", explanation: "সংখ্যা, তারিখ বা রেঞ্জ ইনপুটের সর্বনিম্ন ও সর্বোচ্চ মান এবং বৃদ্ধির ধাপ ঠিক করে।", example: `<input type="number" min="1" max="10" step="1" value="5">`, lang: "html" },
      { term: "pattern", explanation: "ইনপুটের লেখা কোন ফরম্যাট মানতে হবে তা নিয়ম (রেগুলার এক্সপ্রেশন) দিয়ে বলে। যেমন ৫ সংখ্যার পোস্টকোড। এটি ব্রাউজারে যাচাই করা হয়।", example: `<input type="text" pattern="[0-9]{5}" title="৫ সংখ্যার কোড দিন">`, lang: "html" },
      { term: "autocomplete", explanation: "ব্রাউজারকে জানায় কোন ফিল্ড স্বয়ংক্রিয়ভাবে পূরণ করা যাবে। ব্যবহারকারীর সুবিধার জন্য সঠিক মান দেওয়া ভালো।", example: `<input type="email" name="email" autocomplete="email">`, lang: "html" },
      { term: "colspan, rowspan", explanation: "টেবিলের একটি সেল কয়েকটি কলাম বা সারি জুড়ে থাকতে পারে। colspan কলাম এবং rowspan সারি জোড়া দেয়।", example: `<td colspan="2">দুই কলাম জুড়ে সেল</td>`, lang: "html" },
      { term: "tabindex", explanation: "কিবোর্ড দিয়ে Tab চাপলে কোন উপাদান কোন ক্রমে ফোকাস পাবে তা ঠিক করে। tabindex=\"0\" দিলে সাধারণত ক্লিকযোগ্য নয় এমন উপাদানও ফোকাসযোগ্য হয়। ধনাত্মক বড় সংখ্যা এড়িয়ে চলুন।", example: `<div tabindex="0">কিবোর্ড দিয়ে ফোকাস করা যাবে</div>`, lang: "html" },
      { term: "data-*", explanation: "নিজের তৈরি কাস্টম তথ্য রাখার অ্যাট্রিবিউট। নাম অবশ্যই data- দিয়ে শুরু হতে হবে। JavaScript-এ dataset দিয়ে এই মান পড়া যায়।", example: `<li data-id="7" data-price="250">পণ্য</li>
<script>
  const item = document.querySelector("li");
  console.log(item.dataset.id); // 7
</script>`, lang: "html" },
      { term: "aria-label", explanation: "স্ক্রিন রিডারের জন্য উপাদানের নাম দেয়, যখন দৃশ্যমান লেখা যথেষ্ট নয়, যেমন শুধু আইকনের বাটন। এটি ARIA অ্যাক্সেসিবিলিটি অ্যাট্রিবিউটের একটি।", example: `<button type="button" aria-label="মেনু খুলুন">☰</button>`, lang: "html" }
    ]
  },
  {
    id: "html-input-types",
    title: "HTML ফর্ম ইনপুট টাইপ",
    description: "input ট্যাগের type অ্যাট্রিবিউটের মানগুলো এবং প্রতিটির কাজ। ধরন ঠিক করে দিলে ব্রাউজার উপযুক্ত কিবোর্ড, যাচাই ও বাছাইয়ের উপকরণ দেখায়।",
    items: [
      { term: "text", explanation: "সাধারণ এক লাইনের লেখার ঘর। কোনো নির্দিষ্ট ধরন না থাকলে এটিই ব্যবহার হয়।", example: `<input type="text" name="name" placeholder="নাম">`, lang: "html" },
      { term: "password", explanation: "লেখা তারকা বা বিন্দু দিয়ে ঢেকে রাখে, যাতে পাশে কেউ দেখতে না পায়।", example: `<input type="password" name="pass">`, lang: "html" },
      { term: "email", explanation: "ইমেইল ঠিকানা লেখার ফিল্ড। ব্রাউজার ফরম্যাট (যেমন @ চিহ্ন) যাচাই করে এবং মোবাইলে ইমেইল কিবোর্ড দেখায়।", example: `<input type="email" name="email">`, lang: "html" },
      { term: "number", explanation: "শুধু সংখ্যা লেখার ফিল্ড। ওপর-নিচের তীর বোতাম থাকে এবং min, max, step দিয়ে সীমা ঠিক করা যায়।", example: `<input type="number" name="qty" min="1" max="10" value="1">`, lang: "html" },
      { term: "tel", explanation: "ফোন নম্বর লেখার ফিল্ড। মোবাইলে সংখ্যার কিবোর্ড দেখায়, তবে ফরম্যাট নিজে থেকে যাচাই করে না।", example: `<input type="tel" name="phone" placeholder="017XXXXXXXX">`, lang: "html" },
      { term: "url", explanation: "ওয়েবসাইটের ঠিকানা লেখার ফিল্ড। ব্রাউজার http বা https এর মতো প্রোটোকল আছে কিনা যাচাই করে।", example: `<input type="url" name="site" placeholder="https://example.com">`, lang: "html" },
      { term: "search", explanation: "অনুসন্ধানের ঘর। অনেক ব্রাউজারে এতে একটি বাতিল (X) বোতাম আসে।", example: `<input type="search" name="q" placeholder="খুঁজুন">`, lang: "html" },
      { term: "date", explanation: "তারিখ বাছাইয়ের ফিল্ড। ব্রাউজার ক্যালেন্ডার দেখায় এবং মান YYYY-MM-DD ফরম্যাটে থাকে।", example: `<input type="date" name="birthday">`, lang: "html" },
      { term: "datetime-local", explanation: "তারিখ ও সময় একসাথে বাছাই করার ফিল্ড। কোনো টাইমজোন থাকে না, তাই স্থানীয় সময় দেওয়া হয়।", example: `<input type="datetime-local" name="meeting">`, lang: "html" },
      { term: "month", explanation: "শুধু মাস ও বছর বাছাইয়ের ফিল্ড, যেমন কার্ডের মেয়াদ বা মাসিক রিপোর্ট।", example: `<input type="month" name="report-month">`, lang: "html" },
      { term: "week", explanation: "নির্দিষ্ট সপ্তাহ বাছাইয়ের ফিল্ড। মান বছর ও সপ্তাহ নম্বর দিয়ে লেখা হয়।", example: `<input type="week" name="week">`, lang: "html" },
      { term: "time", explanation: "শুধু সময় (ঘণ্টা ও মিনিট) বাছাইয়ের ফিল্ড। যেমন অ্যাপয়েন্টমেন্টের সময়।", example: `<input type="time" name="start-time">`, lang: "html" },
      { term: "color", explanation: "রঙ বাছাইয়ের ফিল্ড। মান সবসময় #rrggbb ফরম্যাটে থাকে।", example: `<input type="color" name="theme" value="#2563eb">`, lang: "html" },
      { term: "range", explanation: "স্লাইডার দিয়ে একটি সংখ্যার মান বাছাই করে। min, max ও step দিয়ে সীমা ঠিক করা হয়। যেমন ভলিউম নিয়ন্ত্রণ।", example: `<input type="range" name="volume" min="0" max="100" value="50">`, lang: "html" },
      { term: "file", explanation: "কম্পিউটার বা মোবাইল থেকে ফাইল বেছে নেওয়ার ফিল্ড। accept দিয়ে ফাইলের ধরন এবং multiple দিয়ে একাধিক ফাইল সীমিত করা যায়।", example: `<input type="file" name="photo" accept="image/*">`, lang: "html" },
      { term: "checkbox", explanation: "একটি বা একাধিক অপশন নির্বাচনের ছোট বাক্স। একাধিক চেকবক্স একসাথে নির্বাচন করা যায়।", example: `<label><input type="checkbox" name="agree"> শর্তাবলি মেনে নিলাম</label>`, lang: "html" },
      { term: "radio", explanation: "একটি গ্রুপ থেকে শুধু একটি অপশন বাছাইয়ের গোল বোতাম। একই গ্রুপের সব রেডিওর name একই হতে হবে।", example: `<input type="radio" name="gender" value="male"> পুরুষ
<input type="radio" name="gender" value="female"> মহিলা`, lang: "html" },
      { term: "hidden", explanation: "পর্দায় দেখা যায় না, কিন্তু ফর্মের সাথে মান পাঠানো যায়। যেমন ব্যবহারকারীর আইডি বা গোপন টোকেন।", example: `<input type="hidden" name="page" value="contact">`, lang: "html" },
      { term: "submit", explanation: "ক্লিক করলে ফর্ম জমা হয়। একটি ফর্মে সাধারণত একটি সাবমিট বাটন থাকে।", example: `<input type="submit" value="পাঠান">`, lang: "html" },
      { term: "reset", explanation: "ফর্মের সব ফিল্ড তার আগের ডিফল্ট মানে ফিরিয়ে দেয়। ভুল করে মুছে যাওয়ার ঝুঁকি থাকে, তাই সাবধানে ব্যবহার করুন।", example: `<input type="reset" value="মুছুন">`, lang: "html" },
      { term: "button", explanation: "কোনো ডিফল্ট কাজ ছাড়া সাধারণ বাটন। JavaScript দিয়ে কাজ যুক্ত করতে ব্যবহার হয়। button ট্যাগ দিয়েও একই কাজ করা যায়।", example: `<input type="button" value="ক্লিক করুন" onclick="alert('হ্যালো')">`, lang: "html" },
      { term: "image", explanation: "ছবিকে সাবমিট বাটনের মতো কাজ করায়। ক্লিক করলে ফর্ম জমা হয় এবং ক্লিকের স্থানের x ও y স্থানাঙ্ক পাঠানো হয়। alt লেখা প্রয়োজন।", example: `<input type="image" src="images/send.png" alt="পাঠান">`, lang: "html" }
    ]
  },
  {
    id: "css-selectors",
    title: "CSS সিলেক্টর",
    description: "CSS সিলেক্টর বলে দেয় কোন HTML উপাদানে স্টাইল প্রয়োগ হবে। ছোট সিলেক্টর সাধারণত পড়া ও রক্ষণাবেক্ষণ সহজ, তাই প্রয়োজন অনুযায়ী সহজ সিলেক্টর ব্যবহার করুন।",
    items: [
      { term: "*", explanation: "পেজের সব উপাদানকে নির্বাচন করে। সাধারণত বক্স সাইজিং রিসেটের জন্য ব্যবহার হয়।", example: `* {
  box-sizing: border-box;
}`, lang: "css" },
      { term: "element", explanation: "ট্যাগের নাম দিয়ে সব একই ধরনের উপাদান নির্বাচন করে। যেমন p দিয়ে সব প্যারাগ্রাফ।", example: `p {
  line-height: 1.6;
}`, lang: "css" },
      { term: ".class", explanation: "একটি ক্লাস নামের সব উপাদান নির্বাচন করে। ক্লাসের নামের আগে একটি বিন্দু (.) দিতে হয়।", example: `.card {
  padding: 16px;
}`, lang: "css" },
      { term: "#id", explanation: "একটি নির্দিষ্ট id এর উপাদান নির্বাচন করে। id সাধারণত একবারই ব্যবহার হয়, এবং আগে হ্যাশ (#) লাগে।", example: `#main-title {
  color: #1e3a8a;
}`, lang: "css" },
      { term: "selector, selector", explanation: "কমা দিয়ে একাধিক সিলেক্টরকে একসাথে একই স্টাইল দেওয়া যায়।", example: `h1, h2, h3 {
  font-family: "Hind Siliguri", sans-serif;
}`, lang: "css" },
      { term: "A B (descendant)", explanation: "A এর ভেতরে থাকা যেকোনো স্তরের B উপাদান নির্বাচন করে। স্পেস দিয়ে লেখা হয়।", example: `.card p {
  color: #333;
}`, lang: "css" },
      { term: "A > B (child)", explanation: "A এর সরাসরি সন্তান B উপাদান নির্বাচন করে। ভেতরের গভীর স্তর বাদ যায়।", example: `ul > li {
  list-style: square;
}`, lang: "css" },
      { term: "A + B (adjacent sibling)", explanation: "A এর ঠিক পরের ভাইবোন B উপাদান নির্বাচন করে। দুটি উপাদান একই প্যারেন্টের ভেতরে থাকতে হবে।", example: `h2 + p {
  margin-top: 0;
}`, lang: "css" },
      { term: "A ~ B (general sibling)", explanation: "A এর পরের সব ভাইবোন B উপাদান নির্বাচন করে, ঠিক পরেরটি হওয়া জরুরি নয়।", example: `h2 ~ p {
  color: #555;
}`, lang: "css" },
      { term: "[attribute]", explanation: "নির্দিষ্ট অ্যাট্রিবিউট থাকলে সেই উপাদান নির্বাচন করে। মান দরকার না হলে শুধু অ্যাট্রিবিউটের নাম লিখুন।", example: `a[target] {
  text-decoration: underline;
}`, lang: "css" },
      { term: "[attribute=\"value\"]", explanation: "অ্যাট্রিবিউটের মান হুবহু মিললে নির্বাচন করে। যেমন শুধু type=\"email\" এর ইনপুট।", example: `input[type="email"] {
  border: 1px solid #94a3b8;
}`, lang: "css" },
      { term: "[attr^=\"value\"], [attr$=\"value\"], [attr*=\"value\"]", explanation: "^ দিয়ে শুরু, $ দিয়ে শেষ এবং * দিয়ে যেকোনো জায়গায় থাকা মান মিলিয়ে নির্বাচন করে। যেমন PDF লিংক খোঁজা।", example: `a[href$=".pdf"]::after {
  content: " (PDF)";
}`, lang: "css" },
      { term: ":hover", explanation: "মাউস উপাদানের উপর থাকলে স্টাইল প্রয়োগ করে। মোবাইলে হোভার সবসময় কাজ করে না, তাই এটিকে একমাত্র নির্দেশক হিসেবে রাখা ঠিক নয়।", example: `a:hover {
  color: #2563eb;
}`, lang: "css" },
      { term: ":focus-visible", explanation: "কিবোর্ড দিয়ে ফোকাস করা হলে দৃশ্যমান আউটলাইন দেখায়। কিবোর্ড ব্যবহারকারীর জন্য অ্যাক্সেসিবিলিটিতে এটি গুরুত্বপূর্ণ।", example: `button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}`, lang: "css" },
      { term: ":first-child, :last-child", explanation: "প্যারেন্টের প্রথম বা শেষ সন্তান উপাদান নির্বাচন করে।", example: `li:first-child {
  font-weight: bold;
}`, lang: "css" },
      { term: ":nth-child(n)", explanation: "নির্দিষ্ট ক্রম অনুযায়ী সন্তান উপাদান নির্বাচন করে। odd (বিজোড়), even (জোড়) বা 2n, 3n+1 এর মতো সূত্র দেওয়া যায়।", example: `tr:nth-child(even) {
  background-color: #f1f5f9;
}`, lang: "css" },
      { term: ":not()", explanation: "নির্দিষ্ট সিলেক্টর বাদ দিয়ে বাকি উপাদান নির্বাচন করে। যেমন একটি ক্লাস ছাড়া সব লিংক।", example: `a:not(.button) {
  color: #1d4ed8;
}`, lang: "css" },
      { term: "::before, ::after", explanation: "উপাদানের আগে বা পরে একটি নতুন অংশ যুক্ত করে, যা content প্রপার্টি দিয়ে তৈরি হয়। HTML-এ আলাদা ট্যাগ লাগে না।", example: `.price::before {
  content: "৳ ";
}`, lang: "css" },
      { term: "::placeholder", explanation: "ইনপুটের placeholder লেখার স্টাইল ঠিক করে। রঙ হালকা রাখার সময় পর্যাপ্ত কন্ট্রাস্ট রাখতে হয়।", example: `input::placeholder {
  color: #64748b;
}`, lang: "css" },
      { term: ":is()", explanation: "একাধিক সিলেক্টরের তালিকা একটি সংক্ষিপ্ত রূপে লেখে। ভেতরের যেকোনো একটি মিললে উপাদান নির্বাচিত হয়।", example: `:is(h1, h2, h3) {
  line-height: 1.3;
}`, lang: "css" },
      { term: ":has()", explanation: "এমন প্যারেন্ট নির্বাচন করে যার ভেতরে নির্দিষ্ট সন্তান আছে। আধুনিক ব্রাউজারে সমর্থিত, তবে পুরোনো ব্রাউজারে কাজ নাও করতে পারে।", example: `figure:has(img) {
  border: 1px solid #e2e8f0;
}`, lang: "css" },
      { term: ":checked, :disabled, :required", explanation: "ফর্ম উপাদানের অবস্থা অনুযায়ী নির্বাচন করে। যেমন নির্বাচিত চেকবক্স বা নিষ্ক্রিয় বাটন।", example: `input:checked + label {
  font-weight: bold;
}`, lang: "css" },
      { term: ":root", explanation: "ডকুমেন্টের মূল উপাদান, অর্থাৎ html, নির্বাচন করে। CSS ভেরিয়েবল (কাস্টম প্রপার্টি) সাধারণত এখানে লেখা হয়।", example: `:root {
  --brand-color: #2563eb;
}
.button {
  background-color: var(--brand-color);
}`, lang: "css" }
    ]
  },
  {
    id: "css-properties",
    title: "CSS প্রপার্টি",
    description: "সাধারণ CSS প্রপার্টিগুলো বিষয় অনুযায়ী সাজানো হয়েছে: লেআউট ও পজিশন, বক্স মডেল, টেক্সট, ব্যাকগ্রাউন্ড ও ইফেক্ট, এবং ইন্টারেকশন। প্রতিটির উদাহরণ ছোট, যাতে সহজে বোঝা যায়।",
    items: [
      { term: "display", explanation: "উপাদান কীভাবে জায়গা নেবে তা ঠিক করে, যেমন block, inline, flex বা grid। লেআউটের প্রধান প্রপার্টি।", example: `.menu {
  display: flex;
}`, lang: "css" },
      { term: "position", explanation: "উপাদানের অবস্থান নির্ধারণ করে। static (ডিফল্ট), relative, absolute, fixed বা sticky হতে পারে।", example: `.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`, lang: "css" },
      { term: "z-index", explanation: "পজিশন করা উপাদানগুলো কোনটি কার উপরে থাকবে তা ঠিক করে। বড় সংখ্যা উপরে থাকে। এটি শুধু position এর সাথে কাজ করে।", example: `.modal {
  position: fixed;
  z-index: 100;
}`, lang: "css" },
      { term: "overflow", explanation: "উপাদানের ভেতরের কনটেন্ট সীমার বাইরে গেলে কী হবে তা ঠিক করে, যেমন hidden, scroll বা auto।", example: `.box {
  height: 120px;
  overflow: auto;
}`, lang: "css" },
      { term: "visibility", explanation: "উপাদান দেখাবে কি না তা ঠিক করে। hidden করলে উপাদান অদৃশ্য হয় কিন্তু জায়গা দখল করে থাকে।", example: `.hidden-note {
  visibility: hidden;
}`, lang: "css" },
      { term: "width, max-width", explanation: "উপাদানের প্রস্থ ঠিক করে। max-width দিলে প্রস্থ নির্দিষ্ট সীমার বেশি হয় না, যা রেসপন্সিভ লেআউটে কাজে লাগে।", example: `.container {
  width: 100%;
  max-width: 720px;
}`, lang: "css" },
      { term: "height, min-height", explanation: "উপাদানের উচ্চতা ঠিক করে। min-height দিলে কনটেন্ট কম হলেও উপাদান অন্তত সেই উচ্চতা পর্যন্ত থাকে।", example: `.hero {
  min-height: 60vh;
}`, lang: "css" },
      { term: "margin", explanation: "উপাদানের বাইরের ফাঁকা জায়গা। চারদিকে বা আলাদা দিকে (top, right, bottom, left) দেওয়া যায়। margin: 0 auto; দিয়ে ব্লককে মাঝখানে আনা যায়।", example: `.box {
  margin: 0 auto;
}`, lang: "css" },
      { term: "padding", explanation: "উপাদানের ভেতরের ফাঁকা জায়গা, যা কনটেন্ট ও বর্ডারের মাঝে থাকে। ব্যাকগ্রাউন্ড রঙ এই জায়গাতেও দেখা যায়।", example: `.card {
  padding: 16px 24px;
}`, lang: "css" },
      { term: "border", explanation: "উপাদানের চারপাশের সীমারেখা। প্রস্থ, ধরন (solid, dashed) এবং রঙ একসাথে লেখা হয়।", example: `.card {
  border: 1px solid #cbd5e1;
}`, lang: "css" },
      { term: "box-sizing", explanation: "width ও height কোন অংশ ধরবে তা ঠিক করে। border-box দিলে padding ও border এর ভেতরেই মাপ থাকে, যা লেআউট মেলাতে সহজ করে।", example: `*, *::before, *::after {
  box-sizing: border-box;
}`, lang: "css" },
      { term: "color", explanation: "লেখার রঙ ঠিক করে। নাম (red), হেক্স (#2563eb), rgb() বা hsl() ফরম্যাটে লেখা যায়।", example: `p {
  color: #1f2937;
}`, lang: "css" },
      { term: "font-family", explanation: "লেখার ফন্ট ঠিক করে। কয়েকটি ফন্ট কমা দিয়ে লিখলে প্রথমটি না থাকলে পরেরটি ব্যবহার হয়। শেষে সাধারণত sans-serif রাখা হয়।", example: `body {
  font-family: "Hind Siliguri", sans-serif;
}`, lang: "css" },
      { term: "font-size", explanation: "লেখার আকার ঠিক করে। px, rem বা em ব্যবহার করা যায়। rem ব্যবহার করলে ব্যবহারকারীর ফন্ট সেটিং মেনে চলে।", example: `h1 {
  font-size: 2rem;
}`, lang: "css" },
      { term: "font-weight", explanation: "লেখা কতটা মোটা হবে তা ঠিক করে। normal (400), bold (700) বা 100 থেকে 900 পর্যন্ত সংখ্যা দেওয়া যায়।", example: `strong {
  font-weight: 700;
}`, lang: "css" },
      { term: "line-height", explanation: "লাইনের মধ্যে ফাঁকা জায়গা। 1.5 বা 1.6 এর মতো সংখ্যা দিলে পড়তে সুবিধা হয়, বিশেষ করে বাংলা লেখায়।", example: `p {
  line-height: 1.7;
}`, lang: "css" },
      { term: "letter-spacing", explanation: "অক্ষরের মধ্যের ফাঁকা জায়গা। শিরোনামে হালকা ফাঁক দিলে অনেক সময় চেহারা ভালো হয়।", example: `h2 {
  letter-spacing: 0.05em;
}`, lang: "css" },
      { term: "text-align", explanation: "লেখা বাম, ডান, মাঝখানে বা দুই পাশে সমান (justify) সাজায়।", example: `.center {
  text-align: center;
}`, lang: "css" },
      { term: "text-decoration", explanation: "লেখার নিচে দাগ, উপরে দাগ বা মাঝখানে দাগ দেয়। লিংকের ডিফল্ট আন্ডারলাইন বদলাতেও ব্যবহার হয়।", example: `a {
  text-decoration: none;
}`, lang: "css" },
      { term: "text-transform", explanation: "লেখার কেস পরিবর্তন করে, যেমন uppercase বা capitalize। ইংরেজির জন্য কাজে লাগে; বাংলা লেখায় সাধারণত প্রভাব পড়ে না।", example: `.label {
  text-transform: uppercase;
}`, lang: "css" },
      { term: "background-color", explanation: "উপাদানের পেছনের রঙ ঠিক করে। ট্রান্সপারেন্ট রঙের জন্য transparent লেখা যায়।", example: `.alert {
  background-color: #fef3c7;
}`, lang: "css" },
      { term: "background-image", explanation: "উপাদানের পেছনে ছবি বা গ্রেডিয়েন্ট দেয়। url() দিয়ে ছবি এবং linear-gradient() দিয়ে গ্রেডিয়েন্ট লেখা যায়।", example: `.hero {
  background-image: linear-gradient(to right, #2563eb, #7c3aed);
}`, lang: "css" },
      { term: "border-radius", explanation: "কোণা গোল করে। একটি মান দিলে চারটি কোণা সমান হয়। 50% দিলে উপাদান বৃত্তাকার হতে পারে।", example: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}`, lang: "css" },
      { term: "box-shadow", explanation: "উপাদানের চারপাশে ছায়া যোগ করে। এটি উপাদানকে উপর থেকে আলাদা মনে করাতে সাহায্য করে।", example: `.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}`, lang: "css" },
      { term: "opacity", explanation: "উপাদানের স্বচ্ছতা। 0 মানে সম্পূর্ণ অদৃশ্য এবং 1 মানে পুরোপুরি দৃশ্যমান।", example: `.disabled-item {
  opacity: 0.5;
}`, lang: "css" },
      { term: "cursor", explanation: "মাউস উপরে থাকলে কার্সরের আকার বদলায়, যেমন pointer (হাতের আইকন)। ক্লিকযোগ্য উপাদানে বোঝাতে সাহায্য করে।", example: `.button {
  cursor: pointer;
}`, lang: "css" },
      { term: "transition", explanation: "একটি প্রপার্টির পরিবর্তন ধীরে ধীরে ঘটায়। কোন প্রপার্টি, কত সময় (duration) এবং কী গতিতে (timing) তা লেখা হয়।", example: `.button {
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #1d4ed8;
}`, lang: "css" },
      { term: "transform", explanation: "উপাদানকে সরানো, ঘোরানো, বড় বা ছোট করা যায়। এটি উপাদানের মূল জায়গা না বদলে দৃশ্যত বদলায়।", example: `.card:hover {
  transform: translateY(-4px) scale(1.02);
}`, lang: "css" },
      { term: "object-fit", explanation: "img বা video এর মাপের সাথে মিলিয়ে ছবি কীভাবে সাজবে তা ঠিক করে। cover দিলে জায়গা পূরণ হয় কিন্তু কিছু অংশ কাটা যায়।", example: `img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}`, lang: "css" },
      { term: "aspect-ratio", explanation: "প্রস্থ ও উচ্চতার অনুপাত নির্ধারণ করে, যেমন ছবি বা ভিডিও বক্সের জন্য 16 / 9।", example: `.video-box {
  width: 100%;
  aspect-ratio: 16 / 9;
}`, lang: "css" },
      { term: "gap", explanation: "ফ্লেক্স বা গ্রিড আইটেমগুলোর মধ্যের ফাঁকা জায়গা। margin এর বদলে ব্যবহার করলে প্রথম বা শেষ আইটেমে অতিরিক্ত ফাঁকা জায়গা থাকে না।", example: `.row {
  display: flex;
  gap: 12px;
}`, lang: "css" }
    ]
  },
  {
    id: "css-units",
    title: "CSS ইউনিট",
    description: "CSS-এ দৈর্ঘ্য ও আকার বোঝাতে ব্যবহৃত ইউনিট। কিছু ইউনিট স্থির (যেমন px), আবার কিছু ইউনিট স্ক্রিন বা লেখার আকারের উপর নির্ভর করে (যেমন rem, vw)।",
    items: [
      { term: "px", explanation: "পিক্সেল, একটি স্থির একক। স্ক্রিনের ঘনত্ব অনুযায়ী পিক্সেলের আসল আকার বদলাতে পারে। বর্ডার ও ছোট বিবরণের জন্য উপযোগী।", example: `.box {
  border: 1px solid #000;
}`, lang: "css" },
      { term: "em", explanation: "উপাদানের নিজের ফন্ট সাইজের সাপেক্ষে মান। প্যারেন্টের ফন্ট সাইজের উপর নির্ভর করে, তাই নেস্টেড উপাদানে মান বাড়তে পারে।", example: `.parent {
  font-size: 16px;
}
.child {
  font-size: 1.25em;
}`, lang: "css" },
      { term: "rem", explanation: "root (html) এর ফন্ট সাইজের সাপেক্ষে মান। সব জায়গায় একই হিসাবে কাজ করে, তাই পুরো সাইটের মাপ নিয়ন্ত্রণ সহজ।", example: `h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}`, lang: "css" },
      { term: "%", explanation: "প্যারেন্ট উপাদানের আকারের শতকরা হিসেব। যেমন width: 50% মানে প্যারেন্টের অর্ধেক প্রস্থ।", example: `.column {
  width: 50%;
}`, lang: "css" },
      { term: "vw", explanation: "ভিউপোর্টের প্রস্থের ১ শতাংশ। 100vw মানে পুরো স্ক্রিনের প্রস্থ। স্ক্রিন বড় হলে উপাদানও বড় হয়।", example: `.title {
  font-size: 5vw;
}`, lang: "css" },
      { term: "vh", explanation: "ভিউপোর্টের উচ্চতার ১ শতাংশ। 100vh দিয়ে পূর্ণ-উচ্চতার সেকশন বানানো যায়।", example: `.hero {
  height: 100vh;
}`, lang: "css" },
      { term: "dvh", explanation: "ডাইনামিক ভিউপোর্ট উচ্চতা। মোবাইল ব্রাউজারের ঠিকানা বার ওঠা-নামার সাথে মান বদলায়, তাই মোবাইলে 100vh এর চেয়ে ভালো কাজ করে।", example: `.screen {
  min-height: 100dvh;
}`, lang: "css" },
      { term: "vmin, vmax", explanation: "ভিউপোর্টের ছোট দিক (vmin) বা বড় দিকের (vmax) ১ শতাংশ। ছোট ও বড় দুই দিকের সাথেই মাপ মেলাতে কাজে লাগে।", example: `.logo {
  width: 40vmin;
}`, lang: "css" },
      { term: "ch", explanation: "'0' অক্ষরের প্রস্থের সমান একক। লেখার লাইনের দৈর্ঘ্য সীমিত করতে ব্যবহার হয়, যাতে পড়া সহজ হয়।", example: `p {
  max-width: 65ch;
}`, lang: "css" },
      { term: "pt", explanation: "পয়েন্ট, ১ ইঞ্চির ১/৭২ অংশ। প্রিন্ট স্টাইলশীটে সাধারণত ব্যবহার হয়।", example: `@media print {
  body {
    font-size: 12pt;
  }
}`, lang: "css" },
      { term: "fr", explanation: "গ্রিড ট্র্যাকের জন্য উপলব্ধ জায়গার ভাগ। যেমন 1fr 2fr মানে দ্বিতীয় কলাম প্রথমের দ্বিগুণ চওড়া।", example: `.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
}`, lang: "css" },
      { term: "calc()", explanation: "বিভিন্ন ইউনিট মিশিয়ে গাণিতিক হিসাব করে। যোগ ও বিয়োগের সময় যোগ-বিয়োগ চিহ্নের দু পাশে স্পেস দিতে হয়।", example: `.sidebar {
  width: calc(100% - 240px);
}`, lang: "css" }
    ]
  },
  {
    id: "flexbox",
    title: "Flexbox প্রপার্টি",
    description: "Flexbox এক মাত্রার (সারি বা কলাম) লেআউট সহজে সাজাতে ব্যবহৃত প্রপার্টি। প্যারেন্টে display: flex দিলে সন্তান উপাদানগুলো ফ্লেক্স আইটেম হয়ে যায়।",
    items: [
      { term: "display: flex", explanation: "উপাদানকে ফ্লেক্স কন্টেইনার বানায়। এর সরাসরি সন্তানগুলো ফ্লেক্স আইটেম হয় এবং ডিফল্টভাবে একটি সারিতে সাজে।", example: `.nav {
  display: flex;
}`, lang: "css" },
      { term: "flex-direction", explanation: "আইটেমগুলো কোন দিকে সাজবে তা ঠিক করে। row (বাম থেকে ডানে, ডিফল্ট), column (উপর থেকে নিচে), row-reverse ও column-reverse।", example: `.stack {
  display: flex;
  flex-direction: column;
}`, lang: "css" },
      { term: "flex-wrap", explanation: "জায়গা কম থাকলে আইটেম পরের লাইনে যাবে কি না তা ঠিক করে। ডিফল্ট nowrap, অর্থাৎ এক লাইনেই থাকে।", example: `.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`, lang: "css" },
      { term: "justify-content", explanation: "মেইন অক্ষে (সাধারণত অনুভূমিক) আইটেমগুলোর অবস্থান ঠিক করে, যেমন center, space-between বা flex-end।", example: `.header {
  display: flex;
  justify-content: space-between;
}`, lang: "css" },
      { term: "align-items", explanation: "ক্রস অক্ষে (সাধারণত উল্লম্ব) সব আইটেমকে কোথায় রাখবে তা ঠিক করে। center দিলে সব আইটেম উল্লম্বভাবে মাঝখানে থাকে।", example: `.row {
  display: flex;
  align-items: center;
}`, lang: "css" },
      { term: "align-content", explanation: "একাধিক লাইন (wrap হলে) থাকলে লাইনগুলোকে ক্রস অক্ষে কীভাবে সাজবে তা ঠিক করে। একটি মাত্র লাইনে এর প্রভাব কম থাকে।", example: `.grid-like {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 300px;
}`, lang: "css" },
      { term: "align-self", explanation: "একটি নির্দিষ্ট আইটেমের জন্য align-items এর নিয়ম বদলে দেয়।", example: `.item-special {
  align-self: flex-end;
}`, lang: "css" },
      { term: "flex-grow", explanation: "বাড়তি জায়গা থাকলে আইটেম কতটা বড় হবে তার অনুপাত। 0 মানে বড় হবে না, 1 বা বেশি মানে অংশ নেবে।", example: `.main {
  flex-grow: 1;
}`, lang: "css" },
      { term: "flex-shrink", explanation: "জায়গা কম থাকলে আইটেম কতটা ছোট হবে তার অনুপাত। 0 দিলে আইটেম ছোট হয় না।", example: `.logo {
  flex-shrink: 0;
}`, lang: "css" },
      { term: "flex-basis", explanation: "আইটেমের শুরুর আকার নির্ধারণ করে, পরে grow বা shrink এর হিসাব হয়। width এর কাছাকাছি কাজ করে।", example: `.sidebar {
  flex-basis: 240px;
}`, lang: "css" },
      { term: "flex", explanation: "flex-grow, flex-shrink ও flex-basis একসাথে লেখার শর্টহ্যান্ড। যেমন flex: 1 মানে grow 1, shrink 1, basis 0।", example: `.card {
  flex: 1 1 200px;
}`, lang: "css" },
      { term: "order", explanation: "আইটেমগুলোর দৃশ্যমান ক্রম বদলায়। ছোট সংখ্যা আগে আসে, ডিফল্ট 0। HTML এর ক্রম বদলায় না, শুধু দেখার ক্রম বদলায়।", example: `.first {
  order: -1;
}`, lang: "css" },
      { term: "gap", explanation: "ফ্লেক্স আইটেমগুলোর মধ্যে ফাঁকা জায়গা দেয়। প্রান্তে কোনো বাড়তি ফাঁকা জায়গা যোগ হয় না।", example: `.toolbar {
  display: flex;
  gap: 16px;
}`, lang: "css" },
      { term: "row-gap", explanation: "সারির মধ্যের উল্লম্ব ফাঁক। শুধু লাইন ওয়্যাপ হওয়া আইটেমের মধ্যে এটি কাজ করে।", example: `.cards {
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
}`, lang: "css" },
      { term: "column-gap", explanation: "আইটেমের মধ্যের অনুভূমিক ফাঁক। শুধু কলাম বা সারির মধ্যের জায়গার জন্য।", example: `.cards {
  display: flex;
  column-gap: 20px;
}`, lang: "css" }
    ]
  },
  {
    id: "grid",
    title: "Grid প্রপার্টি",
    description: "CSS Grid সারি ও কলাম একসাথে সাজানোর জন্য দুই মাত্রার লেআউট সিস্টেম। প্যারেন্টে display: grid দিয়ে কলাম ও সারির মাপ ঠিক করা হয়।",
    items: [
      { term: "display: grid", explanation: "উপাদানকে গ্রিড কন্টেইনার বানায়। এর সরাসরি সন্তানগুলো গ্রিড আইটেম হয়।", example: `.gallery {
  display: grid;
}`, lang: "css" },
      { term: "grid-template-columns", explanation: "গ্রিডের কলামের প্রস্থ ঠিক করে। fr, px, % বা auto যেকোনো ইউনিট দেওয়া যায়।", example: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}`, lang: "css" },
      { term: "grid-template-rows", explanation: "গ্রিডের সারির উচ্চতা ঠিক করে। সাধারণত সারির উচ্চতা কনটেন্ট অনুযায়ী হয়, তবে নির্দিষ্ট করাও যায়।", example: `.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}`, lang: "css" },
      { term: "grid-template-areas", explanation: "নাম দিয়ে গ্রিডের অংশ সাজায়। প্রতিটি নাম একটি সেলের জায়গা দেখায়, এবং একই নাম একাধিক সেল জুড়তে পারে।", example: `.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`, lang: "css" },
      { term: "grid-column", explanation: "আইটেম কোন কলাম লাইন থেকে কোন কলাম লাইন পর্যন্ত যাবে তা বলে। যেমন 1 / 3 মানে প্রথম থেকে তৃতীয় লাইন পর্যন্ত।", example: `.hero {
  grid-column: 1 / 3;
}`, lang: "css" },
      { term: "grid-row", explanation: "আইটেম কোন সারি লাইন থেকে কোন সারি লাইন পর্যন্ত যাবে তা বলে। span 2 দিলে দুই সারি জুড়ে যায়।", example: `.tall {
  grid-row: span 2;
}`, lang: "css" },
      { term: "grid-area", explanation: "কোনো আইটেমকে নামযুক্ত জায়গায় বসায়, বা grid-row ও grid-column একসাথে লেখার শর্টহ্যান্ড।", example: `.header {
  grid-area: header;
}`, lang: "css" },
      { term: "gap", explanation: "গ্রিড সেলগুলোর মধ্যে ফাঁকা জায়গা দেয়। row-gap ও column-gap এর শর্টহ্যান্ড।", example: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`, lang: "css" },
      { term: "grid-auto-rows", explanation: "যেসব সারি স্পষ্টভাবে লেখা হয়নি, তাদের উচ্চতা ঠিক করে। নতুন আইটেম যোগ হলে এই মাপে সারি তৈরি হয়।", example: `.cards {
  display: grid;
  grid-auto-rows: 200px;
}`, lang: "css" },
      { term: "grid-auto-flow", explanation: "আইটেম কীভাবে ফাঁকা জায়গায় বসবে তা ঠিক করে। ডিফল্ট row; dense দিলে ফাঁক পূরণের চেষ্টা করা হয়।", example: `.masonry {
  display: grid;
  grid-auto-flow: row dense;
}`, lang: "css" },
      { term: "justify-items", explanation: "প্রতিটি সেলের ভেতরে আইটেম অনুভূমিকভাবে কোথায় বসবে তা ঠিক করে, যেমন start, center বা stretch।", example: `.grid {
  display: grid;
  justify-items: center;
}`, lang: "css" },
      { term: "place-items", explanation: "align-items (উল্লম্ব) এবং justify-items (অনুভূমিক) একসাথে লেখার শর্টহ্যান্ড। place-items: center দিলে দুই দিকেই মাঝখানে বসে।", example: `.grid {
  display: grid;
  place-items: center;
}`, lang: "css" },
      { term: "fr", explanation: "গ্রিডের বাড়তি জায়গার অংশ। 1fr 1fr মানে দুটি কলাম সমান চওড়া হবে।", example: `.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`, lang: "css" },
      { term: "repeat()", explanation: "একই ধরনের কলাম বা সারির মাপ বারবার লেখার সংক্ষিপ্ত উপায়।", example: `.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}`, lang: "css" },
      { term: "minmax()", explanation: "একটি কলামের সর্বনিম্ন ও সর্বোচ্চ মাপ ঠিক করে। যেমন ন্যূনতম ২০০px এবং বাকি জায়গা নেওয়া পর্যন্ত বাড়তে পারে।", example: `.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}`, lang: "css" },
      { term: "auto-fit", explanation: "repeat() এর সাথে ব্যবহার হয়। জায়গা অনুযায়ী যতগুলো কলাম ধরে ততগুলো তৈরি হয়, এবং ফাঁকা কলাম সংকুচিত হয়ে যায়। minmax() এর সাথে মিলিয়ে রেসপন্সিভ লেআউট বানানো যায়।", example: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}`, lang: "css" },
      { term: "subgrid", explanation: "ভেতরের গ্রিড প্যারেন্ট গ্রিডের লাইন ব্যবহার করতে পারে। আধুনিক ব্রাউজারে সমর্থিত, তবে পুরোনো ব্রাউজারে সমর্থন সীমিত।", example: `.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.child {
  display: grid;
  grid-column: span 3;
  grid-template-columns: subgrid;
}`, lang: "css" }
    ]
  },
  {
    id: "media-queries",
    title: "মিডিয়া কোয়েরি উদাহরণ",
    description: "মিডিয়া কোয়েরি নির্দিষ্ট শর্ত (যেমন স্ক্রিনের প্রস্থ) মিললে CSS প্রয়োগ করে। রেসপন্সিভ ডিজাইনে এটি মূল হাতিয়ার।",
    items: [
      { term: "max-width", explanation: "স্ক্রিনের প্রস্থ নির্দিষ্ট মানের সমান বা ছোট হলে স্টাইল প্রয়োগ হয়। ছোট ডিভাইসের জন্য আলাদা স্টাইল লিখতে ব্যবহার হয়।", example: `@media (max-width: 600px) {
  .nav {
    flex-direction: column;
  }
}`, lang: "css" },
      { term: "min-width", explanation: "স্ক্রিনের প্রস্থ নির্দিষ্ট মানের সমান বা বড় হলে স্টাইল প্রয়োগ হয়। মোবাইল-ফার্স্ট পদ্ধতিতে এটি বেশি ব্যবহার হয়।", example: `@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}`, lang: "css" },
      { term: "min-width ও max-width একসাথে", explanation: "দুটি শর্ত and দিয়ে জোড়া লাগিয়ে একটি নির্দিষ্ট প্রস্থের পরিসর বোঝানো যায়।", example: `@media (min-width: 600px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`, lang: "css" },
      { term: "screen", explanation: "মিডিয়া টাইপ। কম্পিউটার বা মোবাইলের স্ক্রিনের জন্য স্টাইল দেয়। print দিয়ে প্রিন্টের জন্য আলাদা স্টাইল দেওয়া যায়।", example: `@media screen and (min-width: 600px) {
  body {
    font-size: 18px;
  }
}`, lang: "css" },
      { term: "orientation", explanation: "স্ক্রিন উল্লম্ব (portrait) না অনুভূমিক (landscape) তা অনুযায়ী স্টাইল প্রয়োগ করে।", example: `@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}`, lang: "css" },
      { term: "prefers-color-scheme", explanation: "ব্যবহারকারীর ডিভাইসে ডার্ক বা লাইট থিম পছন্দ থাকলে সেই অনুযায়ী রঙ বদলায়।", example: `@media (prefers-color-scheme: dark) {
  body {
    background-color: #0f172a;
    color: #e2e8f0;
  }
}`, lang: "css" },
      { term: "prefers-reduced-motion", explanation: "ব্যবহারকারী অ্যানিমেশন কমাতে চাইলে বড় আকারের নড়াচড়া বন্ধ বা কমানো হয়। এটি অ্যাক্সেসিবিলিটির জন্য গুরুত্বপূর্ণ।", example: `@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}`, lang: "css" },
      { term: "hover, pointer", explanation: "ডিভাইসে মাউস আছে কি না (hover) এবং স্পর্শ না মাউস কোনটি (pointer) তা যাচাই করে। স্পর্শ পর্দায় বড় বাটন দেওয়ার জন্য উপযোগী।", example: `@media (pointer: coarse) {
  .button {
    padding: 14px 20px;
  }
}`, lang: "css" },
      { term: "print", explanation: "পেজ প্রিন্ট করলে বা PDF হিসেবে সেভ করলে প্রযোজ্য স্টাইল দেয়। যেমন নেভিগেশন লুকানো।", example: `@media print {
  nav,
  .ads {
    display: none;
  }
}`, lang: "css" },
      { term: "range syntax (width >= 600px)", explanation: "আধুনিক সংক্ষিপ্ত রূপ, যেখানে বড় বা ছোট চিহ্ন দিয়ে প্রস্থ লেখা হয়। আধুনিক ব্রাউজারে সমর্থিত, তবে পুরোনো ব্রাউজারে সমর্থন কম থাকতে পারে।", example: `@media (width >= 600px) {
  .card {
    padding: 24px;
  }
}`, lang: "css" }
    ]
  },
  {
    id: "breakpoints",
    title: "রেসপন্সিভ ব্রেকপয়েন্ট",
    description: "ব্রেকপয়েন্ট হলো স্ক্রিনের প্রস্থের সেই মান যেখানে লেআউট বদলানো হয়। নিচের মানগুলো শুধু গাইডলাইন; প্রয়োজন অনুযায়ী কনটেন্ট দেখে নিজের ব্রেকপয়েন্ট ঠিক করা ভালো। Tailwind v4 এর ডিফল্ট মান rem এককে দেওয়া।",
    items: [
      { term: "মোবাইল-ফার্স্ট বেস", explanation: "প্রথমে ছোট স্ক্রিনের জন্য সাধারণ CSS লিখুন, তারপর min-width দিয়ে বড় স্ক্রিনের নিয়ম যোগ করুন। এটি গাইডলাইন, বাধ্যতামূলক নিয়ম নয়।", example: `.card {
  padding: 16px;
}
@media (min-width: 768px) {
  .card {
    padding: 32px;
  }
}`, lang: "css" },
      { term: "480px", explanation: "বড় ফোন বা ল্যান্ডস্কেপ ফোনের জন্য একটি সাধারণ গাইডলাইন মান। কনটেন্ট ছোট হলে এটি প্রয়োজন নাও হতে পারে।", example: `@media (min-width: 480px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }
}`, lang: "css" },
      { term: "640px (sm)", explanation: "ছোট ট্যাবলেট বা বড় ফোনের জন্য একটি গাইডলাইন মান। Tailwind v4 এ এটি 40rem।", example: `@media (min-width: 40rem) {
  .menu {
    flex-direction: row;
  }
}`, lang: "css" },
      { term: "768px (md)", explanation: "ট্যাবলেট ও তার উপরের স্ক্রিনের জন্য একটি সাধারণ গাইডলাইন মান। Tailwind v4 এ এটি 48rem।", example: `@media (min-width: 48rem) {
  .content {
    columns: 2;
  }
}`, lang: "css" },
      { term: "1024px (lg)", explanation: "ছোট ল্যাপটপ ও এর উপরের স্ক্রিনের জন্য একটি গাইডলাইন মান। Tailwind v4 এ এটি 64rem।", example: `@media (min-width: 64rem) {
  .layout {
    grid-template-columns: 240px 1fr;
  }
}`, lang: "css" },
      { term: "1280px (xl)", explanation: "বড় ডেস্কটপের জন্য একটি গাইডলাইন মান। Tailwind v4 এ এটি 80rem।", example: `@media (min-width: 80rem) {
  .container {
    max-width: 1200px;
  }
}`, lang: "css" },
      { term: "1536px (2xl)", explanation: "খুব বড় স্ক্রিনের জন্য একটি গাইডলাইন মান। Tailwind v4 এ এটি 96rem।", example: `@media (min-width: 96rem) {
  .container {
    max-width: 1400px;
  }
}`, lang: "css" },
      { term: "কনটেন্ট-ভিত্তিক ব্রেকপয়েন্ট", explanation: "যে প্রস্থে লেআউট ভেঙে যায় বা পড়তে অসুবিধা হয়, সেখানেই ব্রেকপয়েন্ট যোগ করা ভালো। নির্দিষ্ট ডিভাইসের মানের চেয়ে কনটেন্টের প্রয়োজনকে অগ্রাধিকার দিন।", example: `@media (min-width: 52rem) {
  .article {
    max-width: 65ch;
    margin: 0 auto;
  }
}`, lang: "css" }
    ]
  }
]);

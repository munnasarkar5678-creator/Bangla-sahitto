const works = [
  {title:"আমাদের প্রথম পাঠ", author:"বাংলা সাহিত্য ভাণ্ডার", category:"প্রবন্ধ", text:"এখানে আপনার নিজের বা অনুমতিপ্রাপ্ত সাহিত্যকর্মের লেখা যোগ করুন।"},
  {title:"একটি ছোট গল্প", author:"ডেমো লেখা", category:"গল্প", text:"এটি শুধু ওয়েবসাইটের নমুনা লেখা। পরে public-domain বা অনুমতিপ্রাপ্ত গল্প যোগ করুন।"},
  {title:"কবিতার আসর", author:"ডেমো লেখা", category:"কবিতা", text:"এখানে আপনার অনুমতিপ্রাপ্ত কবিতা বা public-domain কবিতা রাখা যাবে।"},
  {title:"পাঠাগার", author:"ডেমো লেখা", category:"উপন্যাস", text:"বইয়ের অধ্যায়গুলো আলাদা করে সাজিয়ে দেওয়ার জন্য এই কার্ড ব্যবহার করা যাবে।"}
];

const library = document.getElementById("library");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
let category = "সব";

function render() {
  const q = search.value.trim().toLowerCase();
  const filtered = works.filter(w =>
    (category === "সব" || w.category === category) &&
    (`${w.title} ${w.author} ${w.category}`.toLowerCase().includes(q))
  );

  library.innerHTML = filtered.map((w, i) => `
    <article class="card">
      <span class="badge">${w.category}</span>
      <h3>${w.title}</h3>
      <div>লেখক: ${w.author}</div>
      <p>${w.text}</p>
      <button onclick="alert('এখানে পরে সম্পূর্ণ লেখা/বইয়ের পেজ যুক্ত করা যাবে।')">পড়ুন</button>
    </article>
  `).join("");

  empty.hidden = filtered.length !== 0;
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    category = btn.dataset.category;
    render();
  });
});
search.addEventListener("input", render);
render();

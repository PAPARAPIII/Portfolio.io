// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

function setTheme(theme){
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  icon.textContent = theme === "light" ? "☾" : "☀";
}

const saved = localStorage.getItem("theme");
if (saved) setTheme(saved);
else setTheme("dark"); // default similar to your reference

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// Projects data 
const workItems = [
  { title: "01", type: "projects", desc: "Short description here.", tags: ["Web", "Student"] },
  { title: "01", type: "designs", desc: "Short description here.", tags: ["UI", "Figma"] },
  { title: "01", type: "Documentation", desc: "Short description here.", tags: ["Documentation"] },
];

const grid = document.getElementById("workGrid");

function render(filter){
  grid.innerHTML = "";
  const items = filter === "all" ? workItems : workItems.filter(x => x.type === filter);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="muted">${item.desc}</p>
      <div class="work__tags">
        ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

render("all");

// Filters
document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    render(btn.dataset.filter);
  });
});

// form interaction
document.getElementById("fakeSend").addEventListener("click", () => {
  alert("Message UI only. Add backend later if needed.");
});

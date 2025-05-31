const body = document.body;
const toggleButton = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
      
toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapse");
    body.classList.toggle('sidebar-collapse');
    toggleBtn.classList.toggle("rotated");
});

document.addEventListener('click', (e) => {
    const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
    if (!isClickInside) {
        sidebar.classList.remove('active');
    }
});
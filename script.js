const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.page-section');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
    sidebar.classList.contains('active') ? closeSidebar() : openSidebar();
});
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });
        sidebarLinks.forEach(l => l.classList.remove('current'));
        link.classList.add('current');

        closeSidebar();
    });
});

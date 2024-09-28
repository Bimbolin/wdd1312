document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('sidebar-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

// Update footer with current year and last modified date
// current year
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('currentyear');
yearElement.textContent = currentYear;

// last modified
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last modified: ${lastModified}`;
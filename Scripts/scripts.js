// script.js

const themeSwitch = document.getElementById('theme-switch');

// Vérifie si un thème est déjà stocké
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Écoute les clics sur le switch
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Sauvegarde le thème dans le localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

        function toggleDarkMode() {
            const body = document.body;
            const button = document.querySelector('.mode-toggle-btn');
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                button.textContent = 'Light Mode';
            } else {
                button.textContent = 'Dark Mode';
            }
        }

        // Tab functionality

        const tabs = document.querySelectorAll('.nav-tab');
        const postTitle = document.getElementById('post-title');
        const postContent = document.getElementById('post-content');
        const galleryImages = document.querySelectorAll('.gallery-image img');

        const tabContent = {
            posts: {
                title: 'Latest Post',
                content: 'Check out our new design course starting next month!',
                images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
            },
            about: {
                title: 'About Us',
                content: 'We are a leading design academy in Africa, offering top-notch courses.',
                images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
            },
            reviews: {
                title: 'Student Review',
                content: 'The courses at ndaka.academy have transformed my design career!',
                images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
            },
            photos: {
                title: 'Photo Gallery',
                content: 'Browse through our collection of student work and event photos.',
                images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
            },
            videos: {
                title: 'Featured Video',
                content: 'Watch our latest tutorial on advanced Photoshop techniques.',
                images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
            }
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const tabName = tab.getAttribute('data-tab');
                updateContent(tabName);
            });
        });

        function updateContent(tabName) {
            const content = tabContent[tabName];
            postTitle.textContent = content.title;
            postContent.textContent = content.content;
            galleryImages.forEach((img, index) => {
                img.src = content.images[index];
            });
  }

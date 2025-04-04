// // script.js

// const themeSwitch = document.getElementById('theme-switch');

// // Vérifie si un thème est déjà stocké
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');
// }

// // Écoute les clics sur le switch
// themeSwitch.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');

//     // Sauvegarde le thème dans le localStorage
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// });

//         // function toggleDarkMode() {
//         //     const body = document.body;
//         //     const button = document.querySelector('.mode-toggle-btn');
//         //     body.classList.toggle('dark-mode');
//         //     if (body.classList.contains('dark-mode')) {
//         //         button.textContent = 'Light Mode';
//         //     } else {
//         //         button.textContent = 'Dark Mode';
//         //     }
//         // }

//         // Tab functionality
//         function toggleDarkMode() {
//             const body = document.body;
//             const button = document.querySelector('.mode-toggle-btn');
//             body.classList.toggle('dark-mode');
//             if (body.classList.contains('dark-mode')) {
//                 button.textContent = 'Light Mode';
//             } else {
//                 button.textContent = 'Dark Mode';
//             }
//         }

//         // Tab functionality
//         const tabs = document.querySelectorAll('.nav-tab');
//         const postTitle = document.getElementById('post-title');
//         const postContent = document.getElementById('post-content');
//         const galleryImages = document.querySelectorAll('.gallery-image img');

//         const tabContent = {
//             posts: {
//                 title: 'Latest Post',
//                 content: 'Check out our new design course starting next month!',
//                 images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
//             },
//             about: {
//                 title: 'About Us',
//                 content: 'We are a leading design academy in Africa, offering top-notch courses.',
//                 images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
//             },
//             reviews: {
//                 title: 'Student Review',
//                 content: 'The courses at ndaka.academy have transformed my design career!',
//                 images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
//             },
//             photos: {
//                 title: 'Photo Gallery',
//                 content: 'Browse through our collection of student work and event photos.',
//                 images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
//             },
//             videos: {
//                 title: 'Featured Video',
//                 content: 'Watch our latest tutorial on advanced Photoshop techniques.',
//                 images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
//             }
//         };

//         function updateContent(tabName) {
//             const content = tabContent[tabName];
//             postTitle.textContent = content.title;
//             postContent.textContent = content.content;
//             galleryImages.forEach((img, index) => {
//                 img.src = content.images[index];
//             });
//         }

//         // tabs.forEach(tab => {
//         //     tab.addEventListener('click', () => {
//         //         tabs.forEach(t => t.classList.remove('active'));
//         //         tab.classList.add('active');
//         //         const tabName = tab.getAttribute('data-tab');
//         //         updateContent(tabName);
//         //     });
//         // });
//         tabs.forEach(tab => {
//             tab.addEventListener('click', function() {
//                 tabs.forEach(t => t.classList.remove('active'));
//                 this.classList.add('active');
//                 const tabName = this.getAttribute('data-tab');
//                 updateContent(tabName);
//             });
//         });

//         // Initialize with the first tab's content
//         updateContent('posts');


//         document.getElementById('anne').innerText=new Date().getFullYear();
//         // document.getElementById('anne').textContent = new Date().getFullYear();



// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const modeBtn = document.querySelector('.mode-toggle-btn');
    const icon = modeBtn.querySelector('i');
    const text = modeBtn.querySelector('span');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const modeBtn = document.querySelector('.mode-toggle-btn');
    const icon = modeBtn.querySelector('i');
    const text = modeBtn.querySelector('span');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    text.textContent = 'Light Mode';
}

// Tab Navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all content sections
        document.querySelectorAll('.post-card').forEach(card => {
            card.style.display = 'none';
        });
        
        // Show the selected content section
        const tabId = this.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).style.display = 'block';
        
        // Track tab click in Google Analytics
        if (typeof gtag === 'function') {
            gtag('event', 'tab_click', {
                'event_category': 'Navigation',
                'event_label': tabId
            });
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Update Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Image Gallery Hover Effect
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Add animation to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Responsive Navigation
const handleResponsiveNav = () => {
    const navTabs = document.querySelector('.nav-tabs');
    if (window.innerWidth <= 768) {
        navTabs.style.overflowX = 'auto';
    } else {
        navTabs.style.overflowX = 'visible';
    }
};

window.addEventListener('resize', handleResponsiveNav);
handleResponsiveNav();

// Contact Form Handling
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Thank you for your message! Your email client will open.');
});

// WhatsApp Contact
function initWhatsApp() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        // Add click event listener for analytics
        whatsappBtn.addEventListener('click', function() {
            // Track WhatsApp click in Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp Button'
                });
            }
        });
    }
}

// Initialize WhatsApp functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initWhatsApp();
});




    
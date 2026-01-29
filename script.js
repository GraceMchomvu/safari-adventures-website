// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// WhatsApp Widget functionality
const whatsappFloatBtn = document.getElementById('whatsappFloatBtn');
const whatsappNotification = document.getElementById('whatsappNotification');
const closeNotification = document.getElementById('closeNotification');
let notificationShown = false;
let notificationClosed = false;

// Navbar scroll effect and WhatsApp widget
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Navbar shadow effect
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // WhatsApp widget show/hide
    if (window.scrollY > 300) {
        whatsappFloatBtn.classList.add('show');
        
        // Show notification after 3 seconds (only once and if not closed)
        if (!notificationShown && !notificationClosed) {
            setTimeout(() => {
                whatsappNotification.classList.add('show');
                notificationShown = true;
                
                // Auto-hide notification after 10 seconds
                setTimeout(() => {
                    if (!notificationClosed && whatsappNotification.classList.contains('show')) {
                        whatsappNotification.classList.remove('show');
                    }
                }, 10000);
            }, 3000);
        }
    } else {
        whatsappFloatBtn.classList.remove('show');
        if (!notificationClosed) {
            whatsappNotification.classList.remove('show');
            notificationShown = false;
        }
    }
});

// Toggle notification on button click
whatsappFloatBtn.addEventListener('click', () => {
    if (whatsappNotification.classList.contains('show')) {
        whatsappNotification.classList.remove('show');
    } else {
        whatsappNotification.classList.add('show');
        notificationClosed = false;
    }
});

// Close notification (prevent opening WhatsApp)
closeNotification.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    whatsappNotification.classList.remove('show');
    notificationClosed = true;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling with Formspree
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Form will be submitted via Formspree
    // No need to prevent default, let it submit naturally
});

// Show notification function
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#48bb78' : '#f56565'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.destination-card, .service-card, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Destination card interactions
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking the Book Now button
        if (e.target.classList.contains('destination-btn')) {
            return;
        }
        
        // Add a subtle pulse effect
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 100);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize AOS (Animate on Scroll) alternative
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .contact-info, .contact-form');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(el);
    });
}

// Initialize on page load
initScrollAnimations();

// Add loading state
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Contact items click-to-copy functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const copyText = item.getAttribute('data-copy');
            const type = item.getAttribute('data-type');
            
            try {
                // Use the modern Clipboard API
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(copyText);
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = copyText;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    textArea.remove();
                }
                
                // Add success animation
                item.classList.add('copied');
                
                // Show success notification
                const typeLabel = type === 'email' ? 'Email' : 
                                type === 'phone' ? 'Phone number' : 
                                type === 'office' ? 'Address' : 'P.O. Box';
                
                showNotification(`${typeLabel} copied to clipboard!`, 'success');
                
                // Remove success class after animation
                setTimeout(() => {
                    item.classList.remove('copied');
                }, 600);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                showNotification('Failed to copy to clipboard', 'error');
            }
        });
        
        // Add keyboard accessibility
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
        
        // Make items focusable
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Copy ${item.getAttribute('data-type')} to clipboard`);
    });
});

// Enhanced notification system with better styling
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Create icon based on type
    const icon = type === 'success' ? '✓' : '✕';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 0;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInNotification 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        font-weight: 500;
        overflow: hidden;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    // Add notification content styles
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            gap: 0.75rem;
        }
        
        .notification-icon {
            font-size: 1.2rem;
            font-weight: bold;
            opacity: 0.9;
        }
        
        .notification-message {
            flex: 1;
            font-size: 0.95rem;
        }
        
        @keyframes slideInNotification {
            from {
                transform: translateX(400px) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes slideOutNotification {
            from {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            to {
                transform: translateX(400px) scale(0.8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}


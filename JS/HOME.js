// ================================================================
//  KICKVAULT — HOME.js
//  All JavaScript for the homepage
// ================================================================


// ---------------------------------------------------------------
// 1. SMOOTH SCROLL — nav links scroll to sections smoothly
// ---------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ---------------------------------------------------------------
// 2. SCROLL TO PRODUCTS — clicking a category card goes to products
// ---------------------------------------------------------------
function scrollToProducts() {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ---------------------------------------------------------------
// 3. CART COUNTER — increments badge on cart icon
// ---------------------------------------------------------------
let cartTotal = 0;

function addToCart(btn, productName) {
    cartTotal++;

    // Update counter badge
    const badge = document.getElementById('cartCount');
    badge.textContent = cartTotal;
    badge.classList.add('show');

    // Button turns green briefly
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';

    // Reset button after 1.5 seconds
    setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
    }, 1500);

    // Show toast notification
    showToast(productName + ' added to cart');
}


// ---------------------------------------------------------------
// 4. TOAST NOTIFICATION — popup message at the bottom
// ---------------------------------------------------------------
let toastTimer;

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    // Clear previous timer so rapid clicks don't hide it early
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}


// ---------------------------------------------------------------
// 5. NEWSLETTER VALIDATION — checks for a valid email format
// ---------------------------------------------------------------
function subscribeNewsletter() {
    const input = document.getElementById('newsletterInput');
    const msg   = document.getElementById('newsletterMsg');
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty check
    if (email === '') {
        msg.textContent = 'Please enter your email address.';
        msg.className   = 'newsletter-msg error';
        triggerShake(input);
        return;
    }

    // Format check
    if (!emailRegex.test(email)) {
        msg.textContent = 'Please enter a valid email (e.g. you@gmail.com)';
        msg.className   = 'newsletter-msg error';
        triggerShake(input);
        return;
    }

    // Success
    msg.textContent = '✓ You\'re subscribed! Check your inbox soon.';
    msg.className   = 'newsletter-msg success';
    input.value     = '';
}

// Shake helper — adds class then removes it after animation
function triggerShake(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 400);
}

// Allow pressing Enter to subscribe
document.getElementById('newsletterInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') subscribeNewsletter();
});


// ---------------------------------------------------------------
// 6. BACK TO TOP — button appears after scrolling 400px
// ---------------------------------------------------------------
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ---------------------------------------------------------------
// 7. SCROLL REVEAL — fades sections in as you scroll down
// ---------------------------------------------------------------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
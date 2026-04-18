const nav_bar = document.getElementById("dynamic-nav-bar");

nav_bar.innerHTML = `
    <!-- == logo on nav-bar == -->
    <div class="logo">
        <a href="HOME.html" title="home">ai<span>kicks</span></a>
    </div>
    <!-- == main pages section on nav-bar == -->
    <div class="main-pages">
        <a href="SPORTS.html">sports</a>
        <a href="TREKKING.html">trekking</a>
        <a href="SNEAKERS.html">sneakers</a>
        <a href="NEW_COLLECTION.html">new collection</a>
        <a href="HOME.html#about-us">about us</a>
    </div>
    <!-- == cart on nav-bar == -->
    <div class="cart">
        <a href="CART.html">cart</a>
    </div>
`

const news_letter_section = document.getElementById("dynamic-newsletter-section");

news_letter_section.innerHTML = `
    <div class="newsletter-heading">
                <h3>sign in to our newsletter</h3>
    </div>
    <div class="newsletter-input">
        <div class="enter-email-box">
            <input type="email" placeholder="Enter your email">
        </div>
        <div class="subscribe-button">
            <button>Subscribe</button>
        </div>
    </div>
`

const footer_section = document.getElementById("dynamic-footer-section");

footer_section.innerHTML = `
    <div class="footer-container">
            <div class="footer-logo">
                <a href="HOME.html">ai<span>kicks</span></a>
                <div class="social-links">
                    <a href="#">IG</a>
                    <a href="#">FB</a>
                    <a href="#">X</a>
                    <a href="#">YT</a>
                    <a hred="#">GH</a>
                </div>
            </div>

            <div class="products-footer">
                <p>Products</p>
                <a href="">sports</a>
                <a href="">trekking</a>
                <a href="">sneakers</a>
                <a href="">new collection</a>
            </div>

            <div class="customer-support-footer">
                <p>Customer Support</p>
                <a href="">contact us</a>
                <a href="">track package</a>
                <a href="">return</a>
            </div>
    </div>

    <div class="footer-copyright">
        <p>Copyright © 2026 AIKICKS. All rights reserved.</p>
    </div>
`
import { cart_products } from "./CART-P.js";

localStorage.setItem("cart", JSON.stringify(cart_products))

const cart_item = document.getElementById("dynamic-item-container");

cart_products.forEach(product => {
    const item_box = `
        <div class="item-box">
            <div class="item-img">
                <img src="${product.product_img}" alt="product-1">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <div class="item-name">
                        <h3>${product.product_brand} <span>${product.product_name}</span></h3>
                    </div>
                    <button class="remove-btn" title="Remove Item">
                        <div class="trash-icon"></div>
                    </button>
                </div>
                <div class="product-tag">
                    <p>${product.product_tag}</p>
                </div>
                <div class="item-price">
                    <p>Rs. ${product.product_price}</p>
                </div>
                <div class="item-controls">
                    <div class="item-size">
                        <p>Size | 8</p>
                    </div>
                    <div class="item-quantity">
                        <button class="qty-btn">-</button>
                        <span>1</span>
                        <button class="qty-btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    `
    cart_item.innerHTML += item_box;
});
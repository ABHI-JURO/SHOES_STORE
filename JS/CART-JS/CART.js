import { cart_products } from "./CART-P.js";

localStorage.setItem("cart", JSON.stringify(cart_products))

const json_cart = localStorage.getItem("cart")

const main_cart = JSON.parse(json_cart)

const cart_item = document.getElementById("dynamic-item-container");

main_cart.forEach(product => {
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

const billing_container = document.getElementById("dynamic-billing-container");

let sub_total = 0;
let total = 0;
const tax = 0.05;
const shipping_charges = 200;

main_cart.forEach(product => {
    if (product.product_price > 0) {
        sub_total += product.product_price;
    }
});

if (sub_total > 0) {
    total = sub_total + shipping_charges;
}

const total_after_tax = total + (total * tax);


const billing_box = `
    <div class="billing-box">
        <div class="billing-header">
            <h3>Order Summary</h3>
        </div>
        <div class="billing-item-cost">
            <p>sub-total :</p>
            <p class="money">Rs. ${sub_total}</p>
        </div>
        <div class="shipping-charges">
            <p> Shipping Charges : </p>
            <p class="money"> Rs. ${shipping_charges} </p>
        </div>
        <div class="sub-total">
            <p> Total : </p>
            <p class="money">Rs. ${total} </p>
        </div>
        <div class="total-after-tax">
            <p> Total (incl. taxes) : </p>
            <p class="money">Rs. ${Math.round(total_after_tax)} </p>
        </div>

        <div class="purchase-btn">
            <button>purchase</button>
        </div>
    </div>
`
billing_container.innerHTML += billing_box;
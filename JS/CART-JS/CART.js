import { cart_products } from "./CART-P.js";

if (!localStorage.getItem("cart") || localStorage.getItem("cart") === "[]") {
    localStorage.setItem("cart", JSON.stringify(cart_products));
}
let main_cart = JSON.parse(localStorage.getItem("cart"));

console.log(main_cart);

/* item section ---start---  */

let cart_item = document.getElementById("dynamic-item-container");

main_cart.forEach(product => {
    let item_box = `
        <div class="item-box">
            <div class="item-img">
                <img src="${product.product_img}" alt="product-1">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <div class="item-name">
                        <h3>${product.product_brand} <span>${product.product_name}</span></h3>
                    </div>
                    <button class="remove-btn" title="Remove Item" id="${product.product_id}">
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
                        <span>${product.product_quantity}</span>
                        <button class="qty-btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    `
    cart_item.innerHTML += item_box;
});

/* item section ---end---  */

document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        main_cart.splice(main_cart.findIndex(product => product.product_id === btn.id), 1);
        update_cart();
        window.location.reload();
    })
});

function update_cart() {
    localStorage.setItem("cart", JSON.stringify(main_cart));
    main_cart = JSON.parse(localStorage.getItem("cart"));
}

/* billing section ---start---  */

const billing_container = document.getElementById("dynamic-billing-container");

let sub_total = 0;
let total = 0;
const tax = 0.05;
let shipping_charges = 200;

main_cart.forEach(product => {
    if (product.product_price > 0) {
        sub_total += product.product_price * product.product_quantity;
    }
});

if (sub_total > 0) {
    total = sub_total + shipping_charges;
} else {
    shipping_charges = 0;
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

/* billing section ---end---  */
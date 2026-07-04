import { sports_products } from "./SPORTS-P.js";

const sports_product_list_container = document.getElementById("dynamic-sports-products-list");

sports_products.forEach(product => {

    const sports_product_HTML = `
            <div class="product">
                <div class="product-img">
                    ${product.product_isnew ? `<span class="new-tag">new</span>` : ''}
                    <img src="${product.product_img}" alt="${product.product_default_img_name}">
                </div>

                <div class="product-info">

                    <div class="product-name">
                        <p> ${product.product_brand} <span>${product.product_name}</span></p>
                    </div>

                    <div class="product-tag">
                        <p>${product.product_tag}</p>
                    </div>

                    <div class="product-price">
                        <p>Rs. ${product.product_price}</p>
                    </div>

                    <div class="add-to-cart-btn-div">
                        <button class="add-to-cart-btn" data-id="${product.product_id}">Add to Cart</button>
                    </div>

                </div>
            </div>
    `;

    sports_product_list_container.innerHTML += sports_product_HTML;
})

//cart

let jcart = localStorage.getItem("cart");
let cart;
if (jcart) {
    cart = JSON.parse(jcart);
} else {
    cart = [];
}
console.log(cart);
//js for the add to cart button

document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.getAttribute("data-id");
        let index = sports_products.findIndex(item => item.product_id === id);
        let item_found = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product_id === id) {
                cart[i].product_quantity += 1;
                item_found = true;
                break;
            }
        }

        if (!item_found) {
            cart.push(sports_products[index]);
        }
        update_cart();
        console.log(cart);
    });
});

function update_cart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    cart = JSON.parse(localStorage.getItem("cart"));
}
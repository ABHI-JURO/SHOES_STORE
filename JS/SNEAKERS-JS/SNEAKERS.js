import { sneaker_products } from "./SNEAKERS-P.js";

const sneaker_products_list_container = document.getElementById("dynamic-sneakers-products-list");

sneaker_products.forEach(product => {

    const sneaker_products_HTML = `
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
                        <button>Add to Cart</button>
                    </div>

                </div>
            </div>
    `;

    sneaker_products_list_container.innerHTML += sneaker_products_HTML;
})
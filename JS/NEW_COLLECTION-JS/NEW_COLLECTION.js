import { new_collection_products } from "./NEW_COLLECTION-P.js";

const new_collection_list_container = document.getElementById("dynamic-new-collection-products-list");

new_collection_products.forEach(product => {

    const new_collection_HTML = `
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

    new_collection_list_container.innerHTML += new_collection_HTML;
})

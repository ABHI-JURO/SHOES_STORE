import { products } from "../HOME-JS/HOME-P.js";

// js for the explore button in the hero header
const expolre_btn = document.querySelector("#explore-btn");

expolre_btn.addEventListener('click', () => {
    location.href = "../HTML/HOME.html#explore-btn-click";
});

//js for the explore selectable section just below the header

const explore_sec_select_sports = document.querySelector("#explore-sec-select-sports");//for sports

explore_sec_select_sports.addEventListener('click', () => {
    location.href = "../HTML/SPORTS.html";
});

const explore_sec_select_sneakers = document.querySelector("#explore-sec-select-sneakers");//for sneakers

explore_sec_select_sneakers.addEventListener('click', () => {
    location.href = "../HTML/SNEAKERS.html";
});

const explore_sec_select_trekking = document.querySelector("#explore-sec-select-trekking");//for trekking

explore_sec_select_trekking.addEventListener('click', () => {
    location.href = "../HTML/TREKKING.html";
});


//for the product section in the home page

const product_list_container = document.getElementById('dynamic-product-list');
const more_button_explore_div = document.querySelector('.more-button-explore-div');

products.forEach(product => {

    const home_product_html = `
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

    more_button_explore_div.insertAdjacentHTML('beforebegin', home_product_html);
    //product_list_container.innerHTML += home_product_html;
})

//js for the add to cart button

document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.getAttribute("data-id");
    })
});

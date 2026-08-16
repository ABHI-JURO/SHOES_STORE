import { orders } from "../orders-js/order-p.js"

export let order_list = JSON.parse(localStorage.getItem("orders"));

console.log(order_list);

let order_items = document.getElementById("dynamic-orders-container");

order_list.forEach(product => {
    let order_item =
        `
        <div class="orders-list">
                <div class="order-img">
                    <img src="${product.product_img}" alt="image">
                </div>
                <div class="order-discription">
                    <div class="product-title">
                        <h3>${product.product_brand}<span> ${product.product_name} </span></h3>
                    </div>
                    <div class="product-size">
                        <p> size | 8 </p>
                    </div>

                    <div class="product-type">
                        <p> ${product.product_tag} </p>
                    </div>

                    <div class="product-quantity">
                        <p> qty | ${product.product_quantity} </p>
                    </div>

                    <div class="track-order">
                        <button>TRACK-ORDER</button>
                    </div>

                    <div class="cancel-order">
                        <button class="cancel-btn" id="${product.product_id}">CANCEL-ORDER</button>
                    </div>

                </div>
            </div>
    `

    order_items.innerHTML += order_item;
});


document.querySelectorAll(".cancel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        let cancel = btn.id;
        order_list = order_list.filter(products => products.product_id !== cancel);
        localStorage.setItem("orders", JSON.stringify(order_list));
        window.location.reload();
    })
})
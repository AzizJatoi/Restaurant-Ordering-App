import { menuArray } from "./data.js";

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("plus-icon")) {
        const orderId = e.target.dataset.order;
        toggleOrderSummary(orderId);
    }
});

const container = document.getElementById("container");

function getMenuArray() {
    let restaurantMenu = '';
    menuArray.forEach(item => {
        restaurantMenu += `
            <div class="container">
                <div class="item-container">
                    <div class="item-details">
                        <p class="item-emoji">${item.emoji}</p>
                        <div class="item-detail">
                            <p class="item-name">${item.name}</p>
                            <p class="item-ingredients">${item.ingredients}</p>
                            <p class="item-price">$${item.price}</p>
                        </div>
                    </div>
                    <p class="plus-icon" data-order="${item.id}">+</p>
                </div>
            </div>
            <div class="order-summary hidden" id="order-summary-${item.id}">
                <p class="bold-heading-center">Your Order</p>
                <div class="order-container">
                    <div class="item-details">
                        <p class="item-name">${item.name}</p>
                        <div class="item-detail">
                            <p class="item-remove">remove</p>
                        </div>
                    </div>
                    <p class="item-price">$${item.price}</p>
                </div>
                <div class="order-container">
                    <div class="item-details">
                        <p class="item-name">Total Price:</p>
                    </div>
                    <p class="item-price">$${item.price}</p>
                </div>
            </div>`;
    });
    return restaurantMenu;
}

function render() {
    container.innerHTML += getMenuArray();
}
render();

function toggleOrderSummary(orderId) {
    const orderSummary = document.getElementById(`order-summary-${orderId}`);
    orderSummary.classList.toggle("hidden");
}

import { menuArray } from "./data.js";

container = document.getElementById("container")
function getMenuArray() {
    let restaurantMenu = ''
    menuArray.map(function(item) {
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
                <p class="plus-icon">+</p>
                </div>
        </div>
        `
    })
    return restaurantMenu
}

function render() {
    container.innerHTML += getMenuArray()
}
render()
import { menuArray } from './data.js'



function getMenu() {
    let menuItem = ''
    menuArray.forEach((item) => 
        menuItem += `
            <div class="item-container">
                <div class="item-details">
                    <p class="item-img">${item.emoji}</p>
                <div class="item-detail">
                    <p class="item-name">${item.name}</p>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                </div>
            <p class="plus-icon" data-order="${item.id}">+</p>
            </div>
        `
    )
    return menuItem
} 


function render() {
    document.getElementById("container").innerHTML += getMenu()
}
render()
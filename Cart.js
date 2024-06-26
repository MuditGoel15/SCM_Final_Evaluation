console.log("Cart js is Running");
let comCart = document.querySelector('.all-cart-boxes')
cartArr = JSON.parse(localStorage.getItem('items'))
console.log(cartArr);

if (cartArr.length == 0) {
    comCart.innerHTML += `<h1 class="empty-cart">Cart is Empty</h1>`
} else {
    cartArr.forEach(element => {
        comCart.innerHTML += `
            <div class="cart-box img-div">
                <img class="cartImg" src=${element['imgSrc']}>
                <div class="cart-box-right">
                    <h1 class="item-name">${element['name']}</h1>
                    <h1>${element['price']}</h1>
                    <button class="buynow cart-btn-rem">Remove Cart</button>
                </div>
            </div>`;

        let removeCart = document.querySelector('.cart-btn-rem')
        removeCart.addEventListener('click', () => {

            console.log({'name': element['name'], 'price': element['price'], 'imgSrc': element['imgSrc']});
            
            // Find the index using findIndex and a comparison function
            let index = cartArr.findIndex(item =>
                item.name === element['name'] &&
                item.price === element['price'] &&
                item.imgSrc === element['imgSrc']
            );
            
            console.log("index of Element is:", index);
            
            // Remove the item from the array
            if (index !== -1) {
                cartArr.splice(index, 1);
                console.log(cartArr);
                localStorage.setItem('items', JSON.stringify(cartArr));
                window.location.reload()
            }
        });
    });
}


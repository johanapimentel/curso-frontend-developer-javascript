const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuPpalMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCar = document.querySelector('.navbar-shopping-cart');
const myShoppingMenu = document.querySelector('.product-detail');

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
};

menuPpalMobile.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMyShoppingMenuClosed = myShoppingMenu.classList.contains('inactive');
    
    if ((isMyShoppingMenuClosed) && (isMobileMenuClosed)) {
        mobileMenu.classList.remove('inactive');

    } else if ((!isMyShoppingMenuClosed) && (isMobileMenuClosed)) {
        myShoppingMenu.classList.add('inactive');
        mobileMenu.classList.remove('inactive');

    } else {
        mobileMenu.classList.add('inactive');
    }
};

iconShoppingCar.addEventListener("click", toggleShoppingCarMenu);

function toggleShoppingCarMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMyShoppingMenuClosed = myShoppingMenu.classList.contains('inactive');
    
    if ((isMyShoppingMenuClosed) && (isMobileMenuClosed)) {
        myShoppingMenu.classList.remove('inactive');

    } else if ((isMyShoppingMenuClosed) && (!isMobileMenuClosed)) {
        mobileMenu.classList.add('inactive');
        myShoppingMenu.classList.remove('inactive');

    } else {
        myShoppingMenu.classList.add('inactive');
    }
};

const productList = [];
productList.push({
    name: 'Patacon de pollo',
    price: 8.99,
    image : "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Patacon de carne',
    price: 8.99,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Patacon de chorizo',
    price: 8.99,
    image : "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Hamburguesa de Bacon',
    price: 9.99,
    image : "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Hamburguesa de carne',
    price: 7.99,
    image : "https://images.pexels.com/photos/2067403/pexels-photo-2067403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Hamburguesa de Pollo',
    price: 7.99,
    image : "https://images.pexels.com/photos/9149806/pexels-photo-9149806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

const cardContainer = document.querySelector('.cards-container');

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");
    const divProductInfo = document.createElement('div');
    const pProductPrice = document.createElement('p');
    pProductPrice.innerText = '$' + product.price;
    const pProductName = document.createElement('p');
    pProductName.innerText = product.name;
    const figureProduct = document.createElement('figure');
    const iconProduct = document.createElement('img');
    iconProduct.setAttribute('src', "./icons/bt_add_to_cart.svg");

    figureProduct.appendChild(iconProduct);
    divProductInfo.appendChild(pProductPrice);
    divProductInfo.appendChild(pProductName);
    productInfo.appendChild(divProductInfo);
    productInfo.appendChild(figureProduct);
    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);
    cardContainer.appendChild(productCard);
}
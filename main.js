const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuPpalMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCar = document.querySelector('.navbar-shopping-cart');
const myShoppingMenu = document.querySelector('.product-detail');
const myProductDetailSpecific = document.querySelector('.product-detail-specific');

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
};

menuPpalMobile.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMyShoppingMenuClosed = myShoppingMenu.classList.contains('inactive');
    
    if ((isMyShoppingMenuClosed) && (isMobileMenuClosed)) {
        closeProductInfo();
        mobileMenu.classList.remove('inactive');
        
    } else if ((!isMyShoppingMenuClosed) && (isMobileMenuClosed)){
        myShoppingMenu.classList.add('inactive');
        closeProductInfo();
        mobileMenu.classList.remove('inactive');
    } else mobileMenu.classList.add('inactive');
};

iconShoppingCar.addEventListener("click", toggleShoppingCarMenu);

function toggleShoppingCarMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMyShoppingMenuClosed = myShoppingMenu.classList.contains('inactive');
    //const isProductDetailClosed = myProductDetailSpecific.classList.contains('inactive');
    
    if ((isMyShoppingMenuClosed) && (isMobileMenuClosed)) {
        closeProductInfo();
        myShoppingMenu.classList.remove('inactive');

    } else if ((isMyShoppingMenuClosed) && (!isMobileMenuClosed)) {
        mobileMenu.classList.add('inactive');
        closeProductInfo();
        myShoppingMenu.classList.remove('inactive');

    } else {
        myShoppingMenu.classList.add('inactive');
    }
};

const productList = [];
productList.push({
    name: 'Patacon de pollo',
    price: 8.99,
    image : "https://i.ytimg.com/vi/WT2M9Dn3DwI/maxresdefault.jpg"
});
productList.push({
    name: 'Patacon de carne',
    price: 8.99,
    image : "https://i.ytimg.com/vi/kWt22mQsQsg/maxresdefault.jpg"
});
productList.push({
    name: 'Patacon de chorizo',
    price: 8.99,
    image : "data:image/jpeg;base64,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"
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

const renderProduct = (arr) => {
    const cardContainer = document.querySelector('.cards-container');
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.addEventListener("click", openProductInfo);        
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
    };
} 

const openProductInfo = () => {
    const productDetailSpecific = document.querySelector('.product-detail-specific');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMyShoppingMenuClosed = myShoppingMenu.classList.contains('inactive');
    if (isMyShoppingMenuClosed && isMobileMenuClosed) {
        productDetailSpecific.classList.remove('inactive');
    } else {
        myShoppingMenu.classList.add("inactive");
        mobileMenu.classList.add('inactive');
        productDetailSpecific.classList.remove('inactive');
    }
}

renderProduct(productList);

const closeProductInfo = () => {
    const productDetailSpecific = document.querySelector('.product-detail-specific');
    productDetailSpecific.classList.add('inactive');
}

const productDetailClose = document.querySelector('.product-detail-close');
productDetailClose.addEventListener("click", closeProductInfo);
//variable

let allContainerCart = document.querySelector('.products');

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('btn btn-outline-secondary btn-sm')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
    //console.log(e.target);
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.card-title').textContent,
        price: product.querySelector('.card-subtitle').textContent,
        id: product.querySelector
    }
}
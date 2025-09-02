document.addEventListener('DOMContentLoaded',() => {
    const productGrid =document.querySelector('.product-grid');
    if(productGrid){
        fetch('/api/products').then((res) => res.json()).then((products) => {
            products.forEach((product) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                <img src="${product.imageURL}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>${product.price} บาท</strong></p>
                <button class="add-to-cart" data-id="${product.id}">เพิ่มลงตะกร้า</button>
                `
            productGrid.appendChild(productCard);
            });
        })
    }
})
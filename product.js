const createProduct = async () => {
  const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');
//async request catre server
const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
const data = await serverResponse.json();

// aici am creat titlu 
const productTitle = document.querySelector('.product-title')
productTitle.innerText = data.title;

const productImage = document.querySelector('.product-image');
productImage.innerText = data.image;

const productPrice = document.querySelector('.product-price');
productPrice.innerText = data.price;

const productRating = document.querySelector('.product-rating');
productRating.innerText = data.rating;

const productDescritption = document.querySelector('.product-descritption');
productDescritption.innerText = data.description;
console.log(data);
};

createProduct();
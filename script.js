const data = [
  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "./images/products/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  },
  {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "./images/products/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
          "rate": 4.1,
          "count": 259
      }
  },
  {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "./images/products/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 500
      }
  },
  {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "./images/products/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
          "rate": 2.1,
          "count": 430
      }
  },
  {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "./images/products/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 4.6,
          "count": 400
      }
  },
  {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "./images/products/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 70
      }
  },
  {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "./images/products/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 3,
          "count": 400
      }
  },
  {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "./images/products/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 1.9,
          "count": 100
      }
  },
  {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "image": "./images/products/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
          "rate": 3.3,
          "count": 203
      }
  },
  {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "image": "./images/products/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
          "rate": 2.9,
          "count": 470
      }
  },
  {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "./images/products/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
          "rate": 4.8,
          "count": 319
      }
  },
  {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "./images/products/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
          "rate": 4.8,
          "count": 400
      }
  },
  {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "electronics",
      "image": "./images/products/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
          "rate": 2.9,
          "count": 250
      }
  },
  {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "electronics",
      "image": "./images/products/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
          "rate": 2.2,
          "count": 140
      }
  },
  {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "image": "./images/products/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
          "rate": 2.6,
          "count": 235
      }
  },
  {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "image": "./images/products/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
          "rate": 2.9,
          "count": 340
      }
  },
  {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "image": "./images/products/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
          "rate": 3.8,
          "count": 679
      }
  },
  {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "./images/products/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 130
      }
  },
  {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "image": "./images/products/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
          "rate": 4.5,
          "count": 146
      }
  },
  {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "./images/products/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
          "rate": 3.6,
          "count": 145
      }
  }
];
//---------- Sidebar setup-----------
// let cartIcon= document.querySelector(".navbar img");
// let sideBar = document.querySelector(".sidebar");
// let overlay = document.querySelector(".overlay");
// let productCardsContainer = document.querySelector(".product-cards-container");

// let showSidebBar = () =>{
//     sideBar.style.transform = "translateX(0px)";
//     overlay.style.display = "block";
//     //optional pentru blocare scroll
//     // document.body.style.overflow ="hidden";
// };

// let hideSideBar= () => {
//   sideBar.style.transform = "translateX(448px)";
//   overlay.style.display = "none"; or opacity : 100% or display none 
//   //pentru deblocare
//   // document.body.style.overlow = "auto";
// };
// cartIcon.addEventListener("click", showSidebBar);
// overlay.addEventListener("click", hideSideBar );
//s-a muatta la indextwo .js

//-------------- Create product cards------------

let createProductCards = async () => {
  let serverResponse = await fetch("https://fakestoreapi.com/products");
  let data = await serverResponse.json();
  console.log(data);

  for(let i=0 ; i<data.length; i++) {
    let cardContainer = document.createElement(`div`);
    cardContainer.classList.add("prod-card-container");

    // TO RECHECK.
    //const cardImageLink = document.createElement('a')
    // cardImageLink.setAttribute('href',`/product?id=${data[i].id}`);
    // // aici am adaugat imagine ain link 
    // cardImageLink.appendChild(cardImage);
    // cardContainer.appendChild(cardImageLink);

    // console.log(cardImageLink);
// aico am creat imaginea
    const cardImageLink = document.createElement('a');
    cardImageLink.setAttribute('href',`/product.html?id=${data[i].id}`);


    let cardImage = document.createElement(`div`);
    cardImage.classList.add("product-card-image");
    cardImage.style.backgroundImage = `url('${data[i].image}')`;
//aici am creat imaginea in link
// apoi linkul in card
    cardImageLink.appendChild(cardImage);
    cardContainer.appendChild(cardImageLink)


    //div continut
    let cardContent = document.createElement(`div`);
    cardContent.classList.add("product-card-content")
    cardContent.innerHTML= `
    <h2 class="product-card-title"> ${data[i].title} </h2>
    <p class="product-card-description"> ${data[i].description} </p>
    <div class="price-container">
    <p class="product-card-price">$ ${data[i].price} </p>
    <p class="tooltip"> Tax included </p>
    </div>
    `;

    cardContainer.appendChild(cardContent);

    let cardButton = document.createElement("button");
    cardButton.classList.add("button-card");
    cardButton.innerText= 'ADD TO CARD';

    // cardButton.addEventListener("click", (addToCart) ; pentru ca add to cart trebuie sa contina un obiect  cu date .
    cardButton.addEventListener("click", () =>{
      addToCart({
        id: data[i].id,
        title: data[i].title,
        price: data[i].price,
        image: data[i].image,
        // sau  addToCart({ parsedData[i].id,parsedData[i].title, parsedData[i].price, });
      });
     });

    cardContainer.appendChild(cardButton);

    // am adaugat cardul in sectiunea carduri 
    productCardsContainer.appendChild(cardContainer);



    // let productTitle= document.createElement(`p`);
    // productTitle.innerText = parsedData[i].title;
    // document.body.appendChild(productTitle);

    // let productImage= document.createElement(`p`);
    // productImage.height = parsedData[i].title;
    // document.body.appendChild(productTitle);

  }
  
};

createProductCards();

//add

let cartProducts = [];
let cartProductsContainer =document.querySelector(".card-products-container");

let addToCart = (product) => {
  let productIndex = cartProducts.findIndex((element) => element.id === product.id);

   if (productIndex === -1){
    let productToBePushed = {
      ...product,
      quantity: 1
    };
   cartProducts.push(productToBePushed); 
   } else {
    cartProducts[productIndex].quantity = cartProducts[productIndex].quantity +1;
   }

 updateCartProducts();


};

let removeFromCart = (productId) => {
  let productIndex = cartProducts.findIndex((element) => element.id === productId);

  if(cartProducts[productIndex].quantity === 1) {
    // stergem produsul din cartProducts
    cartProducts.splice(productIndex, 1);
  } else {
  cartProducts[productIndex].quantity = cartProducts[productIndex].quantity- 1;
  }
  updateCartProducts() ;
};

let  updateCartProducts = () =>{
  cartProductsContainer.innerHTML = ``;

  for(let i = 0; i <cartProducts.length; i++) {
   let productSection= document.createElement(`div`);
   productSection.classList.add('cart-product-container');
 
   //aici am creat partea de stanga a produsului din sidebar
   let productData = document.createElement(`div`);


   productData.innerHTML = `
   <h3> ${cartProducts[i].title} </h3>
   <div class="cart-product-prices">
       <p> Price: $${cartProducts[i].price} </p>
       <p> Total: $${cartProducts[i].price * cartProducts[i].quantity} </p>
   </div>
   <div class="cart-product-buttons"> 
   <button class="cart-product-button minus-button"> - </button>
   <p> ${cartProducts[i].quantity}</p>
   <button class="cart-product-button plus-button"> + </button>
   </div>
 `;
 
   let plusButton = productData.querySelector('.plus-button');
   plusButton.addEventListener('click', () =>{
     let productData= {
       id: cartProducts[i].id,
       title: cartProducts[i].title,
       price: cartProducts[i].price,
       image: cartProducts[i].image,
     };

     addToCart(productData);
    });

    let minusButton = productData.querySelector('.minus-button');
    minusButton.addEventListener('click', () =>{
      
      removeFromCart(cartProducts[i].id);
     });
 
 
   productSection.appendChild(productData);
 
   //aici cream partea dreapta a produsului din sidebar
   let productImage = document.createElement (`div`);
   productImage.classList.add('cart-product-image');
   productImage.style.backgroundImage =`url(${cartProducts[i].image})`;
   productSection.appendChild(productImage);
 
   cartProductsContainer.appendChild(productSection);
  };
};

// Tema : add new task for  line-through.
const newTask = document.querySelector('.prod-card-container');

console.log("TASKS", newTask)

newTask.addEventListener('click', () => {
    console.log("CLICK")
    newTask.style.textDecorationLine = ('line-through');

});

const addTaskFunction = newTask.addEventListener('click', () => {

    newTask.style.textDecorationLine = ('line-through');

  });

  tasksContainer.appendChild(newTask);
console.log("TASKS", newTask)

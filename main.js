const  cardContainer = document.querySelector('.card-container')

class ProductCard{
  constructor( category ,img,title,ratin,t1,t2,price){
    this.category= category;
    this.img =img;
    this.titulo = title;
    this.rankin = ratin;
    this.t1 = t1;
    this.t2 = t2;
    this.price = price;
  }
}

const totalProduct = [];

for (let i = 0 ; i <10; i++){


totalProduct.push( new ProductCard( "Cabañas","https://a0.muscache.com/im/pictures/cc2be89b-da4f-4ada-90e7-84e092d11a44.jpg?im_w=720", "Highland Haus: acogedor AFrame de los años 70", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://a0.muscache.com/im/pictures/0afff651-cafd-4d94-b694-808dfaf1f03b.jpg?im_w=720", "Highland Haus: acogedor AFrame de los años 70", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://a0.muscache.com/im/pictures/miso/Hosting-46022206/original/e2e2f38d-3b5b-4f0a-8a7d-54ccef7de80f.jpeg?im_w=720", "Highland Haus: acogedor AFrame de los años 70", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://a0.muscache.com/im/pictures/miso/Hosting-865378711185368365/original/07565668-e69f-449e-9aea-4f2018861b96.jpeg?im_w=720", "Highland Haus: acogedor AFrame de los años 70", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
}

const cardTemplate =(item) => ` <section class="card-container-product">
<section class="card-contianer--img-container">
  <div class="like-container">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.55" d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" fill="#000000"></path> <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </div>
  <div class="pasarela-container">  
    <div class="punto activo"></div>
    <div class="punto"></div>
    <div class="punto"></div>
    <div class="punto"></div>
    <div class="punto"></div>
  </div>
  <section class="control-container">
 
    <div class="mas-category"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F"></path> </g></svg></div>
    <div class="mas-category"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F"></path> </g></svg></div>

  </section>
  <img src="${item.img}" alt="">
</div>
</section>
<section class="card-contianer--dato-container">
<div class="card-container--title">
  <p class="title">${item.titulo}</p>
    <div class="rankin">
      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path> </g></svg>
      <p>${item.rankin}</p></div>
</div>
<p>${item.t1}</p>
  <p>${item.t2}</p>
  <p class="price"><strong>${item.price}</strong> total</p>
</section>
</section>`



  totalProduct.map(product =>{
    const newProduct = document.createElement("div")

    newProduct.innerHTML = cardTemplate(product);
    
    cardContainer.appendChild(newProduct)
  })

const bigImage = document.querySelector('.big');
const smallImage = document.querySelectorAll('.imgs');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close');
const overlayImg = document.querySelector('.overlay-img');
const small = document.querySelectorAll('.small');
const bigImageContainer = document.querySelector('.bigImage');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const desc = document.querySelector('.desc');
const inc = document.querySelector('.inc');
const quantity = document.querySelector('.quantity');
const addToCart = document.querySelector('.add');
const cartSummary = document.querySelector('.cartSummary');
const container = document.querySelector('.summary-container');
const cartImg = document.querySelector('.cart');
const cartValue = document.querySelector('.cart p');
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');
const sidebar = document.querySelector('.sidebar');
const mobilePrev = document.querySelector('.mobile-prev');
const mobileNext = document.querySelector('.mobile-next');
const svgImg = document.querySelector('.svg img');
let current = document.querySelector('.curr');

let cart = 0;

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].addEventListener('click', function () {
    bigImage.src = smallImage[i].src;
  });
}
bigImage.addEventListener('click', function () {
  console.log(window.innerWidth);
  if (window.innerWidth > 425) {
    toggleModal('flex');
    for (let i = 0; i < small.length; i++) {
      small[i].addEventListener('click', function () {
        overlayImg.src = small[i].src;
      });
    }
  }
});

closeModal.addEventListener('click', function () {
  toggleModal('none');
});

overlay.addEventListener('click', function () {
  toggleModal('none');
});

const toggleModal = (display) => {
  modal.style.display = display;
  overlay.classList.toggle('hidden');
};
const nextSlider = () => {
  const nextEl = current.nextElementSibling;
  if (nextEl) {
    current.classList.remove('curr');
    nextEl.classList.add('curr');
    current = nextEl;
    return nextEl;
  }
};

const prevSlider = () => {
  const prevEl = current.previousElementSibling;
  if (prevEl) {
    current.classList.remove('curr');
    prevEl.classList.add('curr');
    current = prevEl;
    return prevEl;
  }
};

next.addEventListener('click', () => {
  const nextEl = nextSlider();
  if (nextEl) {
    overlayImg.src = nextEl.src;
  }
});

prev.addEventListener('click', () => {
  const prevEl = prevSlider();
  if (prevEl) {
    overlayImg.src = prevEl.src;
  }
});

mobileNext.addEventListener('click', () => {
  console.log('next');
  const nextEl = nextSlider();
  if (nextEl) {
    bigImage.src = nextEl.src;
  }
});
mobilePrev.addEventListener('click', () => {
  console.log('PREV');
  const prevEl = prevSlider();
  if (prevEl) {
    bigImage.src = prevEl.src;
  }
});

inc.addEventListener('click', () => {
  let value = Number(quantity.value);
  value++;
  quantity.value = value;
});

desc.addEventListener('click', () => {
  let value = Number(quantity.value);
  if (value === 0) {
    return;
  }
  value--;
  quantity.value = value;
});

addToCart.addEventListener('click', () => {
  // cart++;
  if (quantity.value !== '0') {
    cartValue.innerHTML = quantity.value;
    cartValue.style.display = 'flex';
    cart = quantity.value;
  }
});
cartImg.addEventListener('click', () => {
  cartSummary.classList.toggle('hidden');

  let markup;
  if (cart == '0') {
    markup = `<p class='empty' >Cart is empty</p>`;
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', markup);
  } else {
    markup = `<div class='innerSummary'>
    <div class='summary-img' >
      <img src="./images/image-product-3.jpg"  />
    </div>
    <div class='summary-text' >
      <h3>Fall Limited Edition Sneakers</h3>
      <p>Price : $125.00 </p>
      <p>Quantity: <span> ${cart} </span> </p> 
      <p>Total : <span> ${cart * 125} </span> </p>
    </div>
    </div>
    <button class='checkout' onclick='checkOut()'>Checkout</button>`;

    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', markup);
  }
});

const checkOut = () => {
  cartSummary.classList.toggle('hidden');
  cart = '0';
  cartValue.style.display = 'none';
};

hamburger.addEventListener('click', () => {
  // sidebar.style.display = 'block';
  sidebar.classList.toggle('hidden');
});

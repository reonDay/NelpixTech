// script.js
function toggleMenu() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

function filterProducts(category) {
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    if (product.classList.contains(category)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalClose = document.getElementsByClassName('close')[0];
  filterProducts('health');
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
  products.forEach((product, index) => {
    product.addEventListener('click', () => {
      const imgSrc = product.querySelector('img').getAttribute('src');
      const title = product.querySelector('h3').textContent;
      const description = product.querySelector('p').textContent;

      modal.style.display = 'block';
      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Initially display only health products


  // Hide loading screen once content is fully loaded

});

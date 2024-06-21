function generateHeaderHTML() {
  return `
    <section id="header">
      <div id="header-logo">
        <a href="#"><img src="images/1.png" alt="" class="logo" /></a>
      </div>
      <div>
        <h1>📌Depozit Materiale Construcții</h1>
        <h2>🏡Strada Principală nr 80/A</h2>
        <h2>💒Coșeiu, Sălaj</h2>
        <h2>📞0762 169 013</h2>
        <h3>👷‍♂️ Materiale |  🛠 scule </h3>
        <h3>🔨 unelte |  🛒 casnice</h3>
      </div>
    </section>
     <hr>
    <div class="nav1-2">
          <ul>
            <li>
              <a href="#product1"><h2>Produse - Colectia Kober</h2></a>
            </li>
            <li>
              <a href="#product2"><h2>Produse - Uz Casnic</h2></a>
            </li>
          </ul>
    </div>
        <hr>
  `;
}

function injectHeader() {
  document.body.innerHTML = generateHeaderHTML();
}

function generateParentContainerHTML() {
  return `
    <div id="parent-container">
    <h1>Produse Kober</h1>
      <section id="product1" class="section-p">
        <div class="pro-container" id="pro-container1"></div>
      </section>
      <hr />
      <h1>Produse Uz Casnic</h1>
      <section id="product2" class="section-p">
        <div class="pro-container" id="pro-container2"></div>
      </section>
    </div>
  `;
}

function elementHTML(product) {
  const stars = Array(product.stars)
    .fill('<i class="fas fa-star"></i>')
    .join(" ");

  return `
    <div class="pro">
      <img src="${product.imageSrc}" class="pic" alt="${product.productName}" onerror="this.onerror=null;this.src='images/placeholder.png';" />
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.productName}</h5>
        <div class="star">
          ${stars}
        </div>
        <h4>${product.price}</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>`;
}

function injectHTML(containerId, products) {
  const container = document.getElementById(containerId);
  if (container) {
    products.forEach((product) => {
      container.innerHTML += elementHTML(product);
    });
  } else {
    console.error(`Container with id ${containerId} not found.`);
  }
}

function loadProducts(filePaths) {
  const productPromises = filePaths.map((filePath) =>
    fetch(filePath).then((response) => response.json())
  );

  Promise.all(productPromises)
    .then((productArrays) => {
      productArrays.forEach((products, index) => {
        injectHTML(`pro-container${index + 1}`, products);
      });
    })
    .catch((error) => {
      console.error("Error loading products:", error);
    });
}

function initEvents() {
  injectHeader();

  const parentContainerHTML = generateParentContainerHTML();
  document.body.insertAdjacentHTML("beforeend", parentContainerHTML);

  const productFiles = ["./products/1.json", "./products/2.json"];
  loadProducts(productFiles);
}

initEvents();

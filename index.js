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
        <h3>👷‍♂️Materiale, 🛠scule, 🔨unelte, 🛒casnice</h3>
      </div>
    </section>
  `;
}

function injectHeader() {
  document.body.innerHTML = generateHeaderHTML();
}

function generateParentContainerHTML() {
  return `
    <div id="parent-container">
      <section id="product1" class="section-p">
        <div class="pro-container" id="pro-container"></div>
      </section>
      </hr>
      <section id="product2" class="section-p">
        <div class="pro-container" id="pro-container"></div>
      </section>
    </div>
  `;
}

function elementHTML(product) {
  const stars = Array(product.stars)
    .fill('<i class="fas fa-star"></i>')
    .join(" ");

  // console.log("Product Details:", product);

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
      const products = productArrays.flat();

      injectHTML("pro-container", products);
      console.log(products);
    })
    .catch((error) => {
      console.error("Error loading products:", error);
    });
}

function initEvents() {
  injectHeader();

  const parentContainerHTML = generateParentContainerHTML();
  document.body.insertAdjacentHTML("beforeend", parentContainerHTML);

  const productFiles = ["./products/1.json"];
  loadProducts(productFiles);
}

initEvents();

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
        <h3>👷‍♂️ Materiale | 🛠 scule </h3>
        <h3>🔨 unelte | 🛒 casnice</h3>
      </div>
    </section>
    <div id="myDropdown" class="dropdown">
      <button class="dropdown-btn" onclick="myFunction()">Meniu</button>
      <div class="dropdown-content">
        <input type="text" placeholder="🔍Search.." id="myInput" onkeyup="filterFunction()">
        <ul>
        <li>
            <a href="#product1" data-section="product1"><h2>MATERIALE DE CONSTRUCȚII</h2></a>
        </li>
        <li>
            <a href="#product2" data-section="product2"><h2>SCULE/UTILAJE/ECHIPAMENTE</h2></a>
        </li>
        <li>
            <a href="#product3" data-section="product3"><h2>VOPSELE</h2></a>
        </li>
        <li>
            <a href="#product4" data-section="product4"><h2>CERAMICĂ</h2></a>
        </li>
        <li>
            <a href="#product5" data-section="product5"><h2>PARCHET / UȘI</h2></a>
        </li> 
        <li>
            <a href="#product6" data-section="product6"><h2>ELECTROCASNICE</h2></a>
        </li>
         <li>
            <a href="#product7" data-section="product7"><h2>BUCĂTĂRIE</h2></a>
        </li> <li>
            <a href="#product8" data-section="product8"><h2>PRODUSE DE CURĂȚENIE</h2></a>
        </li> <li>
            <a href="#product9" data-section="product9"><h2>ELECTRICE</h2></a>
        </li> <li>
            <a href="#product10" data-section="product10"><h2>INSTALAȚII</h2></a>
        </li> <li>
            <a href="#product11" data-section="product11"><h2>FERONERIE</h2></a>
        </li>  <li>
            <a href="#product13" data-section="product13"><h2>DECORAȚIUNI</h2></a>
        </li> <li>
            <a href="#product14" data-section="product14"><h2>GRĂDINĂ</h2></a>
        </li> <li>
            <a href="#product15" data-section="product15"><h2>ÎNGRIJIRE PERSONALĂ</h2></a>
        </li> <li>
            <a href="#product16" data-section="product16"><h2>SANITARE</h2></a>
        </li>
        <li>
            <a href="#product12" data-section="product12"><h2>LENJERII DE PAT</h2></a>
        </li>
        <li>
            <a href="#product17" data-section="product17"><h2>UZ CASNIC</h2></a>
        </li>
        </ul>
      </div>
    </div>
  `;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    const txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function injectHeader() {
  document.body.innerHTML = generateHeaderHTML();
}

function generateParentContainerHTML() {
  return `
    <div id="parent-container">
   
      <section id="product1" class="section-p">
       <h2>MATERIALE DE CONSTRUCȚII</h2>
        <div class="pro-container" id="pro-container1"></div>
      </section>

      <section id="product2" class="section-p">
        <h2>SCULE/UTILAJE/ECHIPAMENTE</h2>
        <div class="pro-container" id="pro-container2"></div>
      </section>

      <section id="product3" class="section-p">
       <h2>VOPSELE</h2>
        <div class="pro-container" id="pro-container3"></div>
      </section>

      <section id="product4" class="section-p">
        <h2>CERAMICĂ</h2> 
        <div class="pro-container" id="pro-container4"></div>
      </section>

      <section id="product5" class="section-p">
        <h2>PARCHET / UȘI</h2>
        <div class="pro-container" id="pro-container5"></div>
      </section>
     
      <section id="product6" class="section-p">
         <h2>ELECTROCASNICE</h2>
         <div class="pro-container" id="pro-container6"></div>
      </section>
     
      <section id="product7" class="section-p">
         <h2>BUCĂTĂRIE</h2>
         <div class="pro-container" id="pro-container7"></div>
      </section>
     
      <section id="product8" class="section-p">
         <h2>PRODUSE DE CURĂȚENIE</h2>
         <div class="pro-container" id="pro-container8"></div>
      </section>
      
      <section id="product9" class="section-p">
        <h2>ELECTRICE</h2>
        <div class="pro-container" id="pro-container9"></div>
      </section>
     
      <section id="product10" class="section-p">
         <h2>INSTALAȚII</h2>
         <div class="pro-container" id="pro-container10"></div>
      </section>
     
      <section id="product11" class="section-p">
         <h2>FERONERIE</h2>
         <div class="pro-container" id="pro-container11"></div>
      </section>

      <section id="product12" class="section-p">
          <h2>LENJERII DE PAT</h2>
          <div class="pro-container" id="pro-container12"></div>
      </section>

      <section id="product13" class="section-p">
         <h2>DECORAȚIUNI</h2>
         <div class="pro-container" id="pro-container13"></div>
      </section>
      
      <section id="product14" class="section-p">
        <h2>GRĂDINĂ</h2>
        <div class="pro-container" id="pro-container14"></div>
      </section>

      <section id="product15" class="section-p">
        <h2>ÎNGRIJIRE PERSONALĂ</h2>
        <div class="pro-container" id="pro-container15"></div>
      </section>

      <section id="product16" class="section-p">
       <h2>SANITARE</h2>
        <div class="pro-container" id="pro-container16"></div>
      </section>
      
      <section id="product17" class="section-p">
        <h2>UZ CASNIC</h2>
        <div class="pro-container" id="pro-container17"></div>
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

  const productFiles = [
    "./products/1.json",
    "./products/2.json",
    "./products/3.json",
    "./products/4.json",
    "./products/5.json",
    "./products/6.json",
    "./products/7.json",
    "./products/8.json",
    "./products/9.json",
    "./products/10.json",
    "./products/11.json",
    "./products/12.json",
    "./products/13.json",
    "./products/14.json",
    "./products/15.json",
    "./products/16.json",
    "./products/17.json",
  ];
  // console.log(productFiles);
  loadProducts(productFiles);

  document.getElementById("product1").style.display = "block";
  document.getElementById("product2").style.display = "none";
  document.getElementById("product3").style.display = "none";
  document.getElementById("product4").style.display = "none";
  document.getElementById("product5").style.display = "none";
  document.getElementById("product6").style.display = "none";
  document.getElementById("product7").style.display = "none";
  document.getElementById("product8").style.display = "none";
  document.getElementById("product9").style.display = "none";
  document.getElementById("product10").style.display = "none";
  document.getElementById("product11").style.display = "none";
  document.getElementById("product12").style.display = "none";
  document.getElementById("product13").style.display = "none";
  document.getElementById("product14").style.display = "none";
  document.getElementById("product15").style.display = "none";
  document.getElementById("product16").style.display = "none";
  document.getElementById("product17").style.display = "none";

  const menuItems = document.querySelectorAll(".dropdown-content a");
  menuItems.forEach((section) => {
    section.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = section.getAttribute("data-section");
      showSection(sectionId);
    });
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section-p");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

initEvents();

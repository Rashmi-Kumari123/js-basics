// Initial inventory array
const inventory = [
  { id: 101, name: "Laptop Pro", price: 1200, category: "Electronics" },
  { id: 102, name: "Desktop Chair", price: 350, category: "Furnitures" },
  { id: 103, name: "Mouse Pad", price: 15, category: "Accessories" },
  { id: 104, name: 'Monitor "', price: 450, category: "Electronics" },
];

let currentProducts = [...inventory];
let isSorted = false;

const productListContainer = document.getElementById("product-list");
const nameFilterInput = document.getElementById("name-filter");
const sortPriceBtn = document.getElementById("sort-price-btn");
const countOutput = document.getElementById("count-output");

/**
 * Renders products as cards in the product-list container
 * @param {Array} products - Array of product objects to render
 */
function renderProducts(products) {
  productListContainer.innerHTML = "";
  countOutput.textContent = `Products shown: ${products.length}`;

  // Render each product as a card
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-item";

    productCard.innerHTML = `
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-description">${product.description}</div>
        `;

    productListContainer.appendChild(productCard);
  });
}

function applyFilterAndSort() {
  const filterText = nameFilterInput.value.toLowerCase().trim();

  let filteredProducts = inventory.filter((product) => {
    return product.name.toLowerCase().includes(filterText);
  });

  if (isSorted) {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  currentProducts = filteredProducts;

  renderProducts(currentProducts);
}

nameFilterInput.addEventListener("input", () => {
  applyFilterAndSort();
});

// Event listener for sort-price-btn
sortPriceBtn.addEventListener("click", () => {
  // Toggle sort state
  isSorted = !isSorted;

  // Update button appearance
  if (isSorted) {
    sortPriceBtn.classList.add("active");
    sortPriceBtn.classList.remove("inactive");
  } else {
    sortPriceBtn.classList.add("inactive");
    sortPriceBtn.classList.remove("active");
  }

  // Apply filter and sort, then re-render
  applyFilterAndSort();
});

// Call renderProducts() on page load with initial inventory array
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(inventory);
});

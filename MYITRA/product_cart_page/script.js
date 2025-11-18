document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("totalPrice");
  const finalQty = document.getElementById("finalQty");
  const deleteBtn = document.getElementById("deleteBtn");
  const proceedBtn = document.getElementById("proceedToCheckoutBtn");

  const unitPrice = 15.00;

  // locaStorage can be changed to sessionStorage if dont want to be saved after closing browser
  const savedQty = localStorage.getItem("selectedQty");
  if (savedQty && parseInt(savedQty) > 0) {
    quantityInput.value = savedQty;
    finalQty.textContent = savedQty;
    totalPrice.textContent = (savedQty * unitPrice).toFixed(2);
  } else {
    quantityInput.value = 0;
    finalQty.textContent = "0";
    totalPrice.textContent = "0.00";
  }

  //  Update quantity and save
  quantityInput.addEventListener("input", () => {
    const qty = parseInt(quantityInput.value) || 1;
    finalQty.textContent = qty;
    totalPrice.textContent = (qty * unitPrice).toFixed(2);
    localStorage.setItem("selectedQty", qty);
  });

  //  Delete item
  deleteBtn.addEventListener("click", () => {
    alert("Item removed from cart.");
    quantityInput.value = 0;
    finalQty.textContent = "0";
    totalPrice.textContent = "0.00";
    localStorage.removeItem("selectedQty");
  });

  //  Proceed to checkout
  proceedBtn.addEventListener("click", () => {
    const qty = parseInt(quantityInput.value) || 1;
    localStorage.setItem("selectedQty", qty);
    window.location.href = "../Product checkout page/product checkout.html";
  });
});
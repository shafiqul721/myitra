
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const cartIcon = document.getElementById("cartIcon");


  if (addBtn) {
    addBtn.addEventListener("click", () => {
      window.location.href = "../Product cart page/product cart.html";
    });
  }

  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      const qty = localStorage.getItem("selectedQty");
      window.location.href="../Product cart page/product cart.html";

      if (qty && parseInt(qty) > 0) {
        alert(`🛒 You have ${qty} Kota Cantik in your cart.`);
       
      } else {
        alert("🛒 Your cart is empty.");
      }
    });
  }

});

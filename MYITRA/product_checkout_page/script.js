document.addEventListener("DOMContentLoaded", () => {
  const shippingRadios = document.getElementsByName("shippingOption");
  const shippingFeeEl = document.getElementById("shippingFee");
  const subtotalEl = document.getElementById("subtotal");
  const qtyEl = document.getElementById("checkoutQty");
  const totalEl = document.getElementById("checkoutTotal");
  const itemCountEl = document.getElementById("itemCount");
  const cartIcon = document.getElementById("cartIcon");


  const updateTotals = () => {
    const storedQty = parseInt(localStorage.getItem("selectedQty")) || 1;
    qtyEl.textContent = storedQty;
    const pricePerBox = 15;
    const shippingSelected = [...shippingRadios].find(r => r.checked).nextSibling.textContent.includes("Ship");
    const shippingFee = shippingSelected ? 5 : 0;
    const total = storedQty * pricePerBox;
    const subtotal = total + shippingFee;

    totalEl.textContent = total.toFixed(2);
    shippingFeeEl.textContent = `RM${shippingFee.toFixed(2)}`;
    subtotalEl.textContent = subtotal.toFixed(2);
    itemCountEl.textContent = storedQty;

  };

  // Listen for shipping option changes
  shippingRadios.forEach(radio => {
    radio.addEventListener("change", updateTotals);
  });

  updateTotals(); // initial calculation

  const purchaseBtn = document.getElementById("purchaseBtn");

  if (purchaseBtn) {
purchaseBtn.addEventListener("click", () => {
  alert("🎉 Purchase successful! Thank you for your order.");
  localStorage.removeItem("selectedQty");
  window.location.href = "../Product catalog page/product catalog.html";
});

  }

    if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      const qty = localStorage.getItem("selectedQty");

      if (qty && parseInt(qty) > 0) {
        alert(`🛒 You have ${qty} Kota Cantik in your cart.`);
       
      } else {
        alert("🛒 Your cart is empty.");
      }
    });
  }

});


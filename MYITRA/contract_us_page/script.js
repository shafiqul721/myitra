document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const cartIcon = document.getElementById("cartIcon");


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // You can add form validation or send data to a server here

    alert("✅ Message sent successfully! We'll get back to you soon.");
    form.reset();
  });

    if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      const qty = localStorage.getItem("selectedQty");
      window.location.href = "../Product cart page/product cart.html";

      if (qty && parseInt(qty) > 0) {
        alert(`🛒 You have ${qty} Kota Cantik in your cart.`);
 
      } else {
        alert("🛒 Your cart is empty.");
      }
    });
  }

});
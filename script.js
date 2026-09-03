let cartCount = 0;

function addCart() {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("เพิ่มสินค้าลงตะกร้าแล้ว 🛒");
}

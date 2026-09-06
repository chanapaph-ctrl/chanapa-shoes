let cartCount = 0;


/* ================= CART ================= */

function addCart() {

    cartCount++;

    document.getElementById("cart-count").textContent =
        cartCount;

    alert("เพิ่มสินค้าลงตะกร้าแล้ว 🛒");
}


/* ================= PRODUCT DETAIL ================= */

function showDetail(productName) {

    alert(
        "สินค้า: " + productName +
        "\n\nสินค้าคุณภาพดีจาก CHANAPA SHOES" +
        "\nจัดส่งทั่วประเทศ 📦"
    );
}


/* ================= FILTER ================= */

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product-card");

    let buttons =
        document.querySelectorAll(".category");


    /* เปลี่ยนปุ่มที่เลือก */

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });

    event.target.classList.add("active");


    /* แสดงสินค้า */

    products.forEach(function(product) {

        if (category === "all") {

            product.style.display = "block";

        }

        else if (
            product.classList.contains(category)
        ) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

}

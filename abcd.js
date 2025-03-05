document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
        let spark = document.createElement("div");
        spark.className = "spark";
        document.body.appendChild(spark);

        let x = e.clientX + window.scrollX; // Menyesuaikan posisi dengan scroll
        let y = e.clientY + window.scrollY; 

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        setTimeout(() => {
            spark.remove();
        }, 500);
    });
});

// Tambahkan CSS untuk Efek Percikan
let style = document.createElement("style");
style.innerHTML = `
    .spark {
        position: absolute;
        width: 6px;
        height: 6px;
        background: orange;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 15px rgba(255, 165, 0, 0.8);
        animation: fadeOut 0.5s linear;
    }

    @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
    }
`;
document.head.appendChild(style);

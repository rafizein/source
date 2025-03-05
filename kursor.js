document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
        let spark = document.createElement("div");
        spark.className = "spark";
        document.body.appendChild(spark);

        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;

        setTimeout(() => {
            spark.remove();
        }, 500);
    });
});

// Tambahkan CSS untuk Efek Listrik
let style = document.createElement("style");
style.innerHTML = `
    .spark {
        position: absolute;
        width: 10px;
        height: 10px;
        background: cyan;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
        animation: fadeOut 0.5s linear;
    }

    @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
    }
`;
document.head.appendChild(style);

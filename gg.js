document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.createElement("canvas");
    canvas.id = "sparkCanvas";
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d"),
        particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1.5;
        this.color = "rgba(" + (Math.floor(Math.random() * 100) + 200) + "," +
            (Math.floor(Math.random() * 100) + 50) + ",0,";
        this.alpha = 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2 - 1.5;
    }

    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.03;
    };

    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color + this.alpha + ")";
        ctx.fill();
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
            }
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("mousemove", function (e) {
        for (var i = 0; i < 5; i++) {
            particles.push(new Particle(e.clientX, e.clientY));
        }
    });
});

import React, { useEffect } from "react";

function BubbleAnimation() {
    useEffect(() => {
        // Background particles effect setup
        const canvas = document.getElementById("particles-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const particles = [];
            const particleCount = 100;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    color: `rgba(${Math.random() * 150 + 100}, ${
                        Math.random() * 150 + 100
                    }, 255, ${Math.random() * 0.3 + 0.4})`,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                });
            }

            const animate = () => {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle) => {
                    ctx.beginPath();
                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.radius,
                        0,
                        Math.PI * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width)
                        particle.speedX *= -1;
                    if (particle.y < 0 || particle.y > canvas.height)
                        particle.speedY *= -1;
                });
            };

            animate();

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <>
            <canvas id="particles-canvas" className="absolute inset-0 z-5" />
        </>
    );
}

export default BubbleAnimation;

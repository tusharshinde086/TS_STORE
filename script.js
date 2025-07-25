// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // === 1. Image Hover Zoom ===
    const images = document.querySelectorAll(".box1-img");
    images.forEach((img) => {
        img.style.transition = "transform 0.3s ease-in-out";
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // === 2. Sticky Navbar ===
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 50);
    });

    // === 3. Time-Based Greeting ===
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good Morning! Welcome to TS_STORE!";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Welcome back!";
    } else {
        greeting = "Good Evening! Browse your favorite items!";
    }
    alert(greeting);

    // === 4. Back to Top Button ===

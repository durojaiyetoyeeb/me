document.addEventListener("DOMContentLoaded", function () {
    // Social Media Icons Hover Effects
    const socialButtons = document.querySelectorAll(".social-btn");
    socialButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 200);
        });
    });

    // Blog Button Redirect
    const blogButton = document.getElementById("blogButton");
    blogButton.addEventListener("click", function () {
        window.location.href = "https://hng.tech/blog"; // Change this to the actual HNG blog link
    });
});

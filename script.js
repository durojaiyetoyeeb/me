document.addEventListener("DOMContentLoaded", function () {
     // Update UTC Time
    function updateUTCTime() {
        const now = new Date();
        const utcTime = now.toISOString().replace("T", " ").slice(0, -5) + " UTC";
        document.getElementById("currentTimeUTC").textContent = utcTime;
    }

    updateUTCTime(); // Run on page load
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
        window.location.href = "https://toyeebdurojaiyeblog.blogspot.com/"; // Change this to the actual HNG blog link
    });
});

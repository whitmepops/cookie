let cookieCount = 0;
const cookieCountDisplay = document.getElementById("cookie-count");
const cookieButton = document.getElementById("cookie");
const autoClickerButton = document.getElementById("auto-clicker");

cookieButton.addEventListener("click", () => {
    cookieCount++;
    cookieCountDisplay.textContent = cookieCount;
});

autoClickerButton.addEventListener("click", () => {
    if (cookieCount >= 100) {
        cookieCount -= 100;
        cookieCountDisplay.textContent = cookieCount;

        // Set an interval to automatically click the cookie every 1 second
        setInterval(() => {
            cookieCount++;
            cookieCountDisplay.textContent = cookieCount;
        }, 1000);

        // Disable the auto-clicker button after purchase
        autoClickerButton.disabled = true;
    } else {
        alert("Not enough cookies!");
    }
});

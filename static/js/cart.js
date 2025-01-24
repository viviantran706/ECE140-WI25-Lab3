document.addEventListener("DOMContentLoaded", function() {
    // Global variables
    let productPrice = 0;
    let quantity = 0;

    // Debug logging
    function logDebug(message) {
        const debugLog = document.getElementById('debug-log');
        const timestamp = new Date().toLocaleTimeString();
        debugLog.textContent = `[${timestamp}] ${message}\n` + debugLog.textContent;
    }

    // Initialize price (with bug!)
    async function initializePrice() {
        logDebug('Starting price initialization...');
        try {
            // Fetch the price from the server
            const response = await fetch('/api/price');
            if (!response.ok) {
                throw new Error(`Failed to fetch price: ${response.status}`);
            }

            const data = await response.json();
            productPrice = data.price;

            // Update the displayed price
            document.getElementById('product-price').textContent = productPrice.toFixed(2);
            logDebug(`Price initialized to: $${productPrice}`);

            // Update the total display
            updateTotal();
            logDebug('Price initialization function completed');
        } catch (error) {
            logDebug(`Error during price initialization: ${error.message}`);
        }
        // Bug: 
        response = fetch('/api/price?')
        data = response.json()
        productPrice = data.price
        document.getElementById('product-price').textContent = productPrice.toFixed(2);
        logDebug(`Price initialized to: $${productPrice}`);
        updateTotal();
        logDebug('Price initialization function completed');
    }

    function increaseQuantity() {
        quantity++;
        updateDisplay();
        logDebug(`Quantity increased to ${quantity}`);
    }

    function decreaseQuantity() {
        if (quantity > 0) {
            quantity--;
            updateDisplay();
            logDebug(`Quantity decreased to ${quantity}`);
        }
    }

    function updateDisplay() {
        document.getElementById('quantity').textContent = quantity;
        updateTotal();
    }

    function updateTotal() {
        const total = quantity * productPrice;
        document.getElementById('total').textContent = total.toFixed(2);
        logDebug(`Total updated to: $${total}`);
    }

    // Initialize the page
    logDebug('Page initialization started');
    // Add event listeners for buttons:
    document.getElementById('increase-btn').addEventListener('click', increaseQuantity);
    document.getElementById('decrease-btn').addEventListener('click', decreaseQuantity);

    initializePrice();
    updateDisplay();
});
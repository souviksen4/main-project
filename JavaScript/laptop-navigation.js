document.addEventListener("DOMContentLoaded", function() {
    // Object map to store card-to-page associations
    var cardToPageMap = {
        "laptop-1": "./INDIVIDUAL-LAPTOPS/laptop-1.html",
        "laptop-2": "./INDIVIDUAL-LAPTOPS/laptop-2.html",
        "laptop-3": "./INDIVIDUAL-LAPTOPS/laptop-3.html",
        "laptop-4": "./INDIVIDUAL-LAPTOPS/laptop-4.html",
        "laptop-5": "./INDIVIDUAL-LAPTOPS/laptop-5.html",
        "laptop-6": "./INDIVIDUAL-LAPTOPS/laptop-6.html",
        "laptop-7": "./INDIVIDUAL-LAPTOPS/laptop-7.html",
        "laptop-8": "./INDIVIDUAL-LAPTOPS/laptop-8.html",
        "laptop-9": "./INDIVIDUAL-LAPTOPS/laptop-9.html",
        "laptop-10": "./INDIVIDUAL-LAPTOPS/laptop-10.html",
        "laptop-11": "./INDIVIDUAL-LAPTOPS/laptop-11.html",
        "laptop-12": "./INDIVIDUAL-LAPTOPS/laptop-12.html",
        "laptop-13": "./INDIVIDUAL-LAPTOPS/laptop-13.html",
        "laptop-14": "./INDIVIDUAL-LAPTOPS/laptop-14.html",
        "laptop-15": "./INDIVIDUAL-LAPTOPS/laptop-15.html",
        "laptop-16": "./INDIVIDUAL-LAPTOPS/laptop-16.html",
        "laptop-17": "./INDIVIDUAL-LAPTOPS/laptop-17.html",
        "laptop-18": "./INDIVIDUAL-LAPTOPS/laptop-18.html",
        "laptop-19": "./INDIVIDUAL-LAPTOPS/laptop-19.html",
        "laptop-20": "./INDIVIDUAL-LAPTOPS/laptop-20.html"
    };

    // Object map to store buy now button target pages
    var buyNowPageMap = {
        "laptop-1": "https://facebook.com",
        "laptop-2": "https://facebook.com",
        "laptop-3": "https://facebook.com",
        "laptop-4": "https://facebook.com",
        "laptop-5": "https://facebook.com",
        "laptop-6": "https://facebook.com",
        "laptop-7": "https://facebook.com",
        "laptop-8": "https://facebook.com",
        "laptop-9": "https://facebook.com",
        "laptop-10": "https://facebook.com",
        "laptop-11": "https://facebook.com",
        "laptop-12": "https://facebook.com",
        "laptop-13": "https://facebook.com",
        "laptop-14": "https://facebook.com",
        "laptop-15": "https://facebook.com",
        "laptop-16": "https://facebook.com",
        "laptop-17": "https://facebook.com",
        "laptop-18": "https://facebook.com",
        "laptop-19": "https://facebook.com",
        "laptop-20": "https://facebook.com"
    };

    // Get reference to the container
    var container = document.querySelector(".container");

    // Add click event listener to the container using event delegation
    container.addEventListener("click", function(event) {
        // Get the clicked element
        var target = event.target;

        // Check if the clicked element is a buy now button
        if (target.classList.contains("buy-now")) {
            // Find the parent card
            var card = target.closest(".laptop-card");
            if (card) {
                // Get the target page from the buy now page map based on the card's class
                var targetPage = buyNowPageMap[card.classList[1]];
                if (targetPage) {
                    // Redirect the user to the specified target page for buy now button
                    window.location.href = targetPage;
                }
            }
        } else {
            // Check if the clicked element is a card
            var card = target.closest(".laptop-card");
            if (card) {
                // Get the target page from the object map based on the card's class
                var targetPage = cardToPageMap[card.classList[1]];
                if (targetPage) {
                    // Redirect the user to the specified target page for card click
                    window.location.href = targetPage;
                }
            }
        }
    });
});
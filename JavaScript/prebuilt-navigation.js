document.addEventListener("DOMContentLoaded", function() {
    // Object map to store card-to-page associations
    var cardToPageMap = {
        "prebuilt-1": "./INDIVIDUAL-PREBUILTS/prebuilt-1.html",
        "prebuilt-2": "./INDIVIDUAL-PREBUILTS/prebuilt-2.html",
        "prebuilt-3": "./INDIVIDUAL-PREBUILTS/prebuilt-3.html",
        "prebuilt-4": "./INDIVIDUAL-PREBUILTS/prebuilt-4.html",
        "prebuilt-5": "./INDIVIDUAL-PREBUILTS/prebuilt-5.html",
        "prebuilt-6": "./INDIVIDUAL-PREBUILTS/prebuilt-6.html",
        "prebuilt-7": "./INDIVIDUAL-PREBUILTS/prebuilt-7.html",
        "prebuilt-8": "./INDIVIDUAL-PREBUILTS/prebuilt-8.html",
        "prebuilt-9": "./INDIVIDUAL-PREBUILTS/prebuilt-9.html",
        "prebuilt-10": "./INDIVIDUAL-PREBUILTS/prebuilt-10.html",
        "prebuilt-11": "./INDIVIDUAL-PREBUILTS/prebuilt-11.html",
        "prebuilt-12": "./INDIVIDUAL-PREBUILTS/prebuilt-12.html",
        "prebuilt-13": "./INDIVIDUAL-PREBUILTS/prebuilt-13.html",
        "prebuilt-14": "./INDIVIDUAL-PREBUILTS/prebuilt-14.html",
        "prebuilt-15": "./INDIVIDUAL-PREBUILTS/prebuilt-15.html",
        "prebuilt-16": "./INDIVIDUAL-PREBUILTS/prebuilt-16.html",
        "prebuilt-17": "./INDIVIDUAL-PREBUILTS/prebuilt-17.html",
        "prebuilt-18": "./INDIVIDUAL-PREBUILTS/prebuilt-18.html",
        "prebuilt-19": "./INDIVIDUAL-PREBUILTS/prebuilt-19.html",
        "prebuilt-20": "./INDIVIDUAL-PREBUILTS/prebuilt-20.html"
    };

    // Object map to store buy now button target pages
    var buyNowPageMap = {
        "prebuilt-1": "https://facebook.com",
        "prebuilt-2": "https://facebook.com",
        "prebuilt-3": "https://facebook.com",
        "prebuilt-4": "https://facebook.com",
        "prebuilt-5": "https://facebook.com",
        "prebuilt-6": "https://facebook.com",
        "prebuilt-7": "https://facebook.com",
        "prebuilt-8": "https://facebook.com",
        "prebuilt-9": "https://facebook.com",
        "prebuilt-10": "https://facebook.com",
        "prebuilt-11": "https://facebook.com",
        "prebuilt-12": "https://facebook.com",
        "prebuilt-13": "https://facebook.com",
        "prebuilt-14": "https://facebook.com",
        "prebuilt-15": "https://facebook.com",
        "prebuilt-16": "https://facebook.com",
        "prebuilt-17": "https://facebook.com",
        "prebuilt-18": "https://facebook.com",
        "prebuilt-19": "https://facebook.com",
        "prebuilt-20": "https://facebook.com"
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
            var card = target.closest(".prebuilt-card");
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
            var card = target.closest(".prebuilt-card");
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
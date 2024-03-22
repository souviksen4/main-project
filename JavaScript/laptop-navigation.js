// document.addEventListener("DOMContentLoaded", function() {
//     // Get reference to the container
//     var container = document.querySelector(".container");

//     // Add click event listener to the container using event delegation
//     container.addEventListener("click", function(event) {
//         // Get the clicked element
//         var target = event.target;

//         // Check if the clicked element is a buy now button
//         if (target.classList.contains("buy-now")) {
//             // Redirect the user to a different website
//             window.location.href = "https://google.com";
//         } else if (target.closest(".laptop-card")) {
//             // Redirect the user to a different local HTML page
//             window.location.href = "./INDIVIDUAL-LAPTOPS/laptop-1.html";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    // Object map to store card-to-page associations
    var cardToPageMap = {
        "laptop-1": "./INDIVIDUAL-LAPTOPS/laptop-1.html",
    };

    // Object map to store buy now button target pages
    var buyNowPageMap = {
        "laptop-1": "https://facebook.com"
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
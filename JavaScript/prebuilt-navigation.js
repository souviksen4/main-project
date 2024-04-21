document.addEventListener("DOMContentLoaded", function() {
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

    var buyNowPageMap = {
        "prebuilt-1": "https://amzn.in/d/8EgwL3r",
        "prebuilt-2": "https://amzn.in/d/92vtoAm",
        "prebuilt-3": "https://amzn.in/d/6OmQTJh",
        "prebuilt-4": "https://amzn.in/d/2yq8Rv0",
        "prebuilt-5": "https://amzn.in/d/iKwDBll",
        "prebuilt-6": "https://amzn.in/d/aPteO9q",
        "prebuilt-7": "https://amzn.in/d/9F3f5fS",
        "prebuilt-8": "https://amzn.in/d/cx4vW9P",
        "prebuilt-9": "https://amzn.in/d/0IJEIa4",
        "prebuilt-10": "https://amzn.in/d/cYCX6Z7"
    };

    var container = document.querySelector(".container");

    container.addEventListener("click", function(event) {
        var target = event.target;

        if (target.classList.contains("buy-now")) {
            var card = target.closest(".prebuilt-card");
            if (card) {
                var targetPage = buyNowPageMap[card.classList[1]];
                if (targetPage) {
                    window.location.href = targetPage;
                }
            }
        } else {
            var card = target.closest(".prebuilt-card");
            if (card) {
                var targetPage = cardToPageMap[card.classList[1]];
                if (targetPage) {
                    window.location.href = targetPage;
                }
            }
        }
    });
});
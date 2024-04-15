// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     const cartItemsContainer = document.getElementById("cart-items");
//     const cartTotalElement = document.getElementById("cart-total");

//     // Add event listener to all "Add to Cart" buttons
//     addToCartButtons.forEach(function(button) {
//         button.addEventListener("click", function(event) {
//             const itemName = button.dataset.name;
//             const itemPrice = parseFloat(button.dataset.price);

//             // Add item to the cart
//             const newRow = document.createElement("tr");
//             newRow.innerHTML = `
//                 <td>${itemName}</td>
//                 <td>${itemPrice}</td>
//                 <td>1</td>
//                 <td>${itemPrice}</td>
//             `;
//             cartItemsContainer.appendChild(newRow);

//             // Update cart total
//             updateCartTotal();

//             // Show alert message
//             showAlert("Item added to the cart successfully");

//             // Automatically remove alert after 3 seconds
//             setTimeout(function() {
//                 const alertElement = document.querySelector(".alert");
//                 if (alertElement) {
//                     alertElement.remove();
//                 }
//             }, 3000);
//         });
//     });

//     // Function to update cart total
//     function updateCartTotal() {
//         let total = 0;
//         const cartRows = cartItemsContainer.querySelectorAll("tr");

//         cartRows.forEach(function(row) {
//             const price = parseFloat(row.cells[1].textContent);
//             total += price;
//         });

//         cartTotalElement.textContent = total.toFixed(2);
//     }

//     // Function to show alert message
//     function showAlert(message) {
//         const alertDiv = document.createElement("div");
//         alertDiv.classList.add("alert");
//         alertDiv.textContent = message;
//         document.body.appendChild(alertDiv);
//     }

//     // Add event listener to the "Empty Cart" button
//     const emptyCartButton = document.querySelector(".buttons-of-cart button:first-child");
//     emptyCartButton.addEventListener("click", function() {
//         // Clear the cart
//         cartItemsContainer.innerHTML = "";
//         cartTotalElement.textContent = "0.00";

//         // Show alert message
//         showAlert("Cart cleared successfully");

//         // Automatically remove alert after 3 seconds
//         setTimeout(function() {
//             const alertElement = document.querySelector(".alert");
//             if (alertElement) {
//                 alertElement.remove();
//             }
//         }, 3000);
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     const cartItemsContainer = document.getElementById("cart-items");
//     const cartTotalElement = document.getElementById("cart-total");

//     // Add event listener to all "Add to Cart" buttons
//     addToCartButtons.forEach(function(button) {
//         button.addEventListener("click", function(event) {
//             const itemName = button.dataset.name;
//             const itemPrice = parseFloat(button.dataset.price);

//             // Check if the item already exists in the cart
//             const existingItem = Array.from(cartItemsContainer.children).find(row => row.cells[0].textContent === itemName);
//             if (existingItem) {
//                 // Increase the quantity and update total price
//                 const quantityCell = existingItem.cells[2];
//                 const totalPriceCell = existingItem.cells[3];
//                 let quantity = parseInt(quantityCell.textContent);
//                 quantity++;
//                 quantityCell.textContent = quantity;
//                 totalPriceCell.textContent = (quantity * itemPrice).toFixed(2);
//             } else {
//                 // Add item to the cart
//                 const newRow = document.createElement("tr");
//                 newRow.innerHTML = `
//                     <td>${itemName}</td>
//                     <td>${itemPrice}</td>
//                     <td>1</td>
//                     <td>${itemPrice}</td>
//                 `;
//                 cartItemsContainer.appendChild(newRow);
//             }

//             // Update cart total
//             updateCartTotal();

//             // Show alert message
//             showAlert("Item added to cart ✔");

//             // Automatically remove alert after 3 seconds
//             // setTimeout(function() {
//             //     const alertElement = document.querySelector(".alert");
//             //     if (alertElement) {
//             //         alertElement.remove();
//             //     }
//             // }, 2000);
//         });
//     });

//     // Function to update cart total
//     function updateCartTotal() {
//         let total = 0;
//         const cartRows = cartItemsContainer.querySelectorAll("tr");

//         cartRows.forEach(function(row) {
//             const price = parseFloat(row.cells[1].textContent);
//             const quantity = parseInt(row.cells[2].textContent);
//             total += price * quantity;
//         });

//         cartTotalElement.textContent = total.toFixed(2);
//     }

//     // Function to show alert message
//     function showAlert(message) {
//         const alertDiv = document.createElement("div");
//         alertDiv.classList.add("alert");
//         alertDiv.textContent = message;
//         document.body.appendChild(alertDiv);
//     }

//     // Add event listener to the "Empty Cart" button
//     const emptyCartButton = document.querySelector(".empty-cart");
//     emptyCartButton.addEventListener("click", function() {
//         if (cartItemsContainer.children.length === 0) {
//             showAlert("Cart is already empty.");
//             return;
//         }
//         // Clear the cart
//         cartItemsContainer.innerHTML = "";
//         cartTotalElement.textContent = "0.00";

//         // Show alert message
//         showAlert("Cart cleared successfully.");

//         // Automatically remove alert after 3 seconds
//         // setTimeout(function() {
//         //     const alertElement = document.querySelector(".alert");
//         //     if (alertElement) {
//         //         alertElement.remove();
//         //     }
//         // }, 2000);
//     });

//     function showAlert(message) {
//         const alertDiv = document.createElement("div");
//         alertDiv.classList.add("alert");
//         alertDiv.textContent = message;
//         document.body.appendChild(alertDiv);
    
//         // Automatically remove alert after 3 seconds
//         setTimeout(function() {
//             alertDiv.remove();
//         }, 1000);
//     }
// });


//Session Storage
// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     const cartItemsContainer = document.getElementById("cart-items");
//     const cartTotalElement = document.getElementById("cart-total");

//     // Load cart data from session storage if available
//     const storedCartItems = sessionStorage.getItem("cartItems");
//     if (storedCartItems) {
//         cartItemsContainer.innerHTML = storedCartItems;
//         updateCartTotal();
//     }

//     // Add event listener to all "Add to Cart" buttons
//     addToCartButtons.forEach(function(button) {
//         button.addEventListener("click", function(event) {
//             const itemName = button.dataset.name;
//             const itemPrice = parseFloat(button.dataset.price);

//             // Check if the item already exists in the cart
//             const existingItem = Array.from(cartItemsContainer.children).find(row => row.cells[0].textContent === itemName);
//             if (existingItem) {
//                 // Increase the quantity and update total price
//                 const quantityCell = existingItem.cells[2];
//                 const totalPriceCell = existingItem.cells[3];
//                 let quantity = parseInt(quantityCell.textContent);
//                 quantity++;
//                 quantityCell.textContent = quantity;
//                 totalPriceCell.textContent = (quantity * itemPrice).toFixed(2);
//             } else {
//                 // Add item to the cart
//                 const newRow = document.createElement("tr");
//                 newRow.innerHTML = `
//                     <td>${itemName}</td>
//                     <td>${itemPrice}</td>
//                     <td>1</td>
//                     <td>${itemPrice}</td>
//                 `;
//                 cartItemsContainer.appendChild(newRow);
//             }

//             // Update cart total
//             updateCartTotal();

//             // Save cart data to session storage
//             sessionStorage.setItem("cartItems", cartItemsContainer.innerHTML);

//             // Show alert message
//             showAlert("Item added to cart ✔");
//         });
//     });

//     // Function to update cart total
//     function updateCartTotal() {
//         let total = 0;
//         const cartRows = cartItemsContainer.querySelectorAll("tr");

//         cartRows.forEach(function(row) {
//             const price = parseFloat(row.cells[1].textContent);
//             const quantity = parseInt(row.cells[2].textContent);
//             total += price * quantity;
//         });

//         cartTotalElement.textContent = total.toFixed(2);
//     }

//     // Function to show alert message
//     function showAlert(message) {
//         const alertDiv = document.createElement("div");
//         alertDiv.classList.add("alert");
//         alertDiv.textContent = message;
//         document.body.appendChild(alertDiv);
    
//         // Automatically remove alert after 3 seconds
//         setTimeout(function() {
//             alertDiv.remove();
//         }, 1000);
//     }
// });


//LOCAL STORAGE
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const emptyCartButton = document.querySelector(".empty-cart");

    // Load cart data from local storage if available
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
        cartItemsContainer.innerHTML = storedCartItems;
        updateCartTotal();
    }

    // Add event listener to all "Add to Cart" buttons
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const itemName = button.dataset.name;
            const itemPrice = parseFloat(button.dataset.price);

            // Check if the item already exists in the cart
            const existingItem = Array.from(cartItemsContainer.children).find(row => row.cells[0].textContent === itemName);
            if (existingItem) {
                // Increase the quantity and update total price
                const quantityCell = existingItem.cells[2];
                const totalPriceCell = existingItem.cells[3];
                let quantity = parseInt(quantityCell.textContent);
                quantity++;
                quantityCell.textContent = quantity;
                totalPriceCell.textContent = (quantity * itemPrice).toFixed(2);
            } else {
                // Add item to the cart
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>${itemName}</td>
                    <td>${itemPrice}</td>
                    <td>1</td>
                    <td>${itemPrice}</td>
                `;
                cartItemsContainer.appendChild(newRow);
            }

            // Update cart total
            updateCartTotal();

            // Save cart data to local storage
            localStorage.setItem("cartItems", cartItemsContainer.innerHTML);

            // Show alert message
            showAlert("Item added to cart ✔");
        });
    });

    emptyCartButton.addEventListener("click", function() {
        if (cartItemsContainer.children.length === 0) {
            showAlert("Cart is already empty.");
            return;
        }
        // Clear the cart
        cartItemsContainer.innerHTML = "";
        cartTotalElement.textContent = "0.00";
    
        // Show alert message
        showAlert("Cart cleared successfully.");
    
        // Automatically remove alert after 3 seconds
        setTimeout(function() {
            const alertElement = document.querySelector(".alert");
            if (alertElement) {
                alertElement.remove();
            }
        }, 2000);
    });

    checkoutButton.addEventListener("click", function() {
        // Download cart data as text file
        downloadCartDataAsTextFile();
    });

    // Function to update cart total
    function updateCartTotal() {
        let total = 0;
        const cartRows = cartItemsContainer.querySelectorAll("tr");

        cartRows.forEach(function(row) {
            const price = parseFloat(row.cells[1].textContent);
            const quantity = parseInt(row.cells[2].textContent);
            total += price * quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Function to show alert message
    function showAlert(message) {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);
    
        // Automatically remove alert after 3 seconds
        setTimeout(function() {
            alertDiv.remove();
        }, 1000);
    }

    function downloadCartDataAsTextFile() {
        const fileName = "Configuration.txt";
        const cartRows = cartItemsContainer.querySelectorAll("tr");

        let textContent = "";
        textContent += "====================================================================================\n";
        textContent += "                                 PC's Custom\n";
        textContent += "====================================================================================\n\n";

        textContent += "Item Name".padEnd(40) + "Price".padEnd(15) + "Quantity".padEnd(15) + "Total Price\n";
        textContent += "------------------------------------------------------------------------------------\n";

        cartRows.forEach(function(row) {
            const itemName = row.cells[0].textContent;
            const itemPrice = parseFloat(row.cells[1].textContent);
            const quantity = parseInt(row.cells[2].textContent);
            const totalPrice = parseFloat(row.cells[3].textContent);
            textContent += `${itemName.padEnd(40)} $${itemPrice.toFixed(2).padEnd(15)} ${quantity.toString().padEnd(15)} $${totalPrice.toFixed(2)}\n`;
        });

        textContent += "\n====================================================================================\n";
        textContent += `TOTAL: $${cartTotalElement.textContent.padStart(74)}\n`;
        textContent += "====================================================================================";

        const blob = new Blob([textContent], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
});


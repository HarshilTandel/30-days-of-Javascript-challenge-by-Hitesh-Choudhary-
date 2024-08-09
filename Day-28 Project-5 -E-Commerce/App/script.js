// Product Data (JSON file)
const products = [
    {
        name: "Product 1",
        price: 10.99,
        description: "A great product.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+1"
    },
    {
        name: "Product 2",
        price: 19.99,
        description: "Another amazing product.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+2"
    },
    {
        name: "Product 3",
        price: 29.99,
        description: "High-quality product with excellent features.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+3"
    },
    {
        name: "Product 4",
        price: 14.99,
        description: "Affordable and reliable product.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+4"
    },
    {
        name: "Product 5",
        price: 24.99,
        description: "Premium product with great reviews.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+5"
    },
    {
        name: "Product 6",
        price: 34.99,
        description: "Top-notch product with advanced features.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+6"
    },
    {
        name: "Product 7",
        price: 9.99,
        description: "Budget-friendly option with good quality.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+7"
    },
    {
        name: "Product 8",
        price: 49.99,
        description: "Luxury product with exceptional craftsmanship.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+8"
    },
    {
        name: "Product 9",
        price: 39.99,
        description: "Elegant product with sophisticated design.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+9"
    },
    {
        name: "Product 10",
        price: 44.99,
        description: "Innovative product with cutting-edge technology.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+10"
    },
    {
        name: "Product 11",
        price: 25.99,
        description: "Versatile product with multiple features.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+11"
    },
    {
        name: "Product 12",
        price: 18.49,
        description: "Compact and convenient product for everyday use.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+12"
    },
    {
        name: "Product 13",
        price: 12.99,
        description: "Functional product with a modern touch.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+13"
    },
    {
        name: "Product 14",
        price: 22.99,
        description: "Stylish product with high performance.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+14"
    },
    {
        name: "Product 15",
        price: 31.99,
        description: "Durable product designed for long-term use.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+15"
    },{
        name: "Product 16",
        price: 31.99,
        description: "Durable product designed for long-term use.",
        imageUrl: "https://via.placeholder.com/250x150?text=Product+16"
    }
];

// Shopping Cart (Array to simulate database)
let cart = [];

// Function to display product listing
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img class="product-image" src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button data-product-id="${products.indexOf(product)}" class="add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Function to add product to shopping cart
function addToCart(event) {
    const productId = parseInt(event.target.dataset.productId);
    const product = products[productId];
    const cartItem = {
        product: product,
        quantity: 1
    };
    cart.push(cartItem);
    updateCart();
}

// Function to update shopping cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear existing cart items

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    cart.forEach(cartItem => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${cartItem.product.name} x ${cartItem.quantity} - $${(cartItem.product.price * cartItem.quantity).toFixed(2)}
            <button data-cart-index="${cart.indexOf(cartItem)}" class="remove-from-cart">Remove</button>
        `;
        cartItems.appendChild(listItem);
    });

    // Add event listeners to "Remove from Cart" buttons
    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
    removeFromCartButtons.forEach(button => {
        button.addEventListener("click", removeFromCart);
    });
}

// Function to remove product from shopping cart
function removeFromCart(event) {
    const cartIndex = parseInt(event.target.dataset.cartIndex);
    cart.splice(cartIndex, 1);
    updateCart();
}

// Function to handle checkout form submission
function handleCheckout(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const checkoutForm = document.getElementById("checkout-form-data");
    const formData = new FormData(checkoutForm);

    const orderDetails = {
        items: cart,
        ...Object.fromEntries(formData) // Convert FormData to an object
    };

    // Display order confirmation
    const orderConfirmation = document.getElementById("order-confirmation");
    const orderDetailsDiv = document.getElementById("order-details");
    orderDetailsDiv.innerHTML = ""; // Clear existing details

    orderDetails.items.forEach(cartItem => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${cartItem.product.name} x ${cartItem.quantity}`;
        orderDetailsDiv.appendChild(itemElement);
    });

    // Display other details (name, address, etc.)
    for (const [key, value] of Object.entries(orderDetails)) {
        if (key !== "items") {
            const detailElement = document.createElement("p");
            detailElement.textContent = `${key}: ${value}`;
            orderDetailsDiv.appendChild(detailElement);
        }
    }

    orderConfirmation.style.display = "block";
    checkoutForm.style.display = "none"; // Hide the checkout form

    // You can add code here to send the order data to a server for processing
    console.log("Order Details:", orderDetails);
}

// Event listener for checkout button
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", () => {
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.style.display = "block";
    document.getElementById("shopping-cart").style.display = "none";
});

// Event listener for checkout form submission
const checkoutForm = document.getElementById("checkout-form-data");
checkoutForm.addEventListener("submit", handleCheckout);

// Initialize display on page load
displayProducts();
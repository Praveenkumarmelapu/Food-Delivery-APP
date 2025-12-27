// Data Simulation
const categories = [
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80' },
    { name: 'Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sushi', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
    { name: 'Healthy', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
    { name: 'Dessert', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Drinks', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80' }
];

const restaurants = [
    {
        id: 1,
        name: "Burger King",
        rating: 4.5,
        time: "25-30 min",
        price: 350,
        tags: ["fast-food", "burger", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        promoted: true
    },
    {
        id: 2,
        name: "Pizza Hut",
        rating: 4.2,
        time: "30-40 min",
        price: 400,
        tags: ["fast-food", "pizza", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
        promoted: false
    },
    {
        id: 3,
        name: "Green Salad House",
        rating: 4.8,
        time: "15-25 min",
        price: 500,
        tags: ["healthy", "vegan", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        promoted: false
    },
    {
        id: 4,
        name: "Sushi Master",
        rating: 4.9,
        time: "40-50 min",
        price: 800,
        tags: ["asian", "sushi", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80",
        promoted: true
    },
    {
        id: 5,
        name: "Taco Bell",
        rating: 4.0,
        time: "20-30 min",
        price: 250,
        tags: ["fast-food", "mexican", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=600&q=80",
        promoted: false
    },
    {
        id: 6,
        name: "Wok & Walk",
        rating: 4.3,
        time: "35-45 min",
        price: 300,
        tags: ["asian", "chinese", "drinks", "dessert"],
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        promoted: false
    }
];

// Menu Data Simulation
const menuItems = [
    // Burgers
    { id: 101, name: "Classic Burger", price: 149, category: "burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
    { id: 107, name: "BBQ Bacon Burger", price: 199, category: "burger", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=300&q=80" },
    { id: 108, name: "Veggie Burger", price: 169, category: "burger", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80" },

    // Pizza
    { id: 102, name: "Cheese Pizza", price: 249, category: "pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80" },
    { id: 109, name: "Pepperoni Pizza", price: 299, category: "pizza", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80" },
    { id: 110, name: "Veggie Supreme", price: 279, category: "pizza", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80" },

    // Healthy
    { id: 103, name: "Caesar Salad", price: 179, category: "healthy", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80" },
    { id: 111, name: "Greek Salad", price: 199, category: "healthy", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=300&q=80" },
    { id: 112, name: "Fruit Bowl", price: 149, category: "healthy", img: "https://images.unsplash.com/photo-1511690656952-34342d5c2895?auto=format&fit=crop&w=300&q=80" },

    // Asian / Sushi
    { id: 104, name: "Sushi Roll", price: 349, category: "sushi", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80" },
    { id: 113, name: "Ramen Bowl", price: 299, category: "asian", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80" },
    { id: 114, name: "Dumplings", price: 189, category: "asian", img: "https://images.unsplash.com/photo-1496116218417-7a17478ee173?auto=format&fit=crop&w=300&q=80" },

    // Mexican
    { id: 115, name: "Tacos (3pcs)", price: 229, category: "mexican", img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=300&q=80" },
    { id: 116, name: "Burrito", price: 249, category: "mexican", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80" },

    // Desserts & Drinks (Available for all)
    { id: 105, name: "Chocolate Cake", price: 119, category: "dessert", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80" },
    { id: 117, name: "Brownie", price: 99, category: "dessert", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80" },
    { id: 106, name: "Coke", price: 49, category: "drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80" },
    { id: 118, name: "Lemonade", price: 69, category: "drinks", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" }
];

let cart = [];

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const restaurantGrid = document.getElementById('restaurantGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const toast = document.getElementById('toast');
const cartBadge = document.getElementById('cartBadge');
const mobileCartBadge = document.getElementById('mobileCartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

let currentCategory = 'all';
let isLoggedIn = false;
let currentUser = { name: "Guest", email: "" };
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let discountFactor = 1;
let currentMaxPrice = 1000;
let checkoutStep = 1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check LocalStorage for login state
    if (localStorage.getItem('isLoggedIn') === 'true') {
        isLoggedIn = true;
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
        }
        updateAuthUI();
    }
    renderCategories();
    renderRestaurants(restaurants);
});

// Render Categories
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="cat-card" onclick="filterByCategory('${cat.name}')">
            <img src="${cat.img}" alt="${cat.name}" class="cat-img">
            <p>${cat.name}</p>
        </div>
    `).join('');
}

// Render Restaurants
function renderRestaurants(data) {
    restaurantGrid.innerHTML = data.map(res => `
        <div class="res-card" onclick="openMenu(${res.id})">
            <div class="res-img-container">
                <img src="${res.img}" alt="${res.name}" class="res-img">
                ${res.promoted ? '<span class="promoted-tag">Promoted</span>' : ''}
                <span class="delivery-time">${res.time}</span>
                <button class="fav-btn ${favorites.includes(res.id) ? 'active' : ''}" onclick="toggleFavorite(event, ${res.id})">
                    <i class="${favorites.includes(res.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="share-btn" onclick="shareRestaurant(event, '${res.name}')"><i class="fas fa-share-alt"></i></button>
            </div>
            <div class="res-info">
                <div class="res-header">
                    <span class="res-name">${res.name}</span>
                    <span class="res-rating"><i class="fas fa-star"></i> ${res.rating}</span>
                </div>
                <div class="res-meta">
                    <span>${res.tags.join(', ')}</span>
                    <span>₹${res.price} for two</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filtering Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        
        currentCategory = btn.getAttribute('data-filter');
        applyFilters();
    });
});

// Category Filter Logic
function filterByCategory(categoryName) {
    const term = categoryName.toLowerCase();
    currentCategory = term;
    // Reset other filters visually
    filterBtns.forEach(b => b.classList.remove('active'));
    applyFilters();
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    showToast(`Showing ${categoryName}`);
}

// Price Filter Logic
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', (e) => {
    currentMaxPrice = parseInt(e.target.value);
    priceValue.textContent = `₹${currentMaxPrice}`;
    applyFilters();
});

// Unified Filter Function
function applyFilters() {
    let filtered = restaurants;

    // Filter by Category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(r => r.tags.includes(currentCategory));
    }

    // Filter by Price
    filtered = filtered.filter(r => r.price <= currentMaxPrice);

    // Filter by Search Term
    const val = searchInput.value.toLowerCase();
    if (val) {
        const matchingCategories = menuItems
            .filter(item => item.name.toLowerCase().includes(val))
            .map(item => item.category);

        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(val) || 
            r.tags.some(tag => tag.includes(val)) ||
            r.tags.some(tag => matchingCategories.includes(tag))
        );
    }

    renderRestaurants(filtered);
}

// Search Logic
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 300); // Debounce delay of 300ms
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        clearTimeout(searchTimeout);
        applyFilters();
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    }
});

// Mobile Search Logic
mobileSearchInput.addEventListener('input', (e) => {
    searchInput.value = e.target.value;
    // Trigger input event on main search input to run existing debounce logic
    searchInput.dispatchEvent(new Event('input'));
});

mobileSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        closeSearch();
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    }
});

// Toast Notification
window.showToast = function(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// --- Cart & Menu Logic ---

function openMenu(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const modal = document.getElementById('menuModal');
    const header = document.getElementById('menuHeader');
    const grid = document.getElementById('menuGrid');
    
    let relevantItems;

    // If user specifically selected Drinks or Dessert, show only those items
    if (currentCategory === 'drinks' || currentCategory === 'dessert') {
        relevantItems = menuItems.filter(item => item.category === currentCategory);
    } else {
        // Otherwise show full menu (Food + Drinks + Desserts)
        relevantItems = menuItems.filter(item => 
            restaurant.tags.includes(item.category) || 
            item.category === 'drinks' || 
            item.category === 'dessert'
        );
    }

    header.innerHTML = `<h2>Menu: ${restaurant.name}</h2>`;
    grid.innerHTML = relevantItems.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}" class="menu-img">
            <div class="menu-details">
                <h4>${item.name}</h4>
                <p>₹${item.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add</button>
        </div>
    `).join('');
    
    modal.classList.add('show');
}

function closeMenu() {
    document.getElementById('menuModal').classList.remove('show');
}

function addToCart(itemId) {
    if (!isLoggedIn) {
        openLogin();
        showToast("Please log in to shop! 🔒");
        return;
    }

    const item = menuItems.find(i => i.id === itemId);
    const existing = cart.find(i => i.id === itemId);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    updateCartUI();
    showToast(`${item.name} added!`);
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    
    // Update Badge
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalQty;
    if(mobileCartBadge) mobileCartBadge.textContent = totalQty;
    
    // Render Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; padding:20px;">Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-left">
                    <img src="${item.img}" class="cart-item-img" alt="${item.name}">
                    <div>
                        <h4>${item.name}</h4>
                        <p>₹${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                </div>
                <div class="cart-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span style="margin:0 10px;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
    
    // Update Total
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    total = total * discountFactor;
    cartTotalEl.textContent = total.toFixed(2);
}

function changeQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    }
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

function openCheckout() {
    if (cart.length === 0) return showToast("Cart is empty!");
    toggleCart(); // Close sidebar
    checkoutStep = 1;
    updateCheckoutUI();
    document.getElementById('checkoutModal').classList.add('show');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

function handleCheckout(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.pay-btn');
    const originalText = btn.innerHTML;

    // Show loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        // Save Order to LocalStorage
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const newOrder = {
            id: Date.now().toString().slice(-6), // Simple short ID
            date: new Date().toLocaleDateString(),
            items: cart.map(item => `${item.qty}x ${item.name}`).join(', '),
            cartData: JSON.parse(JSON.stringify(cart)),
            total: total.toFixed(2),
            status: 'Processing'
        };
        const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
        history.push(newOrder);
        localStorage.setItem('orderHistory', JSON.stringify(history));

        document.getElementById('checkoutModal').classList.remove('show');
        cart = [];
        discountFactor = 1;
        updateCartUI();
        
        if(paymentMethod === 'cod') {
            showToast("Order placed! Pay on delivery. 🏠");
        } else {
            showToast("Payment successful! Order placed. 💳");
        }

        // Trigger Confetti Animation
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Reset button
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 2000);
}

function applyDiscount() {
    const input = document.getElementById('discountInput');
    const code = input.value.trim().toUpperCase();
    
    if (code === 'WELCOME50') {
        discountFactor = 0.5;
        showToast("50% Discount Applied! 🎉");
    } else {
        discountFactor = 1;
        showToast("Invalid Coupon Code ❌");
    }
    updateCartUI();
}

function togglePayment() {
    const method = document.querySelector('input[name="payment"]:checked').value;
    const cardDetails = document.getElementById('cardDetails');
    const inputs = cardDetails.querySelectorAll('input');

    if (method === 'cod') {
        cardDetails.classList.add('hidden');
        inputs.forEach(input => input.removeAttribute('required'));
    } else {
        cardDetails.classList.remove('hidden');
        inputs.forEach(input => input.setAttribute('required', 'true'));
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    mobileMenuOverlay.classList.toggle('show');
}

// Location Logic
function getLocation() {
    const locationText = document.querySelector('.location-selector span');
    if (navigator.geolocation) {
        locationText.textContent = "Locating...";
        navigator.geolocation.getCurrentPosition((position) => {
            setTimeout(() => {
                const newLoc = "New York, USA (Detected)";
                locationText.textContent = newLoc;
                // Update mobile location text too
                const mobileLoc = document.querySelector('.mobile-location span');
                if(mobileLoc) mobileLoc.textContent = newLoc;
                showToast("Location updated! 📍");
            }, 1000);
        }, () => {
            showToast("Location access denied.");
            locationText.textContent = "New York, USA";
        });
    } else {
        showToast("Geolocation not supported.");
    }
}

// --- Auth Logic ---

function openLogin() { document.getElementById('loginModal').classList.add('show'); }
function closeLogin() { document.getElementById('loginModal').classList.remove('show'); }
function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    currentUser = { name: "John Doe", email: email }; // Simulate user data
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    closeLogin();
    showToast("Logged in successfully! 👋");
}

function handleLogout() {
    if (confirm("Are you sure you want to log out?")) {
        isLoggedIn = false;
        currentUser = { name: "Guest", email: "" };
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        updateAuthUI();
        showToast("Logged out successfully.");
    }
}

function updateAuthUI() {
    const authIcon = document.querySelector('.auth-icon');
    const logoutBtn = document.querySelector('.logout-btn');
    const profileIcon = document.querySelector('.profile-icon');
    const favoriteIcon = document.querySelector('.favorite-icon');
    
    // Mobile elements
    const mobileLoginBtn = document.querySelector('.mobile-login-btn');
    const mobileLogoutBtn = document.querySelector('.mobile-logout-btn');

    if (isLoggedIn) {
        if (authIcon) authIcon.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        profileIcon.style.display = 'flex';
        if (favoriteIcon) favoriteIcon.style.display = 'flex';
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'block';
    } else {
        if (authIcon) authIcon.style.display = 'inline-flex';
        logoutBtn.style.display = 'none';
        profileIcon.style.display = 'none';
        if (favoriteIcon) favoriteIcon.style.display = 'none';
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'block';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';
    }
}

function openSignup() { document.getElementById('signupModal').classList.add('show'); }
function closeSignup() { document.getElementById('signupModal').classList.remove('show'); }
function handleSignup(e) {
    e.preventDefault();
    closeSignup();
    showToast("Account created! Welcome! 🎉");
}

function openProfile() {
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    
    // Load Order History
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const historyContainer = document.getElementById('orderHistory');
    const orderCount = document.querySelector('.stat-item strong');
    const searchInput = document.getElementById('orderSearchInput');
    
    if(orderCount) orderCount.textContent = history.length;

    // Reverse history to show newest first
    const reversedHistory = [...history].reverse();

    const renderOrders = (orders) => {
        if (orders.length === 0) {
            historyContainer.innerHTML = '<p class="no-orders">No matching orders found.</p>';
        } else {
            historyContainer.innerHTML = orders.map(order => `
                <div class="order-card">
                    <div class="order-header"><span>#${order.id}</span><span>${order.date}</span></div>
                    <div class="order-items">${order.items}</div>
                    <div class="order-footer">
                        <div>
                            <span class="order-total">₹${order.total}</span>
                            <span class="order-status">${order.status}</span>
                        </div>
                        ${order.cartData ? `<button class="reorder-btn" onclick="reorder('${order.id}')">Reorder</button>` : ''}
                    </div>
                </div>
            `).join('');
        }
    };

    searchInput.value = '';
    renderOrders(reversedHistory);

    searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = reversedHistory.filter(order => 
            order.id.toLowerCase().includes(term) || 
            order.items.toLowerCase().includes(term) ||
            order.date.toLowerCase().includes(term)
        );
        renderOrders(filtered);
    };

    document.getElementById('profileModal').classList.add('show');
}
function closeProfile() { document.getElementById('profileModal').classList.remove('show'); }

function openFavorites() {
    renderFavoritesList();
    document.getElementById('favoritesModal').classList.add('show');
}
function closeFavorites() { document.getElementById('favoritesModal').classList.remove('show'); }

function reorder(orderId) {
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const order = history.find(o => o.id === orderId);
    
    if (order && order.cartData) {
        order.cartData.forEach(orderItem => {
            const existing = cart.find(i => i.id === orderItem.id);
            if (existing) {
                existing.qty += orderItem.qty;
            } else {
                cart.push({ ...orderItem });
            }
        });
        updateCartUI();
        closeProfile();
        toggleCart();
        showToast("Items added to cart! 🛒");
    }
}

// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

function shareRestaurant(event, restaurantName) {
    event.stopPropagation();
    const link = `${window.location.origin}/restaurant/${restaurantName.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(link).then(() => {
        showToast("Link copied to clipboard! 🔗");
    }).catch(() => {
        showToast("Failed to copy link.");
    });
}

function toggleFavorite(event, id) {
    event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        showToast("Added to favorites! ❤️");
    } else {
        favorites.splice(index, 1);
        showToast("Removed from favorites.");
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    btn.classList.toggle('active');
    
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
}

function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function renderFavoritesList() {
    const container = document.getElementById('favoritesList');
    if (favorites.length === 0) {
        container.innerHTML = '<p class="no-favs">No favorites yet.</p>';
        return;
    }

    const favRestaurants = restaurants.filter(r => favorites.includes(r.id));
    
    container.innerHTML = favRestaurants.map(res => `
        <div class="fav-item">
            <img src="${res.img}" alt="${res.name}" class="fav-img">
            <div class="fav-info">
                <h4>${res.name}</h4>
                <p>${res.tags.join(', ')}</p>
            </div>
            <button class="remove-fav-btn" onclick="removeFavorite(${res.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function removeFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showToast("Removed from favorites.");
        renderFavoritesList(); // Re-render list
        
        // Update main grid heart icon if visible
        const btn = document.querySelector(`.fav-btn[onclick*="${id}"]`);
        if (btn) {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
}

function updateCheckoutUI() {
    // Update Progress Bar
    document.querySelectorAll('.step-node').forEach(node => {
        const step = parseInt(node.getAttribute('data-step'));
        if (step <= checkoutStep) node.classList.add('active');
        else node.classList.remove('active');
    });
    
    document.querySelectorAll('.step-line').forEach((line, index) => {
        if (index < checkoutStep - 1) line.classList.add('active');
        else line.classList.remove('active');
    });

    // Show/Hide Steps
    document.querySelectorAll('.checkout-step-content').forEach(content => {
        if (parseInt(content.getAttribute('data-step')) === checkoutStep) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Update Buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const payBtn = document.querySelector('.pay-btn');

    if (checkoutStep === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        payBtn.style.display = 'none';
    } else if (checkoutStep === 2) {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
        payBtn.style.display = 'none';
    } else if (checkoutStep === 3) {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        payBtn.style.display = 'inline-block';
        
        // Update Summary
        document.getElementById('summaryItems').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
        let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        total = total * discountFactor;
        document.getElementById('summaryTotal').textContent = '₹' + total.toFixed(2);
    }
}

function changeCheckoutStep(stepChange) {
    const currentStepEl = document.querySelector(`.checkout-step-content[data-step="${checkoutStep}"]`);
    
    // Validation for Next
    if (stepChange > 0) {
        const inputs = currentStepEl.querySelectorAll('input[required]');
        let valid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                valid = false;
            }
        });
        if (!valid) return;
    }

    checkoutStep += stepChange;
    updateCheckoutUI();
}

function openSearch() {
    document.getElementById('searchModal').classList.add('show');
    setTimeout(() => document.getElementById('mobileSearchInput').focus(), 100);
}
function closeSearch() {
    document.getElementById('searchModal').classList.remove('show');
}
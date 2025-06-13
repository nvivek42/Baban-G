// Work Gallery
const workImages = [
    { src: 'images/work1.jpg', alt: 'Work Sample 1' },
    { src: 'images/work2.jpg', alt: 'Work Sample 2' },
    { src: 'images/work3.jpg', alt: 'Work Sample 3' },
    // Add more images as needed
];

function loadGallery() {
    const gallery = document.getElementById('workGallery');
    workImages.forEach(image => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        gallery.appendChild(div);
    });
}

// Reviews System
let reviews = [
    {
        name: 'John Doe',
        text: 'Excellent work ethic and always maintains cleanliness to the highest standard.'
    },
    {
        name: 'Jane Smith',
        text: 'Very reliable and professional. Would highly recommend!'
    }
    // Add more reviews as needed
];

function displayReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = '';
    
    reviews.forEach(review => {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
            <h4>${review.name}</h4>
            <p>${review.text}</p>
        `;
        container.appendChild(div);
    });
}

// Handle new review submission
document.getElementById('addReviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reviewerName').value;
    const text = document.getElementById('reviewText').value;
    
    if (name && text) {
        reviews.push({ name, text });
        displayReviews();
        this.reset();
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    displayReviews();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
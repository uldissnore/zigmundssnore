// Lightbox functionality
document.querySelectorAll('.art-piece img').forEach((image) => {
    image.addEventListener('click', () => {
        // Create the lightbox element
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // Add the image inside the lightbox
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt || 'Art Piece'; // Adding alt text for better accessibility
        lightbox.appendChild(img);

        // Add a close button to the lightbox
        const closeBtn = document.createElement('span');
        closeBtn.textContent = '×';
        closeBtn.classList.add('close-btn');
        lightbox.appendChild(closeBtn);

        // Append the lightbox to the body
        document.body.appendChild(lightbox);

        // Close the lightbox when clicked on the close button or anywhere outside the image
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    });
});

// Scroll-to-top functionality
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑'; // Use Unicode arrow for a simple up button
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show button after scrolling 200px down
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Smooth scroll back to top when button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

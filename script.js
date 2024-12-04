// Lightbox functionality
document.querySelectorAll('.art-piece img').forEach((image) => {
    image.addEventListener('click', () => {
        // Create the lightbox element
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // Add the image inside the lightbox
        const img = document.createElement('img');
        img.src = image.src;
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
scrollTopButton.textContent = '↑';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

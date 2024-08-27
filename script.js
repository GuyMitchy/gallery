document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Array of image paths (replace with your image paths)
    const images = [
        'images/8.png',
        'images/9.png',
        'images/10.png',
        'images/11.png',
        // Add more images as needed
    ];

    // Function to load images
    function loadImages() {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            gallery.appendChild(img);
        });
    }

    // Function to show image at current index
    function showImage(index) {
        gallery.style.transform = `translateX(-${index * 100}%)`;
    }

    // Next image function
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Previous image function
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    gallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchStartX - touchEndX > 30) {
            nextImage();
        } else if (touchEndX - touchStartX > 30) {
            prevImage();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Initial load
    loadImages();
});
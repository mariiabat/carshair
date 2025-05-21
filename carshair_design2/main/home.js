document.addEventListener('DOMContentLoaded', function() {
    let currentPosition = 0;
    const itemsPerView = 3;
    const carouselItems = document.querySelector('.car_list_items');
    const items = document.querySelectorAll('.car_list_item');
    const totalItems = items.length;
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 20; // Width + gap
        const maxPosition = -(totalItems - itemsPerView) * itemWidth;
        
        // Handle boundaries
        if (currentPosition > 0) currentPosition = 0;
        if (currentPosition < maxPosition) currentPosition = maxPosition;
        
        carouselItems.style.transform = `translateX(${currentPosition}px)`;

        // Update button states
        prevButton.style.opacity = currentPosition === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentPosition <= maxPosition ? '0.5' : '1';
    }

    function moveCarousel(direction) {
        const itemWidth = items[0].offsetWidth + 20;
        currentPosition += direction * itemWidth;
        updateCarousel();
    }

    // Add event listeners
    prevButton.addEventListener('click', () => moveCarousel(1));
    nextButton.addEventListener('click', () => moveCarousel(-1));

    // Initial setup
    updateCarousel();

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            currentPosition = 0; // Reset position on resize
            updateCarousel();
        }, 250);
    });
});

//change slides on home page
let currentSlide = 0;
const slides = [
    {
        image: "../img/img_slider.png",
        text: "Знайдіть автомобіль поруч із вами — доступний 24/7."
    },
    {
        image: "../img/img_slider2.png",
        text: "Забронюйте автомобіль онлайн за кілька кліків."
    },
    {
        image: "../img/img_slider3.png",
        text: "Отримайте доступ до автомобіля за допомогою додатку."
    }
];

function updateSlider() {
    const sliderImg = document.querySelector('.slider_img');
    const sliderText = document.querySelector('.slider_text');
    const progress = document.querySelector('.progress');
    sliderImg.style.opacity = 0;

    setTimeout(() => {
        sliderImg.src = slides[currentSlide].image;
        sliderText.textContent = slides[currentSlide].text;

        sliderImg.style.opacity = 1;
    }, 300); 

    const progressWidth = ((currentSlide + 1) / slides.length) * 100;
    progress.style.width = `${progressWidth}%`;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
});

function showAccountIcon(name) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('signup-btn').style.display = 'none';
    const accLink = document.getElementById('account-link');
    accLink.style.display = 'inline-block';
    accLink.title = name;
}

// Після успішного входу:

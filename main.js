const featuredProducts = [
    {id: 1, name: "تيشيرت رجالي", price: 250, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeTCqBtwdGU_dnXR-InPxYNGIGJlLjROaa9nNymDzphnwl2nJawVI0CBDEXQJ67fHrNpzX5zVwDWPnzJ2_LwHblnx7bji2e33cBS1dU8CRF6_hTz26byfml01xoP8CrH0pwBgRvg&usqp=CAc"},
    {id: 2, name: "ساعه يد", price: 450, img: "https://i.pinimg.com/736x/c8/84/e3/c884e3ca500a78858fd9fff01f8f7912.jpg"},
    {id: 6, name: "حذاء رياضي", price: 600, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"},
    {id: 11, name: "حقيبة يد", price: 550, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"}
];

const specialOffers = [
    {id: 1, name: "خصم 30% على الملابس الشتوية", description: "احصل على خصم 30% على جميع المعاطف والجاكيتات الشتوية", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
    {id: 2, name: "عرض خاص على الأحذية", description: "اشترِ حذاءين واحصل على الثالث مجاناً", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"},
    {id: 3, name: "تخفيضات نهاية الموسم", description: "تخفيضات تصل إلى 50% على تشكيلة الصيف", image: "https://img.youm7.com/ArticleImgs/2021/9/14/141072-%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A3%D8%A8%D9%84-(3).jpg"}
];

const testimonials = [
    {id: 1, name: "أحمد محمد", text: "تجربة رائعة مع Fashionify! المنتجات ذات جودة عالية والتوصيل سريع", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"},
    {id: 2, name: "فاطمة علي", text: "أحب التنوع في المنتجات والأسعار المناسبة للجميع", image: "https://i.pinimg.com/1200x/02/1b/96/021b96fe5e939a283cebd35cbb2376e0.jpg"},
    {id: 3, name: "خالد إبراهيم", text: "خدمة العملاء ممتازة والمنتجات تلبي التوقعات", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"}
];

document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    displaySpecialOffers();
    displayTestimonials();
    setupEventListeners();
    setupContactForm();
});

function setupEventListeners() {
    window.addEventListener('scroll', handleScroll);
    
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
}

function handleScroll() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    if (backToTopBtn) {
        if (scrollY > 500) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    featuredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <div class="price">${product.price} جنيه</div>
                <button class="buy-btn" onclick="location.href='products.html'">🛒 عرض المنتج</button>
            </div>
        `;
        container.appendChild(productElement);
    });
}

function displaySpecialOffers() {
    const container = document.getElementById('offers-container');
    if (!container) return;
    
    specialOffers.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.classList.add('offer-card');
        offerCard.innerHTML = `
            <img src="${offer.image}" alt="${offer.name}">
            <div class="offer-content">
                <h3>${offer.name}</h3>
                <p>${offer.description}</p>
            </div>
        `;
        container.appendChild(offerCard);
    });
}

function displayTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) return;
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        testimonialCard.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        `;
        container.appendChild(testimonialCard);
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            console.log('تم إرسال النموذج:', { name, email, subject, message });
            
            alert('شكراً لك! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.');
            
            contactForm.reset();
        });
    }
}
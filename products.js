const products = {
    men: [
        {id:1, name:"تيشيرت رجالي", price:250, img:"https://m.media-amazon.com/images/I/51PZAqX4gOL._AC_UL480_FMwebp_QL65_.jpg"},
                {id:3, name:"جاكيت جلد", price:700, img:"https://i.pinimg.com/1200x/43/0e/fd/430efd336898a9e3da8349380d9bb145.jpg"},

        {id:4, name:"سروال جينز", price:300, img:"https://i.pinimg.com/736x/97/e6/6e/97e66ec0779e9915bb7a0ce0bf700225.jpg"},
        {id:6, name:"حذاء رياضي", price:600, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"},
        {id:7, name:"قميص رسمي", price:400, img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"},
        {id:14, name:"بنطلون كاجوال", price:320, img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"},
        {id:20, name:"ربطة عنق", price:180, img:"https://i.pinimg.com/1200x/ab/f4/52/abf452a96abdb815f97a5027a0e23520.jpg"},
        {id:29, name:"قميص بولو", price:280, img:"https://i.pinimg.com/736x/cc/45/ea/cc45ea42f2c32f5ad6622387e58664f7.jpg"},
        {id:30, name:"جاكيت رياضي", price:550, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:33, name:"تيشيرت بولو رجالي", price:320, img:"https://i.pinimg.com/1200x/05/98/fb/0598fb6f4d7ae0d58cbc254520d18db1.jpg"},
        {id:34, name:"سروال كاجوال", price:380, img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"},
        {id:35, name:"جاكيت شتوي", price:850, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:36, name:"قميص كتان", price:450, img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"},
        {id:38, name:"جوارب قطنية", price:60, img:"https://i.pinimg.com/1200x/a7/42/5c/a7425c65513df3a7d98d476bf4952d06.jpg"},
        {id:39, name:"حذاء جلد طبيعي", price:1200, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"},
        {id:40, name:"ساعة يد فاخرة", price:1800, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"},
        {id:41, name:"نظارة شمسية كلاسيكية", price:400, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"},
        {id:42, name:"حقيبة كتف جلدية", price:750, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"}
    ],
    women: [
        {id:11, name:"حقيبة يد", price:550, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"},
        {id:13, name:"بلوزة صوف", price:420, img:"https://i.pinimg.com/736x/8a/c3/7e/8ac37ee9e7efffa8becc941978cea01d.jpg"},
        {id:17, name:"معطف شتوي", price:900, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:19, name:"سوار نسائي", price:200, img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80"},
        {id:23, name:"نسائي", price:650, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"},
        {id:28, name:"ملابس شباب", price:120, img:"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"},
        {id:43, name:"فستان", price:850, img:"https://i.pinimg.com/1200x/6a/d0/f6/6ad0f6dba9f873dbdb4df5b5758b1bb8.jpg"},
        {id:44, name:"جينز رجالي", price:420, img:"https://i.pinimg.com/1200x/19/ee/51/19ee510b81a9f59ce2e51be24e317139.jpg"},
        {id:46, name:"لبس جلد", price:680, img:"https://i.pinimg.com/1200x/84/a6/3b/84a63b1e0fc2abfde1d4b44e0c4cf351.jpg"},
        {id:47, name:"جاكيت جينز", price:720, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"},
        {id:48, name:"فساتين صيفية", price:380, img:"https://i.pinimg.com/736x/fd/3a/44/fd3a446043b1c597711389dd33331bfa.jpg"},
        {id:49, name:"حذاء كعب عالي", price:650, img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"},
        {id:50, name:"حقيبة سفر نسائية", price:950, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"},
        {id:51, name:"مجوهرات ذهبية", price:1200, img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"},
        {id:52, name:"سوار فاخر", price:350, img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80"},
        {id:53, name:"عقد لؤلؤ", price:780, img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"},
        {id:54, name:"أقراط أنيقة", price:220, img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"},
    ],
    kids: [
        {id:9, name:"ساعة يد", price:1200, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"},
        {id:10, name:"نظارة شمسية", price:350, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"},
        {id:15, name:"جوارب", price:80, img:"https://i.pinimg.com/1200x/75/e7/87/75e7875a096e472bf59c5ba5e3b3ba9c.jpg"},
        {id:16, name:"قبعة", price:150, img:"https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80"},
        {id:25, name:"تيشيرت أطفال", price:150, img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"},
        {id:27, name:"بدلة أطفال", price:480, img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"},
        {id:31, name:"حقيبة ظهر", price:400, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"},
        {id:32, name:"شنطة سفر", price:800, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"},
        {id:58, name:"جاكيت أطفال", price:280, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:59, name:"بنطلون جينز أطفال", price:220, img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"},
        {id:60, name:"قميص أطفال", price:140, img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"},
        {id:63, name:"قبعة شتوية أطفال", price:90, img:"https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80"},
        {id:65, name:"حقيبة مدرسية", price:350, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"},
        {id:66, name:"ملابس سباحة أطفال", price:180, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:68, name:"معطف أطفال", price:420, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:69, name:"بلوزة أطفال", price:160, img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"},
        {id:70, name:"تنورة طفلة", price:190, img:"https://i.pinimg.com/736x/d9/44/af/d944afe5d37f2cd6ba5387bbc0acdbe3.jpg"},
        {id:72, name:"حذاء رياضي أطفال", price:380, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"},
        {id:74, name:"جاكيت رياضي أطفال", price:320, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"},
        {id:75, name:"ملابس أطفال", price:70, img:"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"},
        {id:76, name:"قفازات أطفال", price:60, img:"https://i.pinimg.com/736x/71/a4/2b/71a42b8f42368730cb77e45767c24e12.jpg"},
        {id:78, name:"نظارة شمسية أطفال", price:120, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"},
        {id:79, name:"حقيبة يد أطفال", price:180, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"},
        {id:80, name:"إكسسوارات شعر أطفال", price:65, img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"},
        {id:81, name:"ساعة يد أطفال", price:150, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"},
        {id:82, name:"حذاء حفلة أطفال", price:280, img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"}
    ]
};

let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', function() {
    displayProducts('all');
    setupEventListeners();
});

function setupEventListeners() {
    window.addEventListener('scroll', handleScroll);
    
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = category;
            displayProducts(category);
        });
    });
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

function displayProducts(category) {
    const targetCategory = document.getElementById(`${category}-category`);
    const categories = document.querySelectorAll('.product-category');
    
    categories.forEach(cat => {
        cat.classList.remove('active');
    });
    
    const categoryProducts = category === 'all' 
        ? [...products.men, ...products.women, ...products.kids] 
        : products[category];
    
    targetCategory.innerHTML = '';
    
    categoryProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.style.animationDelay = `${index * 0.05}s`;
        
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <div class="price">${product.price} جنيه</div>
                <button class="buy-btn">🛒 أضف للسلة</button>
            </div>
        `;
        
        targetCategory.appendChild(productElement);
    });
    
    targetCategory.classList.add('active');
}

function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryProducts = currentCategory === 'all' 
        ? [...products.men, ...products.women, ...products.kids] 
        : products[currentCategory];
    
    const filteredProducts = categoryProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    const targetCategory = document.getElementById(`${currentCategory}-category`);
    targetCategory.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.style.animationDelay = `${index * 0.05}s`;
        
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <div class="price">${product.price} جنيه</div>
                <button class="buy-btn">🛒 أضف للسلة</button>
            </div>
        `;
        
        targetCategory.appendChild(productElement);
    });
}

function sortProducts() {
    const sortValue = document.getElementById('sort-select').value;
    const categoryProducts = currentCategory === 'all' 
        ? [...products.men, ...products.women, ...products.kids] 
        : products[currentCategory];
    
    let sortedProducts = [...categoryProducts];
    
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const targetCategory = document.getElementById(`${currentCategory}-category`);
    targetCategory.innerHTML = '';
    
    sortedProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.style.animationDelay = `${index * 0.05}s`;
        
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <div class="price">${product.price} جنيه</div>
                <button class="buy-btn">🛒 أضف للسلة</button>
            </div>
        `;
        
        targetCategory.appendChild(productElement);
    });
}
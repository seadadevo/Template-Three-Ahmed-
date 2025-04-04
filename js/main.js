const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-goal');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
   
     
    const startCounter1 = () => {
        const heightOfWinow = window.innerHeight;
        const stats = document.querySelector('.stats h2');
        const statsTop = stats.getBoundingClientRect().top
        if(statsTop <= heightOfWinow && statsTop >=0) {
            updateCounter()
        window.removeEventListener('scroll', startCounter1)
        }
        
    }
    window.addEventListener('scroll', startCounter1)
   
});






// const counters = document.querySelectorAll('.number');

// // وظيفة تحديث العدادات
// const updateCounter = (counter) => {
//     counter.innerText = '0';
//     const target = +counter.getAttribute('data-goal');

//     const increment = target / 200; // مقدار التزايد

//     const incrementCounter = () => {
//         const c = +counter.innerText;

//         if (c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`;
//             setTimeout(incrementCounter, 1);
//         } else {
//             counter.innerText = target;
//         }
//     };

//     incrementCounter();
// };

// // إعداد Intersection Observer
// const stat = document.getElementById('stats');

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             counters.forEach(counter => updateCounter(counter));
//             observer.unobserve(stat); // لإيقاف المراقبة بعد التشغيل مرة واحدة
//         }
//     });
// }, {
//     root: null, // عرض الصفحة
//     threshold: 0.5 // يبدأ العمل عندما يظهر 50% من العنصر
// });

// // ربط العنصر stats بالمراقبة
// observer.observe(stat);




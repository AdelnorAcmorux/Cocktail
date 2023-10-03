document.addEventListener('DOMContentLoaded', function () {
    var scrollIcon = document.getElementById('scroll-icon');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollIcon.classList.add('hide');
        } else {
            scrollIcon.classList.remove('hide');
        }
    });

    scrollIcon.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

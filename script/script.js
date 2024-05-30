// Toggle the nav menu on button click
document.querySelector('#logo').addEventListener('click', function(event) {
    var nav = document.querySelector('nav');
    nav.classList.toggle('is-visible');
    event.stopPropagation();
});

// JavaScript: Close the nav menu if clicked out of focus
document.addEventListener('click', function(event) {
    var nav = document.querySelector('nav');
    if (event.target.closest('#logo') === null && nav.classList.contains('is-visible')) {
        nav.classList.remove('is-visible');
    }
});

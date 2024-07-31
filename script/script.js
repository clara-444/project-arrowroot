// Toggle nav menu on click
document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('nav-button');
    const navMenu = document.querySelector('.main-nav > ul');

    navButton.addEventListener('click', function() {
        // Toggle the 'active' class on the nav menu
        navMenu.classList.toggle('active');
    });
});

// nav menu buttons
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from bubbling up

            // Close all other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdownOptions = otherToggle.querySelector('.dropdown-options');
                    otherDropdownOptions.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            const dropdownOptions = this.querySelector('.dropdown-options');
            const isVisible = dropdownOptions.style.display === 'flex';
            dropdownOptions.style.display = isVisible ? 'none' : 'flex';
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown-toggle')) {
            dropdownToggles.forEach(toggle => {
                const dropdownOptions = toggle.querySelector('.dropdown-options');
                dropdownOptions.style.display = 'none';
            });
        }
    });
});



// Footer: copy email to clipboard on click
function copyEmailToClipboard() {
    var copyText = document.getElementById("emailAddress");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the email: " + copyText.value); // Optional: alert the user
}

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('explore-program-questions-back-button');
    const nextButton = document.getElementById('explore-program-questions-next-button');
    const items = document.querySelectorAll('.explore-program-questions-list-item');
    let index = 0;

    // Hide all items except the first one
    function updateVisibility() {
        if (window.innerWidth < 1102) {
            items.forEach((item, index) => {
                if (index !== 0) item.style.display = 'none';
            });
        } else {
            items.forEach(item => {
                item.style.display = 'block';
            });
        }
    }

    backButton.addEventListener('click', function() {
        console.log('Back button clicked');
        items[index].style.display = 'none';
        index = (index - 1 + items.length) % items.length;
        items[index].style.display = 'block';
    });

    nextButton.addEventListener('click', function() {
        console.log('Next button clicked');
        items[index].style.display = 'none';
        index = (index + 1) % items.length;
        items[index].style.display = 'block';
    });

    window.addEventListener('resize', updateVisibility);
    updateVisibility();
});

// current events 2 buttons
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('current-events-2-back-button');
    const nextButton = document.getElementById('current-events-2-next-button');
    const items = document.querySelectorAll('.current-events-2-list-item');
    let index = 0;

    // Hide all items except the first one
    function updateVisibility() {
        if (window.innerWidth < 1145) {
            items.forEach((item, index) => {
                if (index !== 0) item.style.display = 'none';
            });
        } else {
            items.forEach(item => {
                item.style.display = 'block';
            });
        }
    }

    backButton.addEventListener('click', function() {
        // Hide the current item
        items[index].style.display = 'none';

        // Calculate the previous index
        index = (index - 1 + items.length) % items.length;

        // Show the previous item
        items[index].style.display = 'block';
    });

    nextButton.addEventListener('click', function() {
        items[index].style.display = 'none';
        index = (index + 1) % items.length;
        items[index].style.display = 'block';
    });
    
    window.addEventListener('resize', updateVisibility);
        updateVisibility();
});








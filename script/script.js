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

    function handleDropdowns() {
        if (window.matchMedia('(max-width: 738px)').matches) {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', toggleDropdown);
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', closeDropdowns);
        } else {
            dropdownToggles.forEach(toggle => {
                toggle.removeEventListener('click', toggleDropdown);
            });

            document.removeEventListener('click', closeDropdowns);
        }
    }

    function toggleDropdown(event) {
        event.stopPropagation(); // Prevent the click from bubbling up

        // Close all other dropdowns
        dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== this) {
                const otherDropdownOptions = otherToggle.querySelector('.dropdown-options');
                otherDropdownOptions.style.display = 'none';
            }
        });

        // Toggle the clicked dropdown
        const dropdownOptions = this.querySelector('.dropdown-options');
        const isVisible = dropdownOptions.style.display === 'flex';
        dropdownOptions.style.display = isVisible ? 'none' : 'flex';
    }

    function closeDropdowns(event) {
        if (!event.target.closest('.dropdown-toggle')) {
            dropdownToggles.forEach(toggle => {
                const dropdownOptions = toggle.querySelector('.dropdown-options');
                dropdownOptions.style.display = 'none';
            });
        }
    }

    // Initial check
    handleDropdowns();

    // Add event listener for window resize
    window.addEventListener('resize', handleDropdowns);
});


// Footer: copy email to clipboard on click
function copyEmailToClipboard() {
    var copyText = document.getElementById("emailAddress");

    // Check if the Clipboard API is supported
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText.value).then(function() {
            alert("Copied the email: " + copyText.value); // Optional: alert the user
        }).catch(function(err) {
            console.error("Could not copy text: ", err);
            fallbackCopyText(copyText);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyText(copyText);
    }
}

function fallbackCopyText(copyText) {
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successfully' : 'unsuccessfully';
        alert('projectarrowroot@gmail.com has been copied ' + msg);
    } catch (err) {
        console.error('Oops, unable to copy email', err);
    }
}

// home-3 buttons
// home-3 buttons
document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.hidden-content-trigger');
  
    triggers.forEach(trigger => {
      const hiddenContent = trigger.nextElementSibling; // assumes direct sibling
      const parentElement = trigger.closest('.home-3-element'); // the card
  
      // Open on trigger click
      trigger.addEventListener('click', () => {
        hiddenContent.style.display = 'block';
        hiddenContent.style.zIndex = '5'; 
        if (parentElement) {
          parentElement.style.zIndex = '1'; // raise whole element, if needed
        }
      });
  
      // Close button inside
      const closeBtn = hiddenContent.querySelector('.close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          hiddenContent.style.display = 'none';
          hiddenContent.style.zIndex = ''; // reset to stylesheet value
          if (parentElement) {
            parentElement.style.zIndex = ''; // reset card stacking
          }
        });
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('explore-program-questions-back-button');
    const nextButton = document.getElementById('explore-program-questions-next-button');
    const items = document.querySelectorAll('.explore-program-questions-list-item');
    let index = 0;

    // Hide all items except the first one
    function updateVisibility() {
        if (window.innerWidth < 1102) {
            items.forEach((item, i) => {
                item.style.display = (i === index) ? 'block' : 'none';
            });
        } else {
            items.forEach(item => {
                item.style.display = 'block';
            });
        }
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            console.log('Back button clicked');
            items[index].style.display = 'none';
            index = (index - 1 + items.length) % items.length;
            items[index].style.display = 'block';
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            console.log('Next button clicked');
            items[index].style.display = 'none';
            index = (index + 1) % items.length;
            items[index].style.display = 'block';
        });
    }

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
            items.forEach((item, i) => {
                item.style.display = (i === index) ? 'block' : 'none';
            });
        } else {
            items.forEach(item => {
                item.style.display = 'block';
            });
        }
    }

    if(backButton) {
        backButton.addEventListener('click', function() {
            // Hide the current item
            items[index].style.display = 'none';

            // Calculate the previous index
            index = (index - 1 + items.length) % items.length;

            // Show the previous item
            items[index].style.display = 'block';
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            items[index].style.display = 'none';
            index = (index + 1) % items.length;
            items[index].style.display = 'block';
        });
    }

    window.addEventListener('resize', updateVisibility);
        updateVisibility();
});


// Pausing bg-media when off-screen
const videos = document.querySelectorAll('.bg-media');

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    } else {
      video.pause();
    }
  });
}, { threshold: 0.35 }); // triggers when 35% of video is visible

videos.forEach(video => {
  videoObserver.observe(video);
});

// Cool data number display
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function countUp(element, target, duration, suffix = "") {
  let startTime = null;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = easeOutCubic(progress);

    element.textContent = Math.floor(easedProgress * target) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix; // final value
    }
  }

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add("visible");

      const target = parseInt(el.getAttribute("data-target"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      countUp(el, target, 2000, suffix);

      obs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
  observer.observe(counter);
});








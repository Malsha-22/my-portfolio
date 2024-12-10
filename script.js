// Wait until the page is fully loaded
window.onload = function() {
    var modal = document.getElementById("greetingModal");
    var modalContent = document.querySelector(".modal-content");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Show the modal and fade in the background and content
    setTimeout(function() {
        modal.style.display = "block";
        modal.style.opacity = "1";  
        modalContent.style.opacity = "1";  
    }, 200);

    // When the user clicks on the close button, close the modal
    closeBtn.onclick = function() {
        modal.style.opacity = "0";  
        modalContent.style.opacity = "0";  
        setTimeout(function() {
            modal.style.display = "none";  
        }, 500);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = "0";  
            modalContent.style.opacity = "0";  
            setTimeout(function() {
                modal.style.display = "none"; 
            }, 500);
        }
    }
}

// Smooth scroll for anchor links with enhanced features
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scroll to the target element with a slight delay for a smoother effect
        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });

        // Optional: Highlight the active link in the navigation
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight the active section as the user scrolls
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100; 
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
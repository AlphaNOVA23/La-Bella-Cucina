window.addEventListener('load', function() {
    // Delay for 3 seconds to simulate loading screen display
    setTimeout(function() {
        // Fade out the loading screen
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.animation = 'fadeOut 1s forwards';
        
        // After 1 second (to match the fade-out animation), show the main content
        setTimeout(function() {
            loadingScreen.style.display = 'none'; // Hide the loading screen
            document.getElementById('main-content').style.display = 'block'; // Show the main content
        }, 1000); // 1 second to match the fadeOut animation duration
    }, 3000); // 3 seconds delay before the fade-out starts
    
    // Smooth scrolling to sections
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get target section id
            const targetSection = document.querySelector(targetId); // Select target section
            
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

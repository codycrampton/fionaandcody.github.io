document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log("Welcome to Fiona & Cody's Wedding Website!");

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            form.reset();
        });
    }
}); 
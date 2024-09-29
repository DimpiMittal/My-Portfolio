// index.js



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const popupMessage = document.getElementById('popupMessage');
    const loadingMessage = document.createElement('div'); // Create loading message element
    loadingMessage.className = 'loading-message';
    loadingMessage.innerText = 'Processing... Please wait.';

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Append the loading message below the form
        form.appendChild(loadingMessage);
        loadingMessage.style.display = 'block'; // Show the loading message

        // Simulate a 15-second loading time
        setTimeout(() => {
            // Hide the loading message after 15 seconds
            loadingMessage.style.display = 'none';

            // Show the success message
            popupMessage.classList.add('show');

            // Hide the success message after 3 seconds
            setTimeout(() => {
                popupMessage.classList.remove('show');
            }, 3000);

            // Clear the form fields
            form.reset();
        }, 1000);  // 15000ms = 15 seconds
    });
});


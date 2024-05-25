function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.querySelector('#main').style.position = 'fixed';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.querySelector('#main').style.position = 'relative';
}





//contact


document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById('myForm');
    const hCap = document.getElementsByClassName("h-captcha")

    // Add an event listener to handle the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform the form submission using fetch API
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(data => {
            // Check if the form submission was successful
            if (data.success) {
                // Display success message

                // document.getElementById('form-result').innerHTML = 'Your message has been sent successfully!';
                alert("Your message has been sent successfully!");

                // Reset the form fields
                form.reset();

                // Reset the hCaptcha
                if (typeof hcaptcha !== 'undefined') {
                    hcaptcha.reset();
                }
                
            } else {
                // Display error message
                document.getElementById('form-result').innerHTML = 'There was an error sending your message. Please try again later.';
            }
        })
        .catch(error => {
            // Display error message
            document.getElementById('form-result').innerHTML = 'There was an error sending your message. Please try again later.';
        });
    });
});

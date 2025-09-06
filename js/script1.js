
$(document).ready(function(){
    // Activate the first filter button
    $('.filter-button').first().addClass('active');

    // Handle filter button click
    $('.filter-button').click(function(){
        var value = $(this).attr('data-filter');

        // Show all items if 'All' is selected
        if(value == 'all') {
            $('.filter').show('1000');
        } else {
            // Hide all items
            $('.filter').not('.' + value).hide('3000');
            // Show selected items
            $('.filter').filter('.' + value).show('3000');
        }

        // Set the active class on the clicked button
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });
});




function sendWhatsApp() {
    function validateEmail(email) {
    // Simple regex to check valid email
    const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return re.test(email);
}
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name ) {
    alert("Please enter your name.");
    return;
  }
  if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

  const phoneNumber = "918160830909"; // your WhatsApp number with country code
  const message = `Hello, my name is ${name}. My email is ${email}. I want to subscribe.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank"); // opens WhatsApp chat
}

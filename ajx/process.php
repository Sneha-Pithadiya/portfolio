<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $response = "Thank you, $email! Your message has been received.";

    mail($email, 'Thank you for contacting us', $response);

    echo $response;
} else {
    // Invalid request
    echo "Invalid request.";
}
?>

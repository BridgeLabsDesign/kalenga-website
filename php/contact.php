<?php
    // Check for empty fields
    if(empty($_POST['name'])      ||
        empty($_POST['category'])     ||
        empty($_POST['email'])     ||
        empty($_POST['message'])   ||
        !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
        echo "No arguments Provided!";
        return false;
    }

    $name = strip_tags(htmlspecialchars($_POST['name']));
    $category = strip_tags(htmlspecialchars($_POST['category']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $message = strip_tags(htmlspecialchars($_POST['message']));
    $recipient = strip_tags(htmlspecialchars($_POST['recipient']));
    $cc = strip_tags(htmlspecialchars($_POST['cc']));
    
    // Create the email and send the message
    $to = 'admin@kalenga.me'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $email_subject = "Musa Kalenga Website Contact Form:  $name";
    $email_body = "You have received a new message from the Musa Kalenga website.\n\n"."Here are the details:\n\nName: $name\n\nCategory: $category\n\nEmail: $email_address\n\nMessage:\n$message";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: admin@kalenga.me\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Cc: $cc" . "\r\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    return true;
?>

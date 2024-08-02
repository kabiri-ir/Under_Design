<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'emails.txt';
        $handle = fopen($file, 'a');
        
        if ($handle) {
            fwrite($handle, $email . PHP_EOL);
            fclose($handle);
            echo "<p style='color: green;'>ایمیل شما ذخیره شد!</p>";
        } else {
            echo "<p style='color: red;'>خطا در ذخیره ایمیل.</p>";
        }
    } else {
        echo "<p style='color: red;'>ایمیل معتبر نیست.</p>";
    }
}
?>
<?php
// تنظیمات پایگاه داده
$servername = "11.120.0.14"; // نام سرور پایگاه داده (به طور معمول "localhost" است)
$username = "younes"; // نام کاربری پایگاه داده
$password = "younes0882105"; // رمز عبور پایگاه داده
$dbname = "kabiriia_emailstudents"; // نام پایگاه داده

// ایجاد اتصال به پایگاه داده
$conn = new mysqli($servername, $username, $password, $dbname);

// بررسی اتصال
if ($conn->connect_error) {
    die("اتصال به پایگاه داده ناموفق: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // آماده‌سازی و اجرای دستور SQL
        $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
        $stmt->bind_param("s", $email);
        
        if ($stmt->execute()) {
            echo "<p style='color: green;'>ایمیل شما ذخیره شد!</p>";
        } else {
            echo "<p style='color: red;'>خطا در ذخیره ایمیل: " . $stmt->error . "</p>";
        }
        
        $stmt->close();
    } else {
        echo "<p style='color: red;'>ایمیل معتبر نیست.</p>";
    }
}

$conn->close();
?>

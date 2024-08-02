document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById("loginModal");
    const messageModal = document.getElementById("messageModal");

    const openLoginModalBtn = document.getElementById("openLoginModalBtn");
    const loginBtn = document.getElementById("loginBtn");
    const closeButtons = document.getElementsByClassName("close");
    const closeMessageModalBtn = document.getElementById("closeMessageModalBtn");

    const errorMessage = document.getElementById("error-message");
    const userMessage = document.getElementById("user-message");

    const userCredentials = {
        "youneskabirishahed": {
            password: "0370882105",
            message: " جناب آقای یونس کبیری با سلام \n " +
             "نمره آزمون شما در تاریخ 1403/07/08 برابر است با : 18.5" 
        },
        "user2": {
            password: "pass2",
            message: "پیام لورم مخصوص کاربر user2: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..."
        },
        // می‌توانید کاربران بیشتری به این شیء اضافه کنید
    };

    openLoginModalBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    loginBtn.onclick = function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (userCredentials[username] && userCredentials[username].password === password) {
            loginModal.style.display = "none";
            userMessage.innerText = userCredentials[username].message;
            messageModal.style.display = "block";
        } else {
            errorMessage.style.display = "block";
        }
    }

    Array.from(closeButtons).forEach(button => {
        button.onclick = function() {
            loginModal.style.display = "none";
            messageModal.style.display = "none";
        }
    });

    closeMessageModalBtn.onclick = function() {
        messageModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == messageModal) {
            messageModal.style.display = "none";
        }
    }

    // تنظیمات تایمر برای 150 روز
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 150); // تنظیم تاریخ هدف به 150 روز بعد از تاریخ فعلی

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('days').innerText = "00";
            document.getElementById('hours').innerText = "00";
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }

    updateCountdown(); // به‌روزرسانی تایمر در بارگذاری اولیه
    const interval = setInterval(updateCountdown, 1000); // به‌روزرسانی هر ثانیه
});



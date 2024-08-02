document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const successModal = document.getElementById("successModal");
    const messageModal = document.getElementById("messageModal");
    const downloadModal = document.getElementById("downloadModal");

    const openLoginModalBtn = document.getElementById("openLoginModalBtn");
    const openDownloadModalBtn = document.getElementById("openDownloadModalBtn");
    const loginBtn = document.getElementById("loginBtn");
    const closeButtons = document.getElementsByClassName("close");
    const closeSuccessModalBtn = document.getElementById("closeSuccessModalBtn");
    const closeMessageModalBtn = document.getElementById("closeMessageModalBtn");
    const closeDownloadModalBtn = document.getElementById("closeDownloadModalBtn");

    const errorMessage = document.getElementById("error-message");
    const userMessage = document.getElementById("user-message");
    const successMessage = document.getElementById("success-message");

    const userCredentials = {
        "youneskabirishahed": {
            password: "0370882105",
            message: "جناب آقای یونس کبیری با سلام \n " +
                     "نمره آزمون شما در تاریخ 1403/07/08 برابر است با : 18.5"
        },
        "user2": {
            password: "pass2",
            message: "پیام لورم مخصوص کاربر user2: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..."
        },
        // می‌توانید کاربران بیشتری به این شیء اضافه کنید
    };

    // مدیریت نمایش مدال ورود
    openLoginModalBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // مدیریت نمایش مدال دانلود
    openDownloadModalBtn.onclick = function() {
        downloadModal.style.display = "block";
    }

    // مدیریت دکمه‌های مدال دانلود
    const fileButtons = [
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
        { name: " سوالات آزمون 1403/07/08 با پاسخنامه دبیرستان شاهد", url: "files/14030416p7976f1300.pdf" },
    ];

    const fileButtonsContainer = document.getElementById("fileButtonsContainer");

    fileButtons.forEach(file => {
        const button = document.createElement("button");
        button.className = "file-download-button";
        button.innerText = file.name;
        button.onclick = () => window.location.href = file.url;
        fileButtonsContainer.appendChild(button);
    });

    // مدیریت بستن مدال‌ها
    Array.from(closeButtons).forEach(button => {
        button.onclick = function() {
            loginModal.style.display = "none";
            successModal.style.display = "none";
            messageModal.style.display = "none";
            downloadModal.style.display = "none";
        }
    });

    closeSuccessModalBtn.onclick = function() {
        successModal.style.display = "none";
    }

    closeMessageModalBtn.onclick = function() {
        messageModal.style.display = "none";
    }

    closeDownloadModalBtn.onclick = function() {
        downloadModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == successModal) {
            successModal.style.display = "none";
        }
        if (event.target == messageModal) {
            messageModal.style.display = "none";
        }
        if (event.target == downloadModal) {
            downloadModal.style.display = "none";
        }
    }

    // مدیریت فرم ایمیل
    const emailForm = document.getElementById("emailForm");
    emailForm.onsubmit = function(event) {
        event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

        const email = document.getElementById("email").value;
        if (validateEmail(email)) {
            // نمایش مدال موفقیت
            successModal.style.display = "block";
        } else {
            alert("لطفاً یک ایمیل معتبر وارد کنید.");
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // تنظیمات تایمر
    const countdownKey = 'countdownEndTime';
    let targetDate;

    // بررسی وجود زمان باقی‌مانده در localStorage
    const storedEndTime = localStorage.getItem(countdownKey);
    if (storedEndTime) {
        targetDate = new Date(parseInt(storedEndTime, 10));
    } else {
        // اگر موجود نیست، تنظیم تاریخ هدف برای 150 روز بعد از حال حاضر
        targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 150);
        localStorage.setItem(countdownKey, targetDate.getTime());
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

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

// script.js

// Data for the news items
const newsData = [
    {
        header: "اطلاعیه آزمون",
        title: "زمان برگزاری آزمون مهرماه دبیرستان شاهد",
        subtitle: "[تاریخ انتشار اطلاعیه : 1403/07/08/21:20]",
        content: "به اطلاع دانش اموزان عزیز کلاس 101 دهم ریاضی دبیرستان شاهد حضرت علی اکبر می رساند که زمان برگزاری آزمون فصل اول ، روز سه شنبه 9 مهرماه ، زنگ دوم در سالن امتحانات خواهد بود",
        image: "https://via.placeholder.com/150"
    },
    {
        header: "انتشار جزوه",
        title: "انتشار جزوه فصل اول ریاضی دهم",
        subtitle: "[تاریخ انتشار اطلاعیه : 1403/07/08/21:20]",
        content: "با سلام خدمت دانش اموزان عزیز، فایل جزوه دست نویس فصل اول در سایت آکادمی، بارگزاری شد. امیدوارم بهترین استفاده را ببرید",
        image: "https://via.placeholder.com/150"
    },
    {
        header: "اطلاعیه انتشار نمره و آزمون",
        title: "انتشار نمره آزمون 1403/07/08 دبیرستان ایزدی به همراه سوال آزمون و پاسخنامه",
        subtitle: "[تاریخ انتشار اطلاعیه : 1403/07/08/21:20]",
        content: "به اطلاع دانش اموزان عزیز کلاس 101 دهم ریاضی دبیرستان شاهد حضرت علی اکبر می رساند که زمان برگزاری آزمون فصل اول ، روز سه شنبه 9 مهرماه ، زنگ دوم در سالن امتحانات خواهد بود",
        image: "https://via.placeholder.com/150"
    },
    {
        header: "دانستنی های ریاضی",
        title: "زمان برگزاری آزمون مهرماه دبیرستان شاهد",
        subtitle: "[تاریخ انتشار اطلاعیه : 1403/07/08/21:20]",
        content: "به اطلاع دانش اموزان عزیز کلاس 101 دهم ریاضی دبیرستان شاهد حضرت علی اکبر می رساند که زمان برگزاری آزمون فصل اول ، روز سه شنبه 9 مهرماه ، زنگ دوم در سالن امتحانات خواهد بود",
        image: "https://via.placeholder.com/150"
    },
    // Add more news items as needed
];

const newsContainer = document.getElementById('news-boxes');

newsData.forEach(news => {
    const box = document.createElement('div');
    box.className = 'news-box';

    box.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <div class="news-content">
            <h3>${news.header}</h3>
            <h4>${news.title}</h4>
            <p>${news.subtitle}</p>
            <p>${news.content}</p>
        </div>
    `;

    newsContainer.appendChild(box);
});

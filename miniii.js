const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatContainer = document.querySelector('.chat-container');
const closeButton = document.querySelector('.close-button');

// تابع برای اضافه کردن پیام به صفحه
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender); // sender: 'user' or 'support'
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    // اسکرول به پایین برای نمایش آخرین پیام
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// تابع شبیه‌سازی پاسخ پشتیبان
function simulateSupportResponse(userInput) {
    // در یک سیستم واقعی، این قسمت با سرور ارتباط برقرار می‌کند
    // اینجا فقط یک پاسخ ثابت برمی‌گردانیم
    setTimeout(() => {
        addMessage("پاسخ پشتیبان: پیام شما دریافت شد.", 'support');
    }, 1000); // تاخیر 1 ثانیه‌ای برای شبیه‌سازی
}

// ارسال پیام توسط کاربر
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        addMessage(messageText, 'user');
        messageInput.value = ''; // پاک کردن فیلد ورودی
        simulateSupportResponse(messageText); // شبیه‌سازی پاسخ
    }
});

// ارسال پیام با کلید Enter
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click(); // شبیه کلیک روی دکمه ارسال
    }
});

// بستن پنجره چت
closeButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

// (اختیاری) دکمه‌ای برای باز کردن پنجره چت، اگر بسته شده باشد
// می‌توانید این دکمه را در جای دیگری از صفحه قرار دهید
 document.getElementById('open-chat-button').addEventListener('click', () => {
     chatContainer.style.display = 'flex';
 });

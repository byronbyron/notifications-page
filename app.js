const btn = document.querySelector('.btn-read');
const unread = document.querySelectorAll('.notification-unread');
const badge = document.querySelector('.badge');

btn.addEventListener('click', (e) => {
    unread.forEach((item) => {
        item.classList.remove('notification-unread');
        item.querySelector('.unread').remove();
        badge.textContent = 0;
    })
})

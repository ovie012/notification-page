const notification = document.querySelectorAll('.notification');
const notificationMessage = document.querySelector('.message-notification');
const open = document.querySelector('.open');
const notificationCount = document.querySelector('.notification-count');
const markAllAsRead = document.querySelector('.mark-all');

const remove = (event) => {
    const clickedNotification = event.currentTarget;
    clickedNotification.classList.remove('active');
    updateNotificationCount();
};

const openNotification = () => {
    open.classList.toggle('active');
};

const markAll = () => {
    notification.forEach((e) => {
        e.classList.remove('active');
        updateNotificationCount();
    });
};

const updateNotificationCount = () => {
    const activeNotification = document.querySelectorAll('.notification.active');
    notificationCount.innerHTML = activeNotification.length;
};


notification.forEach((e) => {
    e.addEventListener('click', remove);
});

notificationMessage.addEventListener('click', openNotification);

markAllAsRead.addEventListener('click', markAll);


updateNotificationCount();
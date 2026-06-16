(async () => {

const showError = () => {
    const error = document.querySelector('.error');
    error.style.display = 'block';
    error.textContent = 'You blocked the notifications';
}

const showVisible = () => {
    // create a new notification
    const visible = new Notification('Page visibility', {
        body: 'The page is currently visible',
    });

    setTimeout(() => {
        visible.close();
    }, 10 * 1000);
}

const showInvisible = () => {
    const invisible = new Notification('Page visibility', {
        body: 'The page is currently not visible',
    });

    setTimeout(() => {
        invisible.close();
    }, 10 * 1000);
}

//check permissions
 let granted = false;

if (Notification.permission === 'granted') {
    granted = true;
} else if (Notification.permission !== 'denied') {
    let permission = await Notification.requestPermission();
    granted = permission === 'granted';
}

if (!granted) {
    showError();
    return;
}

document.addEventListener("DOMContentLoaded", function() {
    showVisible();
    document.addEventListener( 'visibilitychange' , function() {
        if (document.hidden == false && granted) {
            showVisible();
        } else if (document.hidden == true && granted) {
            showInvisible();
        }
    });
})

})();

const screenHours = document.querySelector('.hours');

const updateClock = () => {
    const date = new Date();
    const tokyoTime = date.toLocaleTimeString('fr-FR', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit'
    });

    screenHours.textContent = `${tokyoTime}`;
}

updateClock();
setInterval(updateClock, 1000);
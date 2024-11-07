$(document).ready(() => {
    const convertMinutesToMs = (minutes) => {
        return minutes * 60 * 1000;
    }

    const intervalMinutes = 1440;
    const intervalDuration = convertMinutesToMs(intervalMinutes);
    const startDate = new Date('2024-11-07T00:00:00');

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    const formatDaysAndHours = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);

        return `${days}D ${hours}H`;
    }

    const startTimer = () => {
        setInterval(() => {
            const now = new Date();
            const elapsed = now - startDate;
            const timeInCurrentInterval = intervalDuration - (elapsed % intervalDuration);
            const oneDayInMs = 24 * 60 * 60 * 1000;

            if (timeInCurrentInterval > oneDayInMs) {
                $('#timer').text(formatDaysAndHours(timeInCurrentInterval));
            } else {
                if (timeInCurrentInterval <= 5 * 60 * 1000) $('#timer').addClass('green');
                else $('#timer').removeClass('green');

                $('#timer').text(formatTime(timeInCurrentInterval));
            }
        }, 1000);
    };

    startTimer();
});
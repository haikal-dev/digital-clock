export default class Clock {
    constructor() {
        this.clock = document.getElementById('clock');
    }

    update = () => {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let am_pm = "AM";
     
        // Setting time for 12 Hrs format
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = "PM";
        } else if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }
     
        hour =
            hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
     
        let currentTime =
            hour +
            ":" +
            min +
            ":" +
            sec +
            am_pm;

        this.clock.innerHTML = currentTime;
    }

    hide = () => {
        this.clock.style.display = 'none';
    }

    show = () => {
        this.clock.style.display = 'block';
    }
}
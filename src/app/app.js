export default class App {
    constructor() {
        this.clock = document.getElementById('clock');
        this.btn = document.getElementById('fullscreen');
        this.window = document.getElementById('window');
    }

    showTime = () => {
        // Getting current time and date
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

    fullScreen = (document) => {
        if (document.requestFullscreen) {
            document.requestFullscreen();
        } else if (document.webkitRequestFullscreen) { /* Safari */
            document.webkitRequestFullscreen();
        } else if (document.msRequestFullscreen) { /* IE11 */
            document.msRequestFullscreen();
        }

        this.clock.style.display = 'block';
    }

    enableFullScreen = (cb) => {
        this.btn.addEventListener('click', cb);
    }

    escapePressed = (cb) => {
        document.addEventListener('keydown', cb);
    }

    run = () => {

        this.enableFullScreen(() => {
            this.fullScreen(this.window);
        });

        this.escapePressed((e) => {
            if(e.key === 'Escape'){
                this.clock.style.display = 'none';
            }
        });

        this.showTime();

        setInterval(() => {
            this.showTime();
        }, 1000);
    }
}


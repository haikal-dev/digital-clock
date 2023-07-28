export default class App {
    constructor() {
        this.btn = document.getElementById('fullscreen');
        this.window = document.getElementById('window');
    }

    fullScreen = (document) => {
        if (document.requestFullscreen) {
            document.requestFullscreen();
        } else if (document.webkitRequestFullscreen) { /* Safari */
            document.webkitRequestFullscreen();
        } else if (document.msRequestFullscreen) { /* IE11 */
            document.msRequestFullscreen();
        }
    }

    enableFullScreen = (cb) => {
        this.btn.addEventListener('click', cb);
    }

    escapePressed = (cb) => {
        document.addEventListener('keydown', cb);
    }

    run = (clock) => {

        this.enableFullScreen(() => {
            this.fullScreen(this.window);
            clock.show();
        });

        this.escapePressed((e) => {
            if(e.key === 'Escape'){
                clock.hide();
            }
        });

        clock.update();

        setInterval(() => {
            clock.update();
        }, 1000);
    }
}


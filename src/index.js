import scss from './styles/main.scss';
import App from './app/app';
import Clock from './app/clock';

const app = new App();
const clock = new Clock();

app.run(clock);
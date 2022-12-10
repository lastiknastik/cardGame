import './static/style.css';
import { initApp } from './src/app.js';

document.addEventListener('DOMContentLoaded', function () {
    window.app = initApp();
    window.app.renderScreen('lobby');
});

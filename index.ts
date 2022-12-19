import './static/style.css';
import { initApp } from './src/app';

document.addEventListener('DOMContentLoaded', function () {
    initApp().renderScreen('lobby');
});

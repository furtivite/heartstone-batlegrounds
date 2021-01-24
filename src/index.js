import './index.css';
import {
  gamingAll,
  gamingPolina,
  gamingEgor
} from './modules/gaming'

const testBtnRun = document.querySelector('.test-btn_run');
const testBtnPolina = document.querySelector('.test-btn_polina');
const testBtnEgor = document.querySelector('.test-btn_egor');

testBtnRun.addEventListener('click', gamingAll);
testBtnPolina.addEventListener('click', gamingPolina);
testBtnEgor.addEventListener('click', gamingEgor)

import './style.css';
import LogoCanvas from './canvas';
import loadImages from './utils/loadImages';

(async function () {
  await loadImages();
  const logo = new LogoCanvas();
  logo.draw();
})();

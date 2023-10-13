import './style.css';
import LogoCanvas from './canvas';
import loadSVGs from './utils/loadSVGs';

(async function () {
  await loadSVGs();
  const logo = new LogoCanvas();
  logo.draw();
})();

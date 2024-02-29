import './style.css';
import { drawMap, map } from './game/map.ts';
import { ctxG, onKeyPress, heroDown } from './game/hero.ts';

window.onload = (): void => {
  document.body.addEventListener('keydown', onKeyPress);
  drawMap(map);
  ctxG.drawImage(heroDown, 0, 0);
};

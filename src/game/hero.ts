import { CharacterPosition } from '../main.ts';
import { map, wall } from './map.ts';

const canvasH = document.querySelector('.hero-canvas') as HTMLCanvasElement;
export const ctxH = canvasH.getContext('2d') as CanvasRenderingContext2D;

export const heroDown = document.getElementById('hero-down') as HTMLImageElement;
const heroUp = document.getElementById('hero-up') as HTMLImageElement;
const heroRight = document.getElementById('hero-right') as HTMLImageElement;
const heroLeft = document.getElementById('hero-left') as HTMLImageElement;

const heroCurrentX: CharacterPosition = {
  pixel: 0,
  position: 0,
};

const heroCurrentY: CharacterPosition = {
  pixel: 0,
  position: 0,
};

export function onKeyPress(event: KeyboardEvent): void {
  switch (event.key) {
    case 'ArrowDown':
      ctxH.clearRect(0, 0, canvasH.width, canvasH.height);
      if (
        heroCurrentY.pixel === canvasH.height - 71 ||
        map[heroCurrentY.position + 1][heroCurrentX.position] === wall
      ) {
        ctxH.drawImage(heroDown, heroCurrentX.pixel, heroCurrentY.pixel);
      } else {
        ctxH.drawImage(heroDown, heroCurrentX.pixel, heroCurrentY.pixel + 71);
        heroCurrentY.pixel += 71;
        heroCurrentY.position += 1;
      }
      break;
    case 'ArrowUp':
      ctxH.clearRect(0, 0, canvasH.width, canvasH.height);
      if (
        heroCurrentY.pixel === 0 ||
        map[heroCurrentY.position - 1][heroCurrentX.position] === wall
      ) {
        ctxH.drawImage(heroUp, heroCurrentX.pixel, heroCurrentY.pixel);
      } else {
        ctxH.drawImage(heroUp, heroCurrentX.pixel, heroCurrentY.pixel - 71);
        heroCurrentY.pixel -= 71;
        heroCurrentY.position -= 1;
      }
      break;
    case 'ArrowRight':
      ctxH.clearRect(0, 0, canvasH.width, canvasH.height);
      if (
        heroCurrentX.pixel === canvasH.width - 71 ||
        map[heroCurrentY.position][heroCurrentX.position + 1] === wall
      ) {
        ctxH.drawImage(heroRight, heroCurrentX.pixel, heroCurrentY.pixel);
      } else {
        ctxH.drawImage(heroRight, heroCurrentX.pixel + 71, heroCurrentY.pixel);
        heroCurrentX.pixel += 71;
        heroCurrentX.position += 1;
      }
      break;
    case 'ArrowLeft':
      ctxH.clearRect(0, 0, canvasH.width, canvasH.height);
      if (
        heroCurrentX.pixel === 0 ||
        map[heroCurrentY.position][heroCurrentX.position - 1] === wall
      ) {
        ctxH.drawImage(heroLeft, heroCurrentX.pixel, heroCurrentY.pixel);
      } else {
        ctxH.drawImage(heroLeft, heroCurrentX.pixel - 71, heroCurrentY.pixel);
        heroCurrentX.pixel -= 71;
        heroCurrentX.position -= 1;
      }
      break;
    default:
      throw new Error('To start playing the game press any of the arrow buttons on your keyboard!');
  }
}

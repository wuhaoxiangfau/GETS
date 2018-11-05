import GE from './core/cntroller/GE';
import TestGameObject from './core/gameObject/implement/TestGameObject';
import Camera2D from './core/gameObject/implement/Camera2D';

// setTimeout(() => {
//     GE.pause();
// }, 500);
// setTimeout(() => {
//     GE.start();
// }, 1000);
// setTimeout(() => {
//     GE.pause();
// }, 5500);
GE.init();

GE.setMainCamera(new Camera2D());
GE.start();
const testGameObject = new TestGameObject();
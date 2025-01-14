import clickSound from "../Asset/sound/click.mp3";
import flowtune from "../Asset/sound/flowmusic.mp3";
import error from "../Asset/sound/error.mp3";

export let flowSound = (condition: boolean) => {
  if (condition) {
    new Audio(flowtune).play();
  } else {
    new Audio(flowtune).pause();
  }
};

export let playSound = (condition: boolean) => {
  if (condition) {
    new Audio(clickSound).play();
  } else {
    new Audio(clickSound).pause();
  }
};

export let errorSound = (condition: boolean) => {
  if (condition) {
    new Audio(error).play();
  } else {
    new Audio(error).pause();
  }
};

import gameState, { handleUserAction } from "./gameState";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";

async function init() {
  console.log("Starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();
  // Closure
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      gameState.tick();
      // Reset nextTimeToTick
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();

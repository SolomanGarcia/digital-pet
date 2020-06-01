import gameState from "./gameState";

const TICK_RATE = 3000;

async function init() {
  console.log("Starting game");

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

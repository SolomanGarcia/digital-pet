const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;

    if (this.clock === this.wakeTime) {
      this.wake();
    }

    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("hatched");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    // Can't do actions while in these states
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // Do nothing
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.gameState();
      return;
    }
  },
};

export default gameState;

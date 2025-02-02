import state from "../../FocusTimer/state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDiplay();

  events.registerControls();
  events.setMinutes();
}

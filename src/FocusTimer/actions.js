import state from "./state.js";
import * as timer from "../src/FocusTimer/timer.js";
import * as el from "./elemnet.js";

export function toggleRunnin() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function set() {
  el.minutes.setAttribute("contenteditable");
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}

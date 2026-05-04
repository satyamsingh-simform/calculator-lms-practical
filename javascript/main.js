import { elements } from "./ui/dom.js";
import { initEvents } from "./ui/event.js";
import { renderHistory } from "./ui/historyUI.js";

document.addEventListener("DOMContentLoaded",()=>{
    initEvents(elements);
    renderHistory()
});


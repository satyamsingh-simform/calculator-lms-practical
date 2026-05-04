import { getHistory } from "../utils/history.js";
import { elements } from "./dom.js";

export function renderHistory(){
  elements.historyContainer.innerHTML="";
  const history=getHistory();

  history.forEach(item=>{
    const div=document.createElement("div");
    div.className="history-item";
    div.innerHTML=`
      <span class="history-text">${item.expression}=${item.result}</span>
    `;
    elements.historyContainer.appendChild(div);
  });
}
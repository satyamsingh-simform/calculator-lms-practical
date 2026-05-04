import { HISTORY_KEY } from "../constant.js";

//get history
export function getHistory(){
  const data=localStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
}

//save history
export function saveHistory(history){
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

//add new data
export function addToHistory(expression,result){
  const history = getHistory();
  history.unshift({ expression,result}); 
  //limit history
  if(history.length>20) history.pop();
  saveHistory(history);
}
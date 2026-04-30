import {handleInput} from "../handler/inputHandler.js";

export function initEvents(elements){
    elements.buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            handleInput(btn.innerText);
        });
    });

    elements.hamberger.addEventListener('click',()=>{
        elements.rightSection.className='d-flex';
        elements.leftSection.className='d-none';
    });

    elements.cross.addEventListener('click',()=>{
        elements.rightSection.className='section-right';
        elements.leftSection.className='section-left';
    });
}
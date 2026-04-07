let rightSection=document.querySelector('.section-right')
let leftSection=document.querySelector('.section-left')
let hamberger=document.querySelector('.hamberger')
let cross=document.querySelector('.cross-svg')

hamberger.addEventListener('click',()=>{
    rightSection.className='d-flex';
    console.log('class added');
    console.log(rightSection);
    leftSection.className='d-none'
})

cross.addEventListener('click',()=>{
    rightSection.className='section-right';
    leftSection.className='section-left'
})



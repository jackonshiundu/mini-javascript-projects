const labels=document.querySelectorAll('.form__control label')
console.log(labels)
labels.forEach(label=>{
    label.innerHTML=label.innerText
    .split('')
    .map((letter,index)=>
        `<span key=${index} style="transition-delay:${index*50}ms">${letter}</span>`
    )
    .join('')
})
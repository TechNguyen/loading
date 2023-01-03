
let counter = 0;
setInterval(() => {
    const element = document.querySelector('.value')
    const e = Number(element.getAttribute('data-value'))
    if(counter < e) {
        counter++;
        console.log(counter);
        element.innerHTML = `${counter} %`
    }
}, 80)
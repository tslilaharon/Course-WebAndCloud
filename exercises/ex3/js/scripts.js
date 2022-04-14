$(document).ready(() => {
    let ran = ((Math.floor(Math.random() * 90) + 10))
    ran = Math.round(ran / 4) * 4;
    let arr = new Array(ran);
    let i = 0;

    let element = document.getElementById('boxes');
    $.each(arr, function () {
        element.innerHTML += `<article></article>`;
    });

    document.querySelectorAll('article').forEach(boxes => {
        boxes.addEventListener('click', box => {
            let color = box.target.style.backgroundColor;
            (color == 'pink') ? color = null : color = 'pink';
            box.target.style.backgroundColor = color;
        })
    });

    $('#plus').click(function () {
        (i == 375) ? i = 0 : i = i + 125;
        document.getElementsByTagName('article')[4].style.paddingLeft = i + 'px';
        document.getElementsByTagName('article')[4].style.paddingRight = i + 'px';
    });
});
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    let rgbaColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    return rgbaColor;
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// alert(random_rgba()); //rgba(199,247,42,0.8)

btn.addEventListener('click', function() {
    const randomRgba = random_rgba();
    color.textContent = randomRgba;
    document.body.style.backgroundColor = randomRgba;
});
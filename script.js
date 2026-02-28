const data = document.getElementById("input");
const button = document.getElementById("btn");
const result = document.getElementById("result");
const resImg = document.getElementById("resultImg");

function roll() {

    const no = Number(data.value);
    const images = [];
    const res = [];
    for (let i = 0; i < no; i++) {
        let d = Math.floor(Math.random() * 6) + 1;
        res.push(d);
        images.push(`<img src="assets/${d}.svg" alt="dice : ${d}">`);

    }
    result.textContent = `dice is : ${res.join(', ')}`;
    resImg.innerHTML = images.join('');

}
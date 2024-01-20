
const mainImage = document.getElementById('mainImage');
const mainBoxes = document.getElementById('mainBoxes');

mainBoxes.addEventListener("click", (e) => {
    let image = e.target.src;
    mainImage.src = `${image}`;
});
const wrapper = document.getElementById("tiles");

let columns = 0, rows = 0;

const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(244, 81, 30)",
    "rgb(76, 175, 80)",
    "rgb(33, 150, 243)",
    "rgb(156, 39, 176)",
];

let count = 0;
let toggled = false;

const toggle = () => {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
}

function getNextColor() {
    return toggled ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
    //black if toggled is false, white when toggled is true
}

const handleOnClick = index => {
    count = count + 1;
    toggle();
    //backgroundColor: colors[count % (colors.length-1)],

    anime({
      targets: ".tile",
      backgroundColor: getNextColor(),
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    });
}
  
const createTile = index => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    tile.onclick = e => handleOnClick(index);
    
    return tile;
}
  
const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
}
  
const createGrid = () => {
    wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 100 : 50;
    
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns * rows);
}
  
createGrid();
  
window.onresize = () => createGrid();

// Disable 'c' key:
document.addEventListener('keydown', function(event) {
  if (event.key === 'c') {
    event.preventDefault();
    console.log('The "c" key is disabled.');
  } 
});

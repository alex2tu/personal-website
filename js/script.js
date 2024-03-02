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
let currTileColor = "rgb(0, 0, 0)";
let toggledOnce = false;
let animationRunning = true;

const toggle = () => {
  toggled = !toggled; //update toggled var
  currTileColor = getNextColor(); //update color
  if (!toggledOnce) {
    toggleOnce()
  }
  
  document.body.classList.toggle("toggled"); //update toggled in css
}

function toggleOnce() { //after toggled once
  toggledOnce = true;
  setTimeout(() => {
    document.getElementById("header-title").innerHTML = "Alex Tu";
  }, 300); //wait for first element to fade out
}

function getNextColor() {
    return toggled ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
    //black if toggled is false, white when toggled is true
}

const handleOnClick = index => {
    if (introRunning) { //disallow click when intro is running
      return;
    }

    toggle();

    anime({
      targets: ".tile",
      backgroundColor: currTileColor,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      }), 
      complete: function() {
        console.log("Animation completed!");
      }
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
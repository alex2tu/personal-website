let introRunning = true;

let target = document.getElementById("header-title");
let anim = [
    { word: "|", ms: 400 },
    { word: " ", ms: 300 },
    { word: "|", ms: 400 },
    { word: " ", ms: 300 },
    { word: "H|", ms: 100 },
    { word: "Hi|", ms: 100 },
    { word: "Hi,|", ms: 100 },
    { word: "Hi, |", ms: 90 },
    { word: "Hi, I|", ms: 100 },
    { word: "Hi, I'|", ms: 100 },
    { word: "Hi, I'm|", ms: 100 },
    { word: "Hi, I'm |", ms: 100 },
    { word: "Hi, I'm A|", ms: 100 },
    { word: "Hi, I'm Al|", ms: 100 },
    { word: "Hi, I'm Ale|", ms: 100 },
    { word: "Hi, I'm Alex|", ms: 100 },
    { word: "Hi, I'm Alex |", ms: 150 },
    { word: "Hi, I'm Alex 2|", ms: 400 },
    { word: "Hi, I'm Alex 2", ms: 300 },
    { word: "Hi, I'm Alex 2|", ms: 400 },
    { word: "Hi, I'm Alex 2", ms: 300 },
    { word: "Hi, I'm Alex |", ms: 200 },
    { word: "Hi, I'm Alex T|", ms: 200 },
    { word: "Hi, I'm Alex Tu|", ms: 400 },
    { word: "Hi, I'm Alex Tu", ms: 300 },
    { word: "Hi, I'm Alex Tu|", ms: 400 },
    { word: "Hi, I'm Alex Tu", ms: 200 },
    { word: "Hi, I'm Alex Tu", ms: 200 }
];
let i = 0;
let update = () => {
    let step = anim[i];
    target.innerText = step.word;
    i++;

    if (i < anim.length) {
        setTimeout(update, step.ms);
    } else {
        console.log("started")
        setTimeout(() => {
            toggleOnce();
            anime({
                targets: ".tile",
                backgroundColor: currTileColor,
                delay: anime.stagger(75, {
                  grid: [columns, rows],
                  from: 'last'
                }), 
                complete: function() {
                  console.log("Animation completed!");
                  introRunning = false; // Animation is completed, set flag to false
                }
              });
        }, 500);
    }
};
update();

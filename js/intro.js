let introRunning = true;

let header = document.getElementById("header-title");
let anim = [
    { word: "|", ms: 400 },
    { word: " ", ms: 300 },
    { word: "|", ms: 400 },
    { word: " ", ms: 300 },
    { word: "A|", ms: 100 },
    { word: "Al|", ms: 100 },
    { word: "Ale|", ms: 100 },
    { word: "Alex|", ms: 100 },
    { word: "Alex |", ms: 150 },
    { word: "Placeholder", ms: 0 }, //index to skip
    { word: "Alex |", ms: 200 },
    { word: "Alex T|", ms: 200 },
    { word: "Alex Tu|", ms: 400 },
    { word: "Alex Tu", ms: 300 },
    { word: "Alex Tu|", ms: 400 },
    { word: "Alex Tu", ms: 200 },
    { word: "Alex Tu", ms: 250 }
];

const names = [
  [
    { word: "Alex T|", ms: 150 },
    { word: "Alex To|", ms: 200 },
    { word: "Alex Too|", ms: 400 },
    { word: "Alex Too", ms: 300 },
    { word: "Alex Too|", ms: 400 },
    { word: "Alex Too", ms: 200 },
    { word: "Alex To|", ms: 200 },
    { word: "Alex T|", ms: 200 },
    { word: "Alex T|", ms: 200 }
  ],
  [
    { word: "Alex T|", ms: 150 },
    { word: "Alex To|", ms: 400 },
    { word: "Alex To", ms: 300 },
    { word: "Alex To|", ms: 400 },
    { word: "Alex To", ms: 300 },
    { word: "Alex T|", ms: 200 },
    { word: "Alex T|", ms: 200 }
  ],
  [
    { word: "Alex 2|", ms: 400 },
    { word: "Alex 2", ms: 300 },
    { word: "Alex 2|", ms: 400 },
    { word: "Alex 2", ms: 300 },
    { word: "Alex 2", ms: 300 }
  ],
  [
    { word: "Alex T|", ms: 150 },
    { word: "Alex Tw|", ms: 200 },
    { word: "Alex Two|", ms: 400 },
    { word: "Alex Two", ms: 300 },
    { word: "Alex Two|", ms: 400 },
    { word: "Alex Two", ms: 300 },
    { word: "Alex Tw|", ms: 200 },
    { word: "Alex T|", ms: 200 },
    { word: "Alex T|", ms: 200 }
  ],
  [
    { word: "Alex 屠|", ms: 400 },
    { word: "Alex 屠", ms: 300 },
    { word: "Alex 屠|", ms: 400 },
    { word: "Alex 屠", ms: 300 },
    { word: "Alex 屠", ms: 300 }
  ]
];
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.word;
    i++;

    if (i == 9) {
      console.log("1");
      setTimeout(update_last_names, 200);
    } else if (i < anim.length) {
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

function choose_name() {
  let index = Math.floor(Math.random() * 5);
  console.log(index);
  console.log(names[index]);
  return names[index];
}

let j = 0;
let chosen_name = choose_name();
console.log(chosen_name);
let update_last_names = () => {
  console.log("2");
  let step = chosen_name[j];
  header.innerText = step.word;
  j++;

  if (j < chosen_name.length) {
    setTimeout(update_last_names, step.ms)
  } else {
    i++;
    update();
  }

};

update();

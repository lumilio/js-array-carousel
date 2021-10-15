
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const box_Main = document.getElementById('box-mainpic');
const box_Column = document.getElementById('box-column');

let theBigPic = '';
let theOptionPic = '';
let active = 0;

for (let i = 0; i < items.length; i++) {
    theBigPic += 
    `<dv class="big-photo">
        <img src="${items[i]}" alt="">
        <div id="didascalia">
            <h3>"${title[i]}"</h3>
            <p>"${text[i]}"</p> 
        </div>
    </dv>`
    theOptionPic +=
    `<div class="lil-photo">
        <img src="${items[i]}" alt="">
    </div>`  
}

box_Main.innerHTML = theBigPic;
document.getElementsByClassName('big-photo')[active].classList.add('choice');



// pulsanti

/* const up = document.getElementById('swipe-up-button');
up.addEventListener('click', function () {
    document.getElementById("select1").style.backgroundColor="rgba(0, 0, 0, 0)";
    document.getElementById("pic1").style.padding = "10px";
})


const down = document.getElementById('swipe-down-button');
down.addEventListener('click', function () {})
 */





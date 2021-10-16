

// 3 arrey da 5 elementi ciascuno assegnati 

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


// inizializzo due div dalla DOM


const box_Main = document.getElementById('box-mainpic');
const box_Column = document.getElementById('box-column');


// inizzializzo il contenuto intercambiabile dei due div 


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


// l'indice corrente del loop assume una clsse 


box_Main.innerHTML = theBigPic;
document.getElementsByClassName('big-photo')[active].classList.add('choice');

box_Column.innerHTML = theOptionPic;
document.getElementsByClassName('lil-photo')[active].classList.add('choice');


// conferisco interattività ai pulsanti 


let position = 0;

const up = document.getElementById('swipe-up-button');
up.addEventListener('click', function () {
    if (position > 0){
        --position;
    }
    else if (position == 0){                                             //--------------------------------bonus
        position = items.length -1;
    }
    
    document.querySelector('.lil-photo.choice').classList.remove('choice');
    document.getElementsByClassName('lil-photo')[position].classList.add('choice');

    document.querySelector('.big-photo.choice').classList.remove('choice');
    document.getElementsByClassName('big-photo')[position].classList.add('choice');
})


const down = document.getElementById('swipe-down-button');
down.addEventListener('click', function () {
    if (position < items.length -1){
        ++position;
    }
    else if (position == items.length -1){                                  //--------------------------------bonus
        position = 0;
    }
    document.querySelector('.lil-photo.choice').classList.remove('choice');
    document.getElementsByClassName('lil-photo')[position].classList.add('choice');

    document.querySelector('.big-photo.choice').classList.remove('choice');
    document.getElementsByClassName('big-photo')[position].classList.add('choice'); 
})






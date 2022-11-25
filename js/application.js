let screenOn = false
let screenOnh = false
function turnLight(){
    // const piclught = document.getElementById('light')
    // piclught.addEventListener('click', (e) => {
        if (!screenOn){yellowon()}else {turnoff()} 
}


function yellowon(){
    document.getElementById('res').style.backgroundColor='yellow'
    document.getElementById('light').style.backgroundColor='#FFA500'
    screenOn = true 
}

function turnoff(){
    document.getElementById('res').style.background='#9aceecc5';
    document.getElementById('light').style.background='#0d99ebc5';
    screenOn = false
}


function turnLighthistory(){
    if (!screenOnh){yellowonh()}else {turnoffh()} 
}


function yellowonh(){
    document.getElementById('historypart').style.backgroundColor='#FFA500'
    screenOnh = true 
}

function turnoffh(){
    document.getElementById('historypart').style.background='#0d99ebc5';
    screenOnh = false
}





const div = document.getElementById('dot');
div.addEventListener('mouseenter', (event) => {
 div.style.backgroundColor = 'rgb(196, 171, 129)'
});
div.addEventListener('mouseleave', (event) => {
 div.style.backgroundColor = 'rgb(245, 238, 226)'
});


const listOfNumbersss = document.getElementsByClassName('white')
console.log(listOfNumbersss)

for (let item of listOfNumbersss) {
        item.addEventListener('mouseenter', (event) => {
        item.style.backgroundColor = 'rgb(196, 171, 129)'
       });
       item.addEventListener('mouseleave', (event) => {
        item.style.backgroundColor = 'rgb(245, 238, 226)'
       });
}

const plus = document.getElementById('equal');
plus.addEventListener('mouseenter', (event) => {
 plus.style.backgroundColor = 'rgb(196, 171, 129)'
});
plus.addEventListener('mouseleave', (event) => {
 plus.style.backgroundColor = '#0d99ebc5'
});

const c = document.getElementById('picture');
c.addEventListener('mouseenter', (event) => {
 c.style.backgroundColor = 'rgb(196, 171, 129)'
});
c.addEventListener('mouseleave', (event) => {
 c.style.backgroundColor = '#0d99ebc5'
});


const picture = document.getElementsByClassName('picture')
for (let item of picture) {
    item.addEventListener('mouseenter', (event) => {
    item.style.backgroundColor = 'rgb(196, 171, 129)'
   });
   item.addEventListener('mouseleave', (event) => {
    item.style.backgroundColor = '#0d99ebc5'
   });
}
const buttonHistory = document.getElementById('historypart')
buttonHistory.addEventListener('click', (event) => {
    turnLighthistory()
    historyshowpart();
})

function historyshowpart(){
    if (buttonHistory.style.backgroundColor == "#0d99ebc5" ){
        document.getElementById('historyDisable').style.display="none"
    }else {
        document.getElementById('historyDisable').style.display="block"
    }
}
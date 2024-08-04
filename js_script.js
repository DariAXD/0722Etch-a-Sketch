let mainContainer = document.querySelector('.mainContainer');
let rowContainer;

let squareCount = 16;

let squareNum = document.querySelector('#squareNum');
let darken = document.querySelector('#darken')
let darkenClass = darken.classList
let isDarkenOn
let count = 0



function createRow(){
    rowContainer = document.createElement('div');
    rowContainer.setAttribute('style','width:562px; display:flex; flex:1 0 auto;flex-wrap:nowrap; padding:0; box-sizing:border-box;' );

    for (let i = 0; i<squareCount; i++){
    createSquares();
    }

    mainContainer.appendChild(rowContainer);
    
}


function createSquares(){
        let square = document.createElement('div');
        let squareSize = 562/squareCount;
        console.log(squareSize);
        let squareSizeString = `${squareSize}px`
        console.log(squareSizeString);
        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.border = '0.1px solid gray';
        square.style.marginLeft = '-1px';
        square.style.padding = '0';
        square.style.flex = '0 0 auto'
        square.style.boxSizing = 'border-box';

        square.addEventListener('mouseover', function(){
            if(isDarkenOn){
                    let opacity = count/10;
                    square.style.backgroundColor = `rgb(0 0 0 / ${opacity})`
                    count === 10? count = 0 : count++
                } else {
                const getColorValue = () => Math.floor(Math.random()*255)
                square.style.backgroundColor = `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`;
            }
        })
        rowContainer.appendChild(square);
    }



function createGrid() {
    for (let i=0; i<squareCount; i++){
        createRow();
    }
}

createGrid();


squareNum.addEventListener('click', ()=>{
     let input = parseInt(prompt(`Type in the number of squares per side for the new grid`));
     while (input > 100 || input < 16 || isNaN(input)){
        input = parseInt(prompt(`Please type in number between 16~100`));
     } 

    squareCount = input
    mainContainer.innerHTML = '';
    createGrid();
})




darken.addEventListener('click',() => {
   isDarkenOn = darkenClass.toggle('true');
   mainContainer.innerHTML = '';
   createGrid();
})

let clear = document.querySelector('#clear')
clear.addEventListener('click',()=>{
    mainContainer.innerHTML = '';
    createGrid();
})


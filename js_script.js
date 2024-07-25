let mainContainer = document.querySelector('.mainContainer');
let rowContainer;

let squareCount = 16;

function createRow(){
    rowContainer = document.createElement('div');
    rowContainer.setAttribute('style','max-width:60vw; display:flex; flex:0 0 auto;flex-wrap:nowrap; padding:0; box-sizing:border-box;' );

    for (let i = 0; i<squareCount; i++){
    createSquares();
    }

    mainContainer.appendChild(rowContainer);
    
}


function createSquares(){
        let square = document.createElement('div');
        let squareSize = 60/squareCount;
        console.log(squareSize);
        let squareSizeString = `${squareSize}vw`
        console.log(squareSizeString);
        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.border = '0.1px solid gray';
        square.style.marginLeft = '-1px';
        square.style.padding = '0';
        square.style.flex = '0 0 auto'
        square.style.boxSizing = 'border-box';

        square.addEventListener('mouseover', function(){
            const getColorValue = () => Math.floor(Math.random()*255)
            square.style.backgroundColor = `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`;

        })
        rowContainer.appendChild(square);
    }



function createGrid() {
    for (let i=0; i<squareCount; i++){
        createRow();
    }
}

createGrid();

let squareNum = document.querySelector('#squareNum');
squareNum.addEventListener('click', ()=>{
     let input = parseInt(prompt(`Type in the number of squares per side for the new grid`));
     while (input > 100 || input < 16 || isNaN(input)){
        input = parseInt(prompt(`Please type in number between 16~100`));
     } 

    squareCount = input
    mainContainer.innerHTML = '';
    createGrid();
})


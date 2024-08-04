let mainContainer = document.querySelector('.mainContainer');
let rowContainer;

let squareCount = 51;

let squareNum = document.querySelector('#squareNum');
let darken = document.querySelector('#darken')
let rainbowMode = document.querySelector('#rainbow')
let brush = document.querySelector('#brush')

let currentMode='';



function createRow(){
    rowContainer = document.createElement('div');
    rowContainer.setAttribute('style','width:510px; display:flex; flex:0 1 auto;flex-wrap:nowrap; padding:0; box-sizing:border-box;' );

    for (let i = 0; i<squareCount; i++){
    createSquares();
    }

    mainContainer.appendChild(rowContainer);
    
}


function createSquares(){
        let square = document.createElement('div');
        let squareSize = 510/squareCount;
        console.log(squareSize);
        let squareSizeString = `${squareSize}px`
        console.log(squareSizeString);
        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.border = '0.1px solid  rgb(128, 128, 128, 0.2)';
        square.value = '0';
        
        // square.style.marginLeft = '-1px';
        square.style.padding = '0';
        square.style.flex = '0 0 auto'
        square.style.boxSizing = 'border-box';

        square.addEventListener('mouseover', function(){
            if(currentMode==='darken'){
                    let opacity = this.value/10;
                    square.style.backgroundColor = `rgb(0 0 0 / ${opacity})`
                    this.value === '10'? this.value = '10' : this.value ++
                } else if(currentMode==='rainbow'){
                const getColorValue = () => Math.floor(Math.random()*255)
                square.style.backgroundColor = `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`;
            } else if(currentMode==='brush' || currentMode===''){
                square.style.backgroundColor = `rgb(128, 128, 128)`
            }
        })
        rowContainer.appendChild(square);
    }



function createGrid() {
    let rowCount = 510/(510/squareCount);
    for (let i=0; i<rowCount; i++){
        createRow();
    }
}

createGrid();


// squareNum.addEventListener('click', ()=>{
//      let input = parseInt(prompt(`Type in the number of squares per side for the new grid`));
//      while (input > 100 || input < 16 || isNaN(input)){
//         input = parseInt(prompt(`Please type in number between 16~100`));
//      } 

//     squareCount = input
//     mainContainer.innerHTML = '';
//     createGrid();
// })


brush.addEventListener('mousedown',() => {
    currentMode = 'brush';
    brush.style.boxShadow ='4px 10px 4.3px -4px rgba(144, 25, 39, 0.80), 10px 11px 5.9px 0px rgba(0, 0, 0, 0.25)';
   
})

brush.addEventListener('mouseup', () => {
    brush.style.boxShadow = '4px 15px 8.2px -1px rgba(182, 34, 51, 0.80)';
});


rainbowMode.addEventListener('mousedown',() => {
    currentMode = 'rainbow';
    rainbowMode.style.boxShadow ='4px 10px 4.3px -4px rgba(144, 25, 39, 0.80), 10px 11px 5.9px 0px rgba(0, 0, 0, 0.25)';
  
})

rainbowMode.addEventListener('mouseup',() => {
    
    rainbowMode.style.boxShadow ='4px 15px 8.2px -1px rgba(182, 34, 51, 0.80)';
  
})


darken.addEventListener('mousedown',() => {
    currentMode = 'darken';
    darken.style.boxShadow ='4px 10px 4.3px -4px rgba(144, 25, 39, 0.80), 10px 11px 5.9px 0px rgba(0, 0, 0, 0.25)';
  
})

darken.addEventListener('mouseup',() => {
    darken.style.boxShadow ='4px 15px 8.2px -1px rgba(182, 34, 51, 0.80)';
  
})



let clear = document.querySelector('#clear')
clear.addEventListener('mousedown',() => {
    clear.style.boxShadow ='4px 10px 4.3px -4px rgba(144, 25, 39, 0.80), 10px 11px 5.9px 0px rgba(0, 0, 0, 0.25)';
    mainContainer.innerHTML = '';
    createGrid();
  
})

clear.addEventListener('mouseup',()=>{
    clear.style.boxShadow ='4px 15px 8.2px -1px rgba(182, 34, 51, 0.80)';
})


const squarePairValues = [15, 17, 30, 34, 51, 85, 102];


const sliderInput = document.querySelector('input')

sliderInput.addEventListener("input", (event) => {
    let sliderValue = event.target.value;
    squareCount = squarePairValues[sliderValue];
    console.log(squareCount)
    mainContainer.innerHTML = '';
    createGrid();
  });



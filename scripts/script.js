const container = document.querySelector('.container');
const squareBody = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');

const arrowLeft = document.querySelectorAll('.arrow.left');
const arrowRight = document.querySelectorAll('.arrow.right');
const arrowTop = document.querySelectorAll('.arrow.top');
const arrowBottom = document.querySelectorAll('.arrow.bottom');

const playingField = /* JSON.parse(localStorage.getItem("gameStatus")) || */ [];
blocks.forEach(item => playingField.push(item))


/* const render = () => {
    squareBody.innerHTML = '';
    playingField.forEach((item, i) => {
        const div = document.createElement('div');
    
        div.classList.add('block');
        div.innerHTML = `<div class="block-number">${item[i]}</div>
        <div class="block-btn">
            <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
            <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
            <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
            <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
        </div>`;

        squareBody.append(div);
        
        //localStorage.setItem('gameStatus', JSON.stringify(playingField));
        
    });
}; */


//let newArr = playingField.map((_, i, a) => a.slice(i * 5, i * 5 + 5)).filter((el) => el.length);  для создания двумерного массива из обычного

container.addEventListener('click', (e) => {
    let targetIndex;
    let targetBlock = e.target.closest('.block');

    const getTargetIndex = () => {
        playingField.forEach((item) => {
            if (item !== targetBlock) {
                targetIndex = playingField.indexOf(targetBlock);
                return targetIndex;
            }
        })
    }

    if (e.target.matches('.arrow.left img')) {   
        getTargetIndex();

        playingField[targetIndex] = [playingField[targetIndex - 1], playingField[targetIndex - 1] = playingField[targetIndex]][0];

        const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex - 1].innerHTML;
        blocks[targetIndex - 1].innerHTML = tmp;
    } 

    if (e.target.matches('.arrow.right img')) {   
        getTargetIndex();

        playingField[targetIndex] = [playingField[targetIndex + 1], playingField[targetIndex + 1] = playingField[targetIndex]][0];

        const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex + 1].innerHTML;
        blocks[targetIndex + 1].innerHTML = tmp;
    } 

    if (e.target.matches('.arrow.top img')) {   
        getTargetIndex();

        playingField[targetIndex] = [playingField[targetIndex - 5], playingField[targetIndex - 5] = playingField[targetIndex]][0];

        const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex - 5].innerHTML;
        blocks[targetIndex - 5].innerHTML = tmp;
    } 

    if (e.target.matches('.arrow.bottom img')) {   
        getTargetIndex();

        playingField[targetIndex] = [playingField[targetIndex + 5], playingField[targetIndex + 5] = playingField[targetIndex]][0];

        const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex + 5].innerHTML;
        blocks[targetIndex + 5].innerHTML = tmp;
    } 
})


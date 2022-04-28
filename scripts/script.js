
const container = document.querySelector('.container');
const squareBody = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');

const arrowLeft = document.querySelectorAll('.arrow.left');
const arrowRight = document.querySelectorAll('.arrow.right');
const arrowTop = document.querySelectorAll('.arrow.top');
const arrowBottom = document.querySelectorAll('.arrow.bottom');

let playingField = /* JSON.parse(localStorage.getItem('gameStatus')) || */ [];

blocks.forEach(item => {
    playingField.push(item);
});

localStorage.setItem('gameStatus', JSON.stringify(playingField));
//JSON.parse(JSON.stringify(playingField));
/* console.log(playingField);
console.log(firstArr); */

//console.log(playingField);
//localStorage.setItem("gameStatus", JSON.stringify(playingField));

const render = () => {
    squareBody.innerHTML = '';
    playingField = JSON.parse(localStorage.getItem('gameStatus'));
    playingField.forEach((item) => {
        const div = document.createElement('div');
        
        div.classList.add('block');
        div.innerHTML = '<div class="block-number">' + item.innerText + '</div>' + 
        '<div class="block-btn">' + 
            '<div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>' + 
            '<div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>' + 
            '<div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>' + 
            '<div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>' + 
        '</div>';
        
        squareBody.append(div);
        
    });

    localStorage.setItem('gameStatus', JSON.stringify(playingField));
    playingField = JSON.parse(localStorage.getItem('gameStatus'));
};


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
        console.log(targetIndex);
        playingField[targetIndex] = [playingField[targetIndex - 1], playingField[targetIndex - 1] = playingField[targetIndex]][0];

        localStorage.setItem('gameStatus', JSON.stringify(playingField));
        render();
        //playingField = JSON.parse(localStorage.getItem('gameStatus'));
        /* const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex - 1].innerHTML;
        blocks[targetIndex - 1].innerHTML = tmp; */
    }

    if (e.target.matches('.arrow.right img')) {
        getTargetIndex();
        console.log(targetIndex);
        playingField[targetIndex] = [playingField[targetIndex + 1], playingField[targetIndex + 1] = playingField[targetIndex]][0];

        localStorage.setItem('gameStatus', JSON.stringify(playingField));
        render();
        //render();
        /* const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex + 1].innerHTML;
        blocks[targetIndex + 1].innerHTML = tmp; */
    }

    if (e.target.matches('.arrow.top img')) {
        getTargetIndex();
        console.log(targetIndex);
        playingField[targetIndex] = [playingField[targetIndex - 5], playingField[targetIndex - 5] = playingField[targetIndex]][0];

        localStorage.setItem('gameStatus', JSON.stringify(playingField));
        render();
        //render();
        /* const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex - 5].innerHTML;
        blocks[targetIndex - 5].innerHTML = tmp; */
    }

    if (e.target.matches('.arrow.bottom img')) {
        getTargetIndex();

        playingField[targetIndex] = [playingField[targetIndex + 5], playingField[targetIndex + 5] = playingField[targetIndex]][0];
        console.log(targetIndex);
        localStorage.setItem('gameStatus', JSON.stringify(playingField));
        render();
        //render();
        /* const tmp = blocks[targetIndex].innerHTML;
        blocks[targetIndex].innerHTML = blocks[targetIndex + 5].innerHTML;
        blocks[targetIndex + 5].innerHTML = tmp; */
    }
})
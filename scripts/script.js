'use strict';

const container = document.querySelector('.container');
const squareBody = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');
const blockNumbers = document.querySelectorAll('.block-number');
const arrowLeft = document.querySelectorAll('.arrow.left');
const arrowRight = document.querySelectorAll('.arrow.right');
const arrowTop = document.querySelectorAll('.arrow.top');
const arrowBottom = document.querySelectorAll('.arrow.bottom');

const getBlocks = () => {
    const numbers = JSON.parse(localStorage.getItem('status'))
    if (numbers) {
        const blockNumbers = document.querySelectorAll('.block-number')
        blockNumbers.forEach((block, index) => {
            block.innerHTML = numbers[index]
        })
    }
}

const postBlocks = () => {
    const numbers = []
    blockNumbers.forEach(block => {
        numbers.push(block.innerHTML)
    })
    localStorage.setItem('status', JSON.stringify(numbers))
}

const playingField = [];
const startValues = [];

blocks.forEach(item => {
    playingField.push(item);
});

blockNumbers.forEach(item => {
    startValues.push(item.innerHTML);
});


getBlocks();

container.addEventListener('click', (e) => {
    let targetIndex;

    const getTargetIndex = () => {
        playingField.forEach((item) => {
            let targetBlock = e.target.closest('.block');
            if (item !== targetBlock) {
                targetIndex = playingField.indexOf(targetBlock);
                return targetIndex;
            }
        })
    }

    if (e.target.matches('.arrow.left img')) {
        getTargetIndex();
        if (targetIndex >= 1) {
        blockNumbers[targetIndex].innerHTML = [blockNumbers[targetIndex - 1].innerHTML, blockNumbers[targetIndex - 1].innerHTML = blockNumbers[targetIndex].innerHTML][0];
        }
        postBlocks();
    }

    if (e.target.matches('.arrow.right img')) {
        getTargetIndex();
        if (targetIndex <= 23) {
        blockNumbers[targetIndex].innerHTML = [blockNumbers[targetIndex + 1].innerHTML, blockNumbers[targetIndex + 1].innerHTML = blockNumbers[targetIndex].innerHTML][0];
        }
        postBlocks();
    }

    if (e.target.matches('.arrow.top img')) {
        getTargetIndex();
        if (targetIndex >= 5) {
        blockNumbers[targetIndex].innerHTML = [blockNumbers[targetIndex - 5].innerHTML, blockNumbers[targetIndex - 5].innerHTML = blockNumbers[targetIndex].innerHTML][0];
        }
        postBlocks();
    }

    if (e.target.matches('.arrow.bottom img')) {
        getTargetIndex();
        if (targetIndex <= 19) {
        blockNumbers[targetIndex].innerHTML = [blockNumbers[targetIndex + 5].innerHTML, blockNumbers[targetIndex + 5].innerHTML = blockNumbers[targetIndex].innerHTML][0];
        }
        postBlocks();
    }

    if (e.target.matches('.btn-reset')) {
        localStorage.setItem('status', JSON.stringify(startValues))
        getBlocks();
    }
})
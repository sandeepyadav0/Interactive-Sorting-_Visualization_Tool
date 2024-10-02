const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const parseArrayInput = (inputStr) => {
    const tokens = inputStr.trim().split(/\s+/);
    const array = tokens.map(elem => parseFloat(elem));
    if (array.length !== tokens.length || array.some(elem => isNaN(elem))) {
        return null;
    }
    return array;
};

const insertArrayToHtml = (array) => {
    const html = array.map(num => `<div class="array-element">${num}</div>`).join('');
    document.getElementById('array').innerHTML = html;
};

const highlightElements = (index1, index2, className) => {
    const array = document.getElementById('array').children;
    if (array[index1]) array[index1].classList.add(className);
    if (array[index2]) array[index2].classList.add(className);
};

const setStatus = (text) => {
    const statusElem = document.getElementById('status');
    statusElem.innerHTML = text;
};

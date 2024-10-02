document.getElementById('insertion-sort').addEventListener('click', async () => {
    const array = parseArrayInput(document.getElementById('array-input').value);
    if (!array) {
        document.getElementById('input-error').innerHTML = 'Incorrect input!';
        return;
    }
    document.getElementById('input-error').innerHTML = '';
    const n = array.length;

    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            insertArrayToHtml(array);
            highlightElements(j, j + 1, 'swapped');
            setStatus('Swapping...');
            await sleep(1000);
            j--;
        }
        array[j + 1] = key;
        insertArrayToHtml(array);
        setStatus('Inserting...');
        await sleep(1000);
    }
    insertArrayToHtml(array);
    setStatus('Sorted!');
});

document.getElementById('bubble-sort').addEventListener('click', async () => {
    const array = parseArrayInput(document.getElementById('array-input').value);
    if (!array) {
        document.getElementById('input-error').innerHTML = 'Incorrect input!';
        return;
    }
    document.getElementById('input-error').innerHTML = '';
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            insertArrayToHtml(array);
            highlightElements(j, j + 1, 'compared');
            setStatus('Comparing...');
            await sleep(1000);

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                insertArrayToHtml(array);
                highlightElements(j, j + 1, 'swapped');
                setStatus('Swapping...');
                await sleep(1000);
            }
        }
    }
    insertArrayToHtml(array);
    setStatus('Sorted!');
});

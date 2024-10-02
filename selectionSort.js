document.getElementById('selection-sort').addEventListener('click', async () => {
    const array = parseArrayInput(document.getElementById('array-input').value);
    if (!array) {
        document.getElementById('input-error').innerHTML = 'Incorrect input!';
        return;
    }
    document.getElementById('input-error').innerHTML = '';
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            insertArrayToHtml(array);
            highlightElements(minIndex, j, 'compared');
            setStatus('Comparing...');
            await sleep(1000);

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        insertArrayToHtml(array);
        highlightElements(i, minIndex, 'swapped');
        setStatus('Swapping...');
        await sleep(1000);
    }
    insertArrayToHtml(array);
    setStatus('Sorted!');
});

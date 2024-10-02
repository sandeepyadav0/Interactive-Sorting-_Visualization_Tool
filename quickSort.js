const quickSort = async (array, low, high) => {
    if (low < high) {
        const pi = await partition(array, low, high);
        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    } else {
        insertArrayToHtml(array);
    }
};

const partition = async (array, low, high) => {
    const pivot = array[high];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
        insertArrayToHtml(array);
        highlightElements(j, high, 'compared');
        setStatus('Comparing...');
        await sleep(1000);

        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            insertArrayToHtml(array);
            highlightElements(i, j, 'swapped');
            setStatus('Swapping...');
            await sleep(1000);
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
};

document.getElementById('quick-sort').addEventListener('click', async () => {
    const array = parseArrayInput(document.getElementById('array-input').value);
    if (!array) {
        document.getElementById('input-error').innerHTML = 'Incorrect input!';
        return;
    }
    document.getElementById('input-error').innerHTML = '';
    await quickSort(array, 0, array.length - 1);
    setStatus('Sorted!');
});

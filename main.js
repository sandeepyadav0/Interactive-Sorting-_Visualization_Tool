document.querySelectorAll('.submit-array').forEach(button => {
    button.addEventListener('click', async () => {
        document.getElementById('array').innerHTML = ''; // Clear the previous output
        document.getElementById('input-error').innerHTML = ''; // Clear any previous errors
        const inputField = document.getElementById('array-input');
        const array = parseArrayInput(inputField.value);
        if (!array) {
            document.getElementById('input-error').innerHTML = 'Incorrect input!';
            return;
        }
        insertArrayToHtml(array);
        document.getElementById('input-error').innerHTML = '';
    });
});

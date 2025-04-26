const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    const words = text.split(/\s+/);
    const count = text === '' ? 0 : words.length;
    wordCount.textContent = count;
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#start').addEventListener('click',startTimer);
    document.querySelector('#record').addEventListener('click',recordTimer);
    document.querySelector('#reset').addEventListener('click',resetTimer);
    document.querySelector('#submit').addEventListener('click',submitRecord);
}); 
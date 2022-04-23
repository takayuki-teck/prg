let my_botton = document.getElementById('my-botton');

my_botton.addEventListener('click', (e) => {
    e.preventDefault(); // デフォルトの動作をキャンセルする
    alert('クリックされました!')
});
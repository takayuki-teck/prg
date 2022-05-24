let my_text = document.getElementById('my-text');
let my_ul = document.getElementById('my-ul');

let pokemon_list = get_pokemon_list(); /*pokemon-list.jsから取得*/

/*
リストをリセット
*/
function reset_list() {
    let len = my_ul.children.length;
    for(let i=0; i<len; i++) {
        my_ul.removeChild(my_ul.children[0]);
    }
};

/*
リストに追加
*/
function add_list(val) {
    console.log('val:'+val);
    pokemon_list.forEach(element => {
        console.log(element + ':' + element.indexOf(val));
        if (val !== '' && element.indexOf(val) === 0) {
            let li = document.createElement('li');
            li.innerHTML = element;
            my_ul.appendChild(li);
        }
    });
};

/*
テキスト入力イベント
*/
my_text.addEventListener('input', (e) => {
    console.log('input');
    reset_list();
    add_list(hiraToKana(my_text.value));    
});

/*
クリックイベント
*/
my_text.addEventListener('click', (e) => {
    console.log('click');
    reset_list();
    add_list(my_text.value);
});

/**
 * ひらがなをカタカナに変換
 * @param {*} str 
 * @returns 
 */
function hiraToKana(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
};
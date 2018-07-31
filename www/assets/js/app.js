function translit() {
    var space = ' ';
    //Input text value
    var text = $('#name').val();
    //Kz alphabet with Latin analogy
    var alphabet = {
        'А': 'A',
        'а': 'a',
        'Ә': unescape('%C1'),
        'ә': unescape('%E1'),
        'Б': 'B',
        'б': 'b',
        'Д': 'D',
        'д': 'd',
        'Е': 'E',
        'е': 'e',
        'Ф': 'F',
        'ф': 'f',
        'Г': 'G',
        'г': 'g',
        'Ғ': unescape('%u01F4'),
        'ғ': unescape('%u01F5'),
        'Х': 'H',
        'х': 'h',
        'Һ': 'H',
        'һ': 'h',
        'І': 'I',
        'і': 'i',
        'И': unescape('%u0399'),
        'и': unescape('%u0131'),
        'Й': unescape('%u0399'),
        'й': unescape('%u0131'),
        'Ж': 'J',
        'ж': 'j',
        'К': 'K',
        'к': 'k',
        'Л': 'L',
        'л': 'l',
        'М': 'M',
        'м': 'm',
        'Н': 'N',
        'н': 'n',
        'Ң': unescape('%u0143'),
        'ң': unescape('%u0144'),
        'О': 'O',
        'о': 'o',
        'Ө': unescape('%D2'),
        'ө': unescape('%F3'),
        'П': 'P',
        'п': 'p',
        'Қ': 'Q',
        'қ': 'q',
        'Р': 'R',
        'р': 'r',
        'С': 'S',
        'с': 's',
        'Ш': 'Sh',
        'ш': 'sh',
        'Ч': 'Ch',
        'ч': 'ch',
        'Т': 'T',
        'т': 't',
        'Ұ': 'U',
        'ұ': 'u',
        'Ү': unescape('%DA'),
        'ү': unescape('%FA'),
        'В': 'V',
        'в': 'v',
        'Ы': 'Y',
        'ы': 'y',
        'У': unescape('%DD'),
        'у': unescape('%FD'),
        'З': 'Z',
        'з': 'z',
        'Я': 'Ya', //UNDEFINED
        'я': 'ya', //UNDEFINED
        'Ц': 'C',
        'ц': 'c',
        'Э': unescape('%C9'),
        'э': unescape('%E9'),
        'Ъ': '',
        'ъ': '',
        'Ь': '',
        'ь': '',
        'Щ': 'Sh', //UNDEFINED
        'щ': 'sh', //UNDEFINED
        'Ю': 'Yu', //UNDEFINED
        'ю': 'yu', //UNDEFINED
        'Ё': 'Yo', //UNDEFINED
        'ё': 'yo' //UNDEFINED
    }
    var result = '';
    var currentAlphabet = '';
    for (i = 0; i < text.length; i++) {
        if (alphabet[text[i]] != undefined) {
            if (currentAlphabet != alphabet[text[i]] || currentAlphabet != space) {
                result += alphabet[text[i]];
                currentAlphabet = alphabet[text[i]];
            }
        } else {
            result += text[i];
            currentAlphabet = text[i];
        }
    }
    result = resultReplace(result);
    $('#result').val(result);
}

function resultReplace(text) {
    text = text.replace(/^-/, '');
    return text.replace(/-$/, '');
}
var input = document.getElementById("result");
var button = document.getElementById("copy-button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    input.select();
    document.execCommand("copy");
});
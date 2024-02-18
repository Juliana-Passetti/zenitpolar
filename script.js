var zenitPolar = function (letter) {
    letter = letter.toLowerCase();
    switch (letter) {
        case 'z':
            return 'p';
        case 'p':
            return 'z';
        case 'e':
            return 'o';
        case 'o':
            return 'e';
        case 'n':
            return 'l';
        case 'l':
            return 'n';
        case 'i':
            return 'a';
        case 'a':
            return 'i';
        case 't':
            return 'r';
        case 'r':
            return 't';


        case 'Z':
            return 'P';
        case 'P':
            return 'Z';
        case 'E':
            return 'O';
        case 'O':
            return 'E';
        case 'N':
            return 'L';
        case 'L':
            return 'N';
        case 'I':
            return 'A';
        case 'A':
            return 'I';
        case 'T':
            return 'R';
        case 'R':
            return 'T';

        case 'á':
            return 'í';
        case 'é':
            return 'ó';
        case 'ã':
            return 'i';
        case 'í':
            return 'á';
        case 'ó':
            return 'é';
        case 'ê':
            return 'ô';
        case 'õ':
            return 'e';

        default:
            return letter;
    }
}

var setMessage = function (message) {
    var messageCripted = '';
    [].map.call(message, function (letter) {
        messageCripted += zenitPolar(letter);
    });
    return messageCripted;
}

var $message = document.querySelector('#message'),
    $sendMessage = document.querySelector('#send_message'),
    $result = document.querySelector('#result');

$sendMessage.addEventListener('submit', function (e) {
    e.preventDefault();
    $result.value = setMessage($message.value);
});
export function romanToInteger(str) {
    let result = 0;
    let font_arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let font_roman = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M',
    ];
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let position = 0;
    let n = font_arab.length - 1;
    while (n >= 0 && position < str.length) {
        if (str.substr(position, font_roman[n].length) == font_roman[n]) {
            result += font_arab[n];
            position += font_roman[n].length;
        } else n--;
    }
    return result;
}

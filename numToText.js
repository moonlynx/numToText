/**
 * Переводит числовую запись числа в строковую
 * 123 => сто двадцать три
 *
 *@author {moonlynx} Yuri
 *
 *@version 0.1
 *
 */
;
/**
 * Проверяет, является ли переданный аргумент числом и 
 * и лежит ли это число в перделах (-1000000000000000, 1000000000000000)
 * 
 * @throws Error если аргумент не является числом
 * @throws Error если аргумент меньше или равен -1000000000000000
 * @throws Error если аргумент больше или равен 1000000000000000
 */
function checkArgument(argument) {
    if (!isFinite(argument)) {
        throw new Error ("Argument of numToText function must be number");
    }

    if (argument >= 1000000000000000) {
        throw new Error ("Number is too big");
    }
    
    if (argument <= -1000000000000000) {
        throw new Error ("Number is too small");
    }
}

/**
 *Переводит числовую запись числа в строковую
 *
 *@param {Integer} num - число
 *
 *@return {String}
 */

function numToText(num) {
    
    checkArgument(num);

    var ZERO = 'ноль',
        NEG = 'минус',
        SEPARATOR = ' ',
        isNegNum = false,

        words = [],
        countOf3xDigitsNumbers = 0,
        reminder;

    if (num < 0) {
       num = -num;
       isNegNum = true;
    }

    if (num !== 0) {
        do {
            reminder = num % 1000;
            words = parse3xDigitsNum(reminder, countOf3xDigitsNumbers).concat(words);
            num = Math.floor(num / 1000);
            countOf3xDigitsNumbers += 1;
        } while (num > 0);
    
    } else {
        return ZERO;
    }
    
    if (isNegNum) {
       return NEG + SEPARATOR + words.join(SEPARATOR); 
    } else {
       return words.join(SEPARATOR);
    } 
}

/**
 *Функция для перевода числа в строку
 *
 *@param {Integer} number - число
 *@param {Integer} position - порядок числа
 *
 *@return {String}
 *@private
 */
function parse3xDigitsNum(number, position) {
    var firstTens = ['один',  'два',  'три',    'четыре', 'пять',
                     'шесть', 'семь', 'восемь', 'девять', 'десять',
                     'одиннадцать',  'двенадцать',   'тринадцать',
                     'четырнадцать', 'пятнадцать',   'шестнадцать',
                     'семнадцать',   'восемнадцать', 'девятнадцать'],
        tens =	['двадцать', 'тридцать', 'сорок', 'пятьдесят',
                 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        hungreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот',
                    'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        
        words = [];

    if (number >= 100) {
        words.push(hungreds[Math.floor(number / 100) - 1]);

        if (number % 100 === 0) {
            words = getEnd(words, position, 0);
        }        
    }

    if (number % 100 >= 20) {
        //массив tens начинается с двадцати, поэтому задаем смещение -2.
        //получаем количество десятков.
        words.push(tens[Math.floor((number % 100) / 10) - 2]);

        if (number % 10 > 0) {
            words.push(firstTens[number % 10 - 1]);
            words = getEnd(words, position, number % 10);
            
        } else {
            words = getEnd(words, position, 0);
        }      

    } else if (number % 100 > 0) {
        words.push(firstTens[number % 100 - 1]);
        words = getEnd(words, position, number % 100);
    }

    return words;
}

/**
 *Функция для склонения числительных
 *(тысяч, миллионов, миллиардов и триллионов)
 *
 *@param {Array} words - исходный массив, к которому будет добавлено окончание
 *@param {Integer} position - порядок числа
 *@param {Integer} number - число, влияющее на склонение
 *
 *@return {String}
 *@private
 */
function getEnd(words, position, number) {
    var thousands = ['тысяча', 'тысячи', 'тысяч'],
        millions = ['миллион', 'миллиона', 'миллионов'],
        milliards = ['миллиард', 'миллиарда', 'миллиардов'],
        trillions = ['триллион', 'триллиона', 'триллионов'];
  
    switch (position) {
        case 1:
            if (words.length > 0) {
                //переводим последний элемент массива тысяч в женский род, если необходимо
                words[words.length - 1] = checkThousandEnd(words[words.length - 1]);
            }

            words.push(thousands[getNumForEnd(number)]);
            break;
        case 2:
            words.push(millions[getNumForEnd(number)]);
            break;
         case 3:
            words.push(milliards[getNumForEnd(number)]);
            break;
        case 4:
            words.push(trillions[getNumForEnd(number)]);
            break;
    }

    return words;
}

/**
 *Второстепенная функция для склонения числительных
 *(тысяч, миллионов, миллиардов и триллионов)
 *
 *@param {Integer} num - значащее для склонения число
 *
 *@return {Integer}
 *@private
 */
function getNumForEnd(num) {
    if ((num >= 5) || (num === 0)) {
        return 2;
    } else if (num >= 2) {
        return 1;
    } else {
        return 0;
    }
}

/**
 *Функция проверяет окончание для одной и двух тысяч. При
 *необходимости заменяет "один" на "одна" и "два" на "две"
 *
 *@param {string} str - строка для проверки
 *
 *@return {string}
 *@private
 */
function checkThousandEnd(str) {
    if (str.substring(str.length - 2) === 'ин') {
        str = str.substring(0, str.length - 2) + 'на';
    } else if (str.substring(str.length - 2) === 'ва') {
        str = str.substring(0, str.length - 2) + 'ве';
    }

    return str;
}
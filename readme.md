﻿Переводит цифровую запись числа в строковую
===========================================

API:
----
1. numToText(num)

Методы:
-------
### numToText(num)

#### Аргументы:
1. **num** - число

#### Вывод:
Строка, содержащая строковую запись числа

#### Пример:
numToText(1111) --> "одна тысяча сто одиннадцать"

#### Ошибки:
1. **"Argument of numToText function must be number"** - переданный аргумент должен быть числом
2. **"Number is too big"** - число больше, чем 999 999 999 999 999
3. **"Number is too small"** - число меньше, чем -999 999 999 999 999
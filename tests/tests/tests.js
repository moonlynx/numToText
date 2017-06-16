describe ("numToText tests", function() {    
    it ("Error if argument is not number", function() {
        assert.throw(function() {numToText("test")}, Error);
    });

    it ("Error if argument is undefined", function() {
        assert.throw(function() {numToText()}, Error);
    });

    it ("Error if argument is NaN", function() {
        assert.throw(function() {numToText(NaN)}, Error);
    });

    it ("Error if argument is too big number(> 999 999 999 999 999)", function() {
        assert.throw(function() {numToText(1000000000000000)}, Error);
    });

    it ("Error if argument is too small number(< -999 999 999 999 999)", function() {
        assert.throw(function() {numToText(-1000000000000000)}, Error);
    });

    it ("Return 'ноль' if argument is 0", function() {
        assert.equal("ноль", numToText(0));
    });

    it ("Return 'один' if argument is 1", function() {
        assert.equal("один", numToText(1));
    });

    it ("Return 'десять' if argument is 10", function() {
        assert.equal("десять", numToText(10));
    });

    it ("Return 'двенадцать' if argument is 12", function() {
        assert.equal("двенадцать", numToText(12));
    });

    it ("Return 'сто двадцать три' if argument is 123", function() {
        assert.equal("сто двадцать три", numToText(123));
    });

    it ("Return 'минус одна тысяча' if argument is -1000", function() {
        assert.equal("минус одна тысяча", numToText(-1000));
    });

    it ("Return 'минус один миллион' if argument is -1000000", function() {
        assert.equal("минус один миллион", numToText(-1000000));
    });

    it ("Return 'минус один миллиард' if argument is -1000000000", function() {
        assert.equal("минус один миллиард", numToText(-1000000000));
    });

    it ("Return 'минус один триллион' if argument is -1000000000000", function() {
        assert.equal("минус один триллион", numToText(-1000000000000));
    });

    it ("Return 'один миллион пятнадцать' if argument is 1000015", function() {
        assert.equal("один миллион пятнадцать", numToText(1000015));
    });

    it ("Return 'сто тысяч пятьсот' if argument is 100500", function() {
        assert.equal("сто тысяч пятьсот", numToText(100500));
    });

    it ("Return 'одна тысяча пятьдесят' if argument is 1050", function() {
        assert.equal("одна тысяча пятьдесят", numToText(1050));
    });
});
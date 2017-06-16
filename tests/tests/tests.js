describe ("numToStr tests", function() {    
    it ("Error if argument is not number", function() {
        assert.throw(function() {numToStr("test")}, Error);
    });

    it ("Error if argument is undefined", function() {
        assert.throw(function() {numToStr()}, Error);
    });

    it ("Error if argument is NaN", function() {
        assert.throw(function() {numToStr(NaN)}, Error);
    });

    it ("Error if argument is too big number(> 999 999 999 999 999)", function() {
        assert.throw(function() {numToStr(1000000000000000)}, Error);
    });

    it ("Error if argument is too small number(< -999 999 999 999 999)", function() {
        assert.throw(function() {numToStr(-1000000000000000)}, Error);
    });

    it ("Return 'ноль' if argument is 0", function() {
        assert.equal("ноль", numToStr(0));
    });

    it ("Return 'один' if argument is 1", function() {
        assert.equal("один", numToStr(1));
    });

    it ("Return 'десять' if argument is 10", function() {
        assert.equal("десять", numToStr(10));
    });

    it ("Return 'двенадцать' if argument is 12", function() {
        assert.equal("двенадцать", numToStr(12));
    });

    it ("Return 'сто двадцать три' if argument is 123", function() {
        assert.equal("сто двадцать три", numToStr(123));
    });

    it ("Return 'минус одна тысяча' if argument is -1000", function() {
        assert.equal("минус одна тысяча", numToStr(-1000));
    });

    it ("Return 'минус один миллион' if argument is -1000000", function() {
        assert.equal("минус один миллион", numToStr(-1000000));
    });

    it ("Return 'минус один миллиард' if argument is -1000000000", function() {
        assert.equal("минус один миллиард", numToStr(-1000000000));
    });

    it ("Return 'минус один триллион' if argument is -1000000000000", function() {
        assert.equal("минус один триллион", numToStr(-1000000000000));
    });

    it ("Return 'один миллион пятнадцать' if argument is 1000015", function() {
        assert.equal("один миллион пятнадцать", numToStr(1000015));
    });

    it ("Return 'сто тысяч пятьсот' if argument is 100500", function() {
        assert.equal("сто тысяч пятьсот", numToStr(100500));
    });

    it ("Return 'одна тысяча пятьдесят' if argument is 1050", function() {
        assert.equal("одна тысяча пятьдесят", numToStr(1050));
    });
});
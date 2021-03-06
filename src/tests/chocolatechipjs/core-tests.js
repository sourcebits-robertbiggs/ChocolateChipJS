module('Core Tests');
// 1
test('Returns version of ChocolateChip', function() {
   equal($.version, '4.0.3', 'Should be 4.0.3')
});
// 2
test('Returns name of library (ChocolateChip)', function() {
   equal($.libraryName, 'ChocolateChip', 'Should be ChocolateChip')
});
test('$.make("<div></div>") should return div node in an array.', function() {
   var div = $.make('<div></div>');
   equal(div[0].nodeName, 'DIV', 'Should be a DIV element.');
});
// 3
test('$.make("<ul><li>one</li><li>two</li><li>three</li></ul>") should return ul node with three list in an array.', function() {
   var ul = $.make('<ul><li>one</li><li>two</li><li>three</li></ul>');
   var lastChildOfUl = ul[0].lastElementChild.innerHTML;
   equal(ul[0].nodeName, 'UL', 'Should be a UL element.');
   equal(ul[0].children.length, 3, 'Should have three child nodes.');
   equal(lastChildOfUl, 'three', 'InnerHTML should be three');
});
// 4
test('Returns a text node in an array: $.make("some text")', function(){
   var text = $.make('some text');
   equal(text[0].nodeType, 3, 'Should return a text node in an array.');
});
// 5
test('$.html() should work the same as $.make().', function() {
   var div = $.make('<div></div>');
   equal(div[0].nodeName, 'DIV', 'Should be a DIV element.')
});
// 6
test('$.html("<ul><li></li><li></li><li></li></ul>") should return ul node with three list in an array.', function() {
   var ul = $.make('<ul><li></li><li></li><li></li></ul>');
   equal(ul[0].nodeName, 'UL', 'Should be a UL element.');
   equal(ul[0].children.length, 3, 'Should have three child nodes.')
});
// 7
test( "Replace one div with another: $.replace().", function() {
   stop();
   $.replace($('#toReplace'), $('#toBeReplaced'));
   equal($('#toReplace')[0].nodeName, 'DIV', 'Replacing node is present.');
   equal($('#toBeReplaced')[0], undefined, 'Replaced node not present.');
   start();
});
// 8
test('$.noop is a function.', function(){
   equal($.isFunction(toString), true, 'Shoud return true.');
});
// 9
test('$.noop returns undefined', function(){
   equal($.noop(), undefined, 'Shoud return undefined.');
});
// 10
test('$.concat joins array of strings into one string.', function(){
   var arrayOfStrings = ['this','is','text'];
   var string = $.concat(arrayOfStrings);
   equal(string, 'thisistext','Should return "thisistext"')
});
// 11
test('$.concat joins array of numbers into one string.', function(){
   var arrayOfStrings = [1,2.0,3];
   var string = $.concat(arrayOfStrings);
   equal(string, '123','Should return "123"');
});
// 12
test('$.concat joins string arguments into one string.', function(){
   var string = $.concat('this','is','text');
   equal(string, 'thisistext','Should return "thisistext"');
});
// 13
test('$.concat joins number arguments into one string.', function(){
   var string = $.concat(1,2.0,3);
   equal(string, '123','Should return "thisistext"');
});
// 14
test('$.concat with objct returns undefined.', function(){
   var string = $.concat({name: 'Joe', age: 100});
   equal(string, undefined, 'Should return undefined.');
});
// 15
test('$.w("This is text."): convert a string of space separated words into an array.', function() {
   var array = $.w('This is text.');
   var string = array.join('');
   equal(array.length, 3, 'Should be array of three items.');
   equal(array[0], 'This', 'First item should be "This"');
   equal(array[1], 'is', 'Second item should be "is"');
   equal(array[2], 'text.', 'Third item should be "text."');
   equal(string, "Thisistext.",'Should return "Thisistext."');
});
// 16
test('Test if data is a String', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   var emptyString = '';
   equal($.isString(string), true, 'Should return true.');
   equal($.isString(emptyString), true, 'Should return true');
   equal($.isString([1,2,3]), false, 'Should return false.');
   equal($.isString(100), false, 'Should return false.');
   equal($.isString({name: "John", age: 100}), false, 'Should return false.');
   equal($.isString($.noop), false, 'Should return false.');
   equal($.isString(undefined), false, 'Should return false.');
   equal($.isString(null), false, 'Should return false.');
});
// 17
test('Test if data is an Array.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isArray(array), true, 'Should return true.');
   equal($.isArray(string), false, 'Should return false.');
   equal($.isArray($.noop), false, 'Should return false.');
   equal($.isArray(obj), false, 'Should return false.');
   equal($.isArray(null), false, 'Should return false.');
   equal($.isArray(undefined), false, 'Should return false.');
   equal($.isArray(123), false, 'Should return false.');
});
// 18
test('Test if data is a Function.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isFunction(array), false, 'Should return false.');
   equal($.isFunction(string), false, 'Should return false.');
   equal($.isFunction($.noop), true, 'Should return true.');
   equal($.isFunction(obj), false, 'Should return false.');
   equal($.isFunction(null), false, 'Should return false.');
   equal($.isFunction(undefined), false, 'Should return false.');
   equal($.isFunction(123), false, 'Should return false.');
});
// 19
test('Test if data is an Object.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isObject(array), false, 'Should return false.');
   equal($.isObject(string), false, 'Should return false.');
   equal($.isObject($.noop), false, 'Should return false.');
   equal($.isObject(obj), true, 'Should return true.');
   equal($.isObject(null), false, 'Should return false.');
   equal($.isObject(undefined), false, 'Should return false.');
   equal($.isObject(123), false, 'Should return false.');
});
// 20
test('Test if data is a Number.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isNumber(array), false, 'Should return false.');
   equal($.isNumber(string), false, 'Should return false.');
   equal($.isNumber($.noop), false, 'Should return false.');
   equal($.isNumber(obj), false, 'Should return false.');
   equal($.isNumber(null), false, 'Should return false.');
   equal($.isNumber(undefined), false, 'Should return false.');
   equal($.isNumber(123), true, 'Should return true.');
   equal($.isNumber(123.123), true, 'Should return true.');
   equal($.isNumber(-123.123), true, 'Should return true.');
   equal($.isNumber(0), true, 'Should return true.');
});
// 21
test('Test if data is an Integer.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isInteger(array), false, 'Should return false.');
   equal($.isInteger(string), false, 'Should return false.');
   equal($.isInteger($.noop), false, 'Should return false.');
   equal($.isInteger(obj), false, 'Should return false.');
   equal($.isInteger(null), false, 'Should return false.');
   equal($.isInteger(undefined), false, 'Should return false.');
   equal($.isInteger(123), true, 'Should return true.');
   equal($.isInteger(123.123), false, 'Should return false.');
   equal($.isInteger(-123.123), false, 'Should return false.');
   equal($.isInteger(0), true, 'Should return true.');
});
// 22
test('Test if data is a Float.', function() {
   var array = [1,2,3];
   var string = '123';
   var obj = {name: 'Joe', age: 100};
   equal($.isFloat(array), false, 'Should return false.');
   equal($.isFloat(string), false, 'Should return false.');
   equal($.isFloat($.noop), false, 'Should return false.');
   equal($.isFloat(obj), false, 'Should return false.');
   equal($.isFloat(null), false, 'Should return false.');
   equal($.isFloat(undefined), false, 'Should return false.');
   equal($.isFloat(123), false, 'Should return false.');
   equal($.isFloat(123.123), true, 'Should return true.');
   equal($.isFloat(-123.123), true, 'Should return true.');
   equal($.isFloat(0), false, 'Should return false.');
});
// 23
test('$.UuidNum should return 36 character string.', function() {
   var uid = $.uuidNum();
   equal($.isString(uid), true, 'Should be a string.');
   equal(uid.toString().length, 36, 'Should have 36 characters.');
   equal(uid.split('-').length, 5, 'Should have 5 parts.');
   equal(uid.split('-')[0].length, 8, 'First section should have 8 characters.');
   equal(uid.split('-')[1].length, 4, 'Second section should have 4 characters.');
   equal(uid.split('-')[2].length, 4, 'Third section should have 4 characters.');
   equal(uid.split('-')[3].length, 4, 'Fourth section should have 4 characters.');
   equal(uid.split('-')[4].length, 12, 'Fifth section should have 12 characters.');
});
// 24
test('$.fn is object used for extending ChocolateChip.', function(){
   equal($.isObject($.fn), true, 'Should be an object');
   equal(Object.keys($.fn)[0], 'extend', 'Should be the extend method.');
});
// 25
test('$.each should loop arrays', function() {
   var data = [1,2,3,4,5,6];
   var result = '';
   var length = 0;
   var fail = true;
   $.each({name: 'Joe'}, function(ctx, idx) {
      fail = false;
   });
   $.each(data, function(ctx, idx) {
      result += ctx;
      length += 1;
   });
   equal(fail, true, '$.each should fail when the data is not an array.')
   equal(length, 6, 'The length should be 6.');
   equal(result, '123456', 'The result should be "123456".')
});

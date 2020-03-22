module.exports = function repeater(str, options) {
  



let countStr = options.repeatTimes // Количество повторов str
if (countStr == undefined) countStr = 1;


let arr = [];                // Массив повторов str
let spr = [];                // Массив повторов adition
let adt;                    // Вставка для массива str
let sprAdt;                 // Вставка для массива сепараторов
let result;


if ( str == null && options.addition == null ) {
    options.addition = 'null';
    str = 'null';
}

if (options.addition != undefined) {
    let countAdt = options.additionRepeatTimes // Количество повторов вставного элемента
    if ( countAdt == undefined) countAdt = 1;
    
    for( let i = 0; i<countAdt; i++) {  
            
        spr.push(String(options.addition));
    }

    if (options.additionSeparator != undefined) {
        sprAdt = String(options.additionSeparator);
        adt = spr.join(sprAdt);
        for( let i = 0; i<countStr; i++) {
        arr.push(String(str) + adt);}
        result = arr.join(options.separator);

    }
    else {
        adt = spr.join('');
        for( let i = 0; i<countStr; i++) {
        arr.push(str + adt);}
        result = arr.join(options.separator);
    }

    
}
else {
    for( let i = 0; i<countStr; i++) {
    
        arr.push(String(str));
    }
    if(options.separator != undefined) {
        result = arr.join(options.separator)
    }
    else result = arr.join('+');
}

return result;
};
  


 
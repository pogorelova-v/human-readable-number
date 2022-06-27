module.exports = function toReadable (number) {

    let result = '';
   
    let zero = 'zero';  //0 
    let one = 'one';    //1
    let two = 'two';    //2 
    let three = 'three';    //3
    let four = 'four';  //4 
    let five = 'five';  //5
    let six = 'six';    //6
    let seven = 'seven';    //7
    let eight = 'eight';    //8 
    let nine = 'nine';  //9
    let ten = 'ten';    //10
    let eleven = 'eleven';  //11
    let twelve = 'twelve';  //12    
    let thirteen = 'thirteen';  //13
    let fourteen = 'fourteen';  //14
    let fifteen = 'fifteen';  //15
    let sixteen = 'sixteen';  //16
    let seventeen = 'seventeen';  //17
    let eighteen = 'eighteen';  //18
    let nineteen = 'nineteen';  //19
    let twenty = 'twenty';  //20
    let thirty = 'thirty';  //30
    let forty = 'forty';  //40
    let fifty = 'fifty';  //50
    let sixty = 'sixty';  //60
    let seventy = 'seventy';  //70
    let eighty = 'eighty';  //80
    let ninety = 'ninety';  //90
    let hundred = 'hundred';  //100 - one hundred

    const units = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen];

    const tens = [zero, one, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];

    let numStr = String(number);

    if ( number >= 0 && number <= 19) {
        result = units[number]
    } else if ( numStr.length === 2 && number >= 20){
          if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90){
            result = tens[number]
          } else if ( numStr[0] === 2 && number > 20) {
            result = twenty + units[1];
          } else if ( numStr[0] === 3 && number > 30) {
            result = thirty + units[1];
          } else if ( numStr[0] === 4 && number > 40) {
            result = forty + units[1];
          } else if ( numStr[0] === 5 && number > 50) {
            result = fifty + units[1];
          } else if ( numStr[0] === 6 && number > 60) {
            result = sixty + units[1];
          } else if ( numStr[0] === 7 && number > 70) {
            result = seventy + units[1];
          } else if ( numStr[0] === 8 && number > 80) {
            result = eighty + units[1];
          } else if ( numStr[0] === 9 && number > 90) {
            result = ninety + units[1];
          }
    } else if (numStr.length === 3 && number >= 100 && number % 100 === 0) {
        result = units[numStr[0]] + ' ' +hundred;
    } else if (numStr.length === 3 && number > 100 && number % 100 !== 0 && numStr[2] !==0){
        result = units[numStr[0]] + ' ' + hundred + ' ' + tens[numStr[1]] + ' ' + units[numStr[2]]
    } else if (numStr.length === 3 && number > 100 && number % 100 !== 0 && numStr[2] === 0){
        result = units[numStr[0]] + ' ' + hundred + ' ' + tens[numStr[1]]
    }

    return result;
}

module.exports = function toReadable (number) {
    let firstTwenty = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
    ];
    let dozens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let first, second, third;
    if(number == 0){
        return 'zero';
    }
    if(number<21){
        return firstTwenty[number-1]
    }
    if(number>20 && number<100){
        first = Math.floor(number/10);
        second = number%10;
        if(second == 0){
            return dozens[first-2];
        }
        return dozens[first-2]+' '+ firstTwenty[second-1];
    }
    if(number%100 == 0){
        return firstTwenty[number/100-1] + ' hundred';
    }
    if(number>=100){
        first = Math.floor(number/100)
        if(number%100<20){
            second = number%100;
            return firstTwenty[first-1] + ' hundred ' + firstTwenty[second-1];
        }
        second = Math.floor(number/10)%10;
        third = number%10;
        if(third == 0){
            return firstTwenty[first-1] + ' hundred ' + dozens[second-2];
        }
        return firstTwenty[first-1] + ' hundred ' + dozens[second-2] + ' ' + firstTwenty[third-1];
    }
}

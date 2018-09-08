// Get the ordinal suffix for the given int value
function ordinalSuffix(val) {
    var mod = val % 10;
    if (mod === 1 && val !== 11) {
        return 'st';
    } else if (mod === 2 && val !== 12) {
        return 'nd';
    } else if (mod === 3 && val !== 13) {
        return 'rd';
    } else {
        return 'th';
    }
};

//console.log(ordinalSuffix(23));

function staircase(n) {
    let stringHash = '#';
    let resultString = '';
    let num = n;
    for (let i = 1; i<num+1; i++) {
        let j = 0;
        for (j = num; j--;) {
            if (j < i) {
                resultString += '#';
            } else {
                resultString += ' ';
            }
            
        }
        resultString += '\n';
    }
    console.log(resultString)
    return resultString;
    
}
//staircase(6);



for(var i=1; i<100; i++) {
    if(i%3 ==0 & i%5 ==0){
        //console.log(i+'foobar');
    } else if (i%5 ==0) {
        //console.log(i+'bar');
    } else if (i%3 ==0) {
        //console.log(i+'foo')
    }
}

function calDivider(a,b){
    var divisible = null;
    var pointer = a>b ? b : a;
    if(a % pointer ==0 && b % pointer ==0){
        divisible = pointer;
    } else {
        pointer = pointer/2;
        console.log(pointer);
        for(var i = pointer; i--;) {
            if(a%i == 0 && b  %i == 0){
                divisible = i;
                break;
            }
        }
    }
    console.log(divisible);
    return divisible;
};
calDivider(120,150);


var arr1 = [1,2,3,4,5];
function arraySum(a) {
    return a.reduce(function(total,item) {
         return total+item;
     },0);
 }
function miniMaxSum(arr) {
    var sum = 0;
    var maxArr = arraySum(arr.slice(1));
    var minArr = arraySum(arr.slice(0,-1));
    console.log(`${minArr} ${maxArr}`) //
    return [minArr, maxArr];
}
miniMaxSum(arr1);



// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var arrClone1 = arr.slice() 
    var arrClone2 = arr.slice() 
    console.log(arrClone1)
    var arrMinor = arrClone1.sort(function(a, b){return a - b;})
    arrMinor.pop()

    var arrMajor = arrClone2.sort(function(a, b){return b - a;})
    arrMajor.pop()

    function getSum(a, b) {
    return a + b;
    }

    var result1 = arrMinor.reduce(getSum) 
    var result2 = arrMajor.reduce(getSum)    

    console.log(`${result1} ${result2}`) // it is returning: 10 14 
}




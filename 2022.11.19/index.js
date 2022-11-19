//function 1
function myfunc(a,b){
    a=Number(a);
    b=Number(b);
    if (isNaN(a)||isNaN(b)){
        return "Type Error";
    };
     let result=1;
     for(i=1;i<b;i++){
        result*=a;
     };

     return result;
};

console.log(myfunc(2,4));

//function 2
function myfunc2(a,b){
    a=Number(a);
    b=Number(b);
    if (isNaN(a)||isNaN(b)){
        return "Type Error";
    };
    if (a>b){
        return "True";
    } else {
        return "False";
    }
};

console.log(myfunc2(2,4));

//function 3
function compare(a){
    return function myfunc3(b){
        if (a>b){
            return true;
        } else if (a<b){
            return false;
        } else {
            return null;
        };
    };
};

const comp=compare(20);
console.log(comp(10));
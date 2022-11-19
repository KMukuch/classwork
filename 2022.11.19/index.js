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
function comp(a,b){
    a=Number(a);
    b=Number(b);
    if (isNaN(a)||isNaN(b)){
        return "Type Error";
    };
    if (a>b){
        return "True";
    } else {
        return "null";
    };
};

console.log(comp(4,2));
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

//function 4
function userdata(uname,usurname){
    return function(lang){
        switch(lang){
            case 'hy': return `Barev, ${uname} ${usurname}`;
            case 'en': return `Hello, ${uname} ${usurname}`;
            case 'ru': return `Privet, ${uname} ${usurname}`;
        };
    };
};

const SayHello=userdata("John","Johnyan");
console.log(SayHello("hy"));
console.log(SayHello("en"));
console.log(SayHello("ru"));

//function 5
function printNums(a,b){
    a++;
    if (a%2==0){
        console.log(a);
    };
    if (a<=b){
        printNums(a,b);
};
};

printNums(1,10);

//function 6
const compare2=(a)=>
function myfunc6(b){
        if (a>b){
            return true;
        } else if (a<b){
            return false;
        } else {
            return null;
        };
};

let comp2=compare2(20);
console.log(comp2(10));
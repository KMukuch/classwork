//object
const user={};

user.name="Mkrtich";

console.log(user);

const smth={
    name:"Blabla",
    age:30,
    "property shmropert":"Blabla"
};

console.log("name" in smth);
console.log(smth);

//for in loop
for (let i in smth){
    console.log(i,smth[i]);
}

//1
const car1={};
car1.brand="BMW";
car1.year=2018;
car1.price=20000;

const car2={
    brand:"Mercedes",
    year:2018,
    price:20000,
};
for (let i in car1){
    console.log(i,car1[i]);
}
for (let i in car2){
    console.log(i,car2[i]);
}

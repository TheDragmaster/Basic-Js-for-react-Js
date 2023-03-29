//export default function DoSomething() {            normal function
//}
//export const DoSomething = () => {         arrow function
//}

const MyComponent = (args) => {         //basic react component 
    return <div></div>
}

<button onClick ={() => 
    {console.log("hello world")
    }}
></button>

//Let age = 10
//if (age > 10) {       normal if/else statement
    //name ="Pedro"
//}   else {
    //name = "Jack"
//}

let agee = 16;            // If/else in aarow function
let namee = age > 10 ? "Pedro" : "Jack";

const Component = () => {   // if/else if you want to render it with react
    return agee > 10 ? <div> Pedro </div> : <div> Jack </div>;
};



const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

//const name = person.name
//const age = person.age
//const isMArried = person.isMarried   // you can destructure instead
//                                     // seen below

const {name, age, isMarried } = person 

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];

let namess = ["Pedro", "Jack", "carol"];

namess.map((name) => {
    return <h1> {name} </h1>  //print out the array into h1 tags
    //return name + "1";
});

let namess1 = ["Pedro", "Jack", "carol", "Pedro", "Pedro"];

names.filter((name)=> {
    return name !== "Pedro" //return names not equal to "Pedro"
})


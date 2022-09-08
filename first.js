//Arrow functions introduce concise body syntax, or implicit return. 
//This allows the omission of the curly brackets and the return keyword.
export const DoSomething = () => {

}

//Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and return HTML
const MyComponent = () => {
    return <div></div>
}

// annonymous functions, basically a function without a name 
<button    
    onClick={() => {
        console.log("hello world"); 
    }}
></button>;

//Ternarys operators - It will shorten the code. It will improve the 
//readability of the code.

let age = 16;
let name = age > 10 ? "Pedro" : "Jack";

const Component = () => {
    return age > 10 ? <div> Pedro </div> : <div> Jack</div>;
};

function  printMessage() {
    console.log("Hello from Button component!");
}



export default function Button() {
    return (
        <button onClick={printMessage} >
            Click Me
        </button>
    );
}
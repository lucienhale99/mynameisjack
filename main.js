// store a reference to the h1 in variable
const myHeading = document.querySelector("h1");

// update the text content of the <h1>
myHeading.textContent = "Hello my name is jack!";

const myImage = document.querySelector("img");

// imagge click funcion
myImage.addEventListener("click", ()=> {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/jack1.jpeg") {
        myImage.setAttribute("src", "images/jack2.jpeg");
    } else {
        myImage.setAttribute("src", "images/jack1.jpeg");
    }
});


let myButton = document.querySelector("button");

function setUserName () {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hi ${myName}, im Jack!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi ${storedName}, im Jack!`;
}

myButton.addEventListener("click", () => {
    setUserName();
})
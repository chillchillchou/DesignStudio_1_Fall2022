//----This sketch showes you how to use space bar to manipulate contents on one page, as well as how to use space bar to open a new page. 
//----In this examples below, we break down a paragraph into 5 sentences. Every time a space bar is pressed, the next sentence shows up and replace the previous sentence. When we reach the last sentence, pressing space bar leads you to a different page-----

//first, we create an array to store the 6 sentences in order
let introTextsArray = [
     "0 This is a field guide about all the wonderful projects our students created in Design Studio.",
     "1.The projects are made by Melisa, Rachel, Corina, Zamira",
     "2.The first project is a digital catalog",
     "3.the second project is a interactive field guide",
     "4.the third project is a participatory design",
     "5.the end"
];

//get the number of items in the array and store them in a variable 
let toatal = introTextsArray.length;


//create a counter to keep track of how many sentences we have flipped through and set the initial value to 1
let i = 0;

//initialize the page
function setup() {}


//This function defines what happens when pressing a key
function keyPressed() {
    //grab all the elements in the html div named "text-box" and put them in a variable called currentText
    let currentText = document.getElementById("text-box")
    
    
    //use space bar to change texts
    if (key == ' ' && i < toatal) { //if space bar is pressed and if the page number doesn't exceed toatal number of pages 
        i = i + 1; //page number increase by 1

        currentText.innerHTML = introTextsArray[i]; //replace current text with next sentence in the array 
    }
    
    //use left arrow key to revert to the previous text
    if (keyCode === LEFT_ARROW && i > 0) { //if left arrow key is pressed and if the page number is no less than 0
        i = i - 1; //page number decrease by 1
        currentText.innerHTML = introTextsArray[i]; //replace current text with the previous sentence 

    }
    
    //when we reach the last sentence, we use space bar to open a new page
    if (key == ' ' && i == toatal) { 
        window.location.replace("page2.html");
    }
}

//----This sketch showes you how to use space bar to jump to next page


// !!!important!!! in order for this to work, you need to make sure you have a title for each of your.html file (line 9 <title></title>)

//initialize the page
function setup() {}


//This function defines what happens when pressing a key
function keyPressed() {
    if (key == ' ') { //if space bar is pressed 
        if (document.title == "intro") { //if the page title is "intro"
            window.location.replace("page1.html"); //go to page1.html
        }
        if (document.title == "page1") {
            window.location.replace("page2.html");
        }
        if (document.title == "page2") {
            window.location.replace("page3.html");
        }
    }
}

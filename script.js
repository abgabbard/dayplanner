
$(document).ready(() => {
    $("#save01").click(() => {
        // $("#block01").prepend("Added to the front");
        var userInput01 = $("#block01").val()

        console.log("Hey I am being clicked")
        localStorage.setItem("Some Info: ", userInput01 )
    });
});

// Create variables for each time-block (9AM-5PM)
// var userInput01 = document.getElementById("block01")
// var userInputText = userInput01.val
// console.log("This should be user input: ", userInputText)
// var userInput02 = document.getElementById("block02")
// var userInput03 = document.getElementById("block03")
// var userInput04 = document.getElementById("block04")
// var userInput05 = document.getElementById("block05")
// var userInput06 = document.getElementById("block06")
// var userInput07 = document.getElementById("block07")
// var userInput08 = document.getElementById("block08")
// var userInput09 = document.getElementById("block09")

// localStorage.setItem("block01", userInput01)
// localStorage.setItem("block02", userInput02)
// localStorage.setItem("block03", userInput03)
// localStorage.setItem("block04", userInput04)
// localStorage.setItem("block05", userInput05)
// localStorage.setItem("block06", userInput06)
// localStorage.setItem("block07", userInput07)
// localStorage.setItem("block08", userInput08)
// localStorage.setItem("block09", userInput09)

// // On click events for the save button for each block. Save button should 
// // "set the text of that block" to local storage for userInput01

// // on click save01 should save text from block01 to localstorage for Userinput01
// // on click save02 should save text from block02 to localstorage for Userinput02
// // on click save03 should save text from block03 to localstorage for Userinput03
// // on click save04 should save text from block04 to localstorage for Userinput04
// // on click save05 should save text from block05 to localstorage for Userinput05
// // on click save06 should save text from block06 to localstorage for Userinput06
// // on click save07 should save text from block07 to localstorage for Userinput07
// // on click save08 should save text from block08 to localstorage for Userinput08
// // on click save09 should save text from block09 to localstorage for Userinput09

// // // function insertLsText() {
// //     $("block01").innertext(localStorage.getItem(block01))
// // }
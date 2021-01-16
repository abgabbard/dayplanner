
$(document).ready(() => {
    var firstBlock = $("#block01")
    firstBlock.text(localStorage.getItem("userStored01"))
    $("#save01").click(() => {
        var userInput01 = $("#block01").val()
        localStorage.setItem("userStored01", userInput01 )
    });
    $("#save02").click(() => {
        var userInput02 = $("#block02").val()
        localStorage.setItem("userStored02", userInput02 )
    });
    $("#save03").click(() => {
        var userInput03 = $("#block03").val()
        localStorage.setItem("userStored03", userInput03 )
    });
    $("#save04").click(() => {
        var userInput04 = $("#block04").val()
        localStorage.setItem("userStored04", userInput04 )
    });
    $("#save05").click(() => {
        var userInput05 = $("#block05").val()
        localStorage.setItem("userStored05", userInput05 )
    });
    $("#save06").click(() => {
        var userInput06 = $("#block06").val()
        localStorage.setItem("userStored06", userInput06 )
    });
    $("#save07").click(() => {
        var userInput07 = $("#block07").val()
        localStorage.setItem("userStored07", userInput07 )
    });
    $("#save08").click(() => {
        var userInput08 = $("#block08").val()
        localStorage.setItem("userStored08", userInput08 )
    });
    $("#save09").click(() => {
        var userInput09 = $("#block09").val()
        localStorage.setItem("userStored09", userInput09 )
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
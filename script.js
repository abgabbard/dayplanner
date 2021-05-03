// import dayjs from 'dayjs';
// let now = dayjs();
// console.log(now.format());

$(document).ready(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm =  String(today. getMonth() + 1). padStart(2, '0'); 
    var yyyy =  today. getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    $("#currentDay").text(today);

    var currentDate = new Date();
    var time = currentDate.getHours();
    var firstBlock = $("#block01")
    var secondBlock = $("#block02")
    var thirdBlock = $("#block03")
    var fourthBlock = $("#block04")
    var fifthBlock = $("#block05")
    var sixthBlock = $("#block06")
    var seventhBlock = $("#block07")
    var eighthBlock = $("#block08")
    var ninethBlock = $("#block09")
    firstBlock.text(localStorage.getItem("userStored01"))
    secondBlock.text(localStorage.getItem("userStored02"))
    thirdBlock.text(localStorage.getItem("userStored03"))
    fourthBlock.text(localStorage.getItem("userStored04"))
    fifthBlock.text(localStorage.getItem("userStored05"))
    sixthBlock.text(localStorage.getItem("userStored06"))
    seventhBlock.text(localStorage.getItem("userStored07"))
    eighthBlock.text(localStorage.getItem("userStored08"))
    ninethBlock.text(localStorage.getItem("userStored09"))
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

    function beforeNine() {
        $(".hourNine").addClass("future");
        $(".hourTen").addClass("future");
        $(".hourEleven").addClass("future");
        $(".hourTwelve").addClass("future");
        $(".hourOne").addClass("future");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function afterFive() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("past");
        $(".hourTwo").addClass("past");
        $(".hourThree").addClass("past");
        $(".hourFour").addClass("past");
        $(".hourFive").addClass("past");
      };
      
      function NineAM() {
        $(".hourNine").addClass("present");
        $(".hourTen").addClass("future");
        $(".hourEleven").addClass("future");
        $(".hourTwelve").addClass("future");
        $(".hourOne").addClass("future");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
  
     
      function TenAM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("present");
        $(".hourEleven").addClass("future");
        $(".hourTwelve").addClass("future");
        $(".hourOne").addClass("future");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function ElevenAM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("present");
        $(".hourTwelve").addClass("future");
        $(".hourOne").addClass("future");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function TwelvePM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("present");
        $(".hourOne").addClass("future");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function OnePM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("present");
        $(".hourTwo").addClass("future");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function TwoPM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("past");
        $(".hourTwo").addClass("present");
        $(".hourThree").addClass("future");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function ThreePM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("past");
        $(".hourTwo").addClass("past");
        $(".hourThree").addClass("present");
        $(".hourFour").addClass("future");
        $(".hourFive").addClass("future");
      };
      function FourPM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("past");
        $(".hourTwo").addClass("past");
        $(".hourThree").addClass("past");
        $(".hourFour").addClass("present");
        $(".hourFive").addClass("future");
      };
      function FivePM() {
        $(".hourNine").addClass("past");
        $(".hourTen").addClass("past");
        $(".hourEleven").addClass("past");
        $(".hourTwelve").addClass("past");
        $(".hourOne").addClass("past");
        $(".hourTwo").addClass("past");
        $(".hourThree").addClass("past");
        $(".hourFour").addClass("past");
        $(".hourFive").addClass("present");
      };

      function updateTime(){
        if (time == 9) {
          NineAM();
        } else if (time == 10) {
          TenAM();
        } else if (time == 11) {
          ElevenAM();
        }else if (time == 12) {
          TwelvePM();
        }else if (time == 13) {
          OnePM();
        }else if (time == 14) {
          TwoPM();
        }else if (time == 15) {
          ThreePM();
        }else if (time == 16) {
          FourPM();
        }else if (time == 17) {
          FivePM();
        }else if (time < 9) {
          beforeNine();
        }else {
         afterFive();
        }
      };
      updateTime();


});
// console.log(now.format());
// console.log(firstBlock.text(localStorage.getItem("userStored01")))
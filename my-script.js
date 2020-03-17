// NOTE: This code is very repetitive and not the most efficient way to create this application.
//I will be refactoring this in the future.
//Ideas for Improvement: Collect data entered into my forms and add them to an array, 
//that I can call on in my localStorage?
window.onload = function(){

    //WORK IN PROGRESS - call a new quote ONCE per day vs every reload
    const dayOftheWeek = moment().format('dddd');
    localStorage.setItem("todayIs", dayOftheWeek);
    

    

    /* if (localStorage.getItem("todayIs") === dayOftheWeek) {
        quote.text(localStorage.getItem("myQuote"));
    }  */
    quoteCall();

//daily inspirational quote from API
function quoteCall () {
    let quote = $("#QOTD");
    //let author = $("#quoteAuthor");
            var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?&cat=famous",
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "99167c5176mshbc77c09ad508f00p1d4a25jsn125998e15600",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {}
        }
        
        $.ajax(settings).done(function (response) {
            let todaysQuote = quote.text(`"${response[0].quote}"`);
            localStorage.setItem("myQuote", todaysQuote);
             console.log(todaysQuote);
        });
    
    
};



//display current time and date at the top of the page, below h1 and p tag id="currentDay"
$("#currentDay").html(moment().format('LLLL'));

  
//each save button saves the content for that textarea
$("#saveMyStuff9").click(function () {
  localStorage.setItem("key01", $("#hourNine").val())});
  document.getElementById("hourNine").innerHTML = localStorage.getItem("key01")

$("#saveMyStuff10").click(function () {
    localStorage.setItem("key02", $("#hourTen").val())});
    document.getElementById("hourTen").innerHTML = localStorage.getItem("key02")

$("#saveMyStuff11").click(function () {
    localStorage.setItem("key03", $("#hourEleven").val())});
    document.getElementById("hourEleven").innerHTML = localStorage.getItem("key03")

$("#saveMyStuff12").click(function () {
    localStorage.setItem("key04", $("#hourTwelve").val())});
    document.getElementById("hourTwelve").innerHTML = localStorage.getItem("key04")

$("#saveMyStuff1").click(function () {
    localStorage.setItem("key05", $("#hourOne").val())});
    document.getElementById("hourOne").innerHTML = localStorage.getItem("key05")

$("#saveMyStuff2").click(function () {
    localStorage.setItem("key06", $("#hourTwo").val())});
    document.getElementById("hourTwo").innerHTML = localStorage.getItem("key06")

$("#saveMyStuff3").click(function () {
      localStorage.setItem("key07", $("#hourThree").val())});
      document.getElementById("hourThree").innerHTML = localStorage.getItem("key07")

$("#saveMyStuff4").click(function () {
    localStorage.setItem("key08", $("#hourFour").val())});
    document.getElementById("hourFour").innerHTML = localStorage.getItem("key08")

$("#saveMyStuff5").click(function () {
    localStorage.setItem("key09", $("#hourFive").val())});
    document.getElementById("hourFive").innerHTML = localStorage.getItem("key09")

//code for changing the color of each row based on the current time    

const currentTime = moment().format('LT');
const currentHour = moment().format('h')




      








}










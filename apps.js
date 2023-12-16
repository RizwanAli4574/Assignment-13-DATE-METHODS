document.write("<b> Q NO 1 Write a program that displays current date and time in your browser. </b>");
document.write("<br>")
document.write("<br>")

//  Declear var current date
var currentDate = new Date();

// Display in the browser
document.write("Current Date" + " " + " : " + currentDate)

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 2 Write a program that alerts the current month in words. For example December.. </b>");
document.write("<br>")
document.write("<br>")

// Creat array of months name
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
// Creat var for current time 
var now = new Date();

// Creat var for get current month
 var theMonth = now.getMonth();

//  Creat var for covert current time to current month full name
 var nameOfMonth = monthNames[theMonth];


//  Display on the browser
 document.write(nameOfMonth)

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 3 Write a program that alerts the first 3 letters of the current day,.. </b>");
document.write("<br>")
document.write("<br>")

// Creat array of days name
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Creat var for current time 
 var now = new Date();

 // Creat var for get current day
 var theDay = now.getDay();

 //  Creat var for covert current time to current day name
 var nameOfToday = dayNames[theDay];

 //  Display on the browser
 document.write(nameOfToday)

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today </b>");
document.write("<br>")
document.write("<br>")

// Creat var for current time 
var now = new Date();

// Creat var for get current day
var theDay = now.getDay();

// Creat if condition
if (theDay === 0 || theDay === 6){
    document.write("“It’s Fun day”")
}else {
    document.write("It’s not Fun day")
}

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 5 Write a program that shows the message “First fifteen days of the month” .... </b>");
document.write("<br>")
document.write("<br>")

// Creat var for current time 
var now = new Date();

// Creat var for get current day of month
var theDay1 = now.getDate();

// Creat if condition
if (theDay1 >= 1 && theDay1 <= 15){
    document.write("“First fifteen days of the month”")
}else{
    document.write("“Last days of the month”.")
}
document.write("<br>")
document.write("<br>")   

document.write("<b> Q NO 6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns .... </b>");
document.write("<br>")
document.write("<br>") 

// Creat var for current time 
var now = new Date();

// creat var for milliseconds from 1970
var sec = now.getTime();

// Creating a new Date object and getting the current time in milliseconds
var currentDate = new Date().getTime();

// Converting milliseconds to minutes (1 minute = 60,000 milliseconds)
var min = Math.floor(currentDate / 60000);


// display on the browser
document.write("Current Date" + " " + " : " + now + "</br>" + "</br>")
document.write("Milliseconds from 1970" + " " + " : " + sec + "</br>" + "</br>")
document.write("Minutes from 1970" + " " + " : " + min + "</br>" + "</br>")

document.write("<b> Q NO 7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. </b>");
document.write("<br>")
document.write("<br>")

// Create a new Date object to get the current time
var currentTime = new Date();

// Get the current hour (0-23)
var currentHour = currentTime.getHours();

// Check if it's before noon (AM) or afternoon/evening (PM) based on the current hour
if (currentHour < 12) {
  document.write("It's AM");
} else {
  document.write("It's PM");
}

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 8 Write a program that creates a Date object for the last day of the last month of 2020... </b>");
document.write("<br>")
document.write("<br>")

// Create a new Date object for December 31, 2020
var laterDate = new Date(2020, 11, 31); // Month is zero-based (11 represents December)

document.write(laterDate);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan... </b>");
document.write("<br>")
document.write("<br>")

// Create a Date object for the starting date of Ramadan 2015 (June 18, 2015)
var ramadanStartDate = new Date('March 22, 2023');

// Get the current date
var currentDate = new Date();

// Calculate the difference in milliseconds between the current date and Ramadan's starting date
var differenceInTime = currentDate.getTime() - ramadanStartDate.getTime();

// Calculate the number of days by converting milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
var daysPassed = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

// Alert the number of days passed since 1st Ramadan 2015
document.write(`Number of days passed since 1st Ramadan 2023: ${daysPassed} days`);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. </b>");
document.write("<br>")
document.write("<br>")

// Create a Date object for the reference date
var referenceDate = new Date();

// Create a Date object for the beginning of 2015 (January 1, 2015)
var startOf2015 = new Date('January 1, 2015');

// Calculate the difference in milliseconds between the two dates
var differenceInTime = referenceDate.getTime() - startOf2015.getTime();

// Convert milliseconds to seconds (1 second = 1000 milliseconds)
var secondsElapsed = Math.floor(differenceInTime / 1000);

// Display the seconds elapsed since the beginning of 2015 in the browser
document.write(`Seconds elapsed since the beginning of 2015: ${secondsElapsed} seconds`);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 11 Create a Date object for the current date and time. Extract the hours... </b>");
document.write("<br>")
document.write("<br>")

// Create a Date object for the current date and time
var currentDate = new Date();
var currentDate1 = new Date();

// Extract the current hours
var currentHours = currentDate.getHours();

var currentHours1 = currentDate1.getHours();


// Set the date object one hour ahead
currentDate1.setHours(currentHours1 - 1);

// Display the updated date object in the browser
document.write(`Updated Date and Time: ${currentDate}` + "<br> <br>") ;
document.write(`And 1 hour ago: ${currentDate1}`) ;

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? </b>");
document.write("<br>")
document.write("<br>")

// Create a Date object for the current date
var currentDate = new Date();

// Reset the date object 100 years back
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Show the updated date in an alert box
document.write(`Date 100 years ago: ${currentDate}`);
document.write("<br>")
document.write("<br>")


document.write("<b> Q NO 13 Write a program to ask the user about his age. Calculate and show his birth year in your browser. </b>");
document.write("<br>")
document.write("<br>")

// Prompt the user to enter their age
var userAge = parseInt(prompt("Please enter your birth year:"));

// Get the current year
var currentYear = new Date().getFullYear();

// Calculate the birth year based on the user's age and the current year
var birthYear = currentYear - userAge;

// Display the calculated birth year in the browser
document.write(`Your age is: ${birthYear}`) ;

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 14 Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: </b>");
document.write("<br>")
document.write("<br>")

// Function to calculate net amount payable within due date
function calculateNetAmount(units, chargesPerUnit) {
    return units * chargesPerUnit;
  }
  
  // Function to calculate late payment surcharge
  function calculateLatePaymentSurcharge(netAmount) {
    const latePaymentRate = 0.1; // Late payment surcharge rate (10%)
    return netAmount * latePaymentRate;
  }
  
  // Function to calculate gross amount payable after due date
  function calculateGrossAmount(netAmount, latePaymentSurcharge) {
    return netAmount + latePaymentSurcharge;
  }
  
  // Input variables (replace these with actual data)
  var customerName = "Rizwan Ali";
  var currentMonth = "December";
  var numberOfUnits = 150;
  var chargesPerUnit = 30;
  
  // Calculations
  var netAmount = calculateNetAmount(numberOfUnits, chargesPerUnit);
  var latePaymentSurcharge = calculateLatePaymentSurcharge(netAmount);
  var grossAmount = calculateGrossAmount(netAmount, latePaymentSurcharge);
  
  // Display the bill in the browser
  document.write(`
    <h4>K-Electric Bill</h4>
    <p>Customer Name: ${customerName}</p>
    <p>Current Month: ${currentMonth}</p>
    <p>Number of units: ${numberOfUnits}</p>
    <p>Charges per unit: ${chargesPerUnit.toFixed(2)}</p>
    <p>Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}</p>
    <p>Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}</p>
    <p>Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}</p>
  `);
  
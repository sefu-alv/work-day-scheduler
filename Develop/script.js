// The global variables
var today = dayjs();
// This method added the current day and month
$("#currentDay").text(today.format("dddd, MMMM DD"));
// This function saves the user input into the local storage
$(document).ready(function () {
  $(document).on("click", ".saveBtn", function () {
    var input = $(this).closest(".time-block").find(".description");
    var inputValue = input.val();
    localStorage.setItem("input", JSON.stringify(inputValue));
  });
  // This function checks for all id's that have "hour" and compares the value to
  // current time. If value matches criteria then the classes are changed
  $(document).ready(function () {
    var currentTime = dayjs().hour();
    $('[id^="hour-"]').each(function () {
      var idEl = $(this).attr("id");
      var idSplit = idEl.split("-");
      var hour = idSplit[1];
      if (hour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (hour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (hour > currentTime) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
      // console.log(currentTime.hour());
    });
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

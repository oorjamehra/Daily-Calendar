// create time blocks for scheduling reminders
var myCalendar = [
    {
        id: "0",
        hour: "07",
        time: "07",
        meridiem: "am",
        task: ""
    },
    {
        id: "1",
        hour: "08",
        time: "08",
        meridiem: "am",
        task: ""
    },
    {
        id: "2",
        hour: "09",
        time: "09",
        meridiem: "am",
        task: ""
    },
    {
        id: "3",
        hour: "10",
        time: "10",
        meridiem: "am",
        task: ""
    },
    {
        id: "4",
        hour: "11",
        time: "11",
        meridiem: "am",
        task: ""
    },
    {
        id: "5",
        hour: "12",
        time: "12",
        meridiem: "pm",
        task: ""
    },
    {
        id: "6",
        hour: "01",
        time: "13",
        meridiem: "pm",
        task: ""
    },
    {
        id: "7",
        hour: "02",
        time: "14",
        meridiem: "pm",
        task: ""
    },
    {
        id: "8",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "9",
        hour: "04",
        time: "16",
        meridiem: "pm",
        task: ""
    },
    {
        id: "10",
        hour: "05",
        time: "17",
        meridiem: "pm",
        task: ""
    },
    {
        id: "11",
        hour: "06",
        time: "18",
        meridiem: "pm",
        task: ""

    },
    {
        id: "12",
        hour: "07",
        time: "19",
        meridiem: "pm",
        task: ""

    },
]

// function to display current date for calendar
function getDate() {
    var thisDate = moment().format('dddd, Do MMMM');
    $("#thisDay").text(thisDate);
}

// function to save daily reminders to local storage
function saveReminders() {
    localStorage.setItem("myCalendar", JSON.stringify(myCalendar));
}

//function to view reminders saved in local storage
function displayReminders() {
    myCalendar.forEach(function (thisHour) {
        $('#${thisHour.id}').val(thisHour.reminder);
    })
}

//function to view any existing local storage data
function disply() {
    var storedDay = JSON.parse(localStorage.getItem("myCalendar"));

    //create function to display stored data if currentDate = storedDay
    if(storedDay) {
        myCalendar = storedDay;
    } else{}

    saveReminders();
    displayReminders();
}
getDate();

// create scheduling section
myCalendar.forEach(function (currentHour) {
    var timeBlock = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeBlock);

    // create boxes for time slot
    var timeBox = $("<div>")
        .text(`${currentHour.hour}${currentHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
        });

    // creates reminders and tasks section
    var planReminder = $("<div>")
        .attr({
            "class": "col-md-0 reminder p-0"
        });
    var reminderData = $("<text area>");
    planReminder.append(reminderData);
    reminderData.attr("id", currentHour.id);
    // set formating for time past, present, and furute
    if (currentHour.time < moment().format("HH")) {
        reminderData.attr({
            "class": "past",
        })
    } else if (currentHour.time === moment().format("HH")) {
        reminderData.attr({
            "class": "present"
        })
    } else if (currentHour.time > moment().format("HH")) {
        reminderData.attr({
            "class": "future"
        })
    }
    // create save button
    var saveButton = $("<i class= 'far fa-save fa-lg'></i>")
    var saveReminder = $("<button")
      .attr({
          "class": "col-md-1 saveBtn"
      });
    saveReminder.append(saveButton);
    timeBlock.appen(timeBox, planReminder, saveReminder);
    
})


// save reminder data to be used in localStorage, create an event listener for save button
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveData = $(this).siblings(".reminder").children(".future").attr("id");
    myDay[saveData].reminder = $(this).siblings(".reminder").children(".future").val();
    console.log(saveData);
    saveReminders();
    displayReminders();
});
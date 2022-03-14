// create time blocks for scheduling reminers
var dailyCalendar = [
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

// Gets the current date for calendar
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// saves daily tasks to local storage
function saveTasks () {
    localStorage.setItem("dailyCalendar", JSON.stringify(dailyCalendar));
}

// calls tasks stored in local storage to view
function displayTasks() {
    dailyCalendar.forEach(function (thisHour) {
        $('#${thisHour.id}').val(thisHour.task);
    })
}

// calls to view any existing local storage data
function init() {
    var storedDay = JSON.parse(localStorage.getItem("dailyCalendar"));

    if (storedDay) {
        dailyCalendar = storedDay;
    }

    saveTasks();
    displayTasks();
}

getDate();

//creates the format for scheduling section
dailyCalendar.forEach(function(thisHour){
    var timeRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);

// creates the time field   
    var timeField = $("<div>")
    .text(`${thisHour.hour}${thisHour.meridiem}`)
      .attr({
            "class": "col-md-2 hour"
      });

// creates the task data section
      var timePlan = $("<div>")
        .attr({
            "class": "col-md-0 description p-0"
        });
        var planData = $("<textarea>");
        timePlan.append(planData);
        planData.attr("id", thisHour.id);
        if (thisHour.time < moment().format("HH")) {
            planData.attr ({
                "class": "past", 
            })
        } else if (thisHour.time === moment().format("HH")) {
            planData.attr({
                "class": "present"
            })
        } else if (thisHour.time > moment().format("HH")) {
            planData.attr({
                "class": "future"
            })
        }
    
// creates save button
        var saveButton = $("<i class='far fa-save fa-lg'></i>")
        var savePlan = $("<button>")
            .attr({
                "class": "col-md-1 saveBtn"
        });
        savePlan.append(saveButton);
        timeRow.append(timeField, timePlan, savePlan);
    })
    
    init();
    
    
// saves data to be used in localStorage
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var saveIndex = $(this).siblings(".description").children(".future").attr("id");
        myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
        console.log(saveIndex);
        saveReminders();
        displayReminders();
    });
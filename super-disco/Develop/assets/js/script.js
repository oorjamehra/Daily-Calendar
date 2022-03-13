// create time blocks for scheduling reminers
var dailyCalendar = [
    {
        id: "0",
        hour: "07",
        time: "07",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "4",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "5",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
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
        reminder: ""
    },
    {
        id: "10",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "11",
        hour: "06",
        time: "18",
        meridiem: "pm",
        reminder: ""

    },
    {
        id: "12",
        hour: "07",
        time: "19",
        meridiem: "pm",
        reminder: ""

    },
]

function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("currentDay").text(currentDate);
}
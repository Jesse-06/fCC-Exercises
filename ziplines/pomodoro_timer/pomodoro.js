$(document).ready(function() {
  document.getElementById("clock-time").innerHTML = "1:00"
  document.getElementById("task-time").innerHTML = 1
  document.getElementById("break-time").innerHTML = 1
});

//Two global variables:
//startSeconds stores the time when the timer is first started to calculate % for the progress bar.
//sessionCount increases by 1 when the timer reaches 0:00. Odd during break time, even during task time.
var counter,
  startSeconds,
  sessionCount = 0,
    default_task_time = 25,
    default_break_time = 5;

/* 
 * Main functions
 * timerControl() manages the state of the timer, the play/pause button, and the progress bar.
 * countDown() subtracts a second from the timer and updates the time remaining on the page.
 * stringToSeconds() reads the time remaining from the page and converts it to seconds.
 * showTime() converts the seconds from stringToSeconds() back to a time-formatted string and updates the timer.
 */

function timerControl() {
  if (document.getElementById("play-pause-button").className === "fa fa-pause fa-stack-1x") {
    clearInterval(counter)
    document.getElementById("play-pause-button").className = "fa fa-play fa-stack-1x"
  } else {
    if (!startSeconds) {
      startSeconds = document.getElementById("task-time").innerHTML * 60
    }
    if ($('#testMode').is(':checked')) {
      counter = setInterval(countDown, 100)
    } else {
      counter = setInterval(countDown, 1000)
    }
    document.getElementById("play-pause-button").className = "fa fa-pause fa-stack-1x"
  }
}

function countDown() {
  var time = document.getElementById("clock-time").innerHTML
    // subtract a second from the time and update the clock
  if (stringToSeconds(time) > 0) {
    var seconds = stringToSeconds(time) - 1;
    showTime(seconds, "clock-time")
  }
  //When the clock completes, update the Session Count and then start either break time or task time
  if (time === "0") {
    sessionCount = sessionCount + 1
    if (sessionCount % 2 === 1) {
      clearInterval(counter)
      startSeconds = document.getElementById("break-time").innerHTML * 60
      showTime(startSeconds, "clock-time")
      if ($('#testMode').is(':checked')) {
        counter = setInterval(countDown, 100)
      } else {
        counter = setInterval(countDown, 1000)
      }
      return;
    } else {
      clearInterval(counter)
      startSeconds = document.getElementById("task-time").innerHTML * 60
      showTime(startSeconds, "clock-time")
      document.getElementById("sessionCount").innerHTML = "&#x1f345; " + (sessionCount / 2)
      console.log("starting the break counter")
      if ($('#testMode').is(':checked')) {
        counter = setInterval(countDown, 100)
      } else {
        counter = setInterval(countDown, 1000)
      }
      return;
    }
  }
}

function stringToSeconds(time) {
  //if the time has a colon in it, determine seconds based on H:MM:SS or M:SS time format.
  if (time.indexOf(":") > -1) {
    var timeArr = time.split(":");
    if (timeArr.length > 2) {
      var hours = Number(timeArr[0]);
      var minutes = Number(timeArr[1]);
      var seconds = Number(timeArr[2]) + (minutes * 60) + (hours * 3600);
      return seconds;
    } else {
      var minutes = Number(timeArr[0]);
      var seconds = Number(timeArr[1]) + (minutes * 60);
      return seconds;
    }
    //if no colon in the time string, it is the number of seconds remaining
  } else {
    var seconds = time;
    return seconds;
  }
}

function showTime(seconds, id) {
  var display_hours = Math.floor(seconds / 3600);
  var display_minutes = Math.floor((seconds - (display_hours * 3600)) / 60);
  var display_seconds = seconds - (display_hours * 3600) - (display_minutes * 60);
  var time = display_hours + ":" + display_minutes + ":" + display_seconds;

  //format minutes and seconds with leading 0 when necessary
  if (id == "clock-time") {
    //add a zero to single-digits
    if (display_seconds < 10 && display_minutes > 0) {
      display_seconds = "0" + display_seconds
    }
    if (display_minutes < 10 && display_hours > 0) {
      display_minutes = "0" + display_minutes
    }

    //main clock - H:MM:SS, MM:SS, M:SS, SS, or S
    var time = display_hours + ":" + display_minutes + ":" + display_seconds;
    //hide the hour and minute if 0.
    if (display_hours === 0) {
      var time = display_minutes + ":" + display_seconds
    }
    if (display_hours === 0 && display_minutes === 0) {
      var time = display_seconds
    }

    var progress = 100 - ((seconds / startSeconds) * 100)
    var progress = progress.toFixed(0) + "%"
    document.getElementById("progress-bar").style.width = progress
    if (sessionCount % 2 === 1) {
      document.getElementById("progress-bar").innerHTML = "Break&nbsp;Time!&nbsp;&nbsp;" + progress
    } else {
      document.getElementById("progress-bar").innerHTML = "Task&nbsp;Time!&nbsp;&nbsp;" + progress
    }
    document.getElementById("show-progress").style.visibility = "visible";

  }
  //just getting things working for now :)
  if (id != "clock-time") {
    if (display_hours === 0) {
      var time = display_minutes
    } else if (display_hours > 0 && display_minutes < 10) {
      var time = display_hours + ":" + "0" + display_minutes
    } else {
      var time = display_hours + ":" + display_minutes;
    }
  }
  document.getElementById(id).innerHTML = time;
}

/*
 *
 * Buttons for Reset, Task Time, and Break Time
 *
 */
//The next six functions are for the plus, minus, and reset buttons for Task Time and Break Time
function taskTimeUp() {
  var seconds = stringToSeconds(document.getElementById("task-time").innerHTML) * 60;
  if (seconds < (7200)) {
    var id = "task-time"
    var seconds = seconds + 60;
    showTime(seconds, id);
    updateClock(seconds)
  }
}

function taskTimeDown() {
  var seconds = stringToSeconds(document.getElementById("task-time").innerHTML) * 60;
  if (seconds > (60)) {
    var id = "task-time"
    var seconds = seconds - 60;
    showTime(seconds, id);
    updateClock(seconds)
  }
}

//Update the clock with the current Task Time value
function updateClock(seconds) {
  if (!startSeconds) {
    var id = "clock-time"
    showTime(seconds, id)
  }
}

function taskTimeReset() {
  var seconds = stringToSeconds(document.getElementById("task-time").innerHTML) * 60,
      id = "task-time",
      seconds = seconds - 60;

  showTime(seconds, id);
  updateClock(seconds)

  document.getElementById("task-time").innerHTML = default_task_time;
}

//adjust break times
function breakTimeUp() {
  var time = document.getElementById("break-time").innerHTML
  var seconds = stringToSeconds(time) * 60;
  if (seconds < (7200)) {
    var id = "break-time"
    var seconds = seconds + 60;
    showTime(seconds, id);
  }
}

function breakTimeDown() {
  var time = document.getElementById("break-time").innerHTML
  var seconds = stringToSeconds(time) * 60;
  if (seconds > (0)) {
    var id = "break-time"
    var seconds = seconds - 60;
    showTime(seconds, id);
  }
}

function breakTimeReset() {
  document.getElementById("break-time").innerHTML = default_break_time;
}

//Reset the timer back to the current Task Time setting. Stop the clock if running.
function timerReset() {
  clearInterval(counter)
  var seconds = stringToSeconds(document.getElementById("task-time").innerHTML) * 60;
  startSeconds = null
  var id = "clock-time"
  showTime(seconds, id)
  sessionCount = 0
  document.getElementById("play-pause-button").className = "fa fa-play fa-stack-1x"
  document.getElementById("show-progress").style.visibility = "hidden";
  document.getElementById("sessionCount").innerHTML = "&#x1f345; 0"
}
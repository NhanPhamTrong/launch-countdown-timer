$(document).ready(function() {
    $('.flipTimer').flipTimer({
  
    // count up or countdown
    direction: 'down',
  
    // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
    date: 'January 1, 2023 02:00:30',
  
    // callback works only with direction = "down"
    callback: function() { alert('times up!'); }
  
    });
  });
  
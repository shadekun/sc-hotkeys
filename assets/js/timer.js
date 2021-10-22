function countdownTimer(time, element_id) {
    if(element_id.length < 1) {
        return true;
    }

    let timeDisplay = "";

    time--;
    if(time > 0) {
        timeDisplay = timeRemaining(time);
        $("#" + element_id).text(timeDisplay);

        setTimeout(function() {
            countdownTimer(time, element_id)
        }, 995);
    }
    else {
        switch(element_id) {
            default:
                $("#" + element_id).text('Finished');
                break;
            case "regenTimer":
                countdownTimer(61, element_id);
                break;
        }
    }
}

function timeRemaining(time_remaining) {
    function doTimeDivision(t, d) {
        let x = Math.floor(t / d);
        time_remaining -= x * d;
        return x;
    }
    let days = doTimeDivision(time_remaining, 86400),
        hours = doTimeDivision(time_remaining, 3600),
        minutes = doTimeDivision(time_remaining, 60),
        seconds = time_remaining;

    if(hours < 10)
        hours = '0' + hours;
    if(minutes < 10)
        minutes = '0' + minutes;
    if(seconds < 10)
        seconds = '0' + seconds;

    function text(variable, denom) {
        return `${variable > 0 ? variable + ` ${denom}(s)` : ''}`;
    }

    return `${text(days, "day")}${text(hours, 'hour')}${text(minutes, 'minute')}${text(seconds, 'second')}`;

}

countdownTimer(Math.abs(new Date().getSeconds() - 60), "regenTimer");
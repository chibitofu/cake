/* 
Your company built an in-house calendar tool called HiCal.
You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting.
In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
These integers represent the number of 30-minute blocks past 9:00am.
*/

// ex. { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// ex. { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

let testCalendar =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ];

findMeetings = (calendar) => {
    let sortedTimes = [];
    let meetingTimes = [];
    
    // creates array of dict items
    for (i = 0; i < calendar.length; i++) {
        sortedTimes.push([calendar[i].startTime, calendar[i].endTime])
    }
    
    // sorts arrays by first element
    sortedTimes.sort((a,b) => { return a[0] - b[0] })
    
    for (i = 0; i < sortedTimes.length; i++) {
        let currentTime = sortedTimes[i]

        // checks if nexTime will be out of range
        if (i + 1 < sortedTimes.length) {
            let nextTime = sortedTimes[i + 1]
            
            // if cuurentTime doesn't overlap with nextTime push to meetingTimes
            if (currentTime[1] < nextTime[0]) {
                meetingTimes.push( { startTime: currentTime[0], endTime: currentTime[1] } )
            } else {
            // if there's overlap between times, combine them
                meetingTimes.push( { startTime: currentTime[0], endTime: nextTime[1] } )
                // remove next item in sortedTimes since it was combine with currentTime
                sortedTimes.splice(i, 1);
                // ends loop if combined last 2 elements
                if ( i === sortedTimes.length - 2) {
                    return meetingTimes
                }
            }
        } else {
            // if only last element is left, push to meetingTimes array
            meetingTimes.push( { startTime: currentTime[0], endTime: currentTime[1] } )
        }
    }

    return meetingTimes
}


console.log(findMeetings(testCalendar))
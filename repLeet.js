const meetingTimes = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

//   [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
//   ]

const merger = (meetingTimes) => {
    const sortedMeetings = meetingTimes.sort((a,b) => a.startTime - b.startTime)
    const mergedMeetings = [sortedMeetings[0]]

    for (let i = 1; i < sortedMeetings.length; i++) {
        let currentMeeting = sortedMeetings[i]
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

        if(currentMeeting.startTime <= lastMergedMeeting.endTime){
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        } else {
            mergedMeetings.push(currentMeeting)
        }
        
    }
    console.log(mergedMeetings)
}

merger(meetingTimes)


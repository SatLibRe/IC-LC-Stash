const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];


const reverseWords = (messageArr) => {
    const joinedMessage = messageArr.join("").split(" ")
    
    let leftIndex = 0
    let rightIndex = joinedMessage.length - 1

    while( leftIndex < rightIndex){
        let temp = joinedMessage[leftIndex]

        joinedMessage[leftIndex] = joinedMessage[rightIndex]
        joinedMessage[rightIndex] = temp

        leftIndex++;
        rightIndex-- 
    }
    console.log(joinedMessage.join(" "))
}


reverseWords(message);

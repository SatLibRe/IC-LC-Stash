//manual sort 

const manualReverse = (arr) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex < rightIndex){


        let temp = arr[leftIndex]

        //swaping each end 
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp

        //each rotation pushses the array to converge, while changing the rotating idx
        leftIndex++; 
        rightIndex--; 
    }
    console.log(arr)
}

manualReverse([ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ])
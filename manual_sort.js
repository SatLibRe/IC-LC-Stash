//manual sort 

const manualSort = (arr) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex < rightIndex){

        let temp = arr[leftIndex]

        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp

        console.log(arr[leftIndex])

        leftIndex++; 
        rightIndex--; 
    }
    console.log(arr)
}

manualSort([1,2,3,4])
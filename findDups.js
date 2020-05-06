


/// O(n**2)
const finder = (arr) => {
   for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length ; j++){
        if(arr[i] === arr[j]) return arr[i]
        }
    }
    return false
}

// console.log(finder(arr))


////O(1) space, O(N) run time

const finder2 = (arr) => {

    let ownedNumbers = new Set()

    for(let i = 0; i < arr.length; i++){
        let currentNumber = arr[i]

        if(ownedNumbers.has(currentNumber)){
            return currentNumber
        } else {
            ownedNumbers.add(currentNumber)
        }
    }
    return "No Dups"
 }

 let arr = [1,2,10,4,2]

 console.log(finder2(arr))


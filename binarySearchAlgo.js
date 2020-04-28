////base binary search 

const binSearch = (target,nums) => {

    let floorIdx = -1
    let ceilIdx = nums.length

    while(floorIdx + 1 < ceilIdx){
        const distance = ceilIdx - floorIdx
        const halfDistance = Math.floor(distance / 2)
        const guessIdx = floor + halfDistance

        const guessValue = nums[guessIdx]
        
        if(guessValue === target){
            return true
        }
        if(guessValue > target){
            ceilIdx = guessIdx
        } else {
            floorIdx = guessIdx
        }
    }
    return false 
}
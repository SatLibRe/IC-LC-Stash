/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums,target) {
    /// make a new set that will hold the numbers from the loop 
    let ownedNumbers = new Set()
    
    for(let i = 0; i < nums.length; i++){
        /// see if you have alredy addded the first number that sums with the second for the target
        if(ownedNumbers.has(target - nums[i])){
            /// if so, return the index, and the index of the second number that had been stored 
          return [i,nums.indexOf(target - nums[i])]
        } else {
            ///else, add that number to the hash to subtract from later to find the sum 
          ownedNumbers.add(nums[i])   
        }
     }
  }
// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
    let arr_total = []
        for(const n of nums){
        if( n.toString().length % 2 === 0){
            arr_total.push(n)
        }
    }
    return arr_total.length
}
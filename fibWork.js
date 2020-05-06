let coiled = [
    [1,2,3,4],
    [11,12,13,5],
    [16,15,14,6],
    [10,9,8,7]
  ]
  
  /// prints 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
  /// can be like 1,2,3
  //5,6,7
  //8,9,10
  //cannot flatten 
  
  
  const unCoil = (arr) => {
  
    if(arr.length === 0) return
  
    console.log(...arr.shift())
    console.log(...arr.map( n => n.pop()))
    console.log(...arr.pop().reverse())
  
  
    unCoil(arr)
  
  }
  
//   unCoil(coiled)

const nPrinter = (str) => {
    let strArr = str.split("")
    let results = []

    const recurr = (strArr) =>{
        if (strArr.length === 0) return 
        results.push(strArr.pop())
        recurr(strArr)
    }
    recurr(strArr)
    return results.join("")
}

console.log(nPrinter("cats"))
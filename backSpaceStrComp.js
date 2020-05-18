var backspaceCompare = function(S,T) {
    const eval = S => {
      let arr = []
      for(let i = 0; i < S.length; i++){
        if(S[i] === "#"){
          arr.pop()
        } else {
          arr.push(S[i])
        }
      }
      return arr.join("")
    }
    return eval(T) ===  eval(S)
  };
  
  backspaceCompare()
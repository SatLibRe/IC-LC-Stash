///sol 1

var isUnivalTree = function(root) {
    if(!root) return true
    if(root.left && root.left.val != root.val){
        return false 
    } else if(root.right && root.right.val != root.val){
        return false 
    } 
    return isUnivalTree(root.left) && isUnivalTree(root.right)
};

//sol 2 

var isUnivalTree = function(root, val = root.val) {
    if(!root) return true
    if(root.val !== val) {
        return false
    }
    return isUnivalTree(root.left, val) && isUnivalTree(root.right, val)
};
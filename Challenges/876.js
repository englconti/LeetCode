const mySlice = function(array, index) {
    return array.filter((item, i) => i >= index )
}

const middleNode = function(head) {
    if (head.length <= 2) return head.pop() 

    if (head.length % 2 !== 0) {
        const cutIndex = (head.length - 1) / 2 
        return mySlice(head, cutIndex)
    } else {
        return mySlice(head, head.length / 2)
    }
}

console.log(middleNode([1, 2, 3, 4, 5])) // => needs to return [3, 4, 5]
console.log(middleNode([1, 2, 3, 4, 5, 6])) // => needs to return [4, 5, 6]
console.log(mySlice([1,2,3,4,5], 2))

// var middleNode = function(head) {
//     let firstPointer = head;
//     let secondPointer = head;
//      while(secondPointer != null && secondPointer.next != null){
//          firstPointer = firstPointer.next;
//          secondPointer = secondPointer.next.next;
//      }
//      return firstPointer;
//  };
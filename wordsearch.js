const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    
    }

    // vertical 

     const transpose = function(matrix) {
        // Put your solution here
        let returnArray = [];
        const arrayLength = matrix[0].length;
        for(let i = 0; i < arrayLength; i++) {
          returnArray.push([]);
        }
        //loop over row 
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            returnArray[j].push(matrix[i][j]);
          }
        }
        return returnArray;
       
    };

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    //console.log(verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin2 = transpose(letters).map(ls => ls.join(''));
    //console.log(verticalJoin2);
    for (l of verticalJoin2) {
        if (l.includes(reverse(word))) return true
    }


    function reverse (str) {
        return str.split("").reverse().join("");
    }

    return false;

}

module.exports = wordSearch

// ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], 0
// ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], 1
// ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], 2
// ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'], 3
// ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'], 4
// ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'], 5
// ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'], 6
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'], 7
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'], 8

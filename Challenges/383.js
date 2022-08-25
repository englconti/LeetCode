// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    ransomNoteArr = ransomNote.split('').sort()
    magazineArr = magazine.split('').sort()
    const ransomCount = ransomNote.length - 1
    for (let i = 0; i <= ransomCount; i++) {
        if (magazineArr.includes(ransomNote[i])) {
            magazineArr.splice(magazineArr.indexOf(ransomNote[i]), 1)
            ransomNoteArr.splice(ransomNoteArr.indexOf(ransomNote[i]), 1)
        }
    }

    return ransomNoteArr.length === 0
}

console.log(canConstruct("aa", "abc")) // => false
console.log(canConstruct("aacb", "aabbcc")) // => true
console.log(canConstruct("leo", "leonardo")) // => true
console.log(canConstruct("aab", "baa")) // => true


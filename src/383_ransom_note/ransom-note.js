/**
 * Given an arbitrary ransom note string and another string containing letters from all the 
 * magazines, write a function that will return true if the ransom note can be constructed 
 * from the magazines ; otherwise, it will return false.
 *
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
 *  You may assume that both strings contain only lowercase letters.
 *
 * Examples:
 *  canConstruct("a", "b") -> false
 *  canConstruct("aa", "ab") -> false
 *  canConstruct("aa", "aab") -> true
 *  
   * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteMap = ransomNote.split('').reduce((map, crr) => {
	if (!map[crr]) map[crr] = 0;
	map[crr]++;
        return map;
    }, {});
    let magazineMap = magazine.split('').reduce((map, crr) => {
	if (!map[crr]) map[crr] = 0;
        map[crr]++;
        return map;
    }, {});
    let ransomeNoteKeys = Object.keys(ransomNoteMap);
    
    // false if magazine doen't have the charactor or enough of the charactor
    for (const key of ransomeNoteKeys)
        if (!magazineMap[key] || magazineMap[key] < ransomNoteMap[key]) return false;
    
    return true;
};

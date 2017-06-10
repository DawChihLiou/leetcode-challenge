/**
 * Given two arrays, write a function to compute their intersection.
 *
 * Example:
 *  Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 *
 * Note:
 *  - Each element in the result should appear as many times as it shows in both arrays.
 *  - The result can be in any order.
 * 
 * Follow up:
 *  - What if the given array is already sorted? How would you optimize your algorithm?
 *  - What if nums1's size is small compared to nums2's size? Which algorithm is better?
 *  - What if elements of nums2 are stored on disk, and the memory is limited such that 
 *    you cannot load all elements into the memory at once?
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const toSet = (set, n) => {
            set[n] ? set[n] += 1 : set[n] = 1;
            return set;
        };
    const set1 = nums1.reduce(toSet, {});
    const set2 = nums2.reduce(toSet, {});
    
    // find common number and minimum occurance as intersection
    return Object.keys(set1).reduce((intersection, key) => {
            if (set2[key])
                for (let i = 0; i < Math.min(set1[key], set2[key]); i++) 
                    intersection.push(+key);
    
            return intersection;
        }, []);
};

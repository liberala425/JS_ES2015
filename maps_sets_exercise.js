new Set([1,1,2,2,3,4]); //[1,2,3,4]

[...new Set("referee")].join(""); //"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{[1,2,3]: true, [1,2,3]: false} !!!array is a reference type, [1,2,3] === [1,2,3] return false!!!

function hasDuplicate(arr){
    let arrSet = new Set(arr);
    return arr.length > arrSet.size;
}

function vowelCount(str){
    let counts = new Map();
    let vowels = new Set("aeiou");
    const lowercaseStr = str.toLowerCase();
    Array.from(lowercaseStr).forEach((val) => {
        if(vowels.has(val)){
            if(counts.has(val)){
                counts.set(val, counts.get(val) +1)
            }else{
                counts.set(val, 1);
            }
            
        }
    })
    return counts;
}
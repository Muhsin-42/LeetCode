/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let hold='';
    for(let i=0;i<s.length;i++){
        if(s[i].toLowerCase()!=s[i] && s.includes(s[i].toLowerCase())){
            hold=hold>s[i]?hold:s[i];
        }
    }
    return hold;
};
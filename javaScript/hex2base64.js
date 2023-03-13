



const hex2base64 = string => btoa(string.match(/(..)/g).map(charpair => String.fromCharCode(parseInt(charpair, 16))).join(''))


const base64Tohex = string => atob(string).split('').map(letter => letter.charCodeAt().toString(16)).join('')

console.log('this is your hex2base64 and vice versa :')
console.log(hex2base64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'))
console.log(base64Tohex('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'))
//not 100% sure but I think in the first we need to put the whole code in () because we do our encoding after our transformation
//btoa("string".match(/(..)/g).map(charpair => String.fromCharCode(parseInt(charpair, 16))).join(''))

// here the opposite we want to first transform 
//atob(string).split('').map(letter => letter.charCodeAt().toString(16)).join('')       
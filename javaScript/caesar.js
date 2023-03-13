// not from cryptopals but exercise from cracking codes with python chapter 1
//I did this in one line just to be stupid so I now waste the lines to explain what it does.
// we get a string as input
//* we first need to change our string to lower case 
//1) we split our string in individual charaters => they are saved as indivdidual strings in an array
//2) we iterater through the new string with the map() function(which returns an array)
//          ==> we use a regular expression to check if the characters are normal a-z characters
                //=> if they are we add the step we want to shift if not we keep the non-letter character
//3) we now have an array with our unformated/checked charcodes, the next problem is that our charcode has to be in a 
// range between 97-122, the range of lowercase alphabet, so if we exceed that range we have to start at the beginnning(97)
// 4) after we checked and changend our charcode so that it is in the valid range, we can now change our integers(charcode) back to strings
//5) finally join the array again so that we have a single string 



const encrypt = (string, gap) => string
                                    .toLocaleLowerCase()
                                    .split('').map(letter => letter.match(/[^a-z]/g)?letter.charCodeAt():letter.charCodeAt()+gap)
                                    .map(charnumber => charnumber>122?97+charnumber-122:charnumber)
                                    .map(charnumber => String.fromCharCode(charnumber))
                                    .join('')
// unfortunately I can't come up with a good solution so I hardcoded a boundary at asci 60 so that i still get correct punctuation 

const decrypt = (string, gap) => string
                                    .toLocaleLowerCase()
                                    .split('').map(letter => letter.match(/[^a-z]/g)?letter.charCodeAt():letter.charCodeAt()-gap)
                                    .map(charnumber => charnumber<97 && charnumber > 60?123-97+charnumber:charnumber)
                                    .map(charnumber => String.fromCharCode(charnumber))
                                    .join('')
console.log('your result for the caesar cipher')
console.log(encrypt( "AMBIDEXTROUS: Able to pick with equal skill a right-hand pocket or a left.", 4))
console.log(decrypt("MQTSWXSV: E VMZEP EWTMVERX XS TYFPMG LSRSVW.", 4))
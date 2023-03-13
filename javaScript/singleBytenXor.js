
let exampleString='1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'
let everyResult = []
let Result = []
let resultObject = {index:'', key: '', message: ''}
//const mostFreqEngl =['e', 't', 'a' ,'o','i', 'n' ,'s','r' ]

const tryEveryKey = hexstring => {
    let hexStringArr = hexstring.match(/../g)
    everyResult = []
    for (let i = 0 ; i < 128 ; i++){
        let result=hexStringArr.map(hexpair => parseInt(hexpair, 16) ^ i).map(asciInt => String.fromCharCode(asciInt)).join('')
        everyResult.push(result)

    }
    
    return everyResult
}


// 1 we map and check for a match of any of this letters if one matchs it is returned in an array(map)
//2 with our first filter we get some null results which are no arrays so we fill this results with empty arrays so that we can apply array methods
//3 we map the length of the arrays since we only need the length
const checkForScore = array => {
    let score = array.map(eachResult => eachResult.match(/[etaoinsr]/gi)).map(regfiltarr => regfiltarr == null?regfiltarr = []:regfiltarr).map(regfiltarr => regfiltarr.length)
    let indexMax =score.indexOf(Math.max(...score))
    let message = array[indexMax]
    let key = String.fromCharCode(indexMax)
    resultObject.index=indexMax
    resultObject.key= key
    resultObject.message = message
    return resultObject
}

const findKey = hexString => {
     Result = tryEveryKey(hexString)
     endResult = checkForScore(Result)
     return endResult
    
}

console.log(findKey(exampleString))

//everyResult[score.indexOf(Math.max(...score))]
//hexStringArr.map(hexpair => parseInt(hexpair, 16) ^ 0).map(asciInt => String.fromCharCode(asciInt))

const string = '1c0111001f010100061a024b53535009181c'
const xorString = '686974207468652062756c6c277320657965'
// not sure why it is not working as it should...
//let bitString = string.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
//let bitStringXor = xorString.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
//let xoredtext = bitString.map((byte, index) => byte^bitStringXor[index]).map(decimal => decimal.toString(16)).join('')
//let xoredtext = bitString.map((byte, index) => byte^bitStringXor[index]).map(intpair => String.fromCharCode(parseInt(intpair))).join('')
//let result = []
//let hexResult =[]

// fixed XOR 
// const fixedXOR = (string, xorString) => {
//     let bitString = string.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
//     let bitStringXor = xorString.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
//     result=[]
//     hexResult=[]
//     textResult=[]
//     for(let i=0 ; i < bitString.length; i++) { 

//         xoredbyte=bitString[i]^bitStringXor[i]
//         result.push(xoredbyte)
//         textbyte = String.fromCharCode(parseInt(xoredbyte))
//         tohexbyte = xoredbyte.toString(16)
//         hexResult.push(tohexbyte)
//         textResult.push(textbyte)
//         }
//     console.log(result)
//     console.log(textResult.join(''))
//     console.log(hexResult.join(''))

// }

// prettier fixedXOR
const fixedXOR = (string, xorString) => {
    let bitString = string.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
    let bitStringXor = xorString.match(/(..)/g).map(hexpair => parseInt(hexpair, 16))
    let xoredhextext = bitString.map((byte, index) => byte^bitStringXor[index]).map(decimal => decimal.toString(16)).join('')
    return xoredhextext
}
console.log('this is your fixed Xor string:')
console.log(fixedXOR(string,xorString))

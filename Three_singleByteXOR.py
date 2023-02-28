#!/usr/bin/env python

import binascii
import codecs
#hct = hexaciphertext

hct = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736"
#change to bytes  bct= bytes cypher txt
bct = binascii.unhexlify(hct)

# we get a hint "... has been XOR'd against a single character. Find the key, decrypt the message."

key = ord('X')

result = bytes([byte ^ key for byte in bct])
#hexresult = binascii.hexlify(result)
decoded = codecs.decode(result, 'utf-8')


print(result)
#print(hexresult)
print(decoded)
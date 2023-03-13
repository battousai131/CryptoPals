#!/usr/bin/env python

import binascii


string_one = "1c0111001f010100061a024b53535009181c"

string_two = "686974207468652062756c6c277320657965"


string_one_bytes = binascii.unhexlify(string_one)
string_two_bytes = binascii.unhexlify(string_two)

print(string_one)
print(string_two)
print(string_one_bytes)
print(string_two_bytes)
result = bytes([x ^ y for x, y in zip(string_one_bytes, string_two_bytes)])
print(result)
hexresult = binascii.hexlify(result)

print(hexresult)







#expected output :
#746865206b696420646f6e277420706c6179
#746865206b696420646f6e277420706c6179
#!/usr/bin/env python

import binascii

with open('../data.four.txt', 'r') as f:
    for line in f:
        hex_string = line.strip()
        byte_string = bytes.fromhex(hex_string)  # convert hex string to byte string
        #print("\n", line, hex_string)
        for i in range(256):  # loop through every possible ASCII character
            key = bytes([i])  # create a key byte string for the current character
            result = bytes([byte ^ i for byte in byte_string])  # XOR the byte string with the key
            if all(0 <= byte <= 127 for byte in result):  # check if the result contains only ASCII characters
                try:
                    print(f"Line: {line.strip()}, Key: {chr(i)}, Result: {result.decode('ascii')}")
                except UnicodeDecodeError:
                    print(f"Line: {line.strip()}, Key: {binascii.hexlify(key)}, Result: {result.decode('ascii')}")

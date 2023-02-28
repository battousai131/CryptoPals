#!/usr/bin/env python
import string
import collections
import binascii
import codecs
#hct = hexaciphertext
#expected letter frequency of English text
english_freq = {
    'a': 0.0817, 'b': 0.0150, 'c': 0.0278, 'd': 0.0425,
    'e': 0.1270, 'f': 0.0223, 'g': 0.0202, 'h': 0.0609,
    'i': 0.0697, 'j': 0.0015, 'k': 0.0077, 'l': 0.0403,
    'm': 0.0241, 'n': 0.0675, 'o': 0.0751, 'p': 0.0193,
    'q': 0.0010, 'r': 0.0599, 's': 0.0633, 't': 0.0906,
    'u': 0.0276, 'v': 0.0098, 'w': 0.0236, 'x': 0.0015,
    'y': 0.0197, 'z': 0.0007
}
def is_english_text(s):
    #cnovert to lowercase and remove non-alphabetic characters
    s = ''.join(c for c in s.lower() if c in string.ascii_lowercase)
    # count letter frequency
    freq = collections.Counter(s)
    # calculate the sum of squared differences between the observed and expected frequency
    chi_square = sum((freq.get(c, 0)/len(s) - english_freq[c])**2/english_freq[c] for c in english_freq)
    #if the chi-square value is below a certain threshold, assume the text is in English
    return chi_square < 0.05

def decode(hs):
    # Convert string to bytes
    byte_string = bytes.fromhex(hs)
    for i in range(256):  # loop through every possible ASCII character
        key = bytes([i])  # create a key byte string for the current character
        result = bytes([byte ^ i for byte in byte_string])  # XOR the byte string with the key
        if all(32 <= byte <= 126 for byte in result):  # check if the result contains only printable ASCII characters
            result_str = result.decode('ascii')
            #print(result_str)
            if is_english_text(result_str):
                print(result_str)
                yield key, result_str

hex_string = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'

for key, result in decode(hex_string):
    print(f"Key: {key.decode('ascii')}, Result: {result}")



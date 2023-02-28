#!/usr/bin/env python

import re

def crack(input):
    res = {}
    candidateKey = ''
    highestScore = 0
    freq = [' ', 'e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'u']
    keys = [chr(i) for i in range(256)]
    
    for key in keys:
        output = ''
        cursor = 0
        while cursor < len(input):
            hex = input[cursor:cursor+2]
            xor = int(hex, 16) ^ ord(key)
            output += chr(xor)
            cursor += 2
        score = 0
        for i, char in enumerate(freq):
            matches = re.findall(char, output, re.IGNORECASE)
            if matches:
                score += len(matches) * (12 - i)
        if score > highestScore:
            highestScore = score
            candidateKey = key
            res[key] = output
    
    return {
        'key': candidateKey,
        'message': res[candidateKey],
        'score': highestScore
    }

with open('four.txt', 'r') as f:
    lines = f.readlines()

result = {'score': 0}

for line in lines:
    if line:
        cracked = crack(line.strip())
        if cracked['score'] > result['score']:
            result = cracked

print(result)
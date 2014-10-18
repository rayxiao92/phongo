import nltk
import operator
import sys
a = sys.argv[1]
b = open(a, 'r')
word = {}
for line in b:
	array = line[:-1].split('","')
	if array[21] != "":
		word_array = array[21][:-1].split()
		for x in word_array:
			if x in word:
				word[x]+=1
			else:
				word[x]=0
sorted_x = sorted(word.items(), key=operator.itemgetter(1))
for y in sorted_x:
	print y

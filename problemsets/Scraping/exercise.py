# Name : Cas Boot
# Student number : 10276823
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):

	split_value = []

	i = 0
	j = 0

	while True:
		# check if its the last character of the source
		if i == len(source):
			
			# check if its a separator
			if source[len(source) - 1] in separators:
				split_value.append(source[j : len(source)])
				break
			else:
				split_value.append(source[j : len(source)])
				break
		# check if its separator
		if source[i] in separators:
			
			# append till the seperator
			split_value.append(source[j : i])
			
			# update iterator variables
			i += 1
			j = i
		else:
			i += 1
	
	# delete empty strings from list
	split_value = filter(None, split_value)

		
	return split_value



if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('aabbaa', 'b')  # should print: ['c', 'd', 'r']
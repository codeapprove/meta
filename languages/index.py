# Import os module to read directory
import os

# Set the directory path
path = '/foo/bar'

# Read the content of the file
files = os.listdir(path)

# Print the content of the directory
for file in files:
    print(file)
    print('done')

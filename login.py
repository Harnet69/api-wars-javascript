import json
from urllib.request import urlopen
webURL = urlopen("https://api.github.com/repos/atom/atom") # This will return a string containing the data in JSON format
data = webURL.read()
response_data = json.loads(data.decode('utf-8'))  # parse the JSON and convert it into a dict
print(response_data)

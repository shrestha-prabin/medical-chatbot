import requests
import json
import os

url = 'https://my.clevelandclinic.org/AtoZ/HealthInformationPages'

meta_data = []

for i in range(65, 91):
  filename = f'meta/{chr(i)}.json'
  if os.path.exists(filename):
    continue

  response = requests.post(url, data={
    'letter': chr(i)
  })

  data = json.loads(response.text)

  with open(filename, 'w') as f:
    json.dump(data, f)
  
  print(filename)
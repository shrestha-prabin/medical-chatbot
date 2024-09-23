import os
import json
import requests
from bs4 import BeautifulSoup

def get_meta_data():
  meta_data = {}
  for entry in os.scandir('meta'):
    if not entry.name.endswith('.json'):
      continue
    filename = entry.name.replace('.json', '')

    with open(entry.path) as f:
      meta = json.load(f)
      meta_data[filename] = meta
    
  return meta_data


def get_leaf_nodes(element):
    if not element.find_all() or element.name == 'p':  # No children, it's a leaf node
      return [element]
    else:
      leaves = []
      for child in element.children:
        if hasattr(child, 'children'):  # Check if it's a tag with children
          leaves.extend(get_leaf_nodes(child))
      return leaves


def fetch_page_details(alphabet, title, url):
    if not os.path.exists(f'data/{alphabet}'):
      os.makedirs(f'data/{alphabet}')
    filename = f'data/{alphabet}/{url.split('/')[-1]}.json'
    if os.path.exists(filename):
      return

    print(filename, url)

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    for tag in soup.find_all('section', {'data-identity': 'callout'}):
       tag.decompose()

    content = soup.find('div', {'data-identity': 'main-article-content'})
    
    output_data = []

    question = None
    answers = []
    for tag in get_leaf_nodes(content):
      if tag.text.__contains__('?'):
        if question is not None and len(answers) > 0:
          output_data.append({
            'category': title,
            'question': question,
            'answer': ' '.join(answers),
          })
          
        question = tag.text
        answers = []
      else:
        answers.append(tag.text)

    with open(filename, 'w') as f:
       json.dump(output_data, f)

if __name__ == "__main__":
    meta_data = get_meta_data()

    for key, value in meta_data.items():
       for item in value:
        try:
          fetch_page_details(key, item['title'], item['url'])
        except Exception as ex:
          print(ex)
          continue
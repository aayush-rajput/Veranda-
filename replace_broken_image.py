import os

broken_id = "1542314831-c6a4d27ce6a2"
# Replacing with a lush green resort photo
working_id = "1510798831971-661eb04b3739"

files_to_update = [
    'property.html',
    'offers.html',
    'index.html'
]

for filename in files_to_update:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content.replace(broken_id, working_id)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
print("Replaced broken image ID across files.")

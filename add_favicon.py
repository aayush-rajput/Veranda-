import os
import glob

favicon_link = """\n  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%235C3320'/><text x='50' y='70' font-family='serif' font-size='60' font-style='italic' fill='%23C9A84C' text-anchor='middle'>V</text></svg>">"""

html_files = glob.glob('*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<link rel="icon"' not in content:
        # insert right before </head>
        content = content.replace('</head>', f'{favicon_link}\n</head>')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print('Favicon added to all HTML files.')

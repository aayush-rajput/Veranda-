import re

with open('booking.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix broken image
content = content.replace(
    "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
)

# 2. Update CSS to be more premium
css_updates = [
    # Backgrounds
    ("background: #f5f5f5;", "background: #F7F3EC;"), # Brand beige
    ("background: white;", "background: #FFFFFF;"),
    
    # Header
    ("font-family: 'Outfit', sans-serif;\n      font-size: 1.05rem;", "font-family: 'Cormorant Garamond', serif;\n      font-size: 1.8rem;\n      font-style: italic;"),
    ("color: #777;\n      font-weight: 300;", "color: #C9A84C;\n      font-weight: 400;"), # Brand gold
    
    # Fonts
    ("font-family: 'Inter', sans-serif;", "font-family: 'Outfit', sans-serif;"),
    
    # Primary Buttons
    ("background: #1a73e8;", "background: #5C3320;"), # Brand brown
    ("background: #1557b0;", "background: #3D2010;"),
    
    # Secondary elements
    ("border-top-color: #1a73e8;", "border-top-color: #5C3320;"), # Loading spinner
    ("color: #1a1a1a;", "color: #2A1808;"), # Headings text
    ("color: #333;", "color: #4A2518;"),
    ("color: #555;", "color: #7A4F3A;"),
    ("color: #777;", "color: #8B6040;"),
    ("color: #888;", "color: #8B6040;"),
    
    # Input focus
    ("border-color: #1a73e8;", "border-color: #C9A84C;"),
    
    # Border radius
    ("border-radius: 4px;", "border-radius: 0px;"),
    ("border-radius: 6px;", "border-radius: 0px;"),
    
    # Card borders
    ("border: 1px solid #e0e0e0;", "border: 1px solid rgba(92, 51, 32, 0.15);"),
    ("border-bottom: 1px solid #e0e0e0;", "border-bottom: 1px solid rgba(92, 51, 32, 0.15);"),
    
    # Chips
    ("background: #f0f0f0;", "background: rgba(201, 168, 76, 0.1); color: #8B6040;"),
    
    # Buttons padding & spacing
    ("border: none;", "border: none;\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n      font-size: 0.75rem;"),
    
    # Property card Title
    ("font-family: 'Outfit', sans-serif;\n      font-size: 1rem;\n      font-weight: 600;", "font-family: 'Cormorant Garamond', serif;\n      font-size: 1.6rem;\n      font-weight: 400;\n      font-style: italic;"),
    
    # Property card address
    ("font-size: 0.78rem;\n      color: #777;", "font-size: 0.8rem;\n      color: #8B6040;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;"),
]

for old, new in css_updates:
    content = content.replace(old, new)

# 3. Ensure the 'Veranda Group' title looks more premium
# It's currently: <div class="booking-page-header__brand">Veranda <span>Group</span></div>
# Let's change "Veranda Group" to "Veranda Hotels & Resorts"
content = content.replace("Veranda <span>Group</span>", "Veranda <span>Hotels & Resorts</span>")

with open('booking.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated booking.html styles')

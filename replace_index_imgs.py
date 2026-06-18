import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hero slide 3
# Find: <div class="carousel__slide hero-slide-3" ...> ... </div>
# Replace: add img
slide3_orig = """<div class="carousel__slide hero-slide-3"
           style="display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">"""
slide3_new = """<div class="carousel__slide hero-slide-3"
           style="position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">
        <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Himalayan Resort" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.4);z-index:0;"></div>
        <div style="text-align:center;padding:2rem;position:relative;z-index:1;">"""
content = content.replace(slide3_orig + '\n        <div style="text-align:center;padding:2rem;">', slide3_new)

# 2. Locations bg (line 300)
loc_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#003d5c,#0077b6,#00b4d8);"></div>"""
loc_new = """<img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Goa location" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">"""
content = content.replace(loc_orig, loc_new)

# 3. Spotlight backgrounds
s1_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#2A1808,#8B4513);"></div>"""
s1_new = """<img src="https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8;">"""
content = content.replace(s1_orig, s1_new)

s2_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#2c1a10,#6b3d1e);"></div>"""
s2_new = """<img src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8;">"""
content = content.replace(s2_orig, s2_new)

s3_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#0d1a26,#1a3a50);"></div>"""
s3_new = """<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8;">"""
content = content.replace(s3_orig, s3_new)

# 4. Explore sections
ex1_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#003050,#006994,#00b4d8);"></div>"""
ex1_new = """<img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">"""
content = content.replace(ex1_orig, ex1_new)

ex2_orig = """<div style="background:linear-gradient(135deg,#1a2530,#2a4060,#3a6080);height:440px;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.18);position:relative;overflow:hidden;">"""
ex2_new = """<div style="background:linear-gradient(135deg,#1a2530,#2a4060,#3a6080);height:440px;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.18);position:relative;overflow:hidden;">
                <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">"""
content = content.replace(ex2_orig, ex2_new)

ex3_orig = """<div style="background:linear-gradient(135deg,#3a1a0a,#7a3a1a,#b05020);height:440px;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.18);position:relative;overflow:hidden;">"""
ex3_new = """<div style="background:linear-gradient(135deg,#3a1a0a,#7a3a1a,#b05020);height:440px;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.18);position:relative;overflow:hidden;">
                <img src="https://images.unsplash.com/photo-1580977276076-ba6caca3e031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">"""
content = content.replace(ex3_orig, ex3_new)

# 5. Heritage cards
h1_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#2c1a0e,#5c3a1a);"></div>"""
h1_new = """<img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">"""
content = content.replace(h1_orig, h1_new)

h2_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#0d1a24,#1a3040);"></div>"""
h2_new = """<img src="https://images.unsplash.com/photo-1559288126-e17f0ea3e2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">"""
content = content.replace(h2_orig, h2_new)

h3_orig = """<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a1a0d,#3a3a1a);"></div>"""
h3_new = """<img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">"""
content = content.replace(h3_orig, h3_new)

# 6. Suites & Rooms grid
r_imgs = [
    'https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1580977276076-ba6caca3e031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
]
for i in range(1, 10):
    content = content.replace(
        f'<a href="booking.html" class="caption-card prop-bg-{i}"',
        f'<a href="booking.html" class="caption-card"\n           style="background: url(\'{r_imgs[i-1]}\') center/cover;"'
    )

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated index.html')

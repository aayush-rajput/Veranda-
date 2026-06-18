import re

with open('meetings.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hero background
# .mh-bg { background: linear-gradient(135deg, #1C1008 0%, #2C1810 40%, #5C3320 100%); position: absolute; inset: 0; z-index: -1; }
content = content.replace("background: linear-gradient(135deg, #1C1008 0%, #2C1810 40%, #5C3320 100%);", "background: url('https://images.unsplash.com/photo-1505369711698-e4ac83783a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;")
content = content.replace("background: radial-gradient(ellipse at 30% 60%, rgba(139,69,19,0.2) 0%, transparent 60%),", "background: rgba(0,0,0,0.6); /* replaced radial */")

# 2. Venues tiles
venue_imgs = [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
]

vt_1 = """<div class="venue-tile-bg" style="background:linear-gradient(135deg,#2A1808,#5C3320,#7A4F3A);height:100%;"></div>"""
vt_1_new = f"""<img class="venue-tile-bg" src="{venue_imgs[0]}" style="width:100%;height:100%;object-fit:cover;">"""
content = content.replace(vt_1, vt_1_new)

vt_2 = """<div class="venue-tile-bg" style="background:linear-gradient(135deg,#2A1808,#8B4513);height:100%;"></div>"""
vt_2_new = f"""<img class="venue-tile-bg" src="{venue_imgs[1]}" style="width:100%;height:100%;object-fit:cover;">"""
content = content.replace(vt_2, vt_2_new)

vt_3 = """<div class="venue-tile-bg" style="background:linear-gradient(135deg,#3D2010,#7A4520);height:100%;"></div>"""
vt_3_new = f"""<img class="venue-tile-bg" src="{venue_imgs[2]}" style="width:100%;height:100%;object-fit:cover;">"""
content = content.replace(vt_3, vt_3_new)

vt_4 = """<div class="venue-tile-bg" style="background:linear-gradient(135deg,#1C1008,#5C3320);height:100%;"></div>"""
vt_4_new = f"""<img class="venue-tile-bg" src="{venue_imgs[3]}" style="width:100%;height:100%;object-fit:cover;">"""
content = content.replace(vt_4, vt_4_new)

vt_5 = """<div class="venue-tile-bg" style="background:linear-gradient(135deg,#3D2010,#8B4513,#C17A3A);height:100%;"></div>"""
vt_5_new = f"""<img class="venue-tile-bg" src="{venue_imgs[4]}" style="width:100%;height:100%;object-fit:cover;">"""
content = content.replace(vt_5, vt_5_new)


with open('meetings.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated meetings.html')

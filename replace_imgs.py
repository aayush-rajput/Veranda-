import re
with open('property.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace property 'bg' with 'img'
prop_imgs = [
    'https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1580977276076-ba6caca3e031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
]

room_imgs = [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
]

def prop_replacer(match):
    idx = int(match.group(1))
    # Replace the top-level bg with img
    body = match.group(2)
    body = re.sub(r"bg:\s*'linear-gradient[^']+'", f"img: '{prop_imgs[idx]}'", body, count=1)
    
    # replace room bgs with imgs
    body = re.sub(r"bg:'linear-gradient[^']+'", f"img:'{room_imgs[0]}'", body, count=1)
    body = re.sub(r"bg:'linear-gradient[^']+'", f"img:'{room_imgs[1]}'", body, count=1)
    body = re.sub(r"bg:'linear-gradient[^']+'", f"img:'{room_imgs[2]}'", body, count=1)
    body = re.sub(r"bg:'linear-gradient[^']+'", f"img:'{room_imgs[3]}'", body, count=1)
    
    return f"{idx}: {{{body}"

content = re.sub(r'(\d+):\s*\{([^}]+?rooms:\s*\[.+?\]\s*\n\s*\})', prop_replacer, content, flags=re.DOTALL)

# replace prop.bg references with prop.img in property.html
content = content.replace("document.getElementById('hero-bg').style.background = prop.bg;", "document.getElementById('hero-bg').innerHTML = '<img src=\"' + prop.img + '\" alt=\"Hero\" style=\"width:100%;height:100%;object-fit:cover;opacity:0.6;\">';")
content = content.replace("bg: prop.bg", "img: prop.img")
content = content.replace("bg: r.bg", "img: r.img")

# replace room rendering background with image
content = content.replace("<div class=\"room-card__img-bg\" style=\"background:${r.bg}\"></div>", "<img class=\"room-card__img-bg\" src=\"${r.img}\" alt=\"${r.name}\" style=\"width:100%;height:100%;object-fit:cover;\">")

# In the panel rendering, replace the background logic with image
content = content.replace("document.getElementById('panel-room-img').style.background = r.bg;", "document.getElementById('panel-room-img').innerHTML = '<img src=\"' + r.img + '\" style=\"width:100%;height:100%;object-fit:cover;border-radius:6px;\">';")

with open('property.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated property.html')

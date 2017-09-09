import urllib.request  # импортируем модуль 
req = urllib.request.Request('https://yandex.ru/pogoda/moscow/')
with urllib.request.urlopen(req) as response:
   html = response.read().decode('utf-8')

import re
regPostTitle = re.compile('<div class="current-weather__thermometer current-weather__thermometer_type_now">.*?</div>', flags=re.U | re.DOTALL)
titles = regPostTitle.findall(html)

#print(titles)

regPostTitle = re.compile('<span class="current-weather__comment">.*?</span>', flags=re.U | re.DOTALL)
title = regPostTitle.findall(html)

#print(title)
regPostTitle = re.compile('Восход: </span>.*?<span class="current-weather', flags=re.U | re.DOTALL)
sun = regPostTitle.findall(html)


new_titles = []
regTag = re.compile('<.*?>', flags=re.U | re.DOTALL)
regSpace = re.compile('\s{2,}', flags=re.U | re.DOTALL)
for t in titles:
    clean_t = regSpace.sub("", t)
    clean_t = regTag.sub("", clean_t)
    new_titles.append(clean_t)
for t in new_titles:
    print(t)

new_title = []

for c in title:
    clean_c = regSpace.sub("", c)
    clean_c = regTag.sub("", clean_c)
    new_title.append(clean_c)
for c in new_title:
    print(c)


for d in sun:
    clean_d = regSpace.sub("", d)
    clean_d = regTag.sub("", clean_d)
    new_title.append(clean_d)
for d in new_title:
    print(d)

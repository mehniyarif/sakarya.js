import json
base_name = "C:/Users/mehniyarif/Desktop/sakarya.js/sakarya.js/"
with open(f'{base_name}files.json') as json_file:
    data = json.load(json_file)

files = data['dictionary']
dosya = f"{base_name}sakarya.js"

f = open(dosya, "w")
f.write('')
f.close()

for pkg in files:
    for file in pkg['files']:
        f= open(f"{base_name}{pkg['dir']}/{file}.js","r")
        if f.mode == "r":
            contents = f.read()

        f = open(dosya, "a")
        f.write(contents)
        f.close()
# importa a lista "crua"
raw = []
with open('words.txt') as f:
    raw = f.readlines()

# "limpa" cada palavra da lista crua
for i in range(len(raw)):
    raw[i] = raw[i].replace('\n', '')

# cria o arquivo .js da palavras
with open('wordsJS.js', 'w') as f:
    f.write('export const palavrasTodas = [\n')
    for i in raw:
        f.write('\'' + i + '\'' + ',\n')
    f.write(']\n')
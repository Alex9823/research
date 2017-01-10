# функция должна открывать текст, разбивать на слова и удалять все лишнее
# нижний регистра S='aBcD'
#S1=S.lower()/ /upper
# S3=S1.capitalize()
# уддаление ненужного
# replace('a', '')
# strip()
# ['a', 'что': 'Коля!'] элементы массива - строки, можно испольщовать цикл
# for word in a:
#   s=word.strip(',.!?')
#   print (word) [нужен массив]
#for i, word  in enumerate (a):
#    a[i]=word.strip('...')
s=[]
word=[]
def main(text):
    with open('doc.txt','r', encoding = 'utf-8') as f:
        text = f.read()
        word = text.split(' ')
        for i, lex  in enumerate (word):
            word[i]=lex.strip(',.!?')
            print(word)
        return (word)
a=main(word)
    
   

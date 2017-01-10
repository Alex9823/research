#def add_line(line)
#    with open ('text.txt','a', encoding) as f:
#         f.write('ght')

#функция opentext - открывать файл с названием fname,
#приводить текст к нижнему регистру, делить на слова,
# возвращать в массив все словоформы
#удалить знаки препинания
#open()
#lower()
#split()
#return
#strip('.?*()')используется со str

s=[]
word=[]
result=[]
def opentext(text):
    with open(text,'r', encoding = 'utf-8') as f:
        text = f.read()
        text=str(text)
        text=text.lower()
        word = text.split(' ')

        for i, lex  in enumerate (word):
            word[i]=lex.strip(',.!?')
        return (word)
        # * убирает скобки и запятые из массива, когда он печатается

    
def first_letter(letter, fname):
    c=opentext(fname)    

    a=input('Type in a letter: ')
    for i,w in enumerate (c):
        if c[i].startswith(a)==True:
            s.append(c[i])
    return(s)
#b=first_letter(s)
#print(b)

def questions():
    file_name=input('Type in a file name')
    number=int(input('Type in a number'))
    a=first_letter(s, file_name)
    for i,w in enumerate (a):
        if len(a[i]) > number:
            result.append(a[i])
    return(a)
a = questions()
print(a)

    


    

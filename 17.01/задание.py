#1страны и столицы
d={'England':'London','Russia':'london', 'Ukraine':'Kiev','France':'Paris','Germany':'Munich'}
#for key in d:
#    print(key+'*'+d[key])
#2функция спрашивает у пользователья страну если она есть возвращ столица, если нет

def capital():
    country=input('Type in a city')
    if country in d:
        return(d[country])
    else:
        print('no such country')
    

#3revert keys and values
#4 delete_double(d)вернуть словарь у которого ключи с повторяющ знач
#5составить частотный словарь ключи словоформы значение частотность знач
# понадобится функция словоформ с прошлого задания

#del d[]
#создать второй словарь
def revert():
    k={}
    countries=d.keys()
    for key in countries:
        k[d[key]]=key
    return(k)
a=revert()

new{}
arr=[]
for key in d:
    if d[key]in arr
    

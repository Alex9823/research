import random

def read ():
    f = open('text.txt', 'r', encoding = 'utf-8')
    l = f.readlines()
    return l

def array (numb):
    a = read()[numb].split()
    return a

def noun2 ():
    return random.choice(array(0))

def noun3 ():
    return random.choice(array(1))

def noun4 ():
    return random.choice(array(2))

def imper2 ():
    return random.choice (array(3))

def imper3 ():
    return random.choice(array(4))

def imper4 ():
    return random.choice(array(5))

def verb2 ():
    return random.choice(array(6))
    
def verb3 ():
    return random.choice(array(7))

def verb4 ():
    return random.choice(array(8))

def adverb1 ():
    return random.choice (array(9))

def adverb2 ():
    return random.choice (array(10))

def adverb3 ():
    return random.choice (array(11))

def adverb4 ():
    return random.choice (array(12))

def punct():
    marks = [".", "?", "!", "..."]
    return random.choice(marks)

def verse_5_1 ():
    return imper3() + ' ' + noun2() + punct()

def verse_5_2 ():
    return imper2() + ' ' + noun3() + punct()

def verse_5_3 ():
    return verb2() + ' ' + noun3() + punct()

def verse_5_4 ():
    return verb3() + ' ' + noun2() + punct()

def verse_5_5 ():
    return adverb1() + ' ' + verb2() + ' ' + noun2() + punct()

def verse_5_6 ():
    return adverb1() + ' ' + imper4() + punct()

def verse_5_7 ():
    return adverb2() + ' ' + imper3() + punct()

def verse_5_8 ():
    return adverb3() + ' ' + imper2() + punct()

def verse_7_1 ():
    return imper3() + ' ' + noun4() + punct()

def verse_7_2 ():
    return imper4() + ' ' + noun3() + punct()

def verse_7_3 ():
    return verb3() + ' ' + noun4() + punct()

def verse_7_4 ():
    return verb4() + ' ' + noun3() + punct()

def verse_7_5 ():
    return adverb1() + ' ' + verb3() + ' ' + noun3() + punct()

def verse_7_6 ():
    return adverb1() + ' ' + verb4() + ' ' + noun2() + punct()

def verse_7_7 ():
    return adverb1() + ' ' + verb2() + ' ' + noun4() + punct()

def verse_7_8 ():
    return adverb2() + ' ' + verb2() + ' ' + noun3() + punct()

def verse_7_9 ():
    return adverb2() + ' ' + verb3() + ' ' + noun2() + punct()

def make_verse_5 ():
    verse = random.choice([1,2,3, 4, 5, 6, 7, 8])
    if verse == 1:
        return verse_5_1()
    elif verse == 2:
        return verse_5_2()
    elif verse == 3:
        return verse_5_3()
    elif verse == 4:
        return verse_5_4()
    elif verse == 5:
        return verse_5_5()
    elif verse == 6:
        return verse_5_6()
    elif verse == 7:
        return verse_5_7()
    else:
        return verse_5_8()

def make_verse_7 ():
    verse = random.choice([1,2,3, 4, 5, 6, 7, 8, 9])
    if verse == 1:
        return verse_7_1()
    elif verse == 2:
        return verse_7_2()
    elif verse == 3:
        return verse_7_3()
    elif verse == 4:
        return verse_7_4()
    elif verse == 5:
        return verse_7_5()
    elif verse == 6:
        return verse_7_6()
    elif verse == 7:
        return verse_7_7()
    elif verse == 8:
        return verse_7_8()
    else:
        return verse_7_9()


print(make_verse_5())
print(make_verse_7())
print(make_verse_5())
print(make_verse_7())
print(make_verse_7())

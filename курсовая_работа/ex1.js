var shuffleSequence = seq("intro", seq("practice", seq( "filler1", "filler2", "stimuli1", "filler3", "filler4", "stimuli2", "filler5", "filler6", "stimuli3", "filler7", "filler8", "stimuli4", "filler9", "filler10",  "stimuli5", "filler11", "filler12",  "stimuli6", "filler13", "filler14",  "stimuli7", "filler15", "filler16", "stimuli8", "filler17", "filler18",  "stimuli9", "filler19", "filler20","stimuli10", "filler21", "filler22",  "stimuli11", "filler23", "filler24", "stimuli12", "filler25", "filler26",  "stimuli13", "filler27", "filler28", "stimuli14", "filler29", "filler30",  "stimuli15", "filler31", "filler32", "stimuli16", "filler33", "filler34",  "stimuli17", "filler35", "filler36", "stimuli18", "filler37", "filler38", "stimuli19", "filler39", "filler40",  "stimuli20", "filler41", "filler42", "stimuli21", "filler43", "filler44",  "stimuli22", "filler45", "filler46", "stimuli23")));
var defaults = [
"AcceptabilityJudgment", {
as: ["1", "0"],
presentAsScale: true,
instructions: "Выберите на клавиатуре 1 - словосочетание имеет смысл; 0 - не имеет смысла.",
leftComment: "(Словосочетание осмысленное)", rightComment: "(Словосочетание бессмысленное)"
},

    "Form", {
hideProgressBar: false,
continueOnReturn: true,
saveReactionTime: true
}
];

var items = [


    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],


    //["sep", "Separator", { }],


    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],


    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).


    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    ["practice", "AcceptabilityJudgment", {s: "Сначала вам будет предложен тренировочный фрагмент. Нажмите 1 или 0, чтобы приступить"}],
    ["practice", "AcceptabilityJudgment", {s: "роет яму"}],
    ["practice", "AcceptabilityJudgment", {s: "роет тоннель"}],
    ["practice", "AcceptabilityJudgment", {s: "порог стоит"}],
    ["practice", "AcceptabilityJudgment", {s: "помада стоит"}],
    ["practice", "AcceptabilityJudgment", {s: "помоет полы"}],
    ["practice", "AcceptabilityJudgment", {s: "помоет цветы"}],
    ["practice", "AcceptabilityJudgment", {s: "окно выпрямляется"}],
    ["practice", "AcceptabilityJudgment", {s: "судно выпрямляется"}],
    ["practice", "AcceptabilityJudgment", {s: "Тренировка окончена. Сейчас начнется эксперимент. Нажмите 1 или 0, чтобы продолжить."}],
    
    ["stimuli1", "AcceptabilityJudgment", {s: "плот плывет"}],
    ["stimuli1", "AcceptabilityJudgment", {s: "судно плывет"}],
    ["stimuli2", "AcceptabilityJudgment", {s: "яблоко падает"}],  
    ["stimuli2", "AcceptabilityJudgment", {s: "дерево падет"}],
    ["stimuli3", "AcceptabilityJudgment", {s: "бросает рюкзак с балкона"}],
    ["stimuli3", "AcceptabilityJudgment", {s: "бросает слова на ветер"}],
    ["stimuli4", "AcceptabilityJudgment", {s: "кидает вещи на стол"}],
    ["stimuli4", "AcceptabilityJudgment", {s: "кидает сумку на пол"}],
    ["stimuli5", "AcceptabilityJudgment", {s: "река течет"}],
    ["stimuli5", "AcceptabilityJudgment", {s: "ведро течет"}],
    ["stimuli6", "AcceptabilityJudgment", {s: "боинг рухнет"}],
    ["stimuli6", "AcceptabilityJudgment", {s: "курс рубля рухнет"}],	
    ["stimuli7", "AcceptabilityJudgment", {s: "планета вращается вокруг солнца"}],
    ["stimuli7", "AcceptabilityJudgment", {s: "Земля вращается вокруг своей оси"}],
    ["stimuli8", "AcceptabilityJudgment", {s: "кровать шатается подо мной"}],
    ["stimuli8", "AcceptabilityJudgment", {s: "человек шатается от боли"}],
    ["stimuli9", "AcceptabilityJudgment", {s: "веревка болтается на крючке"}],
    ["stimuli9", "AcceptabilityJudgment", {s: "ученик болтается по школе"}],
    ["stimuli10", "AcceptabilityJudgment", {s: "птенец выпадет из гнезда"}],
    ["stimuli10", "AcceptabilityJudgment", {s: "приемник выпадет из рук"}],
    ["stimuli11", "AcceptabilityJudgment", {s: "пламя колеблется"}],
    ["stimuli11", "AcceptabilityJudgment", {s: "трава колеблется"}],
    ["stimuli12", "AcceptabilityJudgment", {s: "дитя тянется за пищей"}],
    ["stimuli12", "AcceptabilityJudgment", {s: "ученик тянется к знаниям"}],
    ["stimuli13", "AcceptabilityJudgment", {s: "толкает перед собой телегу"}],
    ["stimuli13", "AcceptabilityJudgment", {s: "толкает камень по песку"}],
    ["stimuli14", "AcceptabilityJudgment", {s: "люстра висит"}],
    ["stimuli14", "AcceptabilityJudgment", {s: "портрет висит"}],
    ["stimuli15", "AcceptabilityJudgment", {s: "змея ползет в траве"}],
    ["stimuli15", "AcceptabilityJudgment", {s: "отец ползет на работу"}],
    ["stimuli16", "AcceptabilityJudgment", {s: "такси встанет"}],
    ["stimuli16", "AcceptabilityJudgment", {s: "поезд встанет"}],
    ["stimuli17", "AcceptabilityJudgment", {s: "ищет работу на сайте"}],
    ["stimuli17", "AcceptabilityJudgment", {s: "ищет паспорт в квартире"}],
    ["stimuli18", "AcceptabilityJudgment", {s: "найдет ключи в кармане"}],
    ["stimuli18", "AcceptabilityJudgment", {s: "найдет решение к задаче"}],
    ["stimuli19", "AcceptabilityJudgment", {s: "соскочит кольцо с пальца"}],
    ["stimuli19", "AcceptabilityJudgment", {s: "крестик соскочит с шеи"}],
    ["stimuli20", "AcceptabilityJudgment", {s: "шляпа слетит с головы"}],
    ["stimuli20", "AcceptabilityJudgment", {s: "птица слетит с ветки"}],
    ["stimuli21", "AcceptabilityJudgment", {s: "поставит сковородку на плиту"}],
    ["stimuli21", "AcceptabilityJudgment", {s: "поставит вопрос перед начальством"}],
    ["stimuli22", "AcceptabilityJudgment", {s: "режет огурцы на доске"}],
    ["stimuli22", "AcceptabilityJudgment", {s: "режет овощи на салат"}],
    ["stimuli23", "AcceptabilityJudgment", {s: "достанет ручку из сумки"}],
    ["stimuli23", "AcceptabilityJudgment", {s: "достанет рукой до люка"}],
   
    ["filler1", "AcceptabilityJudgment", {s: "столб грызет лапу"}],
    ["filler1", "AcceptabilityJudgment", {s: "розетка грызет парик"}],
    ["filler2", "AcceptabilityJudgment", {s: "прячет платок в сумке"}],
    ["filler2", "AcceptabilityJudgment", {s: "прячет сон на лице"}],
    ["filler3", "AcceptabilityJudgment", {s: "кинет пальму в карман"}],
    ["filler3", "AcceptabilityJudgment", {s: "кинет забор в палку"}],
    ["filler4", "AcceptabilityJudgment", {s: "поставит суп в холодильник"}],
    ["filler4", "AcceptabilityJudgment", {s: "поставит корь на полку"}],
    ["filler5", "AcceptabilityJudgment", {s: "погонется дождь"}],
    ["filler5", "AcceptabilityJudgment", {s: "погонется презентация"}],
    ["filler6", "AcceptabilityJudgment", {s: "ломается карандаш"}],
    ["filler6", "AcceptabilityJudgment", {s: "ломается река"}],
    ["filler7", "AcceptabilityJudgment", {s: "трава шелестит"}],
    ["filler7", "AcceptabilityJudgment", {s: "столб шелестит"}],
    ["filler8", "AcceptabilityJudgment", {s: "катится по дороге"}],
    ["filler8", "AcceptabilityJudgment", {s: "катится сок на ламе"}],
    ["filler9", "AcceptabilityJudgment", {s: "открытка кричит в шкафу"}],
    ["filler9", "AcceptabilityJudgment", {s: "карта кричит от смеха"}],
    ["filler10", "AcceptabilityJudgment", {s: "роза растет в саду"}],
    ["filler10", "AcceptabilityJudgment", {s: "сугроб растет на поляне"}],
    ["filler11", "AcceptabilityJudgment", {s: "рост пасется на карте"}],
    ["filler11", "AcceptabilityJudgment", {s: "корова пасется на лугу"}],
    ["filler12", "AcceptabilityJudgment", {s: "квадрат примет"}],
    ["filler12", "AcceptabilityJudgment", {s: "гром примет"}],
    ["filler13", "AcceptabilityJudgment", {s: "ствол читает"}],
    ["filler13", "AcceptabilityJudgment", {s: "рука читает"}],
    ["filler14", "AcceptabilityJudgment", {s: "машина едет"}],
    ["filler14", "AcceptabilityJudgment", {s: "дно едет"}],
    ["filler15", "AcceptabilityJudgment", {s: "зонт наполнится"}],
    ["filler15", "AcceptabilityJudgment", {s: "корзина наполнится"}],
    ["filler16", "AcceptabilityJudgment", {s: "гвоздь тянется в школу"}],
    ["filler16", "AcceptabilityJudgment", {s: "хлеб тянется по делам"}],
    ["filler17", "AcceptabilityJudgment", {s: "фарш марширует"}], 
    ["filler17", "AcceptabilityJudgment", {s: "кресло марширует"}],
    ["filler18", "AcceptabilityJudgment", {s: "дом пропалывает снег"}], 
    ["filler18", "AcceptabilityJudgment", {s: "бабушка пропалывает картошку"}],
	["filler19", "AcceptabilityJudgment", {s: "морж курит"}],
	["filler19", "AcceptabilityJudgment", {s: "парус курит"}],
    ["filler20", "AcceptabilityJudgment", {s: "суп кипит"}],
    ["filler20", "AcceptabilityJudgment", {s: "ваза кипит"}],
    ["filler21", "AcceptabilityJudgment", {s: "комар роет яму"}],
    ["filler21", "AcceptabilityJudgment", {s: "уж роет тоннель"}],
    ["filler22", "AcceptabilityJudgment", {s: "баран приветствует ключ"}], 
    ["filler22", "AcceptabilityJudgment", {s: "капитан приветствует команду"}],
    ["filler23", "AcceptabilityJudgment", {s: "ученик решает задачу"}], 
    ["filler23", "AcceptabilityJudgment", {s: "космос решает проблему"}],
    ["filler24", "AcceptabilityJudgment", {s: "лента подтягивается"}],
    ["filler24", "AcceptabilityJudgment", {s: "оружие подтягивается"}],
    ["filler25", "AcceptabilityJudgment", {s: "стриж молится"}],
    ["filler25", "AcceptabilityJudgment", {s: "окунь молится"}],
    ["filler26", "AcceptabilityJudgment", {s: "дельфин ныряет"}], 
    ["filler26", "AcceptabilityJudgment", {s: "двор ныряет"}],
    ["filler27", "AcceptabilityJudgment", {s: "пара ворует штрихи"}], 
    ["filler27", "AcceptabilityJudgment", {s: "продавец ворует из кассы"}],
    ["filler28", "AcceptabilityJudgment", {s: "кит ремонтирует дворы"}],
    ["filler28", "AcceptabilityJudgment", {s: "плод ремонтирует квартиру"}],
    ["filler29", "AcceptabilityJudgment", {s: "ковш думает по-французски"}],
    ["filler29", "AcceptabilityJudgment", {s: "мороз думает о деле"}],
    ["filler30", "AcceptabilityJudgment", {s: "год гладит месяц"}], 
    ["filler30", "AcceptabilityJudgment", {s: "дочь гладит платье"}],
    ["filler31", "AcceptabilityJudgment", {s: "садовник стрижет газон"}], 
    ["filler31", "AcceptabilityJudgment", {s: "ворон стрижет клюв"}],
    ["filler32", "AcceptabilityJudgment", {s: "стон приземлится на крыло"}],
    ["filler32", "AcceptabilityJudgment", {s: "самолет приземлится на шасси"}],
    ["filler33", "AcceptabilityJudgment", {s: "закроет шнурки"}],
    ["filler33", "AcceptabilityJudgment", {s: "закроет волосы"}],
    ["filler34", "AcceptabilityJudgment", {s: "нащупает землю"}], 
    ["filler34", "AcceptabilityJudgment", {s: "нащупает страх"}],
    ["filler35", "AcceptabilityJudgment", {s: "укроет ручек"}], 
    ["filler35", "AcceptabilityJudgment", {s: "укроет дочку"}],
    ["filler36", "AcceptabilityJudgment", {s: "заглянет в окно"}],
    ["filler36", "AcceptabilityJudgment", {s: "заглянет в очки"}],
    ["filler37", "AcceptabilityJudgment", {s: "слушает ковер"}],
    ["filler37", "AcceptabilityJudgment", {s: "слушает солнце"}],
    ["filler38", "AcceptabilityJudgment", {s: "работает по утрам"}], 
    ["filler38", "AcceptabilityJudgment", {s: "работает под рацией"}],
    ["filler39", "AcceptabilityJudgment", {s: "уколет в полет"}], 
    ["filler39", "AcceptabilityJudgment", {s: "уколет в бок"}],
    ["filler40", "AcceptabilityJudgment", {s: "передаст информацию"}],     
    ["filler40", "AcceptabilityJudgment", {s: "передаст отечество"}],
    ["filler41", "AcceptabilityJudgment", {s: "предаст сон"}],
    ["filler41", "AcceptabilityJudgment", {s: "предаст ствол"}],
    ["filler42", "AcceptabilityJudgment", {s: "покажет отвращение"}], 
    ["filler42", "AcceptabilityJudgment", {s: "покажет мир"}],
    ["filler43", "AcceptabilityJudgment", {s: "подскажет соседу"}], 
    ["filler43", "AcceptabilityJudgment", {s: "подскажет детей"}],
    ["filler44", "AcceptabilityJudgment", {s: "поясняет котом"}],
    ["filler44", "AcceptabilityJudgment", {s: "поясняет вопрос"}],
    ["filler45", "AcceptabilityJudgment", {s: "управляет ручке"}],
    ["filler45", "AcceptabilityJudgment", {s: "управляет условием"}],
    ["filler46", "AcceptabilityJudgment", {s: "родит сына"}], 
    ["filler46", "AcceptabilityJudgment", {s: "родит колесом"}],     
];


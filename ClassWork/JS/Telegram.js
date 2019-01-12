function createCardPerson(img, name) {
    var card = document.createElement('div');
    card.className = 'person-card';
    var image = document.createElement('img');
    image.src = img;
    var textName = document.createElement('p');
    textName.textContent = name;
    card.appendChild(image);
    card.appendChild(textName)
    image.id = String(count);
    textName.id = String(count);
    card.id = String(count++);
    card.onclick = pushMessage.bind(this);
    console.log(card.id);
    document.getElementsByClassName('column-person')[0].appendChild(card);
}
function createCardMessage(img, name, back) {
    var card = document.createElement('div');
    if (back)
        card.className = 'massage-card back-message';
    else card.className = 'massage-card';
    var image = document.createElement('img');
    image.src = img;
    var textName = document.createElement('p');
    textName.textContent = name;
    if (back){
        card.appendChild(textName);
        card.appendChild(image);
    }
    else{
        card.appendChild(image);
        card.appendChild(textName);
    }
    document.getElementsByClassName('body-message')[0].appendChild(card);
}
var img;
var count = 1;
var nameArr = ["Kristy", "Masha", 'Kate', 'Jack', 'Jone', 'Nick', 'Vika', 'Anna', 'Dasha', 'Tom'];
var textArr = { '1': ['Hello. I’m calling from McCarthy’s. I helped you when you were here looking at watches the other day.',
    'I think I have found something of yours. Have you lost anything?',
    'Not that I have noticed. No, nothing seems to be missing.',
    'Well, you left your credit card on one of the counters at our store.',
    'Really? Oh, my goodness. I thought it’s been stolen. I’m so much grateful to you for calling me.',
    'Thank you. It happens quite often. How can I return your credit card?',
    'I’ll stop by your store tonight. What time do you work tonight at?',
    'Let’s see. Today is Monday. I’m working the night shift. That’s till 11 pm.',
    'Thanks Heaven! I’ll be definitely in your store tonight. I do appreciate you unimaginable' +
    ' care for the shoppers of your store.To be on the safe side, you’d better be there at 10 am. ' +
    'Do you know exactly when you would like to fly to Chicago? The flights are every Tuesday,' +
    ' Thursday and Sunday.',
    'You are welcome. Come at any convenient for you time.'],
    '2': ['Hi!', 'Hello', 'How are you???', 'I am OK', 'Not that I have noticed. No, nothing seems to be missing.',
        'Well, you left your credit card on one of the counters at our store.',
        'Really? Oh, my goodness. I thought it’s been stolen. I’m so much grateful to you for calling me.',
        'Thank you. It happens quite often. How can I return your credit card?',
        'Thanks Heaven! I’ll be definitely in your store tonight. I do appreciate you unimaginable' +
        ' care for the shoppers of your store.To be on the safe side, you’d better be there at 10 am. ' +
        'Do you know exactly when you would like to fly to Chicago? The flights are every Tuesday,' +
        ' Thursday and Sunday.',],
    '3': ['Здравствуй! Меня зовут Кate.',
        'Привет! Я anon. Ты из какого города приехал?', 'Я из Ростова-на-Дону. А ты?', 'А я из Красноярска',
        'В Сибири! Как интересно! Я в Сибири вообще еще не бывал. А ты бывал в Ростове когда-нибудь?',
        'Однажды я был в Таганроге у родственников. Мы летели самолетом. И самолет садился в Ростове, ' +
        'а оттуда мы ехали в Таганрог на машине.', 'То есть ты был у нас проездом!',
        'Ага! Правда, города почти не видел. Тогда уже темно было. И когда назад в аэропорт ехали, ' +
        'то тоже видел Ростов только мельком. Большой город!',
        'А в Красноярске есть река? Извини, я не очень хорошо географию знаю.',
        'Да, конечно! Енисей! Водная артерия Восточной Сибири!',
        'А у нас Дон, как из названия ясно!',
        'Ага, а в Таганроге – там и море есть. Азовское.',
        'Искупаться успел?',
        'Да! Мы в августе прилетали, во второй половине. У нас в Красноярске вечера уже прохладными стали,' +
        ' а в Таганроге – жара! '],
    '4': ['Мама!', 'Что, Игорь?',
        'Представляешь, какой кошмар я вычитал в Интернете! Оказывается, ' +
        'в Тихом океане образовался новый континент из мусора!',
        'Что? Как это – новый континент из мусора?',
        'Там в воде плавает огромное скопление отходов: пластика, бутылок и всего такого. ' +
        'Все это мусор, выброшенный человеком в море.',
        'А при чем здесь континент?',
        'Это огромное образование, по территории его можно сравнить с целой страной, даже с континентом!',
        'А как оно могло образоваться? Что-то я не понимаю.',
        'Океанические течения несут мусор на определенную территорию.' +
        ' Получается колоссальная свалка в океане. Морские животные глотают пластик и погибают!',
        'И, наверное, это свалка увеличивается?',
        'Конечно, мама, а как ты думала? Мусор-то выбрасывают!',
        'Какой ужас! Нужно строить мусороперерабатывающие заводы! Везде! В каждом городе!',
        'И перерабатывать мусор, а не делать свалки?',
        'Да, особенно весь этот пластик! И тогда не будет таких жутких «континентов»!' ],
    '5': ['Мама!', 'Что, Игорь?',
        'Представляешь, какой кошмар я вычитал в Интернете! Оказывается, ' +
        'в Тихом океане образовался новый континент из мусора!',
        'Что? Как это – новый континент из мусора?',
        'Там в воде плавает огромное скопление отходов: пластика, бутылок и всего такого. ' +
        'Все это мусор, выброшенный человеком в море.',
        'А при чем здесь континент?',
        'Это огромное образование, по территории его можно сравнить с целой страной, даже с континентом!',
        'А как оно могло образоваться? Что-то я не понимаю.',
        'Океанические течения несут мусор на определенную территорию.' +
        ' Получается колоссальная свалка в океане. Морские животные глотают пластик и погибают!',
        'И, наверное, это свалка увеличивается?',
        'Конечно, мама, а как ты думала? Мусор-то выбрасывают!',
        'Какой ужас! Нужно строить мусороперерабатывающие заводы! Везде! В каждом городе!',
        'И перерабатывать мусор, а не делать свалки?',
        'Да, особенно весь этот пластик! И тогда не будет таких жутких «континентов»!' ],
    '6': ['Hello. I’m calling from McCarthy’s. I helped you when you were here looking at watches the other day.',
        'I think I have found something of yours. Have you lost anything?',
        'Not that I have noticed. No, nothing seems to be missing.',
        'Well, you left your credit card on one of the counters at our store.',
        'Really? Oh, my goodness. I thought it’s been stolen. I’m so much grateful to you for calling me.',
        'Thank you. It happens quite often. How can I return your credit card?',
        'I’ll stop by your store tonight. What time do you work tonight at?',
        'Let’s see. Today is Monday. I’m working the night shift. That’s till 11 pm.',
        'Thanks Heaven! I’ll be definitely in your store tonight. I do appreciate you unimaginable' +
        ' care for the shoppers of your store.To be on the safe side, you’d better be there at 10 am. ' +
        'Do you know exactly when you would like to fly to Chicago? The flights are every Tuesday,' +
        ' Thursday and Sunday.',
        'You are welcome. Come at any convenient for you time.'],
    '7': ['Hi!', 'Hello', 'How are you???', 'I am OK', 'Not that I have noticed. No, nothing seems to be missing.',
        'Well, you left your credit card on one of the counters at our store.',
        'Really? Oh, my goodness. I thought it’s been stolen. I’m so much grateful to you for calling me.',
        'Thank you. It happens quite often. How can I return your credit card?',
        'Thanks Heaven! I’ll be definitely in your store tonight. I do appreciate you unimaginable' +
        ' care for the shoppers of your store.To be on the safe side, you’d better be there at 10 am. ' +
        'Do you know exactly when you would like to fly to Chicago? The flights are every Tuesday,' +
        ' Thursday and Sunday.',],
    '8': ['Здравствуй! Меня зовут Кate.',
        'Привет! Я anon. Ты из какого города приехал?', 'Я из Ростова-на-Дону. А ты?', 'А я из Красноярска',
        'В Сибири! Как интересно! Я в Сибири вообще еще не бывал. А ты бывал в Ростове когда-нибудь?',
        'Однажды я был в Таганроге у родственников. Мы летели самолетом. И самолет садился в Ростове, ' +
        'а оттуда мы ехали в Таганрог на машине.', 'То есть ты был у нас проездом!',
        'Ага! Правда, города почти не видел. Тогда уже темно было. И когда назад в аэропорт ехали, ' +
        'то тоже видел Ростов только мельком. Большой город!',
        'А в Красноярске есть река? Извини, я не очень хорошо географию знаю.',
        'Да, конечно! Енисей! Водная артерия Восточной Сибири!',
        'А у нас Дон, как из названия ясно!',
        'Ага, а в Таганроге – там и море есть. Азовское.',
        'Искупаться успел?',
        'Да! Мы в августе прилетали, во второй половине. У нас в Красноярске вечера уже прохладными стали,' +
        ' а в Таганроге – жара! '],
    '9': ['Мама!', 'Что, Игорь?',
        'Представляешь, какой кошмар я вычитал в Интернете! Оказывается, ' +
        'в Тихом океане образовался новый континент из мусора!',
        'Что? Как это – новый континент из мусора?',
        'Там в воде плавает огромное скопление отходов: пластика, бутылок и всего такого. ' +
        'Все это мусор, выброшенный человеком в море.',
        'А при чем здесь континент?',
        'Это огромное образование, по территории его можно сравнить с целой страной, даже с континентом!',
        'А как оно могло образоваться? Что-то я не понимаю.',
        'Океанические течения несут мусор на определенную территорию.' +
        ' Получается колоссальная свалка в океане. Морские животные глотают пластик и погибают!',
        'И, наверное, это свалка увеличивается?',
        'Конечно, мама, а как ты думала? Мусор-то выбрасывают!',
        'Какой ужас! Нужно строить мусороперерабатывающие заводы! Везде! В каждом городе!',
        'И перерабатывать мусор, а не делать свалки?',
        'Да, особенно весь этот пластик! И тогда не будет таких жутких «континентов»!' ],
    '10': ['Мама!', 'Что, Игорь?',
        'Представляешь, какой кошмар я вычитал в Интернете! Оказывается, ' +
        'в Тихом океане образовался новый континент из мусора!',
        'Что? Как это – новый континент из мусора?',
        'Там в воде плавает огромное скопление отходов: пластика, бутылок и всего такого. ' +
        'Все это мусор, выброшенный человеком в море.',
        'А при чем здесь континент?',
        'Это огромное образование, по территории его можно сравнить с целой страной, даже с континентом!',
        'А как оно могло образоваться? Что-то я не понимаю.',
        'Океанические течения несут мусор на определенную территорию.' +
        ' Получается колоссальная свалка в океане. Морские животные глотают пластик и погибают!',
        'И, наверное, это свалка увеличивается?',
        'Конечно, мама, а как ты думала? Мусор-то выбрасывают!',
        'Какой ужас! Нужно строить мусороперерабатывающие заводы! Везде! В каждом городе!',
        'И перерабатывать мусор, а не делать свалки?',
        'Да, особенно весь этот пластик! И тогда не будет таких жутких «континентов»!' ]
};

for (var i = 0; i<10; i++)
{   img = '../HW2/Image/'+(i+1)+'.jpg';
    createCardPerson( img, nameArr[i]);

}
function pushMessage(event) {
    var id = event.target.id;
    document.getElementsByClassName('body-message')[0].innerHTML = '';
    img = '../HW2/Image/'+id+'.jpg';
    for (i=0; i<textArr[id].length; i++)
    {
        if(i%2)
            createCardMessage( '../HW2/Image/'+id+'.jpg', textArr[id][i]);
        else

            createCardMessage( '../HW2/Image/anon.png', textArr[id][i], true);
    }

}

function createCardPerson(img, name) {
    var card = document.createElement('div');
    card.className = 'person-card';
    var image = document.createElement('img');
    image.src = img;
    var textName = document.createElement('p');
    textName.textContent = name;
    card.appendChild(image);
    card.appendChild(textName);
    document.getElementsByClassName('column-person')[0].appendChild(card);
}
function createCardMessage(img, name) {
    var card = document.createElement('div');
    card.className = 'massage-card';
    var image = document.createElement('img');
    image.src = img;
    var textName = document.createElement('p');
    textName.textContent = name;
    card.appendChild(image);
    card.appendChild(textName);
    document.getElementsByClassName('column-massage')[0].insertBefore(card, document.getElementsByClassName('write-massage')[0]);
}
var img;
var nameArr = ["Kristy", "Masha", 'Kate', 'Jack', 'Jone', 'Nick', 'Vika', 'Anna', 'Dasha', 'Tom'];
var textArr = ['Hello. I’m calling from McCarthy’s. I helped you when you were here looking at watches the other day.',
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
                'You are welcome. Come at any convenient for you time.'];

for (var i = 0; i<10; i++)
{   img = '../HW2/Image/'+(i+1)+'.jpg';
    createCardPerson( img, nameArr[i]);
    createCardMessage( img, textArr[i]);
}

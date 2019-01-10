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
var name = ["Kristy", "Masha", 'Kate', 'Jack', 'Jone', 'Nick', 'Vika', 'Anna', 'Dasha', 'Tom'];
for (var i = 0; i<10; i++)
{   img = '../HW2/Image/'+(i+1)+'.jpg';
    createCardPerson( img, 'Kristy'+i);
    createCardMessage( img, 'There are a lot of books on history, about animals, travellers, children,' +
        'school and so on. Children like to read adventure and magic books, science fiction and detective' +
        'stories. They enjoy stories, short stories, novels, fairy-tales, fables and poems.')
}

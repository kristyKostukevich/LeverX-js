function createCard() {
    var text = 'Международное сотрудничество во всех сферах деятельности';
    var card = document.createElement('div');
    card.className = 'main-items';
    var img = document.createElement('img');
    img.src = 'Image/1.jpg';
    var divForText = document.createElement('div');
    divForText.className = "main-item";
    var firstText = document.createElement('p');
    firstText.className = 'first-text';
    firstText.textContent = 'Международное сотрудничество во всех сферах деятельности';
    var secondText = document.createElement('p');
    secondText.className = 'second-text';
    secondText.textContent = 'There are a lot of books on history, about animals, travellers, children, ' +
        'school and so on. Children like to read adventure and magic books, science fiction and detective stories. ' +
        'They enjoy stories, short stories, novels, fairy-tales, fables and poems.';
    var button = document.createElement('button');
    button.textContent = 'Try';
    divForText.appendChild(firstText);
    divForText.appendChild(secondText);
    divForText.appendChild(button);
    card.appendChild(img);
    card.appendChild(divForText);
    document.getElementsByClassName("main")[0].appendChild(card);
}


for (var i = 0; i < 9; i++) {
    createCard();
}

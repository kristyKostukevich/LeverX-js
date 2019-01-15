var body = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
});

var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://jsonplaceholder.typicode.com/users', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = finalF.bind(this);

xhr.send(body);

function result() {
    if (xhr.readyState == XMLHttpRequest.DONE ) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
}

result();

var xhr1 = new XMLHttpRequest();
xhr1.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
xhr1.onreadystatechange = finalF.bind(this);
xhr1.send();


function finalF() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        var arr = JSON.parse(xhr1.responseText);
        for (var i = 0; i < arr.length; i++) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + arr[i].name + '</td><td>' +
                arr[i].username + '</td><td>' + arr[i].email + '</td><td>' + arr[i].phone + '</td><td>' + arr[i].website +
                '</td> <td><button>Change</button></td><td><button>"Delete"</button></td>';
            document.getElementsByTagName('tbody')[0].appendChild(tr);
        }
    }
}
finalF();
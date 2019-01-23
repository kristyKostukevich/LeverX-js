var data = [];

function addTable(param){
    if (param){
        document.getElementById('count').textContent = 'Количество записей: '+param;

    }
    else {
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + data[i].FirstName + '</td><td>' +
                data[i].Gender + '</td><td>' + data[i].UserName + '</td>';
            document.getElementsByTagName('tbody')[0].appendChild(tr);
        }
    }

}

function clearTable() {
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementById('count').textContent = '';
}

function onGet(param) {

    url = "https://services.odata.org/V4/TripPinServiceRW/People/";
    if (param){
        if (param == 'Expand')
            url += "?$expand=Trips($filter=Name eq 'Trip in US')";
        else
            if (param == 'Filter')
                url += "?$filter=FirstName eq 'Scott'";
            else url += param;

    }

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: url,
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;

            if (param == '$count')
                addTable(_data);
            else {
                clearTable();
                addTable();}
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function show(value, isAlert) {
    if (!isAlert) {
    } else {
        alert(value);
    }
}


(function checkName() {
    var name = window.prompt('what is your name?');
    if (/\d/.test(name))  alert('your uppercase name is ' +name.toUpperCase());
    else window.alert('your revert name is ' + name.split("").reverse().join(""));
}());
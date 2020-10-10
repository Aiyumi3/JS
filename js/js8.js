function f8() {
    a1=prompt('enter amount of money: ', ' ');
    a2=prompt('enter the price  : ', ' ');
    let b = Math.floor(a1/a2);
    let b2 = ((a1/a2)-b).toFixed(2);
    alert('number of chocolate bars :  '+ b +' \n ' + ' balance = ' + b2);
}

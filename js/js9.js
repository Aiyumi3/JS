function f9() {
    a1=prompt('enter three-digit number : ', ' ');

    result = 0;
    while (a1) {
        result *= 10;
        result += a1 % 10;
        a1 = Math.floor(a1 / 10);
    }
    alert('reverse number : '+ result );

}

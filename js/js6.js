function f6() {
    a1=prompt('enter  USD  : ', ' ');
    const UAH = 28.3524;
    const EUR = 32.9420;
    let uaMoney =a1*UAH ;
    let euro =uaMoney/EUR;
    let roundedGrn=uaMoney.toFixed(4);
    let roundedEuro=euro.toFixed(4);
    alert('UAH = '+ roundedGrn +' \n '+'EUR = '+ roundedEuro);
}
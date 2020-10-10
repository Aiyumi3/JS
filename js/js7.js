function f7() {
    a1=prompt('enter  GB  : ', ' ');
    const num = 1000;// mb in 1 gb, decimal system
    const num2 = 1024; // mb in 1 gb, in binary system
    const number = 820;
    let n1 = Math.floor((a1*num)/number);
    let n2 =Math.floor((a1*num2)/number);
    alert('number of files = '+ n1  + ' (decimal system) \n' + 'number of files = '+ n2  + ' (binary system) \n');
}
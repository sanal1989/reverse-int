module.exports = function reverse (n) {
    let sign = false;
    if(n<0){
        sign=true;
        n=Math.abs(n);
    }
    let copyN=n;
    let dec=1;
    let result=0;
    let num=0;
    while(n>0){
        n=Math.trunc(n/10);
        dec*=10;
    }
    while(dec>0){
        num=copyN%10;
        copyN=Math.trunc(copyN/10);
        result=result+(num*dec);
        dec=Math.trunc(dec/10);
    }
    // if(sign){
    //     result*=-1;
    // }
    return result/10;
}

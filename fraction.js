function fract(number){
    function gcd(a, b){//find the gcd
        if(b < 0.0000001)return a;//si b est négligeable, on arrête la récursion
        return gcd(b, Math.floor(a % b));//Algorithme d'Euclide
    }

    let decimal = parseFloat(number);//Convertit le nombre en décimal
    let numerator = 1;
    let denominator = 1;

    while(Math.abs(decimal - Math.round(decimal)) > 0.0000001){
        decimal *= 10;
        numerator = decimal;
        denominator *= 10;
    }

    const divisor  = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    if(denominator === 1){
        return number;//Si déno = 1, retourne le nombre original
    }else{
        return number.toFixed(2);
    }
}

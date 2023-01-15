
const RADIUS = process.argv.slice(2)[0]*1
,     PI = 3.14;


let calculate = (RADIUS) => {

    let area = Math.PI*(RADIUS*RADIUS);
    
    console.log(`Yarıçapı ${RADIUS} olan dairenin alanı: ${area}`);

}

calculate(RADIUS);
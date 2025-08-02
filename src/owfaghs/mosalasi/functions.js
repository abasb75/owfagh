export function calculateTabel(inputTale,abjad){
    if(abjad<=12){
        return null;
    }
    
    const abjadWithoutZekat = abjad - 12;
    const meftah = Math.floor(abjadWithoutZekat / 3);
    const kasr = abjadWithoutZekat % 3;
    const array = new Array(9);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(kasr===1 && i===7){
            currentValue += 2;
        }else if(kasr===2 && i===4){
            currentValue += 2;
        }else{
            currentValue += 1;
        }
        array[i-1] = currentValue;
    }

    return inputTale.map((value)=>{
        return array[value-1];
    });
}
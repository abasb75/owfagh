export function calculateTabelAsefi(inputTale,abjad){
    if(abjad<=65){
        return null;
    }
    
    const abjadWithoutZekat = abjad - 60;
    const meftah = Math.floor(abjadWithoutZekat / 5);
    const kasr = abjadWithoutZekat % 5;
    const array = new Array(25);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(kasr===1 && i===21){
            currentValue += 2;
        }else if(kasr===2 && i===16){
            currentValue += 2;
        }else if(kasr===3 && i===11){
            currentValue += 2;
        }else if(kasr===4 && i===6){
            currentValue += 2;
        }else{
            currentValue += 1;
        }
        array[i-1] = currentValue;
    }

    return inputTale.map((value)=>{
        if(value === null) return null;
        return array[value-1];
    });
}
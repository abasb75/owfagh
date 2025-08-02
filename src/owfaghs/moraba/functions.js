export function calculateTabel(inputTale,abjad){
    if(abjad<=34){
        return null;
    }
    
    const abjadWithoutZekat = abjad - 30;
    const meftah = Math.floor(abjadWithoutZekat / 4);
    const kasr = abjadWithoutZekat % 4;
    const array = new Array(16);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(kasr===1 && i===13){
            currentValue += 2;
        }else if(kasr===2 && i===9){
            currentValue += 2;
        }else if(kasr===3 && i===5){
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


export function calculateTabelMaqrebi(inputTale,abjad){
    
    if(abjad<=34){
        return null;
    }
    
    const meftah = Math.floor(abjad / 34);
    const kasr = abjad % 34;
    const array = new Array(16);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(i===13){
            currentValue += meftah + kasr;
        }else{
            currentValue += meftah;
        }
        array[i-1] = currentValue;
    }

    return inputTale.map((value)=>{
        return array[value-1];
    });
}




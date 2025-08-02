export function calculateTabel(inputTable,abjad){
    
    if(abjad<=34){
        return null;
    }
    
    const meftah = Math.floor(abjad / 30);
    const kasr = abjad % 30;
    const array = new Array(15);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(i===12){
            currentValue += meftah + kasr;
        }else{
            currentValue += meftah;
        }
        array[i-1] = currentValue;
    }

    return inputTable.map((value)=>{
        if(value===null){
            return null;
        }
        return array[value-1];
    });
}




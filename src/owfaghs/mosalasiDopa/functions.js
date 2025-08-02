export function calculateTabel(inputTale,abjad){
    
    if(abjad<=15){
        return null;
    }
    
    const meftah = Math.floor(abjad / 12);
    const kasr = abjad % 12;
    const array = new Array(8);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if(i===1){
            currentValue = meftah;
        }else if(i===6){
            currentValue += meftah + kasr;
        }else{
            currentValue += meftah;
        }
        array[i-1] = currentValue;
    }

    return inputTale.map((value)=>{
        if(value === null) return null;
        return array[value-1];
    });
}
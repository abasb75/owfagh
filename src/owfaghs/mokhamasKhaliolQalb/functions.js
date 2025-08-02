export function calculateTabelAsefi(inputTale,abjad){
    if(abjad<=65){
        return null;
    }
    
    const meftah = Math.floor(abjad / 65);
    const kasr = abjad % 65;
    const array = new Array(26);
    
    let currentValue = 0;
    for(let i=1; i<=array.length; i++){
        if([8,18].includes(i)){
            currentValue = null;
        }else if([1,3,11,20,24].includes(i)){
            currentValue = meftah*i+kasr;
        }else{
            currentValue = meftah*i;
        }
        array[i-1] = currentValue;
    }

    return inputTale.map((value)=>{
        if(value === null) return null;
        return array[value-1];
    });
}
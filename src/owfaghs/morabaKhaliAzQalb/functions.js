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


export function drawCanvas(canvas,data){
    
    console.log(canvas);
    if(!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.moveTo(120,60);
    ctx.lineTo(150,0);
    ctx.lineTo(180,60);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120,240);
    ctx.lineTo(150,300);
    ctx.lineTo(180,240);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,150);
    ctx.lineTo(60,120);
    ctx.lineTo(60,180);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,150);
    ctx.lineTo(240,120);
    ctx.lineTo(240,180);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(60,60);
    ctx.lineTo(120,60);
    ctx.lineTo(120,120);
    ctx.lineTo(60,120);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60,120);
    ctx.lineTo(120,60);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(180,60);
    ctx.lineTo(240,60);
    ctx.lineTo(240,120);
    ctx.lineTo(180,120);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(180,60);
    ctx.lineTo(240,120);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(60,180);
    ctx.lineTo(120,180);
    ctx.lineTo(120,240);
    ctx.lineTo(60,240);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60,180);
    ctx.lineTo(120,240);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(180,180);
    ctx.lineTo(240,180);
    ctx.lineTo(240,240);
    ctx.lineTo(180,240);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(180,240);
    ctx.lineTo(240,180);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(120,120);
    ctx.lineTo(180,120);
    ctx.lineTo(180,180);
    ctx.lineTo(120,180);
    ctx.closePath();
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "14px Arial";

    ctx.fillText(data[0],150,45);
    ctx.fillText(data[1], 75,75);
    ctx.fillText(data[2],45,150);
    ctx.fillText(data[3],75,225);

    ctx.fillText(data[4],150,210);
    ctx.fillText(data[5],195,195);
    ctx.fillText(data[6],210,150);
    ctx.fillText(data[7],195,105);

    ctx.fillText(data[ 8],105,195);
    ctx.fillText(data[ 9], 90,150);
    ctx.fillText(data[10],105,105);
    ctx.fillText(data[11],150, 90);

    ctx.fillText(data[12],225, 75);
    ctx.fillText(data[13],270,150);
    ctx.fillText(data[14],225,225);
    ctx.fillText(data[15],150,270);
}
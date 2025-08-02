import { useEffect, useRef, useState } from 'react';
import types from './types';
import { calculateTabel, drawCanvas } from './functions';

function MorabaKhaliAzQalb(){

    const [selectedType,setSelectedType] = useState(0);
    const [abjad,setAbjad] = useState(0);
    const [table,setTableValues] = useState([types.find(t=>t.isDefault===true).table]);
    const [errorMessage,setErrorMessage] = useState(null);

    const defaultCanvas = useRef(null);
    const dataCanvas = useRef(null);

    useEffect(()=>{
        types.forEach((type,index)=>{
            if(type.isDefault){
                setSelectedType(index);
            }
        })
    },[]);

    useEffect(()=>{
        if(abjad<=15){
            setErrorMessage('لطفا عدد ابجد بزرگتر از 15 را وارد کنید.');
            return;
        }
        const outputTable = calculateTabel(types[selectedType].table,abjad);
        
        if(outputTable){
            setErrorMessage(null);
            setTableValues(outputTable);
            console.log({outputTable},defaultCanvas.current,dataCanvas.current);
            if(defaultCanvas.current && dataCanvas.current ){
                drawCanvas(defaultCanvas.current,types[selectedType].table);
                drawCanvas(dataCanvas.current,outputTable);
            }
            
        }

    },[abjad,selectedType,defaultCanvas.current,dataCanvas.current]);

    return (<div className=''>
        <div className='flex gap-4 mx-auto  my-3'>
            <div className="w-1/2 h-12">
                <input 
                    type='number' 
                    id="abjad-input" 
                    className="w-full h-full border px-3"
                    placeholder='عدد ابجد'
                    value={abjad}
                    onChange={e=>setAbjad(e.target.value)}
                />
            </div>
            <div className="w-1/2 h-12">
                <select 
                    defaultValue={selectedType}
                    value={selectedType}
                    onChange={(e)=>setSelectedType(e.target.value)}
                    className='w-full h-full px-4'
                >
                    {types.map((type,index)=>{
                        return (<option 
                            value={index}
                            key={index}
                        >
                            {type.title}
                        </option>);
                    })}
                </select>
            </div>
        </div>
        <div className='max-w-2xl mx-auto  my-3 min-h-[400px]'>
            {errorMessage && <p className='my-12 text-[tomato] text-center'>{errorMessage}</p>}
            <div className='gap-4' style={{display:errorMessage?'none':'flex'}}>
                <div className='w-1/2'>
                    <h2 className='text-center my-4'>ترتیب جایگذاری</h2>
                    <canvas width={"300"} height={"300"} ref={defaultCanvas} />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-center my-4'>مقادیر جدول</h2>
                    <canvas width={"300"} height={"300"} ref={dataCanvas} />
                </div>
            </div>
        </div>
    </div>);
}

export default MorabaKhaliAzQalb;
import { useEffect, useState } from 'react';
import { calculateTabel } from './functions';
import types from './types';

function MorabaKhaliAzJama(){

    const [selectedType,setSelectedType] = useState(0);
    const [abjad,setAbjad] = useState(0);
    const [table,setTableValues] = useState([types.find(t=>t.isDefault===true).table]);
    const [errorMessage,setErrorMessage] = useState(null);

    useEffect(()=>{
        types.forEach((type,index)=>{
            if(type.isDefault){
                setSelectedType(index);
            }
        })
    },[]);

    useEffect(()=>{
        if(abjad<=34){
            setErrorMessage('لطفا عدد ابجد بزرگتر از 34 را وارد کنید.');
            return;
        }
        const outputTable = calculateTabel(types[selectedType].table,abjad);
        if(outputTable){
            setErrorMessage(null);
            setTableValues(outputTable);
        }
    },[abjad]);

    const tableContent = ()=>{
        if(errorMessage){
            return (<p className='my-12 text-[tomato] text-center'>{errorMessage}</p>)
        }

        return (<div className='flex gap-4'>
            {[types[selectedType].table,table].map((table,index)=>{
                return (<div>
                    <h2 className='text-center my-4'>{index===0?'ترتیب جایگذاری':'مقادیر جدول'}</h2>
                    <table 
                            dir="ltr" 
                            className='w-[300px] h-[300px] border-2 border-gray-400 mx-auto'
                        >
                            <tbody >
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[0]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[1]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[2]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[3]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[4]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[5]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[6]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[7]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[8]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[9]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[10]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[11]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[12]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[13]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[14]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[15]}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>)
            })}
        </div>)
    }

    return (<div className=''>
        <div className='flex gap-4 mx-auto  my-3'>
            <div className="w-full h-12">
                <input 
                    type='number' 
                    id="abjad-input" 
                    className="w-full h-full border px-3"
                    placeholder='عدد ابجد'
                    value={abjad}
                    onChange={e=>setAbjad(e.target.value)}
                />
            </div>
            
        </div>
        <div className='max-w-2xl mx-auto  my-3 min-h-[400px]'>
            {tableContent()}
        </div>
    </div>);
}

export default MorabaKhaliAzJama;
import { useEffect, useState } from 'react';
import types from './types';

function Mokhamas(){

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
        if(abjad<=65){
            setErrorMessage('لطفا عدد ابجد بزرگتر از 65 را وارد کنید.');
            return;
        }
        const outputTable = types[selectedType].method(types[selectedType].table,abjad);
        if(outputTable){
            setErrorMessage(null);
            setTableValues(outputTable);
        }
    },[abjad,selectedType]);

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
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[4]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[5]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[6]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[7]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[8]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[9]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[10]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[11]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[12]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[13]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[14]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[15]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[16]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[17]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[18]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[19]}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[20]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[21]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[22]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[23]}</td>
                                    <td className='border border-gray-400 text-center text-2xl font-bold'>{table[24]}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>)
            })}
        </div>)
    }

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
            {tableContent()}
        </div>
    </div>);
}

export default Mokhamas;
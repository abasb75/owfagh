import { useEffect, useState } from "react";
import copy from  "@abasb75/copy-to-clipboard";
import { calculateAbjadKabir, calculateAbjadSaghir, calculateAbjadWusta } from "./functions";

function Abjad(){
    const [text,setText] = useState();
    const [abjadKabir,setAbjadKabir] = useState();
    const [abjadWusta,setAbjadWusta] = useState();
    const [abjadSaqir,setAbjadSaqir] = useState();

    useEffect(()=>{
        setAbjadKabir(calculateAbjadKabir(text));
        setAbjadWusta(calculateAbjadWusta(text));
        setAbjadSaqir(calculateAbjadSaghir(text));
    },[text]);

    return (<div className=''>
        <div className='flex gap-4 mx-auto  my-3'>
            <div className="w-full h-[300px]">
                <textarea 
                    type='number' 
                    id="abjad-input" 
                    className="w-full h-full border-2 border-gray-400 px-3"
                    placeholder='عبارات برای محاسبه ابجد'
                    value={text}
                    onChange={e=>setText(e.target.value)}
                ></textarea>
            </div>
            
        </div>
        <div className='max-w-2xl mx-auto  my-3  py-4'>
            <div className="w-full flex gap-3">
                <div className="border rounded bg-slate-50 shadow text-center">
                    <h2  className="text-gray-800 text-xs text-center py-1">ابجد کبیر</h2>
                    <input value={abjadKabir} className="bg-slate-50 text-center text-3xl w-full" />
                    <button
                        className="bg-gray-400 hover:bg-blue-400 rounded my-2 text-white px-10 py-2 text-sm "
                        onClick={()=>copy(abjadKabir)}>کپی</button>
                </div>
                <div className="border rounded bg-slate-50 shadow text-center">
                    <h2  className="text-gray-800 text-xs text-center py-1">ابجد وسطی</h2>
                    <input value={abjadWusta} className="bg-slate-50 text-center text-3xl w-full" />
                    <button 
                        className="bg-gray-400 hover:bg-blue-400 rounded my-2 text-white px-10 py-2 text-sm "
                        nClick={()=>copy(abjadWusta)}>کپی</button>
                </div>
                <div className="border rounded bg-slate-50 shadow text-center">
                    <h2  className="text-gray-800 text-xs text-center py-1">ابجد صغیر</h2>
                    <input value={abjadSaqir} className="bg-slate-50 text-center text-3xl w-full" />
                    <button
                        className="bg-gray-400 hover:bg-blue-400 rounded my-2 text-white px-10 py-2 text-sm "
                        onClick={()=>copy(abjadSaqir)}>کپی</button>
                </div>
            </div>
        </div>
    </div>);
}


export default Abjad;
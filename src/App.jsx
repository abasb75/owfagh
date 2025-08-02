import { useEffect, useState } from 'react';
import pages from './pages';

function App() {

  const [page,setPage] = useState(0);
  const Component = pages[page].component;

  return (
    <div className='w-full h-[100vh] bg-slate-100 flex justify-center items-center'>
      <div className='bg-white w-full max-w-3xl rounded-lg shadow px-4 py-4'>
        <div className='w-full h-12'>
          <select 
            defaultValue={page}
            value={page}
            onChange={(e)=>setPage(e.target.value)}
            className='w-full h-full px-4'
          >
            {pages.map((page,index)=>{
              return (<option 
                  value={index}
                  key={index}
                >
                  {page.title}
              </option>);
            })}
          </select>
        </div>
        <Component />
      </div>
    </div>
  );
}

export default App;
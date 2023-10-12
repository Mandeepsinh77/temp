import React from 'react'
import { useState } from 'react';
import ItemList from '../Pages/ItemList';

function Itemtable() {
   
    // const [date, setDate] = useState();
    var today = new Date();
    var date = today.getDay() + '-' + today.getMonth() + '-' + today.getFullYear();
    // console.log(typeof (datee))
    // setDate(datee);
    return (
        <div className='flex'>
            <div className='md:w-3/5 w-3/5  p-4'>
                <div>
                    <table className=' border  rounded-md md:w-full w-full' >
                        <tbody className=''>
                            <tr className='border border-slate-700'>
                                <span className='ml-6'>Customer ID : </span><span>20</span>
                            </tr>
                            <tr className='border border-slate-700'>
                                <span className='ml-6'>Customer Name : </span><span>Mandeepsinh</span>
                            </tr>
                            <tr className='border border-slate-700 '>
                                <span className='ml-6'>Customer Phone No. : </span><span>6598754689</span>
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div>
                <ItemList/>
               </div>
              
            </div>
            <div className='ml-5 md:w-2/5 w-2/5'>
                <div className=' border border-slate-500 mt-2 ml-36 w-3/5 bg-green-500 rounded-md'>
                    <div className=' ml-3 p-1' >
                        <span>Date:</span><span>{new Date().toLocaleString() + ''}</span>
                    </div>
                </div>
                <div className='mt-4 h-5/6 border border-slate-500 rounded-md'>


                </div>
            </div>
        </div >
    )
}


export default Itemtable


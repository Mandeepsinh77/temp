import React from 'react'
import { useState } from 'react';
import ItemList from '../Pages/ItemList';

function Itemtable() {

    // const [date, setDate] = useState();
   
    return (
        <div className="container mx-auto">
            <div className="mt-4  flex justify-center items-center">
                <ItemList />
                
            </div>
        </div>
    )
}


export default Itemtable


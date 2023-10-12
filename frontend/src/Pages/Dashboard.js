import React, { useState } from 'react'
import Navbar from "../component/Navbar.js"
import Itemtable from '../component/Itemtable.js';
import { Link } from 'react-router-dom';

import Contact from '../component/Contact.js';
import AddCustomer from '../Admin/FormInput.js';
import ItemForm from '../Admin/ItemForm.js';
import CategoryList from './CategoryList.js';
import CustomerList from "./CustomerList.js";
import ItemList from './ItemList.js';
// import { Link } from 'react-router-dom'
export default function Dashboard() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
        { name: "Dashboard", link: "/dashboard" },
    ];

    const [history, sethistory] = useState(false);
    const [contact, setContact] = useState(false);
    const [customerList, setcustomerList] = useState(false);
    const [itemList, setitemList] = useState(false);
    const [recent, setrecent] = useState(false);
    const [invoice, setnvoice] = useState(false);
    const [addCustomer, setAddCustomer] = useState(false);
    const [addItem, setAddItem] = useState(false);
    const [categoryList, setcategoryList] = useState(false);
    
    
    return (
        <>
            <div className='md:h-20 h-12'>
                <Navbar links={links} setAddCustomer={setAddCustomer} setitemList={setitemList} setContact={setContact} setAddItem={setAddItem} setcategoryList={setcategoryList} setcustomerList={setcustomerList}/>
            </div>
            <div className='flex flex-row mb-2 '>
                <div className='md:w-1/6 w-2/4 bg-gray-200 border-2 p-4 my_side_bar' >
                    <table className='place-items-center w-full text-[#1F3F49] capitalize md:text-xl font-medium tracking-wide'>
                        <tr className='hover:uppercase border-b-2 hover:bg-gray-300 border-slate-500 h-20  flex items-center justify-center  cursor-pointer'>
                            DashBoard
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2  hover:bg-gray-300 border-slate-500 h-20  flex items-center justify-center  cursor-pointer' >
                            History
                        </tr>
                        <tr className=' hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20  flex items-center justify-center  cursor-pointer' >
                        <Link to="/" onClick={() => {
                                setAddItem(false)
                                setContact(false)
                                setAddCustomer(false)
                                setcategoryList(false)
                                setitemList(false)
                                setcustomerList(true);
                            }}>
                            Customer List
                        </Link>
                        </tr>
                        <tr className=' hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20  flex items-center justify-center cursor-pointer'>
                            <Link to="/" onClick={() => {
                                setAddItem(false)
                                setContact(false)
                                setAddCustomer(false)
                                setcategoryList(false)
                                setitemList(true)
                                setcustomerList(false);
                            }}>
                                Item List
                            </Link>
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300  border-slate-500 h-20  flex items-center justify-center  cursor-pointer'>
                            <Link to="/" onClick={() => {
                                setAddItem(false)
                                setitemList(false)
                                setAddCustomer(false)
                                setContact(false)
                                setcategoryList(true)
                                setcustomerList(false);
                            }}>
                                categoryList
                            </Link>
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20  flex items-center justify-center  cursor-pointer'>
                            Invoice
                        </tr>

                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300  border-slate-500 h-20  flex items-center justify-center  cursor-pointer'>

                            <Link to="/" onClick={() => {
                                setAddItem(false)
                                setitemList(false)
                                setAddCustomer(false)
                                setcategoryList(false)
                                setContact(true)
                                setcustomerList(false);
                            }}>
                                Contact
                            </Link>
                        </tr>
                        <tr className='hover:uppercase mt-4 h-20 flex  hover:bg-gray-300 items-center  justify-center  cursor-pointer'>

                        </tr>
                    </table>
                </div>
                <div className='md:w-3/4 w-2/4 ml-72'>
                    {itemList ? <Itemtable /> : contact ? <Contact /> : addCustomer ? <AddCustomer /> : addItem ? <ItemForm /> : categoryList ? <CategoryList /> : customerList ? (
            <CustomerList />
          ) : null}
                </div>
            </div>
        </>
    )
}
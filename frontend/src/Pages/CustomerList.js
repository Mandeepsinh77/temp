import React, {useEffect,useState} from 'react';

function CustomerList(){
    const[customers,setCustomers] = useState([]);
    const [query, setQuery] = useState("");
    console.log(query);
    async function fetchCustomers(){
        fetch('http://localhost:4000/add/fetch_customers')
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            setCustomers(data)
            console.log('Fetched Data:', data);
            console.log(data[0].firstname)
        })
        .catch(error=>{
            console.error('Error fetching Customers: ',error);
        })
    }

    useEffect(()=>{
        fetchCustomers();
    },[]);

    return(
        <div className="container mx-auto">
        <div className="mt-4  flex justify-center items-center ">
            <input
                type="text"
                placeholder="Search Customer"
                className="border rounded-md border-gray-300 px-2 py-1 mr-2 "
                onChange={e=>setQuery(e.target.value)}
            />
            <button className="border rounded-md bg-green-500 text-white px-2 py-1">
                Search
            </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>

            <table className="w-1/2 border-collapse border border-gray-300">
                <thead className="text-center">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">CID</div>
                        </th>
                        <th className="border border-gray-300 px-4 w-auto py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">First Name</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Last Name</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Phone No</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Details</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Sale</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Payment History</div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                            <div className="">Status</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.filter((customer)=>customer.firstname.toLowerCase().includes(query) || customer.lastname.toLowerCase().includes(query)||customer.phoneno.includes(query)).map((customer,index)=> (
                        <tr className='text-center' key={index}>
                            <td className='border border-gray-300 px-4 py-2'>{index+1}</td>
                            <td className='border border-gray-300 px-4 py-2'>{customer.firstname}</td>
                            <td className='border border-gray-300 px-4 py-2'>{customer.lastname}</td>
                            <td className='border border-gray-300 px-4 py-2'>{customer.phoneno}</td>
                            <td className='border border-gray-300 px-4 py-2 customer_link'><a href="#" text-blue-500>Details</a></td>
                            <td className='border border-gray-300 px-4 py-2 customer_link'><a href="#">Sale</a></td>
                            <td className='border border-gray-300 px-4 py-2 customer_link'><a href="#">Payments</a></td>
                            <td className='border border-gray-300 px-4 py-2 customer_link'><a href="#">Status</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
    )
}

export default CustomerList;
import React, { useState, useEffect } from 'react';

function CategoryList() {

    const [categories, setCategories] = useState(
        JSON.parse(localStorage.getItem('categories')) || []
    );
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        // Save categories to localStorage whenever they change
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

   

    const handleAddCategory = () => {
        if (newCategory.trim() === '') {
            return;
        }

        setCategories([...categories, newCategory]);
        setNewCategory('');
    };


    return (
        <div className="container mx-auto">
            <div className="mt-4  flex justify-center items-center ">
                <input

                    type="text"
                    placeholder="Add a new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="border rounded-md border-gray-300 px-2 py-1 mr-2 "
                />
                <button onClick={handleAddCategory} className="border rounded-md bg-green-500 text-white px-2 py-1">
                    Add
                </button>
            </div>
            <div className='mt-8 flex justify-center items-center'>

                <table className="w-1/2 border-collapse border border-gray-300">
                    <thead className="text-center">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                                <div className="">ID</div>
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                                <div className="">Name</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr className="text-center" key={index}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{category}</td>
                                <td className='border border-gray-300 px-4 py-2'><button className='category_del_btn'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default CategoryList;

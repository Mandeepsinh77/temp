import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemForm = ({ setcategoryList}) => {

    const [imageSelected,setImageSelected] = useState(null);

      const handleImageChange = (e) => {
        // Function to handle file input change
      const file = e.target.files[0];
      if (file) {
        // Create a URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setImageSelected(imageUrl);
      }
    };

    const navigateTo = useNavigate();
    const handleGoToCategory = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption == 'AddNew') {
            navigateTo("/");
        }
    }
    return (
        <div className="item_form">
            <form action="">
                <h3 className="item_form_head">
                    Item Details
                </h3>
                <div className="item_content">
                    <div className="Item_inputs">
                        <div className="item_input_row">
                            <label htmlFor="name_items">Name: </label><br />
                            <input type="text" name="name_item" id="name_item" placeholder=' Enter Item Name ' />
                        </div>
                        <div className="item_input_row">
                            <label for="category">Category:</label><br />
                            <select id="item_category" onChange={handleGoToCategory}>
                                <option value="Powder" selected>Powder</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Tools">Tools</option>
                                {/* <option value="AddNew">
                                    <Link to="/home">
                                        <button onClick={() => {
                                        
                                        }}>
                                            ADDNEW
                                        </button>
                                    </Link>
                                </option> */}
                            </select>
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_cp" >Cost Price:</label><br />
                            <input type="number" name="item_cp" id="item_cp" placeholder=' Enter Price ' />
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_sp">Selling Price:</label><br />
                            <input type="number" name="item_sp" id="item_sp" placeholder=' Enter Selling Price ' />
                        </div>
                        <div className="qty_units">
                            <div className="qty_units_row">
                                <label htmlFor="item_qty">Quantity:</label><br />
                                <button className="plus_item">+</button>
                                <input type="number" name="item_qty" id="item_qty" placeholder=' Enter Quantity' />
                                <button className="minus_item">-</button>
                            </div>
                            <div className="qty_units_row">
                                <label htmlFor="item_unit">Units:</label><br />
                                <select id="item_units">
                                    <option value="Kg" selected>Kilograms</option>
                                    <option value="Lit">Litres</option>
                                    <option value="per unit">Per Unit</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                   <div className='item_img_input flex flex-col items-center'>
                      <label htmlFor="image-input" className="mb-2 text-xm font-semibold">
                          Select an image:
                      </label>
                      <input
                        type="file"
                        id="image-input"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="py-1 px-4 rounded border border-gray-300"
                      />
                   </div>
                   {imageSelected && (
                     <div className="w-[70%] h-[70%] mx-auto flex items-center">
                       <p className="text-xl font-semibold mr-10">Selected Image:</p>
                       <img
                         src={imageSelected}
                         alt="Selected"
                         className="mt-2" style={{maxWidth: '30%'}}
                       />
                   </div>
      )}
                </div>
            </form>
        </div>
    );
}
export default ItemForm;
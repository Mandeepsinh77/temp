import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ItemForm = ({ setcategoryList }) => {

    const [formData, setFormData] = useState(
        {
            itemname: "",
            itemcategory: "",
            costprice: "",
            sellingprice: "",
            quantity: "",
            units: ""
        }
    )

    const navigateTo = useNavigate();
    const handleGoToCategory = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption == 'AddNew') {
            navigateTo("/");
        }
    }

    const handleClear = () => {
        setFormData({
            itemname: "",
            itemcategory: "",
            costprice: "",
            sellingprice: "",
            quantity: "",
            units: ""
        });
    }
    const handleAdditem = async (e) => {
        e.preventDefault();

        if (
            formData.itemname === "" ||
            formData.itemcategory === "" ||
            formData.costprice === "" ||
            formData.sellingprice === "" ||
            formData.quantity === "" ||
            formData.units === ""

        ) {
            swal({
                title: "Please fill in all required fields",
                icon: "error",
                button: false,
                timer: 3000,
            });
            return;
        }

        const url = "http://localhost:4000/add/createitem";
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Item added successfully
                // alert('Item added successfully');
                swal({
                    title: "Item added successfully",
                    icon: "success",
                    button: false,
                    timer: 3000
                })
                // Clear the form
                setFormData({
                    itemname: "",
                    itemcategory: "",
                    costprice: "",
                    sellingprice: "",
                    quantity: "",
                    units: ""
                });
            } else {
                // Handle errors if necessary
                // alert("Error Adding Item");
                swal({
                    title: "Error Adding Item",
                    icon: "error",
                    button: false,
                    timer: 3000
                })
                console.error('Error adding Item');
            }
        } catch (error) {
            // console.error('Error adding Item:', error);
            swal({
                title: `Internal Server Error ${error}`,
                icon: "error",
                button: false,
                timer: 3000
            })
        }
    };

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
                            <input type="text"
                                name="name_item"
                                required
                                id="name_item"
                                placeholder=' Enter Item Name '
                                className=""
                                value={formData.itemname}
                                onChange={(e) => setFormData({ ...formData, itemname: e.target.value })} />
                        </div>
                        <div className="item_input_row">
                            <label for="category">Category:</label><br />
                            <select id="item_category"
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, itemcategory: e.target.value })}
                            >
                                <option value="Powder" selected>Powder</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Tools">Tools</option>
                            </select>
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_cp" >Cost Price:</label><br />
                            <input type="number"
                                name="item_cp"
                                id="item_cp"
                                required
                                placeholder=' Enter Price '
                                className=''
                                value={formData.costprice}
                                onChange={(e) => setFormData({ ...formData, costprice: e.target.value })}
                            />
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_sp">Selling Price:</label><br />
                            <input type="number"
                                name="item_sp"
                                id="item_sp"
                                required
                                placeholder=' Enter Selling Price '
                                className=''
                                value={formData.sellingprice}
                                onChange={(e) => setFormData({ ...formData, sellingprice: e.target.value })}
                            />
                        </div>
                        <div className="qty_units">
                            <div className="qty_units_row">
                                <label htmlFor="item_qty">Quantity:</label><br />
                                <button className="plus_item">+</button>
                                <input type="number"
                                    name="item_qty"
                                    id="item_qty"
                                    required
                                    placeholder=' Enter Quantity'
                                    className=''
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                />
                                <button className="minus_item">-</button>
                            </div>
                            <div className="qty_units_row">
                                <label htmlFor="item_unit">Units:</label><br />
                                <select id="item_units"
                                    required
                                    value={formData.units}
                                    onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                                >
                                    <option value="Kg" selected>Kilograms</option>
                                    <option value="Lit">Litres</option>
                                    <option value="per unit">Per Unit</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item_input_row" id="customer_form_btn">
                    <div>
                        <button type="submit" className="form_btn" onClick={handleAdditem}>Add Item</button>
                        <button className="form_btn" type="reset" id="clear_btn" onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default ItemForm;
const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Category = require("../models/category.js");

router.delete('/deleteCategory/:categoryId', async(req, res) => {
  const categoryId = req.params.categoryId;
  console.log(categoryId)
  try {
    const categoryIdObj = new mongoose.Types.ObjectId(categoryId);

    // Delete the category from the database
    const deletedCategory = await Category.findByIdAndDelete(categoryIdObj);

    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/delete-Category/:id',async (req,res)=>{
  let data = await Category.deleteOne({_id : req.params.id});
  res.send(data)
 
})

router.post(
  "/newcategory",
  [body("newCategory", "Enter a valid Category").isLength({ min: 1 })],
  async (req, res) => {
    const newCategory = req.body.newCategory;
    console.log(newCategory);
    const error = validationResult(req);

    if (!error.isEmpty()) {
      console.log("There is some error");
      const errorMessages = error.array().map((error) => error.msg);
      console.log(errorMessages);
      const message = errorMessages[0];
      return res.status(400).json({ message });
    }

    try {
      //find category with req categoryname
      let category = await Category.findOne({
        category_name: { $regex: newCategory, $options: 'i' }, // Case-insensitive search
      });
      
      if (category) {
        return res
          .status(400)
          .json({ message: 'Sorry, the given category already exists' });
      }
      //create category and save into DB
      else{
      category = await Category.create({
        category_name: newCategory,
      });
    }
      return res
        .status(200)
        .json({ message: "Successfully Category added", category });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.get('/categories', async (req, res) => {
  try {
    // Retrieve all categories from the database
    console.log("Successfully fetched categories")
    const categories = await Category.find({}, 'category_name');
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;

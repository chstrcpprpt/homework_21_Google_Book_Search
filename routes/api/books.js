const express = require("express");
const router = express.Router();

// Item model
const Books = require("../../models/Books");

// Function for sucessful request
function success(res, payload) {
  return res.status(200).json(payload)
};

// ---------- API ENDPOINTS ----------

// GET - get all books
router.get('/saved', async (req, res, next) => {
  try {
    const books = await Books.find({})
      .sort({item: 1})
    return success(res, books)
  } catch (err) {
    next(
      {
        status: 400,
        message: "Failed to get books"
      }
    )
  }
});

// POST - save a book to the database
router.post('/saved', async (req, res, next) => {
  try {
    const book = await Books.create(req.body)
    return success(res, book)
  } catch (err) {
    next(
      {
        status: 400,
        message: "Failed to save new book"
      }
    )
  }
});

// PUT - update grocery with matching id || private
// router.put("/:id", async (req, res, next) => {
//   try {
//     const grocery = await Groceries.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     return success(res, grocery)
//   } catch (err) {
//     next(
//       {
//         status: 400,
//         message: "Failed to create new grocery"
//       }
//     )
//   }
// });

// DELETE - remove a book with matching id
router.delete('/saved/:id', async (req, res, next) => {
  try{
    await Books.findByIdAndRemove(req.params.id)
    return success(res, "book deleted")
  } catch (err) {
    next(
      {
        status: 400,
        message: "Failed to delete book"
      }
    )
  }
});

module.exports = router;
import { Request, Response } from "express";
import { BookService } from "./Books.service";
import catchAsync from "../../utils/CatchAsync";

// get all book data
const getAllBook = catchAsync(async (req, res) => {
  const Result = await BookService.getAllBookIntoDb();

  res.status(200).json({
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: Result,
  });
});

// get single book data
const getSingleBook = catchAsync(async (req, res) => {
  const Result = await BookService.getSigleBookIntoDb(req.params.bookId);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: Result,
  });
});

// create book
const createBook = catchAsync(async (req, res) => {
  const Data = req.body;

  const Result = await BookService.createBookIntoDb(Data);

  res.status(201).json({
    success: true,
    status: 201,
    message: "Book created successfully",
    data: Result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const Data = req.body;
  const id = req.params.bookId;

  const Result = await BookService.updateBookIntoDb(id, Data);

  res.status(201).json({
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: Result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const id = req.params.bookId;

  const Result = await BookService.deletBookIntodb(id);

  res.status(201).json({
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};

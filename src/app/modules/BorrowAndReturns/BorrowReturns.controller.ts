import catchAsync from "../../utils/CatchAsync";
import { borrowReturnService } from "./BorrowReturns.service";

const createBorrowBook = catchAsync(async (req, res) => {
  const Data = req.body;

  const Result = await borrowReturnService.createborrowBookIntoDb(Data);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: Result,
  });
});

const addReturnBook = catchAsync(async (req, res) => {
  const Data = req.body.borrowId;

  const Result = await borrowReturnService.addReturnBookIntoDb(Data);

  res.status(201).json({
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

const getDueDateBook = catchAsync(async (req, res) => {

  const result = await borrowReturnService.checkOverDueBook();

  const currentDate  = new Date();

  const findOverDueBook = result.filter((data: any) => {
    const borrowDate = new Date(data.borrowDate);
    console.log(borrowDate)
    console.log(borrowDate)
    const daysDifference = (currentDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24); // Calculate days difference
    return daysDifference > 14;  
  });
 
  const modifiedData = findOverDueBook.map((data: any) => {
    return{
        borrowId: data.borrowId,
        bookTitle: data.bookid.title,
        borrowerName: data.memberid.name,
        overdueDays: Math.floor(
            (currentDate.getTime() - new Date(data.borrowDate).getTime()) / (1000 * 60 * 60 * 24)
          ) - 14
    }
  })

  res.status(200).json({
    success: true,
    status: 200,
    message: "Overdue borrow list fetched",
    data: modifiedData,
  });
});

export const borrowReturnController = {
  createBorrowBook,
  addReturnBook,
  getDueDateBook,
};

import { Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync";
import { MembersService } from "./Members.service";

// get all book data
const getAllMember = catchAsync(async (req, res) => {
  const Result = await MembersService.getAllMembersIntoDb();

  res.status(200).json({
    success: true,
    status: 200,
    message: "Members retrieved successfully",
    data: Result,
  });
});

// get single book data
const getSingleMember = catchAsync(async (req, res) => {
  const Result = await MembersService.getSiglememberIntoDb(req.params.memberId);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: Result,
  });
});

// create book
const createMember = catchAsync(async (req, res) => {
  const Data = req.body;

  const Result = await MembersService.createMemberIntoDb(Data);

  res.status(201).json({
    success: true,
    status: 201,
    message: "Member created successfully",
    data: Result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const Data = req.body;
  const id = req.params.memberId;

  const Result = await MembersService.updateMemberIntoDb(id, Data);

  res.status(201).json({
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: Result,
  });
});

const deleteMember = catchAsync(async (req, res) => {
  const id = req.params.memberId;

  const Result = await MembersService.deletMemberIntodb(id);

  res.status(201).json({
    success: true,
    status: 200,
    message: "Member successfully deleted",
  });
});

export const memberController = {
  createMember,
  getAllMember,
  getSingleMember,
  updateMember,
  deleteMember,
};

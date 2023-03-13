import { Request } from "express";
import { ObjectId } from "mongoose";
import { Auth } from "./";

export interface User extends Auth {
  _id: ObjectId | string,
  name: string;
  lastname: string,
  token: string;
  confirmed: boolean;
}

export interface UserResquestProvider extends Request {
  user?: User;
}
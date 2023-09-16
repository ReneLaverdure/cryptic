import { RequestHandler } from "express";
import User from "../models/User.models";

export const getUsers: RequestHandler = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
};

export const createUser: RequestHandler = (req, res) => {
    res.json({ message: "hello" });
};

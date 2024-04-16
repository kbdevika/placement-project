import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const { User_Name, Password_Hash, Email, Role } = req.body;

    if (!User_Name || !Password_Hash || !Email || !Role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO users (User_Name, Password_Hash, Email, Role) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [User_Name, Password_Hash, Email, Role];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "User created successfully", user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from users";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "User fetch successfully", users: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM users WHERE user_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
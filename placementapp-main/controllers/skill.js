import express from "express";
const router = express.Router();
import { pool } from "../config.js";

router.post("/", async (req, res) => {
  try {
    const {skill_id,skill_name } = req.body;

    if (!skill_name || !skill_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO skills ( skill_name,skill_id) VALUES ($1, $2) RETURNING *";
    const values = [skill_name,skill_id];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: " skills details created successfully", skill: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from skills";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: " skills details fetch successfully", skills: result.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM skills WHERE skill_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "skills details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
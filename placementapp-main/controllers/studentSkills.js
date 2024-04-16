
import express from "express";
const router = express.Router();
import { pool } from "../config.js";

router.post("/", async (req, res) => {
  try {
    const {student_id,skill_id } = req.body;

    if (!student_id || !skill_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO student_skill ( student_id,skill_id) VALUES ($1, $2) RETURNING *";
    const values = [student_id,skill_id];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "student skills details created successfully", student_skill: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from student_skill";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "student  skills details fetch successfully", student_skill: result.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM student_skill WHERE student_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "student skills details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
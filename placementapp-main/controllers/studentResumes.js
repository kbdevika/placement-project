import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const {resume_id,user_id,created_at,updated_at } = req.body;

    if (!resume_id || !user_id ||  !created_at || 
        !updated_at) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO student_resumes ( resume_id,user_id, created_at,updated_at) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [resume_id,user_id,created_at,updated_at];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "student resumes details created successfully", resume: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from student_resumes";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "student resumes details fetch successfully", resume: result.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM student_resumes WHERE resume_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "student resumes details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
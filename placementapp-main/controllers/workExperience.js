import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const { experience_id, resume_id, positions, description,company_name,start_date,end_date } = req.body;

    if (!experience_id || !resume_id|| !company_name || !description|| !start_date|| 
        !end_date || !positions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO work_experience (experience_id, resume_id, company_name, description,start_date,end_date,positions) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *";
    const values = [experience_id, resume_id, company_name, description,start_date,end_date,positions];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "work experience details created successfully", work_experience: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from work_experience";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "work experience details fetch successfully", work_experience : result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM work_experience WHERE experience_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "work experience  details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
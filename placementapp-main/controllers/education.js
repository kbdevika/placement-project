import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const {education_id,resume_id,institution_name,degree,branch,start_date,end_date } = req.body;

    if (!education_id || !resume_id || !institution_name || !degree || !branch || !end_date || !start_date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO education(education_id,resume_id,institution_name,degree,branch,start_date,end_date) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *";
    const values = [education_id,resume_id,institution_name,degree,branch,start_date,end_date];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "education details created successfully", education: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from education";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "education details fetch successfully", resume: result.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM education WHERE education_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "education details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
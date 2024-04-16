import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const { internship_id, resume_id, positions, description,company_name,start_date,end_date } = req.body;

    if (!internship_id || !resume_id|| !company_name || !description|| !start_date|| 
        !end_date || !positions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO internship (internship_id, resume_id, company_name, description,start_date,end_date,positions) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *";
    const values = [internship_id, resume_id, company_name, description,start_date,end_date,positions];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "internship details created successfully", internship: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from internship";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "internship details fetch successfully", internship : result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM internship WHERE internship_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "internship  details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
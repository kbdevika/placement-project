import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const { profile_id, user_id, company_name, industry,created_at,updated_at } = req.body;

    if (!profile_id || !user_id|| !company_name|| !industry|| !created_at|| 
        !updated_at) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO recruiter_profiles (profile_id, user_id, company_name, industry,created_at,updated_at) VALUES ($1, $2, $3, $4,$5,$6) RETURNING *";
    const values = [profile_id, user_id, company_name, industry,created_at,updated_at];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "recruiter created successfully", recruiter: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from recruiter_profiles";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "recruiter fetch successfully", recruiter: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM recruiter_profiles WHERE profile_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "recruiter deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
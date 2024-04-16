import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
  try {
    const { project_id, user_id, title,resume_id, description,created_at,updated_at } = req.body;

    if (!project_id || !user_id|| !title || !description|| !created_at|| 
        !updated_at || !resume_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await pool.connect();
    const query =
      "INSERT INTO projects (project_id, user_id, title, description,created_at,updated_at,resume_id) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *";
    const values = [project_id, user_id, title, description,created_at,updated_at,resume_id];

    const result = await client.query(query, values);
    client.release();
    res.status(201).json({ message: "project details created successfully", project: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
    try {
      
      const client = await pool.connect();
      const query =
        "select * from projects";
      
  
      const result = await client.query(query);
      client.release();
      res.status(200).json({ message: "project details fetch successfully", project: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const client = await pool.connect();
      const query = "DELETE FROM projects WHERE project_id = $1";
      const result = await client.query(query, [id]);
      client.release();
      res.status(200).json({ message: "project details deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });


export default router;
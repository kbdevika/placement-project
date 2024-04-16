import express from "express";
const router = express.Router();
import { pool } from "./../config.js";

router.post("/", async (req, res) => {
    try {
      const { Password_Hash,Role,Email } = req.body;
  
      if (!Password_Hash) {
        return res.status(400).json({ message: "Password_Hash is required" });
      }
  
      const client = await pool.connect();
      const query =
        "SELECT Role,Password_Hash FROM users WHERE Email = $1"; 
      const values = [Password_Hash,Role];
      if(result.rows[0].Password_Hash.toLowercase() === Password_Hash.toLowercase()){
        res.status(500).json({ message: "User authenticated" });
      }
      else{
        res.status(500).json({ message: "password is incorrect" });
      }
  

  
      const result = await client.query(query, values);
      client.release();
  
      // Check if user found
      if (result.rows.length === 1) {
        const role = result.rows[0].Role;
        if (role === 'recruiter') {
          res.redirect('/recruiter-dashboard');
        } else if (role === 'student') {
          res.redirect('/student-dashboard');
        } else {
          res.redirect('/login'); // Redirect to login if role is neither recruiter nor student
        }
      } else {
        res.redirect('/login'); // Redirect to login if user not found
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
  export default router;
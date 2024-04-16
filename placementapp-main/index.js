import express from "express";
import cors from 'cors'

import userRoute from "./controllers/users.js";
import recruiterRoute from "./controllers/recruiter.js";
import projectRoute from "./controllers/projects.js";
import jobRoute from"./controllers/jobs.js";
import studentresumesRoute from"./controllers/studentResumes.js";
import educationRoute from"./controllers/education.js";
import skillRoute from "./controllers/skill.js";
import projectSkillRoute from "./controllers/projectSkill.js";
import workExperienceRoute from "./controllers/workExperience.js";
import studentSkillRoute from "./controllers/studentSkills.js";
import internshipRoute from "./controllers/internship.js";
import recommendRoute from "./controllers/recommendation.js";
import notificationRoute from "./controllers/send-email.js";
import logginRoute from "./controllers/login.js";

const app = express();

app.use(cors());
const port = 8000;



app.use(express.json());

// Importing Route and using it for handling 
app.use("/users", userRoute);
app.use("/recruiter_profiles",recruiterRoute);
app.use("/projects", projectRoute);
app.use("/jobs",jobRoute);
app.use("/student_resumes",studentresumesRoute);
app.use("/education",educationRoute);
app.use("/project_skill",projectSkillRoute)
app.use("/student_skill",studentSkillRoute);
app.use("/skills",skillRoute);
app.use("/work_experience",workExperienceRoute);
app.use("/internship",internshipRoute);
app.use("/recommend",recommendRoute);
app.use("/notification",notificationRoute);
app.use("/users",logginRoute );

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
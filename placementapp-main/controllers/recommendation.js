import express from "express";
import jobData from '../trained-model/data.json' assert { type: "json" };

const router = express.Router();

// Function to recommend job titles based on skills
function recommendJobTitles(inputSkills, jobData, topN) {
  // Filter jobs based on similarity to input skills
  const recommendedJobs = [];
  jobData.forEach(job => {
    const jobSkills = job['Required Skills'].map(skill => skill.toLowerCase());
    inputSkills.forEach(inputSkill => {
      if (jobSkills.includes(inputSkill.toLowerCase()) && !recommendedJobs.includes(job)) {
        recommendedJobs.push(job);
      }
    });
  });

  // Sort recommended jobs by relevance (number of common skills)
  recommendedJobs.sort((a, b) => {
    const commonSkillsA = a['Required Skills'].filter(skill => inputSkills.includes(skill.toLowerCase())).length;
    const commonSkillsB = b['Required Skills'].filter(skill => inputSkills.includes(skill.toLowerCase())).length;
    return commonSkillsB - commonSkillsA; // Sort in descending order of common skills
  });

  // Get top recommended job titles
  const topRecommendedJobs = recommendedJobs.slice(0, topN);

  return topRecommendedJobs;
}

router.post("/", async (req, res) => {
  try {
    const { skills } = req.body;

    if (!skills || !Array.isArray(skills)) {
      return res.status(400).json({ message: "Skills must be provided as an array" });
    }

    const topN = 5;

    const recommendedJobsArray = recommendJobTitles(skills.map(skill => skill.toLowerCase()), jobData, topN);

    res.status(201).json({ message: "Fetched successfully", recommended: recommendedJobsArray });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

import express from "express";
import {
  addTask,
  getTasks,
  updateTask,
  createSchedule,
  deleteTask,
  getScheduleHistory,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { generateAIPlan } from "../utils/ai.js";

const router = express.Router();
router.use(authMiddleware);
router.post("/add", addTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.get("/generate", createSchedule);
router.get(
  "/schedule-history",
  getScheduleHistory
);
router.delete("/:id", deleteTask);

router.get("/test-ai", async (req, res) => {
  try {
    const sampleTasks = [
      {
        name: "Study DSA",
        priority: "high",
        deadline: "2026-06-20",
        estimatedTime: 2,
      },
      {
        name: "DBMS Assignment",
        priority: "medium",
        deadline: "2026-06-22",
        estimatedTime: 1,
      },
    ];

    const result = await generateAIPlan(sampleTasks);

    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
import Task from "../models/Task.js";
import { generateAIPlan } from "../utils/ai.js";
import Schedule from "../models/Schedule.js";
export const addTask = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        error: "Task name required",
      });
    }

    const task = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
  user: req.user.id,
}).sort({
  deadline: 1,
});

    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        completed: true,
      },
      {
        returnDocument: "after",
      }
    );

    res.json(task);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const createSchedule = async (req, res) => {
  try {
    const tasks = await Task.find({
      completed: false,
      user: req.user.id,
    });

    const aiResponse = await generateAIPlan(tasks);

const cleaned = aiResponse.replace(
  /```json|```/g,
  ""
);

const parsed = JSON.parse(cleaned);

await Schedule.create({
  user: req.user.id,
  content: parsed,
});
    res.json({
      message: "AI Schedule Generated 🚀",
      plan: aiResponse,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    res.json({
      message: "Task deleted",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getScheduleHistory = async (
  req,
  res
) => {
  try {
    const schedules = await Schedule.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(schedules);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
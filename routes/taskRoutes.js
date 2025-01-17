const express = require("express");

const { createTask, getAllTasks, getTaskById, updateTask, deleteTask} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskById);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
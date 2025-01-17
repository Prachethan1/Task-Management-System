const Task = require("../models/Task");

exports.createTask = async (req, res, next) => {
    try {
        const { title, description, status} = req.body;
        const task = await Task.create({ title, description, status });
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

exports.getAllTasks = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, search } = req.query;
        const skip = (page - 1) * limit;
    
        let filter = {};
        if (search) {
          filter = {
            $or: [
              { title: { $regex: search, $options: "i" } },  // Case-insensitive search
              { description: { $regex: search, $options: "i" } },
            ],
          };
        }
    
        const tasks = await Task.find(filter)
          .skip(skip)
          .limit(Number(limit));
        const totalTasks = await Task.countDocuments(filter);
    
        res.status(200).json({
          tasks,
          totalTasks,
          currentPage: page,
          totalPages: Math.ceil(totalTasks / limit),
        });
      } catch (error) {
        next(error);
      }
};

exports.getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) res.status(404).json({ message : "Task not found"});
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

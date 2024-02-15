const Task = require('../models/task')

module.exports = { //ok no workie
    createTask: async (req, res) =>{
        console.log(`create user`);
        try{
            const {email, username, age} = req.body
            const user = new User({email, username, age})
            user.save()
            console.log(user);
            res.json(user);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    },

    listTasks: async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

    listTask: async (req, res) => {
      try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

}
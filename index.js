const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = require("./src/common/environment");

// Student Routes
app.use("/student", require("./src/modules/student/controllers/student.route"));

app.listen(PORT, () => {
  console.info(`
        Application is running on: http://localhost:${PORT}
    `);
});

const pool = require("../../../common/database");

const fetchStudents = () => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT * FROM student`;
    pool.query(sqlQuery, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

const fetchStudentById = (id) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT * FROM student WHERE student_id=?`;
    pool.query(sqlQuery, [Number(+id)], (err, results) => {
      if (err) return reject(err);

      return resolve(results[0]);
    });
  });
};

const insertStudent = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
        INSERT INTO student 
        (first_name, last_name)
        VALUES
        (?, ?)
    `;

    // Positional Parameter
    pool.query(sqlQuery, [firstName, lastName], (err) => {
      if (err) return reject(false);

      return resolve(true);
    });
  });
};

const updateStudent = (id, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
        UPDATE student 
        SET first_name=?, last_name=? 
        WHERE student_id=?
    `;

    // Positional Parameter
    pool.query(sqlQuery, [firstName, lastName, Number(+id)], (err) => {
      if (err) return reject(false);

      return resolve(true);
    });
  });
};

const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
        DELETE FROM student 
        WHERE student_id=?
    `;
    pool.query(sqlQuery, [Number(+id)], (err) => {
      if (err) return reject(false);

      return resolve(true);
    });
  });
};

module.exports = {
  fetchStudents,
  fetchStudentById,
  insertStudent,
  updateStudent,
  deleteStudent,
};

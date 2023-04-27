const getAllStudent = async ({ page, size, searchString }) => {
  console.log("get all student with paging");
};

const insertStudent = async ({ name, email, languages, gender, phoneNum }) => {
  console.log("insert student");
};

module.exports = {
  getAllStudent,
  insertStudent,
};

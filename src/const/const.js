import axios from "axios";

export const ISMARRIED = ["All", "Married", "Single"];
export const ORDERAGE = ["OrderAge", "Increase", "Decrease"];
export const TEACHERS = [];
export const ENDPOINT =
  "https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher";

axios
  .get(ENDPOINT)
  .then(({ data }) => {
    TEACHERS.length = 0; 

    TEACHERS.push(...data.map((teacher) => ({ name: teacher.firstName, id: teacher.id })));
  })
  .catch((err) => {
    console.error(err);
  });


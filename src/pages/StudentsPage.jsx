import  { useContext } from "react";
import { Button, Select, Input } from "antd";
import StudentModal from "../components/modals/StudentModal";
import CardStudent from "../components/card/CardStudent";
import { StudentInfoContext } from "../useContext/StudentContext";
import "./index.scss";
import { ORDERAGE } from "../const/const";

const StudentsPage = () => {
  const {
    showModal,
    students,
    setSearch,
    orderAge,
    teacherChange,
    setOrderAge,
    setTeacherId,
    setTeacherChange,
    teachersInfo,
  } = useContext(StudentInfoContext);

  const onSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  const onOrderAgeChange = (value) => {
    setOrderAge(value);
  };

  const onTeacherChange = (value) => {
    setTeacherChange(value);
    const selectedTeacher = teachersInfo.find((teacher) => teacher.firstName === value);
    if (selectedTeacher) {
      setTeacherId(selectedTeacher.id);
    }
  };

  return (
    <div>
      <div className="navBar">
        <h2 style={{ color: "black" }} className="title">
          Students
        </h2>
        <Input
          placeholder="Search students..."
          onChange={onSearch}
          style={{
            width: 400,
          }}
        />
        <Select
          style={{
            width: 120,
          }}
          value={teacherChange}
          onChange={onTeacherChange}
        >
          {teachersInfo.map((teacher) => (
            <Select.Option key={teacher.id} value={teacher.firstName}>
              {teacher.firstName}
            </Select.Option>
          ))}
        </Select>
        <Select
          style={{
            width: 120,
          }}
          value={orderAge}
          onChange={onOrderAgeChange}
        >
          {ORDERAGE.map((el) => (
            <Select.Option key={el} value={el}>
              {el}
            </Select.Option>
           
          ))}
           console.log(ORDERAGE);
        </Select>
        <Button type="primary" onClick={showModal}>
          Add Student
        </Button>
        <StudentModal />
      </div>
      <div className="card-row">
        {students.map((el) => (
          <CardStudent key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;

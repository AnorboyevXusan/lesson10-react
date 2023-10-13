import { Card } from "antd";
import PropTypes from "prop-types";
import "./card.scss";
import { useContext } from "react";
import { StudentInfoContext } from "../../useContext/StudentContext";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CardStudent = ({
  id,
  avatar,
  firstName,
  lastName,
  email,
  phoneNumber,
  isWork,
}) => {
  const { editStudent, deleteStudent } = useContext(StudentInfoContext);

  return (
    <Card
      className="card"
      style={{ width: "100%" }}
      cover={<img style={{ height: 250 }} alt="student img" src={avatar} />}
      actions={[
        <EditOutlined
          onClick={() => editStudent(id)}
          key="edit"
          style={{ color: "green", fontSize: "20px" }}
        />,
        <DeleteOutlined
          onClick={() => deleteStudent(id)}
          key="del"
          style={{ color: "red", fontSize: "20px" }}
        />,
      ]}
    >
      <Card.Meta
        title={<h2 className="titleCard">{firstName + " " + lastName}</h2>}
        description={
          <div className="desc">
            <p>
              <span>Email:</span>
              {email}
            </p>
            <p>
              <span>Phone:</span>
              {phoneNumber}
            </p>
            <p>
              <span>IsWork:</span>
              {isWork ? "YES" : "NO"}
            </p>
          </div>
        }
      />
    </Card>
  );
};

CardStudent.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  isWork: PropTypes.bool,
};

export default CardStudent;

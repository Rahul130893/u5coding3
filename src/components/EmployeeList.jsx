import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee")
      .then(( data ) => setEmployee(data.data));
  }, []);



  return (
    <div
      className="list_container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
        marginLeft: "40px",
       
      }}
    >
      {/* On clicking this card anywhere, user goes to user details */}

      {employee.map((e) => (
        <Link to={`/employees/${e.id}`}>
          <div className="employee_card">
            <img className="employee_image" src={e.image} />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

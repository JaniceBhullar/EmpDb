/* eslint-disable react/prop-types */
import { MDBBtn } from "mdb-react-ui-kit";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function EmpDataReadOnly({ emp, handleEditClick, handleEmpDelete}) {
 
  return (
    <>
      <td>{emp.id}</td>
      <td>
        <div>
          <img
            src={emp.imageUrl}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
        </div>
      </td>
      <td>{emp.firstName}</td>
      <td>{emp.lastName}</td>
      <td>{emp.email}</td>
      <td>{emp.contactNumber}</td>
      <td>{emp.age}</td>
      <td>{emp.dob}</td>
      <td>{emp.salary}</td>
      <td>{emp.address}</td>
      <td>
      <MDBBtn
          color="link"
          size="lg"
          onClick={(event) => handleEditClick(event, emp)}
        >
          <FaEdit />
        </MDBBtn>
      </td>
      <td>
      <MDBBtn
          color="link"
          size="lg"
          onClick={(e) => handleEmpDelete(e, emp.id)}
        >
          <FaTrashAlt />
        </MDBBtn>
        </td>
    </>
  );
}

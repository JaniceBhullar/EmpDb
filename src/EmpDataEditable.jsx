/* eslint-disable react/prop-types */
import { MDBBtn } from "mdb-react-ui-kit";
import { MdCancelPresentation } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";



export default function EmpDataEditable({ handleEmpDataChange, editData, handleEditCancel }) {
  return (
    <>
      <td>
        <input
          type="text"
          name="id"
          value={editData.id}
          placeholder="id"
          onChange={handleEmpDataChange}
        />
      </td>

      <td>
        <input
          type="text"
          name="image"
          value={editData.imageUrl}
          placeholder="image"
          onChange={handleEmpDataChange}
        />
      </td>

      <td>
        <input
          type="text"
          name="firstName"
          value={editData.firstName}
          placeholder="id"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="lastName"
          value={editData.lastName}
          placeholder="Enter Last Name"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={editData.email}
          placeholder="Enter Email"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="contactNumber"
          value={editData.contactNumber}
          placeholder="Enter Phone#"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="age"
          value={editData.age}
          placeholder="Enter Age"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="dob"
          value={editData.dob}
          placeholder="dob"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="salary"
          value={editData.salary}
          placeholder="Enter Salary"
          onChange={handleEmpDataChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={editData.address}
          placeholder="Enter Address"
          onChange={handleEmpDataChange}
        />
      </td>
       <td>
      <MDBBtn
          color="link"
          rounded
          size="lg"
        >
         <MdOutlineSaveAlt />
        </MDBBtn>
        </td>
      <td>
      <MDBBtn
          color="link"
          rounded
          size="lg"
          onClick={handleEditCancel}
        >
          <MdCancelPresentation />
        </MDBBtn>
        </td>
    </>
  );
}

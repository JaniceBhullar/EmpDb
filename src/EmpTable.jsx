/* eslint-disable react/prop-types */

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import EmpDataEditable from "./EmpDataEditable";
import EmpDataReadOnly from "./EmpDataReadOnly";

export default function EmpTable({
  employees,
  idToEdit,
  setIdToEdit,
  handleEmpDataChange,
  editData,
  setEditData,
  handleEditSubmit,
  handleEditClick,
  handleEditCancel,
  handleEmpDelete,
}) {
  return (
    <>
      <form onSubmit={handleEditSubmit}>
        <MDBTable align="middle">
          <MDBTableHead dark>
            <tr align="middle">
              <td scope="col">ID</td>
              <td scope="col">Img</td>
              <td scope="col">First Name</td>
              <td scope="col">Last Name</td>
              <td scope="col">Email</td>
              <td scope="col">Contact#</td>
              <td scope="col">Age</td>
              <td scope="col">DoB</td>
              <td scope="col">Salary</td>
              <td scope="col">Address</td>
              <td scope="col" colSpan={2}>
                Action
              </td>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {employees.map((emp) => (
              <tr key={emp.id} align="middle">
                <>
                  {idToEdit === emp.id ? (
                    <EmpDataEditable
                      handleEmpDataChange={handleEmpDataChange}
                      editData={editData}
                      setEditData={setEditData}
                      handleEditCancel={handleEditCancel}
                    />
                  ) : (
                    <EmpDataReadOnly
                      emp={emp}
                      handleEditClick={handleEditClick}
                      setEditData={setEditData}
                      setIdToEdit={setIdToEdit}
                      handleEmpDelete={handleEmpDelete}
                    />
                  )}
                </>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </form>
    </>
  );
}

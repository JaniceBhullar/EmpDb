/* eslint-disable react/prop-types */
import EmpTable from "./EmpTable";

export default function EmpData({
  employees,
  editData,
  setEditData,
  idToEdit,
  setIdToEdit,
  handleEmpDataChange,
  handleEditClick,
  handleEditSubmit,
  handleEditCancel,
  handleEmpDelete
}) {
  return (
    <main>
      {employees.length ? (
        <EmpTable
          employees={employees}
          idToEdit={idToEdit}
          setIdToEdit={setIdToEdit}
          handleEditClick={handleEditClick}
          handleEmpDataChange={handleEmpDataChange}
          editData={editData}
          handleEditSubmit={handleEditSubmit}
          setEditeData={setEditData}
          handleEditCancel={handleEditCancel}
          handleEmpDelete={handleEmpDelete}
        />
      ) : (
        <p>No data found</p>
      )}
    </main>
  );
}

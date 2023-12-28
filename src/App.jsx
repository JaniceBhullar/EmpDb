import { Routes, Route } from "react-router";
import EmpData from "./EmpData";
import PageNotFound from "./Pagenotfound";
import { useState } from "react";
import Layout from "./Layout";
import AddEmp from "./AddEmp";
import EmpDetail from "./EmpDetail";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1001,
      imageUrl: "https://hub.dummyapis.com/Image?text=TK&height=120&width=120",
      firstName: "Tanya",
      lastName: "Koepp",
      email: "Tanya.Koepp@dummyapis.com",
      contactNumber: "4740092508",
      age: 78,
      dob: "18/12/1945",
      salary: 1.0,
      address: "Address1",
    },
    {
      id: 1002,
      imageUrl: "https://hub.dummyapis.com/Image?text=AT&height=120&width=120",
      firstName: "Arvel",
      lastName: "tdantow",
      email: "Arvel.tdantow@dummyapis.com",
      contactNumber: "4802192204",
      age: 84,
      dob: "18/07/1939",
      salary: 2.0,
      address: "Address2",
    },
    {
      id: 1003,
      imageUrl: "https://hub.dummyapis.com/Image?text=SH&height=120&width=120",
      firstName: "Shirley",
      lastName: "Hirthe",
      email: "Shirley.Hirthe@dummyapis.com",
      contactNumber: "4527390838",
      age: 77,
      dob: "02/09/1946",
      salary: 3.0,
      address: "Address3",
    },
    {
      id: 1004,
      imageUrl: "https://hub.dummyapis.com/Image?text=PC&height=120&width=120",
      firstName: "Patti",
      lastName: "Cruickshank",
      email: "Patti.Cruickshank@dummyapis.com",
      contactNumber: "4588696654",
      age: 86,
      dob: "17/06/1937",
      salary: 4.0,
      address: "Address4",
    },
  ]);

  const [idToEdit, setIdToEdit] = useState(null);

  const [editData, setEditData] = useState({
    id: "",
    imageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
    address: "",
  });

  const handleEditClick = (event, emp) => {
    event.preventDefault();
    setIdToEdit(emp.id);

    const readOnlyFormValue = {
      id: emp.id,
      imageUrl: emp.imageUrl,
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      contactNumber: emp.contactNumber,
      age: emp.age,
      dob: emp.dob,
      salary: emp.salary,
      address: emp.address,
    };
    setEditData(readOnlyFormValue);
  };

  const handleEmpDataChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const data = { ...editData };
    data[fieldName] = fieldValue;

    setEditData(data);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editedEmp = {
      id: idToEdit,
      imageUrl: editData.imageUrl,
      firstName: editData.firstName,
      lastName: editData.lastName,
      email: editData.email,
      contactNumber: editData.contactNumber,
      age: editData.age,
      dob: editData.dob,
      salary: editData.salary,
      address: editData.address,
    };
    const data = [...employees];
    console.log(data);
    const index = employees.findIndex((emp) => emp.id === idToEdit);
    data[index] = editedEmp;
    setEmployees(data);
    setIdToEdit(null);
  };

  const handleEditCancel = () => {
    setIdToEdit(null);
  };

  const handleEmpDelete = (e, empId) => {
    e.preventDefault()
    const data = [...employees];
    const index = employees.findIndex((emp) => emp.id === empId);
    data.splice(index, 1);
    setEmployees(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <EmpData
                employees={employees}
                idToEdit={idToEdit}
                setIdToEdit={setIdToEdit}
                handleEmpDataChange={handleEmpDataChange}
                editData={editData}
                handleEditSubmit={handleEditSubmit}
                setEditData={setEditData}
                handleEditClick={handleEditClick}
                handleEditCancel={handleEditCancel}
                handleEmpDelete={handleEmpDelete}
              />
            }
          />
          <Route path="emp" element={<AddEmp />} />
          <Route path="emp/:id" element={<EmpDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;

// document.addEventListener("DOMContentLoaded", function () {
//   const students = [
//     {
//       id: "1",
//       name: "Dinh",
//       address: "hue",
//     },
//     {
//       id: "2",
//       name: "Nam",
//       address: "quang nam",
//     },
//     {
//       id: "3",
//       name: "Tan",
//       address: "da nang",
//     },
//     {
//       id: "4",
//       name: "Hung",
//       address: "hue",
//     },
//     {
//       id: "5",
//       name: "Tri",
//       address: "quang tri",
//     },
//     {
//       id: "6",
//       name: "Anh",
//       address: "hue",
//     },
//     {
//       id: "7",
//       name: "Binh",
//       address: "da nang",
//     },
//   ];
//   const form = document.querySelector("form");
//   const formMessageElement = document.querySelectorAll("form-message");
//   const nameInput = form.querySelector('input[name="name"]');
//   const addressInput = form.querySelector('input[name="address"');
//   const createButton = document.getElementById("create");
//   const updateButton = document.getElementById("update");
//   const lisStudents = document.getElementById("list-students");
//   let currentIndex = -1;
//   let isEditing = false;
//   const validateInput = (name, address) =>
//     name.trim() !== "" && address.trim() !== "";
//   const formMessages = ["vui long nhap day du thong tin"];
//   function displayStudent() {
//     lisStudents.innerHTML = students
//       .map(
//         (student) => `
//    <li>
//    ${student.name}.${student.address}
//    <button class ='edit' data-index="${student.id}">Sửa
//    </button>
//    <button class ='delete' data-index="${student.id}">Xoa
//    </button>
//    </li>
//    `
//       )
//       .join("");
//   }
//   const addStudent = (name, address) => {
//     students.push({
//       id: (students.length + 1).toString(),
//       name,
//       address,
//     });

//     displayStudent();
//     clearForm();
//   };

//   function editStudent(index) {
//     const student = students.find((s) => s.id === index);
//     nameInput.value = student.name;
//     addressInput.value = student.address;

//     currentIndex = index;
//     isEditing = true;
//     createButton.style.display = "none";
//     updateButton.style.display = "inline";
//   }
//   const updateStudent = (name, address) => {
//     if (currentIndex !== -1) {
//       const student = students.find((s) => s.id === currentIndex);
//       student.name = name;
//       student.address = address;
//       displayStudent();
//       clearForm();
//       currentIndex = -1;
//       isEditing = false;
//       createButton.style.display = "inline";
//       updateButton.style.display = "none";
//     }
//   };
//   const deleteStudent = (index) => {
//     const studentIndex = students.findIndex((s) => s.id == index);
//     students.splice(studentIndex, 1);
//     displayStudent();
//   };
//   const clearForm = () => {
//     nameInput.value = "";
//     addressInput.value = "";
//   };

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = nameInput.value.trim();
//     const address = addressInput.value.trim();
//     if (validateInput(name, address)) {
//       isEditing ? updateStudent(name, address) : addStudent(name, address);
//     } else {
//       displayMessage(formMessageElement, "vui long nhap day du thong tin");
//     }
//   });
//   lisStudents.addEventListener("click", function (event) {
//     const index = event.target.dataset.index;
//     event.target.classList.contains("edit")
//       ? editStudent(index)
//       : deleteStudent(index);
//   });

//   const displayMessage = (element, message) => (element.textContent = message);
//   displayStudent();
// });

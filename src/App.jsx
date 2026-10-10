import { useState } from "react";

function App() {
// TASK 1: Toggle True / False
const [isOn, setIsOn] = useState(false);

// TASK 2: Like Button
const [isLiked, setIsLiked] = useState(false);

// TASK 3: Update Object
const [user, setUser] = useState({
name: "Rahul",
age: 22,
city: "Chennai"
});

// TASK 4: Products Array
const [products, setProducts] = useState([
{ id: 1, name: "Laptop", price: 50000, inStock: true },
{ id: 2, name: "Phone", price: 20000, inStock: false },
{ id: 3, name: "Tablet", price: 15000, inStock: true }
]);

// TASK 5: Students Array
const [students, setStudents] = useState([
{ id: 1, name: "Ravi", marks: 75, isPassed: true },
{ id: 2, name: "Priya", marks: 35, isPassed: false },
{ id: 3, name: "Kumar", marks: 90, isPassed: true }
]);

// Toggle Product Stock
function toggleStock(id) {
setProducts(prev => prev.map(product => product.id === id ? 
  { ...product, inStock: !product.inStock } : product));
}

// Increase Student Marks
function increaseMarks(id) {
setStudents(prev => prev.map(student => student.id === id ? 
  { ...student, marks: student.marks + 5 } : student));
}

// Toggle Student Result
function toggleResult(id) {
setStudents(prev => prev.map(student => student.id === id ?
   { ...student, isPassed: !student.isPassed } : student));
}

// Delete Student
function deleteStudent(id) {
setStudents(prev => prev.filter(student => student.id !== id));
}

return ( 
<>
<div>

   
  {/* TASK 1 */}
  <div className="bg-green-400 text-center h-25">
  <h2>Task 1</h2>

  <h3>Status: {isOn ? "ON" : "OFF"}</h3>

  <button onClick={() => setIsOn(!isOn)} className="bg-black rounded-2xl text-white w-20">{isOn ? "Turn OFF" : "Turn ON"}</button>
</div>

  {/* TASK 2 */}

  <div className="bg-pink-400 text-center h-35">
  <h2>Task 2</h2>

  <h3>My Post</h3>

  <p>Click the Like button!</p>

  <button onClick={() => setIsLiked(!isLiked)} className="bg-black rounded-2xl text-white w-20">{isLiked ? "Liked " : "Like"}</button>

  {isLiked && <p>You liked this post!</p>}
  </div>

  {/* TASK 3 */}

  <div className="bg-amber-300 text-center h-40">
  <h2>Task 3</h2>

  <p>Name: {user.name}</p>
  <p>Age: {user.age}</p>
  <p>City: {user.city}</p>

  <button onClick={() => setUser({ ...user, name: "Arjun" })} className="bg-black rounded-2xl text-white w-40">Change Name</button>{" "}
  <button onClick={() => setUser({ ...user, age: user.age + 1 })}className="bg-black rounded-2xl text-white w-40">Increase Age</button>{" "}
  <button onClick={() => setUser({ ...user, city: "Bangalore" })}className="bg-black rounded-2xl text-white w-40">Change City</button>

   </div>
  {/* TASK 4 */}

  <div className="bg-orange-500 text-center h-85">
  <h2>Task 4</h2>

  {products.map(product => (
    <div key={product.id}>
      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => toggleStock(product.id)} className="bg-black rounded-2xl text-white w-40">Toggle Stock</button>

    </div>
    
  ))}
  </div>

  {/* TASK 5 */}

  <div className="bg-sky-300 text-center h-90">
  <h2>Task 5</h2>

  {students.length === 0 && <p>No students available.</p>}

  {students.map(student => (
    <div key={student.id}>
      <h3>{student.name}</h3>

      <p>Marks: {student.marks}</p>

      <p>Result: {student.isPassed ? "Pass" : "Fail"}</p>

      <button onClick={() => increaseMarks(student.id)}className="bg-black rounded-2xl text-white w-40">Increase Marks</button>{" "}
      <button onClick={() => toggleResult(student.id)}className="bg-black rounded-2xl text-white w-40">Toggle Result</button>{" "}
      <button onClick={() => deleteStudent(student.id)}className="bg-black rounded-2xl text-white w-40">Delete Student</button>

    </div>
  ))}
  </div>
</div>
</>

);
}

export default App;

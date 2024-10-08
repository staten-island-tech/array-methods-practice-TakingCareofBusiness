//const students = [
//{ name: "Alice", age: 20, grade: 85 },
//{ name: "Bob", age: 22, grade: 90 },
//{ name: "Charlie", age: 21, grade: 78 },
//{ name: "Diana", age: 23, grade: 95 },
//];
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
const youngStudents = students.filter((student) => student.age < 22);
console.log(youngStudents);
students;
students
  .filter((student) => student.grade > 80 && student.age < 22)
  .forEach((student) => console.log(student));
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((product) => {
  console.log(product.name), console.log(product.price);
});

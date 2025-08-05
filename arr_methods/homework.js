const employees = [
  {
    id: 1,
    name: "ก้องภพ",
    department: "IT",
    position: "Developer",
    salary: 65000,
    startDate: "2021-04-15",
    isActive: true,
  },
  {
    id: 2,
    name: "วิมล",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 92000,
    startDate: "2019-08-01",
    isActive: true,
  },
  {
    id: 3,
    name: "สมศักดิ์",
    department: "IT",
    position: "Senior Developer",
    salary: 88000,
    startDate: "2018-02-20",
    isActive: false,
  },
  {
    id: 4,
    name: "จินตนา",
    department: "Sales",
    position: "Sales Rep",
    salary: 58000,
    startDate: "2022-11-10",
    isActive: true,
  },
  {
    id: 5,
    name: "อมร",
    department: "IT",
    position: "Developer",
    salary: 68000,
    startDate: "2023-07-01",
    isActive: true,
  },
  {
    id: 6,
    name: "สุดา",
    department: "Sales",
    position: "Sales Manager",
    salary: 105000,
    startDate: "2017-05-30",
    isActive: true,
  },
];

//ข้อที่ 1
const activeEmplyees = employees.filter((employee) => employee.isActive === true);
console.log(activeEmplyees);

//ข้อที่ 2
const employeesName = employees.map((employee) => employee.name);
console.log(employeesName);

//ข้อที่ 3
const findEmployee = employees.find((employee) => employee.id === 4);
console.log(findEmployee);

//ข้อที่ 4
const MarketingEmployee = employees.some((employee) => employee.department === "Marketing");
console.log(MarketingEmployee);

//ข้อที่ 5
const findITEmployee = employees.filter((employee) => employee.department === "IT").map((employee) => employee.name);
console.log(findITEmployee);

//ข้อที่ 6
const salarySum = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(`${salarySum} บาท`);

//ข้อที่ 7
const highestSalary = employees.filter((employee) => employee.salary >100000);
console.log(highestSalary);

//ข้อที่ 8
const startAfter2020 = employees.filter((employee) => employee.startDate > "2020-01-01").filter((employee)=> employee.isActive === true).sort((a,b) => a.name - b.name);
console.log(startAfter2020);

//ข้อที่ 9
const avarateITSalary = employees.filter((employee) => employee.department === "IT").reduce((total, employee) => total + employee.salary, 0) / employees.filter((employee) => employee.department === "IT").length;
console.log(avarateITSalary);

//ข้อที่ 10
const fullnameEmployees = employees.map((employee) => {
  return {
    fullName: employee.name,
    department: employee.department,
    position: employee.position,
  };
});
console.log(fullnameEmployees);
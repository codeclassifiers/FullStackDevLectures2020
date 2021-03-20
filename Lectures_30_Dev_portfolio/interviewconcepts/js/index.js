function printValue() {
  console.log("printing a sentence");
}

// printValue();
// Alternate way to call a function
// printValue.call();

// 3rd way to call a function
// printValue.apply();

// const studentDetails = {
//   firstName: "John",
//   lastName: "Doe",
//   middleName: "Dwayne",
//   printFullName: function () {
//     // console.log("Value of this keyword inside function", this);
//     console.log(
//       "printing full name",
//       this.firstName,
//       this.lastName,
//       this.middleName
//     );
//   },
// };

// // const firstName = studentDetails.firstName;
// // const lastName = studentDetails.lastName;
// // studentDetails.printFullName(firstName, lastName);
// studentDetails.printFullName();

const student1 = {
  name: "John",
  battery: 70,
  chargeBattery: function (inputPercentage, secondaryPercentage) {
    this.battery = this.battery + inputPercentage + secondaryPercentage;
  },
};

const student2 = {
  name: "Jenny",
  battery: 40,
};

// console.log("Current battery percentage", student1.battery);
// student1.chargeBattery();
// console.log("Current battery percentage", student1.battery);

// console.log("Current battery percentage for Jenny", student2.battery);
// JSON1.functionName.call(JSON2)
// student1.chargeBattery.call(student2, 30, 20);
// student1.chargeBattery.apply(student2, [30, 20]);
// const chargeBatteryInstance = student1.chargeBattery.bind(student2, 30, 20);
// chargeBatteryInstance();
// console.log("Updated battery percentage for Jenny", student2.battery);

// function printName(params) {
//     console.log("sdaf");
// }

// const functionInstance = printName;
// functionInstance();

// Your code here
// Creates a single employee record from an array of data
function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],   // First element is the first name
        familyName: employeeData[1],  // Second element is the family name
        title: employeeData[2],       // Third element is the job title
        payPerHour: employeeData[3],  // Fourth element is pay rate per hour
        timeInEvents: [],             // Empty array for clock-in times
        timeOutEvents: []             // Empty array for clock-out times
    };
}

// Turns an array of arrays into an array of employee records
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(data => createEmployeeRecord(data)); // Maps each inner array to a record
}


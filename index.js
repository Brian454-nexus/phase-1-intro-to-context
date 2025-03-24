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

// Adds a "TimeIn" event to an employee's record
function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" "); // Splits "YYYY-MM-DD HHMM" into date and hour
    employee.timeInEvents.push({               // Adds a new event to timeInEvents array
        type: "TimeIn",                        // Event type is "TimeIn"
        hour: parseInt(hour, 10),              // Converts hour string to integer (e.g., "800" to 800)
        date: date                             // Stores the date part (e.g., "2018-01-01")
    });
    return employee;                           // Returns the updated employee record
}

// Adds a "TimeOut" event to an employee's record
function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" "); // Splits "YYYY-MM-DD HHMM" into date and hour
    employee.timeOutEvents.push({              // Adds a new event to timeOutEvents array
        type: "TimeOut",                       // Event type is "TimeOut"
        hour: parseInt(hour, 10),              // Converts hour string to integer (e.g., "1800" to 1800)
        date: date                             // Stores the date part (e.g., "2018-01-01")
    });
    return employee;                           // Returns the updated employee record
}

// Calculates hours worked on a specific date
function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);   // Finds the TimeIn event for the date
    const timeOut = employee.timeOutEvents.find(event => event.date === date); // Finds the TimeOut event for the date
    const hours = (timeOut.hour - timeIn.hour) / 100;                          // Difference in hours (e.g., 1800 - 800 = 10 hours)
    return hours;                                                              // Returns hours as an integer
}

// Calculates wages earned on a specific date
function wagesEarnedOnDate(employee, date) {
    const hours = hoursWorkedOnDate(employee, date); // Gets hours worked on that date
    const wages = hours * employee.payPerHour;       // Multiplies hours by pay rate
    return wages;                                    // Returns total pay for the date
}


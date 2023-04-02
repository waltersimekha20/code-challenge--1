let grade = document.getElementById("grade");
let speed = document.getElementById("speed");
let salary = document.getElementById("salary");

// #############################################################################
// ################### CHALLENGE 1:  Student Grade Generator ###################
// #############################################################################
grade.addEventListener("click", (e) => {
    e.preventDefault();
    let inputGrade = parseInt(document.getElementById("input-grade").value);
    console.log(inputGrade);
    let finalOutput;
    // write Code For the Code challenge

    if (inputGrade >= 0 && inputGrade < 40) {
        finalOutput = "Grade E\n";
    } else if (inputGrade >= 40 && inputGrade <= 49) {
        finalOutput = "Grade D\n";
    } else if (inputGrade > 49 && inputGrade <= 59) {
        finalOutput = "Grade C\n";
    } else if (inputGrade >= 60 && inputGrade <= 79) {
        finalOutput = "Grade B\n";
    } else if (inputGrade > 79 && inputGrade <= 100) {
        finalOutput = "Grade A\n";
    } else {
        finalOutput = "Invalid Input, please try again\n";
    }

    document.getElementById("marks-id").append(finalOutput);
});

// ####################################################################
// ################### CHALLENGE 2:  Speed Detector ###################
// ####################################################################

speed.addEventListener("click", (e) => {
    e.preventDefault();
    let inputSpeed = parseInt(document.getElementById("input-speed").value);
    console.log(inputSpeed);
    let finalOutput;
    // write Code For the Code challenge
    if (inputSpeed <= 70) {
        finalOutput = "Ok\n";
    } else {
        let extra_speed = inputSpeed - 70;
        points = extra_speed / 5;

        if (points <= 12) {
            finalOutput = `Points: ${points}\n`;
        } else {
            finalOutput = "License suspended\n";
        }
    }

    document.getElementById("speed-id").append(finalOutput);
});

// ##########################################################################
// ################### CHALLENGE 3: Net Salary Calculator ###################
// ##########################################################################
salary.addEventListener("click", (e) => {
    e.preventDefault();
    let inputSalary = parseInt(document.getElementById("input-salary").value);
    console.log(inputSalary);
    let finalOutput;
    // write Code For the Code challenge
    const gross_salary = inputSalary;
    let payee;
    let NHIFDeductions;
    let NSSFDeductions;

    /* calculate payee:
       salary less than or equal to 24,000: 10%
       salary between 24001 and 32333: 25% 
       salary more than 32333: 30% 
    */
    if (inputSalary <= 24000) {
        payee = inputSalary * 0.1;
    } else if (inputSalary > 24000 && inputSalary <= 32333) {
        payee = inputSalary * 0.25;
    } else {
        payee = inputSalary * 0.3;
    }

    // calculate NHIF DEDUCTIONS

    if (inputSalary <= 5999) {
        NHIFDeductions = 150;
    } else if (inputSalary >= 6000 && inputSalary <= 7999) {
        NHIFDeductions = 300;
    } else if (inputSalary >= 8000 && inputSalary <= 11999) {
        NHIFDeductions = 400;
    } else if (inputSalary >= 12000 && inputSalary <= 14999) {
        NHIFDeductions = 500;
    } else if (inputSalary >= 15000 && inputSalary <= 19999) {
        NHIFDeductions = 600;
    } else if (inputSalary >= 20000 && inputSalary <= 24999) {
        NHIFDeductions = 750;
    } else if (inputSalary >= 25000 && inputSalary <= 29999) {
        NHIFDeductions = 850;
    } else if (inputSalary >= 30000 && inputSalary <= 34999) {
        NHIFDeductions = 900;
    } else if (inputSalary >= 35000 && inputSalary <= 39999) {
        NHIFDeductions = 950;
    } else if (inputSalary >= 40000 && inputSalary <= 44999) {
        NHIFDeductions = 1000;
    } else if (inputSalary >= 45000 && inputSalary <= 49999) {
        NHIFDeductions = 1100;
    } else if (inputSalary >= 50000 && inputSalary <= 59999) {
        NHIFDeductions = 1200;
    } else if (inputSalary >= 60000 && inputSalary <= 69999) {
        NHIFDeductions = 1300;
    } else if (inputSalary >= 70000 && inputSalary <= 79999) {
        NHIFDeductions = 1400;
    } else if (inputSalary >= 80000 && inputSalary <= 89999) {
        NHIFDeductions = 1500;
    } else if (inputSalary >= 90000 && inputSalary <= 99999) {
        NHIFDeductions = 1600;
    } else if (inputSalary >= 100000) {
        NHIFDeductions = 1700;
    }

    /* calculate NSSF DEDUCTIONS:
       salary more than or equal to 18,000: KES 1080
       salary less than 18,000:     KES 720 
    */
    if (inputSalary >= 18000) {
        NSSFDeductions = 1080;
    } else {
        NSSFDeductions = 720;
    }

    const net_salary = gross_salary - (payee + NHIFDeductions + NSSFDeductions);

    finalOutput = `Gross Salary: ${gross_salary}\nPayee: ${payee}\nNHIF Deductions: ${NHIFDeductions}\nNSSF Deductions: ${NSSFDeductions}\nNet Salary: ${net_salary}\n`;
    document.getElementById("salary-id").append(finalOutput);
});
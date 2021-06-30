const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        console.log("Part time wage");
        break;
    case IS_PART_TIME:
        empHrs = FULL_TIME_HOURS;
        console.log("Full time wage");
        break;
    default:
        empHrs=0;
        console.log("emp absent");


}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp wage :" + empWage);
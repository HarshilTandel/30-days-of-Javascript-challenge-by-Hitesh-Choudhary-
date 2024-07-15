function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Simply not possible or not exist");
    }
  }
  
  getDayOfWeek(0); 
  getDayOfWeek(5); 

  function checkGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else if (marks >= 40) {
        grade = 'E';
    } else if (marks < 33) {
        grade = 'F';
    } else {
        grade = 'Invalid';
    }

    switch (grade) {
        case 'A':
            console.log("A");
            break;
        case 'B':
            console.log("B");
            break;
        case 'C':
            console.log("C");
            break;
        case 'D':
            console.log("D");
            break;
        case 'E':
            console.log("E");
            break;
        case 'F':
            console.log("F");
            break;
        default:
            console.log("Simply not possible or does not exist");
    }
}


checkGrade(95); 
checkGrade(85); 
checkGrade(75); 
checkGrade(55); 
checkGrade(45); 
checkGrade(25); 


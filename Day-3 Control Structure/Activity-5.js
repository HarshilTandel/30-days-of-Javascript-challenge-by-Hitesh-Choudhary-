function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
  
  isLeapYear(2007);
  isLeapYear(2011); 
  isLeapYear(2013);
  isLeapYear(2024);
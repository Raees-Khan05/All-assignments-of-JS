// You are given an object representing a product with various properties,
// including an array of rating your task is to create a method within this 
// object to calculate the average rating of the product...


var object = {
    id: 1,
    title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: [2, 4, 1, 0, 5, 3],
    calculateRating: function() {
      let sum = 0;
      for (let i = 0; i < this.rating.length; i++) {
        sum += this.rating[i];
      }
      return sum / this.rating.length;
    }
  };
  
  console.log("1st question's ans==>>" , object.calculateRating()); 
  
  // 2. You are given an object representing an employee with various properties, including an array of days off in the form of week day names. Your task is to create a method within this object to check if today is a day off for the employee.
  //  Create a method named isTodayOff inside the object. The method should determine today's day of the week. The method should check if today is a day off for the employee based on the daysOff array and return true if it is, otherwise return false.





  var employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    daysOff: ["Monday", "Friday"],
    isTodayOff: function() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const todayName = daysOfWeek[new Date().getDay()];
      for (let i = 0; i < this.daysOff.length; i++) {
        if (this.daysOff[i] === todayName) {
          return true;
        }
      }
      return false;
    }
  };
  
  console.log(employee.isTodayOff());
  



  // 3. You are given an object representing an employee with various properties, including their years of experience and performance rating. Your task is to create a method within this object to determine if the employee is eligible for an increment.
  // Create a method named isIncrementEligible inside the object. The method should check if the employee's experience is greater than or equal to 3 years. The method should also check if the employee's performance rating is greater than or equal to 4.The method should return true if both conditions are met, otherwise return false.





  var employee = {
    id: 102,
    name: "Jane Smith",
    position: "Project Manager",
    department: "Management",
    experience: 5, 
    performance: 4.5, 
    isIncrementEligible: function() {
      if (this.experience >= 3 && this.performance >= 4) {
        return true;
      }
      return false;
    }
  };
  
  console.log(employee.isIncrementEligible()); 
  
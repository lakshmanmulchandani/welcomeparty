// ============================================
// random LOTR name generator
// ============================================

// create an array of first names
let firstNames = [
  "Abhinav Mishra",
  "Abhishek Kumar Pandey",
  "Abhishek Nikunj",
  "Adarsh Agrawal",
  "Adarsh Richhariya",
  "Aditya Khare",
  "Aditya Kumar Sah",
  "Aditya Ojha",
  "Akarsh",
  "Akash Pathak",
  "Aman Bareth",
  "Aman Kumar Singh",
  "Amit Kumar",
  "Amit Mishra",
  "Ankita Gupta",
  "Ankita Sonkar",
  "Ansh Raghuwanshi",
  "Anshika Gupta",
  "Anshu Sharma",
  "Anshuman Mishra",
  "Anvesha Singh",
  "Aryan Kuril",
  "Aryan Sunil Mishra",
  "Ashutosh Mishra",
  "Atulya Nawik",
  "Aviral",
  "Ayush Anand",
  "Ayushman Kumar Pandey",
  "Balpreet Singh Gill",
  "Banoth Jaipal",
  "Bojanki Greeshim Thirushank Naidu",
  "D khushi",
  "Dara Chakradhar",
  "David Minz",
  "Dev Narain Pandey",
  "Dhaleshwar Sahu",
  "Divya Soni",
  "Divyansh Dewangan",
  "Gaurav Dahire",
  "Gaurav Jain",
  "Harendra",
  "Himanshu Meena",
  "Hitesh Kant Jangade",
  "Jay Pawar",
  "Jesan J Mathew",
  "Kaushal Kumar Mishra",
  "Kethavathu Hima Anju Bai",
  "Korla Vamsi",
  "Kreeti Soni",
  "Kumkum Bhatpahari",
  "Kundan Kumar",
  "Kushagra Kumar Sinha",
  "Lakkoju Sushant",
  "Manish Kumar Yadav",
  "Manish Nishad",
  "Mayank Nayak",
  "Mayank Sahu",
  "Megha Rathi",
  "Megha Rathi",
  "Mili MeshRAM",
  "Mohammad Raza Memon",
  "Moolamreddy Sukesh Reddy",
  "Mudapally Vamshi Krishna",
  "Nehil Sahu",
  "Nirmal Sharma",
  "Pothuraj Hemant",
  "Pradeep Kumar Sahu",
  "Pranav Kumar",
  "Pranav Raj",
  "Rahul Kumar",
  "Rahul Mandavi",
  "Rajhans Kumar Gupta",
  "Ravi Ranjan Kumar",
  "Reesi Hamsitha Priya",
  "Riddhiraj Bidyabhusan",
  "Rishabh Jaiswal",
  "Rishabh Pathak",
  "Ritesh Patel",
  "Ritika Srivastava",
  "Samyak Banzal",
  "Sarthak Chandrawanshi",
  "Sarthak Dubey",
  "Sarvagya Jain",
  "Sathe Neha Bhagvat",
  "Satyam Kumar",
  "Satyam Patel",
  "Saurabh Mishra",
  "Shitanshu Shrivastava",
  "Shivam Kumar",
  "Shivansh Chowhan",
  "Shivansh Satpute",
  "Shreya Parira",
  "Singupuram Chidvilas",
  "Siraparapu Yashasri",
  "Sohail Ansari",
  "Sourabh Sonkar",
  "Subrat Shatapathy",
  "Sumit Ranjan",
  "Sunita Kashyap",
  "Suyash Waghmare",
  "Taksande Sohit Ravindra",
  "Tanya Kumari",
  "Tarni Gajendra",
  "Tejas Rajabhoj",
  "Utkarsh Bharat",
  "Utkarsh Kumar Upadhyay",
  "Utkarsh Nathan",
  "Valendra Dangi",
  "Vijay Kumar",
  "Vikas Arya",
  "Vivek Singh",
  "Yalla Sai Sushma",
  "Yukti Madariya",
];
// create an array of last names

// save length of arrays
let firstLength = firstNames.length;

// pull one name from each array and return them
let getNames = (myArray, num) => {
  // if the data types are correct
  if (Array.isArray(myArray) && typeof num == "number") {
    // get value from array
    if (typeof myArray[num] == "string") {
      return myArray[num];
    }
    console.error("Value from " + myArray + " is not a string");
    return false;
  } else {
    console.error("getNames first parameter should be an array.");
  }
};

let removeName = () => {
  document.getElementById("name").innerHTML = "";
  return true;
};
// then display them to the user
let showName = (finalName) => {
  if (typeof finalName == "string") {
    document.getElementById("name").innerHTML = finalName;
    return true;
  }
  console.error("finalName should be a string.");
  return false;
};

// create random number in a certain range
let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// when the user clicks 'generate'
document.getElementById("generate").addEventListener("click", () => {
  // create new random nums to use as index in array
  const dt = document.getElementsByClassName("dot-typing")[0];
  dt.style.display = "block";
  removeName();
  let firstRandNum = getRandomInt(0, firstLength - 1);
  const main = document.getElementsByClassName("main")[0];
  main.classList.add("colour-changer");
  // use those nums to get values from arrays
  let firstName = firstNames[firstRandNum];

  if (firstName !== undefined) {
    // create final name
    let finalName = firstName;
    // set the value of paragragh element
    setTimeout(() => {
      main.classList.remove("colour-changer");
      dt.style.display = "none";
      showName(finalName);
    }, 5000);
  } else {
    console.error("values were undefined");
    console.error("firstRandNum " + firstRandNum);
  }
});

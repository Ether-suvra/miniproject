import mocks from "./mocks.json" with { type: "json" };

console.log({mocks})
// Function to toggle navigation menu
function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}

let userName = "";

document.querySelector(".nav-menu-btn").addEventListener("click", () => {
  myMenuFunction();
})

document.getElementById("studentBtn").addEventListener("click", () => {
  student();
})
document.getElementById("adminBtn").addEventListener("click", () => {
  admin();
})
document.getElementById("studentLink").addEventListener("click", () => {
  student();
})
document.getElementById("adminLink").addEventListener("click", () => {
  admin();
})


document.getElementById("validateStudent").addEventListener("click", () => {
  validateStudent();
})
document.getElementById("validateAdmin").addEventListener("click", () => {
  validateAdmin();
})

document.getElementById("submitOtp").addEventListener("click", () => {
  verifyOtp();
})


function student() {
  hideOtp()
  var studentContainer = document.getElementById("student");
  var adminContainer = document.getElementById("admin");
  var studentBtn = document.getElementById("studentBtn");
  var adminBtn = document.getElementById("adminBtn");

  studentContainer.style.left = "0"; // Show student form
  adminContainer.style.left = "-100%"; // Hide admin form
  studentBtn.classList.add("white-btn"); // Highlight the student button
  adminBtn.classList.remove("white-btn"); // Remove highlight from admin button
}

function admin() {
  hideOtp()
  var studentContainer = document.getElementById("student");
  var adminContainer = document.getElementById("admin");
  var studentBtn = document.getElementById("studentBtn");
  var adminBtn = document.getElementById("adminBtn");

  studentContainer.style.left = "-100%"; // Hide student form
  adminContainer.style.left = "0"; // Show admin form
  studentBtn.classList.remove("white-btn"); // Remove highlight from student button
  adminBtn.classList.add("white-btn"); // Highlight the admin button
}

// Validate student login and show OTP container if valid
function validateStudent() {
  var otpContainer = document.getElementById("otp-container");
  var insertedUsername = document.getElementById("student-username").value;

  mocks.find(user => {
    if(user.userName === insertedUsername && user.role === "student") {
      userName = insertedUsername;
      otpContainer.style.display = "block";
      document.getElementById("student").style.display = "none";
    }
  })
}

// Validate admin login
function validateAdmin() {
  var otpContainer = document.getElementById("otp-container");
  var insertedUsername = document.getElementById("admin-username").value;

  mocks.find(user => {
    if(user.userName === insertedUsername && user.role === "admin") {
      userName = insertedUsername;
      otpContainer.style.display = "block";
      document.getElementById("admin").style.display = "none";
    }
  })
}

// Verify OTP
function verifyOtp() {
  var otp = document.getElementById("otp").value;
  const currentUrl = window.location.href;
  const lastSlashIndex = currentUrl.lastIndexOf("/");
  const baseUrl = currentUrl.substring(0, lastSlashIndex + 1);

  mocks.find(user => {
    if(user.userName === userName && user.otp === otp){
      window.location.href = baseUrl + user.role + ".html";
    }
  })
 
}

function hideOtp(){
  var otpContainer = document.getElementById("otp-container");
  otpContainer.style.display="none";
  document.getElementById("admin").style.display = "block";
  document.getElementById("student").style.display = "block";
}
const formBox = document.querySelector('.form-box');
const studentBtn = document.getElementById('studentBtn');
const adminBtn = document.getElementById('adminBtn');
let lastScrollTop = 0;

// Function to hide the form when scrolling down and show when scrolling up
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scroll down: hide the form box
    formBox.style.opacity = '0';
    formBox.style.pointerEvents = 'none';
  } else {
    // Scroll up: show the form box
    formBox.style.opacity = '1';
    formBox.style.pointerEvents = 'auto';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

// Function to show the form box when "Student" or "Admin" button is clicked
function showFormBox() {
  formBox.style.opacity = '1';
  formBox.style.pointerEvents = 'auto';
  formBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Add click event listeners to the buttons
studentBtn.addEventListener('click', showFormBox);
adminBtn.addEventListener('click', showFormBox);

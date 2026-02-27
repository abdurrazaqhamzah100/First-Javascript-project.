
const student = [
  { name: "Usman", score: 75 },
  { name: "Hamzah", score: 95 },
  { name: "Khadijah", score: 88 },
  { name: "Toyyib", score: 80 },
  { name: "Umar", score: 45 },
  { name: "Buddy", score: 69 },
  { name: "Hakeem", score: 74 },
  { name: "Jawad", score: 28 },
  { name: "Lilly", score: 64 },
  { name: "Mariam", score: 87 },
];


const passingScore = 70;


student.sort(function (a, b) {
  return b.score - a.score;
});

let totalStudents = student.length;

let totalScore = 0;
for (let i in student) {
  totalScore += student[i].score;
}
let averageScore = totalScore / totalStudents;

let highestScore = student[0].score;

let passCount = 0;
for (let i in student) {
  if (student[i].score >= passingScore) {
    passCount++;
  }
}

// Display statistics
let statsHTML = `
            <p><strong>Total Students:</strong> ${totalStudents}</p>
            <p><strong>Average Score:</strong> ${averageScore.toFixed(2)}</p>
            <p><strong>Highest Score:</strong> ${highestScore}</p>
            <p><strong>Students who Passed (>${passingScore}):</strong> ${passCount} out of ${totalStudents}</p>
            <p><strong>Students who Failed (<${passingScore}):</strong> ${totalStudents - passCount}</p>
        `;
document.getElementById("stats").innerHTML = statsHTML;

let html = `<h2>All Students (G.P)</h2>
            <div class="student-card-container">`;

for (let i in student) {
  let passed = student[i].score >= passingScore;


  let cardClass;
  if (passed) {
    cardClass = "pass-card"; 
  } else {
    cardClass = "fail-card"; 
  }

  
  let status = passed ? "Passed" : "Failed";
  let statusClass = passed ? "pass" : "fail";

  html += `
                    <div class="student-card ${cardClass}">
                    <h3>${student[i].name}</h3>
                    <p><strong>Score:</strong> ${student[i].score}</p>
                    <p class="${statusClass}">${status}</p>
                </div>
            `;
}

document.getElementById("student-container").innerHTML = `${html} </div>`;

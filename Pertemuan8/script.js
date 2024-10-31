/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 */

/**
 * A = 90-100
 * B = 80-89
 * C = 70-79
 * D = 60-69
 * E = 50-59
 * F = < 50
 *
 * @param {number} score
 * @returns string
 */

let user = {
  name: "Cecez",
  age: 22,
  isMarriage: false,
  studentScore: 80,
};

let user2 = {
  ...user, // spread operator
};

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}

console.log(`${user.name}, Score: ${getGrade(user.studentScore)}`);

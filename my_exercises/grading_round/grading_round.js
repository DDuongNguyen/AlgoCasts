function gradingStudents(grades) {
  return grades.map(grade =>
    grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
  );
}

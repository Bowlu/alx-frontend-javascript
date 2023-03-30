export default function getStudentIdsSum(array) {
  const sumOfStudentId = array.reduce((sum, value) => sum + value.id, 0);
  return sumOfStudenId;
}

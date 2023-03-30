let value = 0;
export default function getStudentIdsSum(array) {
  const sumOfStudentId = array.reduce((sum, value) => sum + value.id, 0);
  return sumOfStudenId;
}

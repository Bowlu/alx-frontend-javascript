export default function getStudentIdsSum(array) {
  if(array instanceOf Array) {
    const sumOfStudentId = array.reduce((sum, value) => sum + value.id, 0);
    return sumOfStudenId;
}

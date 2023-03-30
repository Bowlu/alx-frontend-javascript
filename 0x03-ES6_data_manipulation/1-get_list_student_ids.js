export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const newArray = array.map((item) => item.id);
    return newArray;
  }
  return [];
}

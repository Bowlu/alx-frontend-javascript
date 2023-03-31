export default function createInt8TypedArray(length, position, value) {
  if(postiion > length) {
    throw new Error('Position outside range');
  }
  const buffer = new array(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}

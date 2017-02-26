import hasTypedArrays from './has-typed-arrays';
import arrayFill from './array-fill';

export default function grow(array, oldLength, newLength, fillValue = 0) {
  if (hasTypedArrays()) {
    let ret = new Uint32Array(newLength);
    ret.set(array);

    if (fillValue !== 0) {
      ret.fill(fillValue, oldLength);
    }

    return ret;
  } else {
    array.length = newLength;
    arrayFill(array, fillValue, oldLength, newLength);

    return array;
  }
}
export function getMergeSortAnimations(array) {
	//window.console.log("Coming here!");

	const animations = [];
	if (array.length <=1) return array;

	const auxiliaryArray = array.slice();
	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
	return animations;
}

function mergeSortHelper(mainArray, startI, endI, auxiliaryArray, animations) {
	if (startI === endI) return;

	const middleI = Math.floor((startI + endI) / 2);
	mergeSortHelper(auxiliaryArray, startI, middleI, mainArray, animations);
	mergeSortHelper(auxiliaryArray, middleI + 1, endI, mainArray, animations);

	doMerge(mainArray, startI, middleI, endI, auxiliaryArray, animations);
}

function doMerge(mainArray, startI, middleI, endI, auxiliaryArray, animations) {
	let k = startI;
  let i = startI;
  let j = middleI + 1;
  while (i <= middleI && j <= endI) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleI) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endI) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
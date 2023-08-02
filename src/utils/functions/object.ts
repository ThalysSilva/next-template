import { ObjectRecursiveOf } from '../types';

export function iterateObject<T = string>(
  mapOfIndexes: string[],
  objectOfString: ObjectRecursiveOf<T>,
): T | undefined {
  if (objectOfString[mapOfIndexes[0]] === undefined) {
    return undefined;
  }

  if (mapOfIndexes.length <= 1) {
    return objectOfString[mapOfIndexes[0]] as T;
  }

  const newMap = mapOfIndexes.splice(1);
  return iterateObject(newMap, objectOfString[mapOfIndexes[0]] as ObjectRecursiveOf<T>);
}

export function getEnumKeyName<T extends object>(enumObject: T, value: number) {
  return Object.entries(enumObject).find(([, val]) => val === value)?.[0] as keyof T;
}

export function getValueByKeyForNumberEnum<T>(enumObject: object, value: T) {
  return Object.entries(enumObject).find(([key]) => key === value)?.[1] as number;
}
export function getValueByKeyForStringEnum<T>(enumObject: object, value: T) {
  return Object.entries(enumObject).find(([key]) => key === value)?.[1] as string;
}

export function getKeysOfEnum(enumObject: object) {
  return Object.keys(enumObject).filter((x) => Number.isNaN(Number(x)));
}

export function getIndexOfEnum(enumObject: object, value: string) {
  return Object.keys(enumObject).indexOf(value);
}

export function getNextKey(enumObject: object, value: string) {
  const keys = getKeysOfEnum(enumObject);
  const index = getIndexOfEnum(enumObject, value);

  return keys[index + 1];
}

export function getPreviousKey(enumObject: object, value: string) {
  const keys = getKeysOfEnum(enumObject);
  const index = getIndexOfEnum(enumObject, value);

  return keys[index - 1];
}

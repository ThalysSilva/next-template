export const encoded = (value: string | Record<string, unknown>) => {
  const stringValue = typeof value !== 'string' ? JSON.stringify({ ...value, tp: 'R' }) : value;
  const buff = Buffer.from(stringValue, 'utf8');
  return buff.toString('base64');
};

export const decoded = (value: string) => {
  const buff = Buffer.from(value, 'base64');
  const str = buff.toString('utf8');
  if (str?.includes('tp:R')) {
    return JSON.parse(str);
  }
  return str;
};

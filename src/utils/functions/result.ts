type GenericTypeResult = {
  success: boolean;
  message?: string;
  data?: any;
  [key: string]: any;
};

export const successResult = (data: any, extra?: any): GenericTypeResult => ({
  success: true,
  data,
  ...extra,
});

export const errorResult = (message: string, extra?: any): GenericTypeResult => ({
  success: false,
  message,
  ...extra,
});

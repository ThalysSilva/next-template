export const moneyMask = (value: string, currencySybol?: string) => {
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '');

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100);

  if(currencySybol)
    return `${currencySybol} ${result}`;

  return result;
};

export const onlyNumber = (maskNumber: string) => {
  return maskNumber.replace(/\D/g, '');
};

export const onlyNumberDecimal = (maskNumber: string) => {
  return maskNumber.replaceAll('.', '').replace(',', '.');
};

export const toLocaleStringMoney = (value = 0) => {
  if (typeof value !== 'number') {
    return 'R$ 0,00';
  }

  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

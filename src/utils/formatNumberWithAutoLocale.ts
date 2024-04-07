export const formatNumberWithAutoLocale = (number?: number): string => {
  if (typeof number !== "number" || isNaN(number)) {
    return "";
  }

  return number.toLocaleString("es-ES");
};

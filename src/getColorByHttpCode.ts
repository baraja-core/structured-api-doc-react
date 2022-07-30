const getColorByHttpCode = (httpCode: number): string => {
  if (httpCode >= 200 && httpCode <= 299) return '#4CAF50';
  if (httpCode >= 300 && httpCode <= 399) return '#3F51B5';
  if (httpCode >= 400 && httpCode <= 499) return '#FF9800';

  return httpCode >= 500 ? '#fd3131' : '#000';
};

export default getColorByHttpCode;

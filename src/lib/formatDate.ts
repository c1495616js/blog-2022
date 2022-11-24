const formatDate = (date: string, locale = 'en-US') => {
  const now = new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return now;
};

export default formatDate;

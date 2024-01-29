export const currencyFormatter = (amount, locale="en-US") => {

    const billion = 1e9;
    const million = 1e6;
    const thousand = 1e3;
  
    // Check the magnitude of the value and format accordingly
    if (Math.abs(amount) >= billion) {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: 'NAD', minimumFractionDigits: 1 }).format(amount / billion) + 'B';
    } else if (Math.abs(amount) >= million) {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: 'NAD', minimumFractionDigits: 1 }).format(amount / million) + 'M';
    } else if (Math.abs(amount) >= thousand) {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: 'NAD', minimumFractionDigits: 1 }).format(amount / thousand) + 'K';
    } else {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: 'NAD', minimumFractionDigits: 2 }).format(amount);
    }

}

export const numberFormatter = (value, locale="en-US") => {

    const billion = 1e9;
    const million = 1e6;
    const thousand = 1e3;
  
    // Check the magnitude of the value and format accordingly
    if (Math.abs(value) >= billion) {
      return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value / billion) + 'B';
    } else if (Math.abs(value) >= million) {
      return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value / million) + 'M';
    } else if (Math.abs(value) >= thousand) {
      return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value / thousand) + 'K';
    } else {
      return value;
    }

}
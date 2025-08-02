export function calculateAbjad(text) {
  if (!text) {
    return { details: [], totalKabir: 0, totalSaghir: 0, totalWusta: 0 };
  }

  const abjadValues = {
    'ا': { kabir: 1, saghir: 1, wusta: 1 },
    'ئ': { kabir: 1, saghir: 1, wusta: 1 }, 
    'ب': { kabir: 2, saghir: 2, wusta: 2 },
    'ج': { kabir: 3, saghir: 3, wusta: 3 },
    'د': { kabir: 4, saghir: 4, wusta: 4 },
    'ه': { kabir: 5, saghir: 5, wusta: 5 },
    'و': { kabir: 6, saghir: 6, wusta: 6 },
    'ز': { kabir: 7, saghir: 7, wusta: 7 },
    'ح': { kabir: 8, saghir: 8, wusta: 8 },
    'ط': { kabir: 9, saghir: 0, wusta: 9 },
    'ی': { kabir: 10, saghir: 1, wusta: 10 },
    'ك': { kabir: 20, saghir: 2, wusta: 8 },
    'ل': { kabir: 30, saghir: 3, wusta: 6 },
    'م': { kabir: 40, saghir: 4, wusta: 4 },
    'ن': { kabir: 50, saghir: 5, wusta: 2 },
    'س': { kabir: 60, saghir: 6, wusta: 0 },
    'ع': { kabir: 70, saghir: 7, wusta: 10 },
    'ف': { kabir: 80, saghir: 8, wusta: 8 },
    'ص': { kabir: 90, saghir: 0, wusta: 6 },
    'ق': { kabir: 100, saghir: 1, wusta: 4 },
    'ر': { kabir: 200, saghir: 2, wusta: 8 },
    'ش': { kabir: 300, saghir: 3, wusta: 0 },
    'ت': { kabir: 400, saghir: 4, wusta: 4 },
    'ث': { kabir: 500, saghir: 5, wusta: 8 },
    'خ': { kabir: 600, saghir: 6, wusta: 0 },
    'ذ': { kabir: 700, saghir: 7, wusta: 4 },
    'ض': { kabir: 800, saghir: 8, wusta: 8 },
    'ظ': { kabir: 900, saghir: 0, wusta: 0 },
    'غ': { kabir: 1000, saghir: 1, wusta: 4 },
    'گ': { kabir: 40, saghir: 2, wusta: 8 },
    'چ': { kabir: 9, saghir: 3, wusta: 0 },
    'پ': { kabir: 6, saghir: 4, wusta: 4 },
    'ژ': { kabir: 21, saghir: 5, wusta: 8 }
  };

  const cleanedText = text.replace(/[\sًٌٍَُِْ]/g, '');
  const result = { details: [], totalKabir: 0, totalSaghir: 0, totalWusta: 0 };
  const unknownChars = [];

  for (let char of cleanedText) {
    if (abjadValues[char]) {
      result.details.push({
        char,
        kabir: abjadValues[char].kabir,
        saghir: abjadValues[char].saghir,
        wusta: abjadValues[char].wusta
      });
      result.totalKabir += abjadValues[char].kabir;
      result.totalSaghir += abjadValues[char].saghir;
      result.totalWusta += abjadValues[char].wusta;
    } else {
      unknownChars.push(char);
    }
  }

  if (unknownChars.length > 0) {
    console.warn(`حروف ناشناخته: ${unknownChars.join(', ')} نادیده گرفته شدند.`);
  }

  return result;
}

// تابع جداگانه برای محاسبه فقط ابجد کبیر
export function calculateAbjadKabir(text) {
  return calculateAbjad(text).totalKabir;
}

// تابع جداگانه برای محاسبه فقط ابجد صغیر
export function calculateAbjadSaghir(text) {
  return calculateAbjad(text).totalSaghir;
}

// تابع جداگانه برای محاسبه فقط ابجد وسطی
export function calculateAbjadWusta(text) {
  return calculateAbjad(text).totalWusta;
}
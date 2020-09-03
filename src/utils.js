export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const getMonthName = (value) => [`ЯНВ`,`ФЕВ`,`МАР`,`АПР`,`МАЙ`,`ИЮН`,`ИЮЛ`,`АВГ`,`СЕН`,`ОКТ`,`НОЯ`,`ДЕК`][value];

export const getDateFormat = (date) => {
  return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};

export const adapter = (data) => {
  return [{  
    id: data[0].id,  
    type: `servCheck`,
    date: new Date(),
    distance: 101,
    comment: `you?Serv`,
  }];
};

export const getRandomInt = (min, max)=> {  
  return Math.floor(min + Math.random() * (max + 1 - min));
};

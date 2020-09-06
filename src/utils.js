import {SortType} from './const'; 

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
    distance: 1,
    comment: `Мои данные с сервера`,
  }];
};

export const getRandomInt = (min, max)=> {  
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const sort = (sortType, list) => {
  switch(sortType){
    case SortType.DISTANCE_UP:
      return list.sort((a, b) => a.distance - b.distance);
    case SortType.DISTANCE_DOWN:
      return list.sort((a, b) => b.distance - a.distance);
    case SortType.DATE_UP:
      return list.sort((a, b) => a.date - b.date);
    case SortType.DATE_DOWN:
      return list.sort((a, b) => b.date - a.date);
    default:
      return list;
  }
};

export const getSortedSessions = (sortTarget, sortUp, sessions) => {  
  if(sortTarget === SortType.DATE || sortTarget === SortType.TYPE){    
    return  sortUp ? sort(SortType.DATE_UP, sessions) : sort(SortType.DATE_DOWN, sessions);
  }
  return  sortUp ? sort(SortType.DISTANCE_UP, sessions) : sort(SortType.DISTANCE_DOWN, sessions);
};

export const getUniq = (sessions) => {  
  return [...new Set(sessions.map((session)=>session.type))];
};


export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const adapter = (data) => {
  return [{  
    id: data[0].id,  
    type: `servCheck`,
    date: new Date(),
    distance: 101, 
  }];
};

export const getRandomInt = (min, max)=> {  
  return Math.floor(min + Math.random() * (max + 1 - min));
};

import friend1 from '../Images/friend1.jpg';
import friend2 from '../Images/friend2.jpg';
import friend3 from '../Images/friend3.jpg';
import friend4 from '../Images/friend4.jpg';
import friend5 from '../Images/friend5.jpg';
import friend6 from '../Images/friend6.jpg';
import friend7 from '../Images/friend7.jpg';
import friend8 from '../Images/friend8.jpg';
import friend9 from '../Images/friend9.jpg';

export const friends = [
    friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9
];
export const friends2 = [];
// export const friends3 = [];
for(let i = 1; i <= 9; i++){
 friends2[i]=require('../Images/friend'+i+'.jpg');
 //не получилось, пытался сделать импорт в массиве, но он выводит промисы
//  let response = await import('../Images/friend'+i+'.jpg');
//  let data = await response.json();
//  console.log(data);
 //console.log('../Images/friend'+i+'.jpg');
 //console.log(`${'../Images/friend'}`+i+`${'.jpg'}`);
}
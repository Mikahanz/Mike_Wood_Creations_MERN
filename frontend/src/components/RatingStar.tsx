import React from 'react';

const RatingStar: React.FC = () => {
  const num = 4.8;

  const evenNum = Math.floor((num * 10) / 10);
  console.log(evenNum);

  const numArray = arrOfNum(evenNum);

  return (
    <div>
      {numArray.map((n) => (
        <i className='fa fa-star' style={styleColor} key={n.toString()}></i>
      ))}
      {!isEven(num) && (
        <i className='fa fa-star-half-alt' style={styleColor}></i>
      )}
    </div>
  );
};

const isEven = (n: number): boolean => {
  return n % 1 === 0 ? true : false;
};

// @Convert a number to array - Iterated
const arrOfNum = (num: number): Number[] => {
  let numArr: number[] = [];

  for (var i = 0; i < num; i++) {
    numArr.unshift(num - i);
  }
  return numArr;
};

const styleColor = {
  color: '#FF7400',
};

export default RatingStar;

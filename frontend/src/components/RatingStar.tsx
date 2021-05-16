import React from 'react';

interface ratingProps {
  rating: number;
  reviewQty: number;
}

const RatingStar: React.FC<ratingProps> = (props) => {
  const num = props.rating;
  const evenNum = Math.floor((num * 10) / 10);
  console.log(num);

  const numArray = arrOfNum(evenNum);

  const activeStar = isEven(num) ? evenNum : evenNum + 1;

  const unactiveNumStar = 5 - activeStar;
  const unactiveNumStarArr = arrOfNum(unactiveNumStar);

  return (
    <div>
      {numArray.map((n) => (
        <i className='fa fa-star' style={styleColor} key={n.toString()}></i>
      ))}
      {!isEven(num) && (
        <i className='fa fa-star-half-alt' style={styleColor}></i>
      )}
      {unactiveNumStarArr.map((n) => (
        <i className='far fa-star' key={n.toString()}></i>
      ))}
      <span style={styleColor}> ({props.reviewQty})</span>
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
  color: '#53565c',
  //   color: '#FF7400',
};

export default RatingStar;

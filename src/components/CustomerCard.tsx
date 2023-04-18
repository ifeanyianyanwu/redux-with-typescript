import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomerFood } from '../redux/features/customerSlice';
export type Food = string[];

type IProps = {
  name: string;
  id: number;
  foods: Food;
};

const CustomerCard = ({ name, foods, id }: IProps) => {
  const [foodInputValue, setFoodInputValue] = useState('');

  const dispatch = useDispatch();
  const handleAddFood = () => {
    if (!foodInputValue) return;
    dispatch(
      addCustomerFood({
        id: id,
        food: foodInputValue,
      })
    );
    setFoodInputValue('');
  };
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food, index) => (
            <p key={index}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInputValue}
            onChange={(e) => setFoodInputValue(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

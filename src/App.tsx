import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './redux/features/reservationsSlice';
import CustomerCard from './components/CustomerCard';

function App() {
  const [reservationInputValue, setResrevationInputValue] = useState('');
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);

  const handleAddReservation = () => {
    if (!reservationInputValue) return;
    dispatch(addReservation(reservationInputValue));
    setResrevationInputValue('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard key={index} name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationInputValue}
              onChange={(e) => setResrevationInputValue(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              name={customer.name}
              foods={customer.food}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

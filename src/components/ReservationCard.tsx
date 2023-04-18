import { useDispatch } from 'react-redux';
import { removeReservation } from '../redux/features/reservationsSlice';
import { addCustomer } from '../redux/features/customerSlice';

type IProps = {
  name: string;
  index: number;
};

const ReservationCard = ({ name, index }: IProps) => {
  const dispatch = useDispatch();

  const handleRemoveResrevation = (index: number) => {
    dispatch(
      addCustomer({
        id: index,
        name,
        food: [],
      })
    );
    dispatch(removeReservation(index));
  };

  return (
    <div
      onClick={() => handleRemoveResrevation(index)}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;

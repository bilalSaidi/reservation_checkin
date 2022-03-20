import { useSelector } from "react-redux";
import styled from "styled-components";
import ReservationItem from "./ReservationItem";
const ReservationContainer = styled.div`
  border-right: 1px solid black;
  flex: 2;
`;
const ReservationList = styled.ul`
  padding: 0;
`;
const ReservationListHeader = styled.h4`
  color: gray;
`;

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations.value);
  return (
    <ReservationContainer>
      <ReservationListHeader>Reservation List :</ReservationListHeader>
      <ReservationList>
        {reservations.map((item) => {
          return (
            <ReservationItem
              key={item.id}
              username={item.username}
              numberDates={item.numberDates}
              startDate={item.startDate}
            ></ReservationItem>
          );
        })}
      </ReservationList>
    </ReservationContainer>
  );
};

export default Reservation;

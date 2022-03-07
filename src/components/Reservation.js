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

function Reservation() {
  return (
    <ReservationContainer>
      <ReservationListHeader>Reservation List :</ReservationListHeader>
      <ReservationList>
        <ReservationItem
          username={"bilal saidi"}
          numberDates={"2"}
          startDate={"3 / 7 / 2022"}
        ></ReservationItem>
        <ReservationItem
          username={"obida saidi"}
          numberDates={"2"}
          startDate={"3 / 7 / 2022"}
        ></ReservationItem>
        <ReservationItem
          username={"rahma saidi"}
          numberDates={"2"}
          startDate={"3 / 7 / 2022"}
        ></ReservationItem>
      </ReservationList>
    </ReservationContainer>
  );
}

export default Reservation;

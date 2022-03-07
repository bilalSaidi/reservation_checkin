import styled from "styled-components";
import Reservation from "./components/Reservation";
import MakeReservation from "./components/MakeReservation";
import CheckInCutomer from "./components/CheckInCutomer";
const ContaienrApp = styled.div`
  display: flex;

  align-items: flex-start;
`;
const App = () => {
  return (
    <ContaienrApp>
      <MakeReservation />
      <Reservation />
      <CheckInCutomer />
    </ContaienrApp>
  );
};
export default App;

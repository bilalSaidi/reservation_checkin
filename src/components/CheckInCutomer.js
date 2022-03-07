import styled from "styled-components";
import CheckInItem from "./CheckInItem";
const CheckInCutomerContainer = styled.div`
  border-right: 1px solid black;
  flex: 2;
`;
const CheckInCutomerList = styled.ul`
  padding: 0;
`;
const CheckInCutomerListHeader = styled.h4`
  color: gray;
`;

function CheckInCutomer() {
  return (
    <CheckInCutomerContainer>
      <CheckInCutomerListHeader>
        Check In Cutomer List :
      </CheckInCutomerListHeader>
      <CheckInCutomerList>
        <CheckInItem
          username={"bilal saidi"}
          numberDates={"2"}
          startDate={"3 / 7 / 2022"}
        ></CheckInItem>
      </CheckInCutomerList>
    </CheckInCutomerContainer>
  );
}

export default CheckInCutomer;

import styled from "styled-components";

const Item = styled.li`
  background-color: white;
  color: black;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  list-style: none;
  margin: 10px;
  margin-left: 0;
`;
const UserName = styled.h4`
  text-transform: capitalize;
`;
const NumberDates = styled.span`
  display: block;
  margin-bottom: 5px;
`;
const StartDates = styled.span`
  color: darkcyan;
  font-size: 17px;
  font-weight: 600;
`;

const CheckInButtom = styled.button`
display:block;
padding:5px;
border-raduis:5px;
text-align;center;
background-color: #60a1f4;
border-color: #60a1f4;

`;
const ReservationItem = ({ username, numberDates, startDate }) => {
  return (
    <Item>
      <UserName>UserName : {username}</UserName>
      <NumberDates>Number Of Days : {numberDates}</NumberDates>
      <StartDates> Start Date :{startDate}</StartDates>
      <CheckInButtom>Check In</CheckInButtom>
    </Item>
  );
};

export default ReservationItem;

import styled from "styled-components";
const ReservationInputs = styled.div`
  border-right: 1px solid gray;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ReservationHeader = styled.h4`
  color: gray;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  &:focus {
    border: none;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const ReservationButtom = styled.button`
padding:5px;
margin:10px auto;
border-raduis:5px;
text-align;center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
function MakeReservation() {
  return (
    <ReservationInputs>
      <ReservationHeader>Entering New Customer :</ReservationHeader>
      <Input placeholder="User Name" type="string"></Input>
      <Input placeholder="Number Dates" type="number"></Input>
      <Label htmlFor="startdate">Start Date :</Label>
      <Input id="startdate" placeholder="Start Date" type="date"></Input>
      <ReservationButtom>Add New Customer</ReservationButtom>
    </ReservationInputs>
  );
}

export default MakeReservation;

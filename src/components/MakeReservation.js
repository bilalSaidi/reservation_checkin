import { useState } from "react";
import { dispatch, useDispatch } from "react-redux";
import styled from "styled-components";
import { addReservation } from "../app/features/reservationSlice";
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
const MakeReservation = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [numberdates, setNumberdates] = useState("");
  const [startdate, setStartdate] = useState("");
  const handleClickButton = () => {
    if (!username || !numberdates || !startdate)
      return alert("all filed are required");

    dispatch(
      addReservation({
        username: username,
        numberDates: numberdates,
        startDate: startdate,
      })
    );
    setUsername("");
    setNumberdates("");
    setStartdate("");
  };
  return (
    <ReservationInputs>
      <ReservationHeader>Entering New Customer :</ReservationHeader>
      <Input
        placeholder="User Name"
        type="string"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Input
        placeholder="Number Dates"
        type="number"
        value={numberdates}
        onChange={(e) => setNumberdates(e.target.value)}
      ></Input>
      <Label htmlFor="startdate">Start Date :</Label>
      <Input
        id="startdate"
        placeholder="Start Date"
        type="date"
        value={startdate}
        onChange={(e) => setStartdate(e.target.value)}
      ></Input>
      <ReservationButtom onClick={() => handleClickButton()}>
        Add New Customer
      </ReservationButtom>
    </ReservationInputs>
  );
};

export default MakeReservation;

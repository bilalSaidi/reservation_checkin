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
  display: block;
`;

const Input = styled.input`
  display: inline-block;
  margin-bottom: 10px;
  padding: 10px;
  &:focus {
    border: none;
  }
`;

const OptionButtom = styled.button`
padding:10px 15px;
margin:10px auto;
border-raduis:5px;
text-align;center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
cursor:pointer;
`;

const ListOfOptions = styled.ul``;
const Option = styled.li``;
function CheckInItem({ username, numberDates, startDate }) {
  return (
    <Item>
      <UserName>UserName : {username}</UserName>
      <NumberDates>Number Of Days : {numberDates}</NumberDates>
      <StartDates> Start Date :{startDate}</StartDates>
      <Input placeholder="Add Option : lunch .." type="string"></Input>
      <OptionButtom>Add </OptionButtom>
      <ListOfOptions>
        <Option>lunch</Option>
        <Option>swiming bool</Option>
      </ListOfOptions>
    </Item>
  );
}

export default CheckInItem;

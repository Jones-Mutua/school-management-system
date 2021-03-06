import styled from "styled-components";

export const NewStudent = styled.div`

    flex: 4;
  
  
  .newUserForm {
    display: flex;
    flex-wrap: wrap;
  }
  
  .newUserItem {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
  }
  
  .newUserItem > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  
  .newUserItem > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  
  .newUserGender > input {
    margin-top: 15px;
  }
  
  .newUserGender>label{
      margin: 10px;
      font-size: 18px;
      color: #555;
  }
  
  .newUserSelect{
      height: 40px;
      border-radius: 5px;
  }
  
  .newUserButton{
      width: 200px;
      border: none;
      background-color: darkblue;
      color: white;
      padding: 7px 10px;
      font-weight: 600;
      border-radius: 10px;
      margin-top: 30px;
      cursor: pointer;
  }
  .courseListEdit{
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

.courseListDelete{
    color: red;
    cursor: pointer;
}
`
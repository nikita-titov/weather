import styled from "styled-components";

export const App = styled.div`
  text-align: center;
`;

export const AppBlock = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const H1 = styled.h1`
  color: #000000;
  font-size: 35px;
  margin-bottom: 25px;
  font-weight: 500;
  font-family: "Comfortaa", cursive;
`;

export const H3 = styled.h3`
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  font-weight: 100;
`;

export const TextBlock = styled.div`
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 70px;
  padding: 40px;
  left: 50%;
  width: 35%;
  top: 50%;
  box-shadow: 0 0 35px 15px rgba(0, 0, 0, 0.15);
`;

export const TextBlockTitle = styled.div`
  width: 80%;
  margin-left: 10%;
  font-size: 30px;
  vertical-align: middle;
  padding: 0;
  outline: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid #333333;
  font-family: "Comfortaa", cursive;
`;

export const TextBlockInput = styled.input`
  width: 83%;
  font-size: 30px;
  vertical-align: middle;
  padding: 0;
  margin-right: 10px;
  outline: 0;
  padding-left: 11px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  border: 0px;
  font-family: "Comfortaa", cursive;
`;

export const TextBlockButton = styled.button`
  width: auto;
  font-size: 20px;
  vertical-align: middle;
  padding: 8px;
  margin-right: 10px;
  outline: 0;
  font-weight: 500;
  border: 1px solid #333333;
  background: 0 0;
  font-family: "Comfortaa", cursive;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: white;
    transition: 1s ease-out;
  }
`;

export const TextBlockTitleH5 = styled.h5`
  color: red;
  font-family: "Comfortaa", cursive;
`;

export const WheatherBlockH3 = styled.h3`
  font-size: 30px;
  font-family: "Comfortaa", cursive;
`;

export const WheatherUl = styled.ul`
  padding: 0px;
`;

export const WheatherLi = styled.li`
  list-style: none;
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  font-weight: 100;
  text-align: left;
  line-height: 30px;
`;

export const WheatherBlock = styled.div``;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;
`;

export const Tags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: "Comfortaa", cursive;
`;

export const TagsLi = styled.li`
  display: inline-block;
  margin: 5px;
  padding: 10px;
  background: #a0a3a7;
  color: #f4f4f4;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }
`;

export const TagsI = styled.ul`
  float: right;
  padding-left: 6px;
  cursor: pointer;
`;

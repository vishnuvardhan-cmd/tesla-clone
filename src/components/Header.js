import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

export const Header = () => {

  const [show, setShow] = React.useState(false);
  const cars=useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(<a href="#" key={index}>{car}</a>))}
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Tesla Account</a>
        <CustomMenu onClick={() => setShow(true)}></CustomMenu>
        {show && (
          <BurgerMenu>
            <CloseWrapper>
              <Close onClick={() => setShow(false)}></Close>
            </CloseWrapper>
            {cars && cars.map((car,index)=>(<li>
              <a href="#" key={index}>{car}</a>
            </li>
            ))}
            <li>
              <a href="#">Exsisting Inventory</a>
            </li>
            <li>
              <a href="#">Used Inventory</a>
            </li>
            <li>
              <a href="#">Trade in</a>
            </li>
            <li>
              <a href="#">CyberTruck</a>
            </li>
            <li>
              <a href="#">Roadaster</a>
            </li>
          </BurgerMenu>
        )}
      </RightMenu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  // width: -webkit-fill-available;
  top: 0;
  right: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-widht: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  list-style: none;
  padding: 20px 0;
  width: 300px;
  color: black;
  text-align: left;
  li {
    padding: 15px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

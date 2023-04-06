import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  max-width: 646px;
  height: 100vh;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
`;

export const LogoImage = styled.img``;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
`;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

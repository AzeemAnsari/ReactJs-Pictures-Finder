import styled from 'styled-components';

export const MainWrap = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  max-width: 12rem;
`;

export const LandingCotainer = styled.div`
  text-align: center;
  .landingIcon {
    width: 35vh;
    height: 30vh;
    margin-top: 14vh;
    transform: rotate(-22deg);
    color: #d1d9e6;
    filter: drop-shadow(2px 4px 4px #b8b9be);
    @media screen and (min-width: 1600px) {
      margin-top: 24vh;
    }
    @media screen and (max-width: 576px) {
      margin-top: 6vh;
    }
  }
  h2 {
    color: #d1d9e6;
  }
`;

export const DownloadBtn = styled.a`
  position: absolute;
  top: 15px;
  right: 15px;
`;

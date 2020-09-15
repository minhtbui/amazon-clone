import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Switch from 'react-switch';
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

const Button = styled.button`
    {
      background: ${({ theme }) => theme.body};
      border: 2px solid ${({ theme }) => theme.toggleBorder};
      border-radius: 30px;
      cursor: point;
      font-size: 0.8rem;
      padding: 0.6ren;
   }
`;

function Toggler({ theme, toggleTheme }) {
   return (
      <Switch
         onChange={toggleTheme}
         checked={theme === 'dark' ? true : false}
         onColor='#222222'
         onHandleColor='#535353'
         offColor='#F3F3F3'
         offHandleColor='#f0c14b'
         checkedIcon={
            <NightsStayOutlinedIcon
               style={{
                  height: '100%',
                  fontSize: 20,
                  paddingLeft: 5,
               }}
            />
         }
         uncheckedIcon={
            <Brightness6OutlinedIcon
               style={{
                  height: '100%',
                  paddingLeft: 5,
                  fontSize: 20,
                  color: '#a88734',
               }}
            />
         }
      />
   );
}
Toggler.propTypes = {
   theme: string.isRequired,
   toggleTheme: func.isRequired,
};

export default Toggler;

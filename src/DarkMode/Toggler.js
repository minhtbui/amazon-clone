import React from 'react';
import { func, string } from 'prop-types';
import Switch from 'react-switch';
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

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

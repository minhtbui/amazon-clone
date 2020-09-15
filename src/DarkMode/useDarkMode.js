import { useStateValue } from '../ContextAPI/StateProvider';

function useDarkMode() {
   const [{ theme }, dispatch] = useStateValue();

   // set theme state in local storage for revisit or refresh
   const setMode = (mode) => {
      window.localStorage.setItem('theme', mode);
      dispatch({
         type: 'SET_MODE',
         theme: mode,
      });
   };

   // toggle between light and dark mode
   const themeToggler = () => {
      theme === 'light' ? setMode('dark') : setMode('light');
   };

   // check on component mounting which theme was selected
   //    const localTheme = () => {};

   return [theme, themeToggler];
}

export default useDarkMode;

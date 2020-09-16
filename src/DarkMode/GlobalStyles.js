import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
}
.product, .checkout, .subtotal, .payment, .order {
    background-color: ${({ theme }) => theme.div};
    transition: all 0.5s linear;

}
.login  {

    &__logo{
        transition: all 0.5s linear;

        background-image: ${({ theme }) => theme.backgroundImage};
    }
    &__container{
        background: ${({ theme }) => theme.div};
    }
}

`;

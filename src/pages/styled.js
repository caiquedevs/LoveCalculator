import styled from 'styled-components';

export const Main = styled.main`
   width: 100%;
   height: 100vh;
   padding-top: 130px;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;

   form {
      width: 100%;
      max-width: 450px;
      height: 400px;
      border-radius: 5px 5px 100px 100px;
      background: #ffffff;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

      div.FadeIn {
         width: 100%;
         height: auto;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         padding-top: 120px;

         div:nth-child(1) {
            width: 100%;
            position: absolute;
            top: -125px;

            img {
               max-width: 100%;
               margin: 0 auto;
               display: block;
            }
         }

         h1 {
            font-family: 'Bungee', cursive;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            color: #f970a3;
         }

         input {
            display: ${props => (props.visibility ? 'block' : 'none')};
            width: 251px;
            min-height: 30px;
            margin-top: 25px;
            border: none;
            border-bottom: 1px solid #cccccc;
            font-size: 15px;
            line-height: 16px;
            color: #626262;

            ::-webkit-input-placeholder {
               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
               font-weight: normal;
               font-size: 14px;
               line-height: 16px;
               color: #cccccc;
            }
         }

         button {
            width: 176px;
            height: 60px;
            margin-top: 45px;
            border: none;
            border-radius: 30px 10px;
            font-size: 13px;
            line-height: 16px;
            color: #ffffff;
            background: #ef4484;

            :hover {
               opacity: 0.8;
            }
         }

         button#calc {
            display: ${props => (props.visibility ? 'block' : 'none')};
         }

         button#back {
            visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
            margin-top: ${props => (props.visibility ? '0' : '55px')};
         }

         h2,
         h2 strong {
            visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
            margin-top: ${props => (props.visibility ? '0' : '50px')};
            font-weight: normal;
            font-size: 45px;
            line-height: 50px;
            color: #cccccc;
         }
      }
   }

   @media screen and (min-width: 992px) {
   }

   @media screen and (min-width: 768px) and (max-width: 991px) {
   }

   @media screen and (min-width: 576px) and (max-width: 767px) {
   }

   @media screen and (min-width: 0px) and (max-width: 575px) {
      form {
         box-shadow: none;

         div.FadeIn {
            h1 {
               font-size: 13px;
            }
            div:nth-child(1) img {
               max-width: 80%;
            }
         }
      }
   }
`;

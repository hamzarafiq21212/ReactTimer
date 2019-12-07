
const setBgAction = (payload) => {
    return {
      type: "bgChange",
      payload
    }
  }
  export default setBgAction;

// export const pomodoro = ({value = 25, seconds = '00' }) => {
//    return {
//        type: POMODORO,
//        payload: {
//            value,
//            seconds,
//        },
//    };
// };

// export const shortBreak = ({value2 = 5, seconds2 = '00' }) => {
//     return {
//         type: SHORT_BREAK,
//         payload: {
//             value2,
//             seconds2,
//         },
//     };
// };



// import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actionTypes/app';

// export const openSnackbar = ({message = '', timeout = 2500 }) => {
//    return {
//        type: OPEN_SNACKBAR,
//        payload: {
//            message,
//            timeout,
//        },
//    };
// };

// export const closeSnackbar = () => {
//     return {
//         type: CLOSE_SNACKBAR,
//     };
// };
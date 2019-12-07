export default (state, action) => {
    switch (action.type) {
      case "bgChange":
        return {
          ...state,
          bgColor: action.payload
        };
      // case "colorChange":
      //   return {
      //     ...state,
      //     activeColor: action.payload
      //   };
      default:
        return state;
    }
  };





// import {POMODORO, SHORT_BREAK } from '../actionTypes/app'

// const initialstate = {
//       value: 25,  seconds: '00',
//       value2: 5,  seconds2: '00',    
// };

// export const appReducer = (prevState = initialstate, action) => {
//     switch(action.type) {
//         case POMODORO: {
//             const { value, seconds } = action.payload;
//             return {
//                 ...prevState,
//                 // snackbar: {
//                 //     ...prevState.snackbar,
//                     value,
//                     seconds,
//                 // },
//             };
//         }
//         case SHORT_BREAK: {
//             const { value2, seconds2 } = action.payload;
//             return {
//                 ...prevState,
//                 // snackbar: {
//                 //     ...prevState.snackbar,
//                     value2,
//                     seconds2,
//                 // },
//             };
//         }
//         default:
//         return { ...initialstate };
//     }
// };


// import {OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actionTypes/app'

// const initialstate = {
//     snackbar: {
//         isOpen: false,
//         message: '',
//         timeout: 4000,
//     },
// };

// export const appReducer = (prevState = initialstate, action) => {
//     switch(action.type) {
//         case OPEN_SNACKBAR: {
//             const { message, timeout } = action.payload;
//             return {
//                 ...prevState,
//                 snackbar: {
//                     ...prevState.snackbar,
//                     isOpen: true,
//                     message,
//                     timeout,
//                 },
//             };
//         }
//         case CLOSE_SNACKBAR: {
//             return {
//                 ...prevState,
//                 snackbar: {
//                     ...prevState.snackbar,
//                     isOpen: false,
//                 },
//             };
//         }
//         default:
//         return { ...initialstate };
//     }
// };
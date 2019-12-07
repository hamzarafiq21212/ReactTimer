
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

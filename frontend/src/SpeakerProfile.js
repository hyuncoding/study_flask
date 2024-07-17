// import React from "react";

// class SpeakerProfile extends React.Component {
//     render() {
//         return (
//             <h1>
//                 This is the class component expression from Speaker Profile!
//             </h1>
//         );
//     }
// }
// export default SpeakerProfile;

// 위 코드는 아래와 같이 function component로 대체할 수 있다.
import react from "react";
const SpeakerProfile = () => {
    return (
        <h1>This is a function component equivalent to a class component !</h1>
    );
};
export default SpeakerProfile;

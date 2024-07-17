// // import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// // import SpeakerProfile from "./SpeakerProfile";
// // import SearchSpeaker from "./SearchSpeaker/SearchSpeaker";

// // function App() {
// //     return (
// //         <div>
// //             <SearchSpeaker></SearchSpeaker>
// //         </div>
// //     );
// // }
// // export default App;

// // function SpeakerProfile(props) {
// //     return (
// //         <>
// //             <h3>{props.name}</h3>
// //             <p>Position: {props.jobTitle}</p>
// //             <p>Company: {props.company}</p>
// //         </>
// //     );
// // }
// // Parent component
// // function App() {
// //     return (
// //         <>
// //             <h1>Speaker Profile</h1>
// //             {/* Child component with attributes
// //              name, jobTitle and company inside parent component
// //             */}
// //             <SpeakerProfile
// //                 name="Juliet Runolf"
// //                 jobTitle="Director, Marketing"
// //                 company="Abernathy Group"
// //             />
// //         </>
// //     );
// // }
// // export default App;

// // // const speakerName = "홍길동";
// // function App() {
// //     // const speakerName = "홍길동";
// //     return (
// //         // <div className="App">
// //         //   <header className="App-header">
// //         //     <img src={logo} className="App-logo" alt="logo" />
// //         //     <p>
// //         //       Edit <code>src/App.js</code> and save to reload.
// //         //     </p>
// //         //     <a
// //         //       className="App-link"
// //         //       href="https://reactjs.org"
// //         //       target="_blank"
// //         //       rel="noopener noreferrer"
// //         //     >
// //         //       Learn React
// //         //     </a>
// //         //   </header>
// //         // </div>
// //         // <div>
// //         //     <h1>Welcome to Bizza Platform, {speakerName}</h1>
// //         // </div>
// //         // <div style={{ backgroundColor: "gray", margin: 20, color: "white" }}>
// //         //     <SpeakerProfile></SpeakerProfile>
// //         // </div>
// //     );
// // }

// // export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Andrew",
//         };
//         this.updateNameState = this.updateNameState.bind(this);
//         this.hideNameState = this.hideNameState.bind(this);
//     }
//     updateNameState() {
//         this.setState({
//             name: "Andrew Peter",
//         });
//     }
//     hideNameState() {
//         this.setState({
//             name: "Andrew",
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.name}</p>
//                 <button onClick={this.updateNameState}>
//                     Display Full Name
//                 </button>
//                 <button onClick={this.hideNameState}>Hide Full Name</button>
//             </div>
//         );
//     }
// }
// export default App;

// import React, { useState } from "react";
// const App = () => {
//     const [count, setCount] = useState(0);
//     const handleIncrementByTen = () => {
//         setCount(count + 10);
//     };
//     const handleDecrementByTen = () => {
//         setCount(count - 10);
//     };
//     const resetCountHandler = () => {
//         setCount(0);
//     };
//     return (
//         <div>
//             Initial Count: {count}
//             <hr />
//             <div>
//                 <button type="button" onClick={handleIncrementByTen}>
//                     Increment by 10
//                 </button>
//                 <button type="button" onClick={handleDecrementByTen}>
//                     Decrement by 10
//                 </button>
//                 <button type="button" onClick={resetCountHandler}>
//                     Reset to Initial State
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default App;

// import React, { useState } from "react";

// const ParentComponent = () => {
//     const [count, setCount] = useState(0);
//     const handleIncrementByTen = () => {
//         setCount(count + 10);
//     };
//     return (
//         <div>
//             <p>Parent Count: {count}</p>
//             <ChildComponent count={count} />
//             <button onClick={handleIncrementByTen}>Increment</button>
//         </div>
//     );
// };
// const ChildComponent = ({ count }) => {
//     return <p>Child Count: {count}</p>;
// };
// export default ParentComponent;

// import React, { useState } from "react";
// const DashBoard = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const handleLogin = () => {
//         setIsLoggedIn(true);
//     };
//     const handleLogout = () => {
//         setIsLoggedIn(false);
//     };
//     return (
//         <div>
//             {isLoggedIn ? (
//                 <button onClick={handleLogout}>Logout</button>
//             ) : (
//                 <button onClick={handleLogin}>Login</button>
//             )}
//             {isLoggedIn && <p>Hey friend, welcome!</p>}
//             {!isLoggedIn && <p>Please log in to continue.</p>}
//         </div>
//     );
// };

// export default DashBoard;

// import React, { useEffect, useState } from "react";

// const App = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const API_URL = "https://dummyjson.com/users";

//         const fetchSpeakers = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 const data = await response.json();

//                 setData(data.users);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchSpeakers();
//     }, []);

//     return (
//         <>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>
//                         {item.firstName} {item.lastName}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };
// export default App;

// import React, { useState } from "react";

// const App = () => {
//     const [speakerName] = useState("Fred Morris");
//     return (
//         <div>
//             <h2>This is Parent Component</h2>
//             <ImmediateChildComponent speakerName={speakerName} />
//         </div>
//     );
// };
// function ImmediateChildComponent({ speakerName }) {
//     return (
//         <div>
//             <h2>This is an immediate Child Component</h2>
//             <hr />
//             <GrandChildComponent speakerName={speakerName} />
//         </div>
//     );
// }
// function GrandChildComponent({ speakerName }) {
//     return (
//         <div>
//             <h3>This is a Grand Child Component</h3>
//             <h4>Speakers Name: {speakerName}</h4>
//         </div>
//     );
// }
// export default App;

// import React, { useState, useContext } from "react";
// const context = React.createContext(null);
// const App = () => {
//     const [speakerName] = useState("Fred Morris");

//     return (
//         <context.Provider value={{ speakerName }}>
//             <h1>This is Parent Component</h1>
//             <ImmediateChildComponent />
//         </context.Provider>
//     );
// };

// function ImmediateChildComponent() {
//     return (
//         <div>
//             <h2>This is an immediate Child Component</h2>
//             <hr />
//             <GrandChildComponent />
//         </div>
//     );
// }

// function GrandChildComponent() {
//     const { speakerName } = useContext(context);
//     return (
//         <div>
//             <h3>This is a Grand Child Component</h3>
//             <h4>Speakers Name: {speakerName}</h4>
//         </div>
//     );
// }

// export default App;

// import React, { useRef } from "react";
// const App = () => {
//     const inputRef = useRef(null);
//     const clickButton = () => {
//         inputRef.current.focus();
//     };
//     return (
//         <>
//             <input ref={inputRef} type="text" />
//             <button onClick={clickButton}>click to Focus on input</button>
//         </>
//     );
// };
// export default App;

// import { useReducer, useEffect } from "react";
// import axios from "axios";

// const initialState = {
//     isLoading: false,
//     error: null,
//     data: null,
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "getEventSchedule":
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case "getEventScheduleSuccess":
//             return {
//                 ...state,
//                 isLoading: false,
//                 data: action.payload,
//             };
//         case "getEventScheduleFailure":
//             return {
//                 ...state,
//                 isLoading: false,
//             };
//         default:
//             return state;
//     }
// };

// const App = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     console.log("render", state);
//     useEffect(() => {
//         dispatch({ type: "getEventSchedule" });
//         axios
//             .get("http://localhost:8000/schedules/")
//             .then((response) => {
//                 console.log("response", response);
//                 dispatch({
//                     type: "getEventScheduleSuccess",
//                     payload: response.data,
//                 });
//             })
//             .catch(() => {
//                 dispatch({ type: "getEventScheduleFailure" });
//             });
//     }, []);
//     return (
//         <div>
//             <h2>Event Schedules</h2>
//             {state.isLoading && <div>Loading...</div>}
//             <ul>
//                 {state.data &&
//                     state.data.map((schedule) => (
//                         <li key={schedule.id}>
//                             Time: {schedule.time} <br />
//                             Speaker:{schedule.speaker}
//                             <br />
//                             Subject: {schedule.subjectTitle}
//                             <br />
//                             Venue: {schedule.venue}
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// };

// export default App;

// import React, { useState, useMemo } from "react";
// const speakers = [
//     { id: 10, name: "John Lewis" },
//     { id: 11, name: "Mable Newton" },
// ];
// const App = () => {
//     const [text, setText] = useState("");
//     const [searchTerm, setSearchTerm] = useState("");
//     const onChangeText = (e) => {
//         setText(e.target.value);
//     };
//     console.log("Text", text);
//     const handleClick = () => {
//         setSearchTerm(text);
//     };
//     console.log("Search Term", text);
//     // const filteredSpeakers = speakers.filter((speaker) => {
//     //     console.log("Filtering speakers...");
//     //     return speaker.name.toLowerCase().includes(searchTerm.toLowerCase());
//     // });
//     const filteredSpeakers = useMemo(
//         () =>
//             speakers.filter((speaker) => {
//                 console.log("Filtering speakers...");
//                 return speaker.name
//                     .toLowerCase()
//                     .includes(searchTerm.toLowerCase());
//             }),
//         [searchTerm]
//     );

//     return (
//         <div>
//             <div>
//                 <input type="text" onChange={onChangeText} />
//                 <button onClick={handleClick}>Search</button>
//             </div>
//             {filteredSpeakers.map((filteredSpeaker) => (
//                 <li key={filteredSpeaker.id}>{filteredSpeaker.name}</li>
//             ))}
//         </div>
//     );
// };

// export default App;

// import React, { useState, useCallback } from "react";
// import { v4 as uuid } from "uuid";

// const App = () => {
//     console.log("Rendering process for: App Component");
//     const [speakers, setSpeakers] = useState([
//         { id: "1", name: "Brown Lewis" },
//         { id: "2", name: "Micheal John" },
//         { id: "3", name: "Donald Bolton" },
//         { id: "4", name: "Ambrov Lee" },
//     ]);

//     const [text, setText] = useState("");

//     const handleTextInput = (e) => {
//         setText(e.target.value);
//     };

//     const handleAddSpeaker = () => {
//         setSpeakers(speakers.concat({ id: uuid(), name: text }));
//     };

//     const handleRemoveSpeaker = useCallback(
//         (id) => setSpeakers(speakers.filter((user) => user.id !== id)),
//         [speakers]
//     );
//     return (
//         <div>
//             <input type="text" value={text} onChange={handleTextInput} />
//             <button type="button" onClick={handleAddSpeaker}>
//                 + Add a Speaker
//             </button>

//             <List list={speakers} onRemove={handleRemoveSpeaker} />
//         </div>
//     );
// };

// const List = React.memo(({ list, onRemove }) => {
//     console.log("Rendering process for: List Component");
//     return (
//         <ul>
//             {list.map((item) => (
//                 <ListItem key={item.id} item={item} onRemove={onRemove} />
//             ))}
//         </ul>
//     );
// });

// const ListItem = React.memo(({ item, onRemove }) => {
//     console.log("Rendering process for: ListItem Component");
//     return (
//         <li>
//             {item.name}
//             <button type="button" onClick={() => onRemove(item.id)}>
//                 Remove
//             </button>
//         </li>
//     );
// });

// export default App;

// import React from "react";
// import useFetchSpeakers from "./useFetchSpeakers";

// const App = () => {
//     const API_URL = "https://dummyjson.com/users";
//     const [data] = useFetchSpeakers(API_URL);
//     return (
//         <>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>
//                         {item.id}. {item.firstName} {item.lastName}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [data, setData] = useState([]);
//     const getSpeakers = () => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => {
//                 setData(data);
//             });
//     };
//     useEffect(() => {
//         getSpeakers();
//     }, []);
//     return (
//         <>
//             <h1>Displaying Speakers Information</h1>
//             <ul>
//                 {data.map((speaker) => (
//                     <li key={speaker.id}>
//                         {speaker.name}, <em> {speaker.email}</em>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };
// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//     const [data, setData] = useState([]);
//     const API_URL = "https://dummyjson.com/users";
//     const fetchSpeakers = async () => {
//         try {
//             const response = await fetch(API_URL);
//             const data = await response.json();
//             setData(data.users);
//         } catch (error) {
//             console.log("error", error);
//         }
//     };
//     useEffect(() => {
//         fetchSpeakers();
//     }, []);
//     return (
//         <>
//             [Text Wrapping Break]
//             <h1>Displaying Speakers Information</h1>
//             [Text Wrapping Break]
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>
//                         {item.firstName} {item.lastName}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//     const [data, setData] = useState([]);
//     const getSpeakers = () => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then((response) => {
//                 setData(response.data);
//             });
//     };
//     useEffect(() => {
//         getSpeakers();
//     }, []);
//     return (
//         <>
//             <h1>Displaying Speakers Information</h1>
//             <ul>
//                 {data.map((speaker) => (
//                     <li key={speaker.id}>
//                         {speaker.name}, <em>{speaker.email}</em>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };
// export default App;

// import { useQuery } from "react-query";
// import axios from "axios";
// function App() {
//     const { data, isLoading, error } = useQuery("speakers", () =>
//         axios("https://jsonplaceholder.typicode.com/users")
//     );
//     if (error) return <h4>Error: {error.message}, retry again</h4>;
//     if (isLoading) return <h4>...Loading data</h4>;
//     console.log(data);
//     return (
//         <>
//             <h1>Displaying Speakers Information</h1>
//             <ul>
//                 {data.data.map((speaker) => (
//                     <li key={speaker.id}>
//                         {speaker.name}, <em> {speaker.email} </em>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }
// export default App;

// import React, { useState } from "react";
// const App = () => {
//     const [username, setUsername] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Username:${username}, Name: ${name} and Email:
//             ${email} submitted`);
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username"> Username</label>
//                 <br />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="name">Name</label>
//                 <br />
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="email"> Email</label>
//                 <br />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br />
//                 <button>Submit</button>
//             </form>
//             <div>
//                 <p>Username: {username}</p>
//                 <p>Name: {name}</p>
//                 <p>Email: {email}</p>
//             </div>
//         </div>
//     );
// };
// export default App;

// import React from "react";
// import Speakers from "./pages/HomePage/HomePage";

// const App = () => {
//     return <HomePage />;
// };

// export default App;

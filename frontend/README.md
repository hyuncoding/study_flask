# React

### React app 생성

-   `npx create-react-app [프로젝트명]`으로 생성한다.
-   이후 터미널에 `cd [프로젝트명]`을 입력하고 `code .`으로 vs code를 연다.

-   자동으로 react 환경이 구축되며, 각 폴더는 아래와 같은 역할을 담당한다.
-   `node_modules/`: `Create React App tool`과 함께 설치된 모든 node package가 들어있다. dependencies와 devdependencies가 들어있으며,  
    추후 설치할 다른 패키지들도 이 폴더에 보관된다.
-   `public/`: `public/index.html`이나 `public/manifest.json` 등의 중요한 public 파일이 보관된다.
-   `index`파일은 app이 개발 환경일 때 혹은 hosted domain일 때 `localhost:3000`에 표시된다.
-   이 파일은 React component들의 실행 결과를 index 파일의 루트 div container에 넣는다.
-   `manifest.json` 파일은 어플리케이션의 메타데이터나 반응형 화면을 위한 세부 내용을 담고 있다.

-   `src/`: 80% 이상의 코딩은 여기에서 이루어진다. component들과 `App.js`, `App.css`, `index.css`, `App.test.js`, `index.js`  
    등이 포함된다.
-   App.js는 component를 구현하기 위해 사용된다. 어플리케이션의 규모가 작을 경우 App.js 하나에 모든 component 코드가 들어갈 수 있지만, 규모가 커질 경우 split하는 게 더 좋을 수 있다.
-   App.css는 component를 스타일링하는 데 사용된다. index.css도 마찬가지이며, 이때는 전체적인 어플리케이션 스타일링에 사용된다.
-   App.test.js 는 단위테스트에 사용된다.
-   index.js는 어플리케이션으로의 entry point이다.

-   package.json은 node package dependencies와 프로젝트에 사용되는 다른 메타데이터를 담는다. npm을 사용하는 다른 컴퓨터에서의 세팅을 더 손쉽게 해준다.
-   package-lock.json은 npm으로 설치된 패키지의 버전을 담는다.

-   **터미널에 `npm start`를 입력하여 기본 어플리케이션을 run할 수 있다.**

### 화살표 함수 (Arrow Function, ES6 기능)

-   간단한 내용이지만 주의할 점은 아래와 같다.
-   object method(객체 메소드)에서 화살표 함수는 own context를 가지지 않으므로 객체 안의 다른 프로퍼티에 정상적으로 접근하지 못한다.

          const speaker = {
              name: 'Alice Andrew',
              sayHi: function () {
                  console.log(`Hi, I'm ${this.name}!`);
              }
          }
          speaker.sayHi(); // output: Hi, I'm Alice Andrew!

          // 화살표 함수 사용 시
          const speaker = {
              name: 'Alice Andrew',
              sayHi: () => {
                  console.log(`Hi, I'm ${this.name}!`);
              }
          }
          speaker.sayHi(); // output: Hi, I'm undefined!

### 비구조화 (Destructuring, ES6 기능)

-   비구조화를 사용하면 코드를 간결하게 작성할 수 있다.

          const speakers = ["John", "Walke", "Dan", "Sophie"];
          const firstspeakerName = speakers[0];
          const secondspeakerName = speakers[1];
          const thirdspeakerName = speakers[2];
          const fourthspeakerName = speakers[3];
          console.log(firstspeakerName); // "John"
          console.log(secondspeakerName); // "Walke"
          console.log(thirdspeakerName); // "Dan"
          console.log(fourthspeakerName); // "Sophie"

          // 비구조화 사용 시
          const speakers = ["John", "Walke", "Dan", "Sophie"];
          const [firstspeakerName, secondspeakerName, thirdspeakerName, fourthspeakerName] = speakers;
          console.log(firstspeakerName); // "John"
          console.log(secondspeakerName); // "Walke"
          console.log(thirdspeakerName); // "Dan"
          console.log(fourthspeakerName); // "Sophie"

-   또한 `...rest`를 사용하여 특정 원소만 제외하고 가져올 수도 있다.

        const speakers = ["John", "Walke", "Dan", "Sophie"];
        const [, ...rest] = speakers; // ...는 spread operator(스프레드 연산자)라고 불린다.
        console.log(rest); // output: "Walke", "Dan", "Sophie" (John은 생략된다)

-   배열이 아닌 객체에서도 비구조화가 가능하다.

          const speakers = {
              id: 1,
              name: "Juliet Runolf",
              company: "Abernatny Group",
              address: {
                  street: "Okaland Dtuse",
                  city: "Greenland",
                  state: "Houston",
                  country: "USA",
              }
          };

          function App() {
              const {name, jobTitle, company, address} = speakers; // 비구조화
              const {street, city, state, country} = address; // nested된 address 프로퍼티를 다시 비구조화
              return (
                  <div>
                      <h2>Name: {name}</h2>
                      <h4>Position: {jobTitle}</h4>
                      <h4>Company: {company}</h4>
                      <h4>Street: {street}</h4>
                      <h4>City: {city}</h4>
                      <h4>State: {state}</h4>
                      <h4>Country: {country}</h4>
                  </div>
              );
          }

-   비구조화는 프로퍼티에 default value를 설정하는 것도 허용한다.

          const {name = 'Anonymous', age = 0} = speaker;

-   비구조화는 component에서 `props`과 `state`에 접근할 때 사용한다.

### Default and named exports

-   각 파일 당 하나의 default export만 가능하다.

          import Speaker from './Speaker';

-   그리고 export할 파일에 아래와 같은 코드를 작성한다.

          function App() {
              return (
                  <div> ... </div>
              );
          }

          export defalt App; // 이 line이 바로 파일을 다른 컴포넌트 파일로 export할 수 있게 해주는 line이다.

-   named export는 한 파일 당 여러 개가 가능하다.

          import { FirstComponent, SecondComponent } from "./ThirdComponent";

### Components

-   component는 React 어플리케이션의 **'core building block'**이다.
-   vanilla javascript로 `DOM`을 다룰 때에는 시간도, 노력도 많이 들 수 있다.
-   React에서는 `virtual DOM`을 사용하여 이 문제를 해결한다. DOM은 전체 DOM tree를 update하는 대신 바뀐 부분만 update한다.
-   React 컴포넌트는 **재사용이 가능하고, 유지가 가능하며, self-contained 되어 있고 UI를 return**한다.
-   즉, 컴포넌트는 javascript와 함께 HTML 요소를 return한다.

-   `class component`보다 `function component`가 더 많이 사용되는 추세이다.

-   App 컴포넌트는 HTML 코드를 return하는데, 이때 HTML 코드는 HTML과 Javascript가 섞여 있는 형태이다.
-   이를 `JavaScript XML (JSX)`라고 부른다.

### Function component

-   전형적인 JS 함수 형태이지만, props로 데이터를 전달받고 JSX 형태의 HTML 요소를 리턴하는 컴포넌트 종류이다.
-   function component 안에 선언한 변수 뿐만 아니라 밖에 선언한 변수 또한 return하는 HTML 요소 안에서 사용할 수 있다.
-   변수는 {변수이름}의 형태로 사용한다.

### Class component

-   React는 함수나 클래스를 통해 UI 컴포넌트를 만들 수 있는 유연함을 제공한다.
-   class component는 `React.Component` 를 상속받는 JS 클래스로서, `render()`메소드를 호출하여 HTML 요소를 리턴한다.
-   Hooks가 나오기 전까지 state를 관리할 수 있는 유일한 방법이었다.

### 두 컴포넌트의 차이

-   Class component에서는 반드시 `React.Component` 를 상속받은 후 `render()`메소드를 호출해야 한다.
-   반면 function component에서는 `props`를 매개변수로 전달 받고 HTML요소를 리턴한다.
-   class component는 stateful, function component는 stateless가 특징이다. 다만, Hooks의 등장 이후 function component도  
    stateful하는 것이 가능해졌다.
-   stateful과 stateless의 차이는 'state'를 가지고 있느냐의 여부이다.

-   class component에서는 `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`등의 lifecycle 메소드를  
    사용할 수 있지만, function component에서는 불가능하다.

### Component life cycle

-   React에서 component는 `mounting` - `updating` - `unmounting`의 3단계 life cycle을 가진다.

#### Mounting Phase

-   component 인스턴스가 생성되고 DOM에 삽입되는 단계이며, 4가지 메소드가 존재한다.
-   `constructor()`

    -   실제로는 component가 mount되기 전에 호출된다.
    -   이 메소드를 호출할 때 `props`를 매개변수로 받을 수 있다.
    -   `super(props)`로 이어진다.
    -   이 메소드의 목적은 크게 2가지이다.
    -   첫 번째는 state 초기화이다.
    -   `this.state` 객체를 정의하고, 그 객체에 초기값을 할당하는 과정이며, `state`는 컴포넌트의 동적인  
        데이터를 저장하고 관리하는 데 사용된다.
    -   두 번째 목적은 인스턴스 메소드 바인딩이다.
    -   `constructor()` 안에서 클래스 메소드를 컴포넌트 인스턴스에 바인딩할 수 있으며, 이는 이벤트 핸들러를  
        정의할 때 중요하다.
    -   위 두 가지 목적은 컴포넌트가 올바르게 동작하고, 초기화된 상태를 가지고 있으며,  
        인스턴스 메소드가 올바르게 바인딩되어 예상한 대로 동작하도록 보장한다.

-   `static getDerivedStateFromProps()`

    -   DOM에서 요소들을 render하기 전에 즉시 호출된다.

-   `render()`

    -   가장 필수적인 메소드로, React HTML 요소를 출력하기 위해 항상 필요하다.
    -   DOM에 HTML을 주입한다.
    -   인터페이스에서 보이는 것들은 이 메소드가 JSX 형태로 무엇을 return하는지에 의존한다.

-   `componentDidMount()`
    -   컴포넌트가 DOM 트리에 render된 후에, 특히 첫 번째 `render()` 호출 후에 이 메소드가 초기화된다.
    -   컴포넌트가 mount되면 사용자의 액션과 다른 부가 효과들을 실행할 수 있도록 해준다.
    -   예를 들어, 이 메소드는 외부 소스로부터 데이터를 로드해야하는 statement를 실행할 수 있다.
    -   또한 컴포넌트가 render되고 나면 사용자 또는 시스템 이벤트를 trigger할 수 있다.

#### Updating Phase

-   컴포넌트가 초기 마운트 이후에 어떻게 변하는지를 비유적으로 "가상의 성장 단계(hypothetical  
    growing phase)"라고 할 수 있다.
-   mounting phase 이후 즉시 이루어진다.
-   `componentDidUpdate()` 메소드가 주로 사용된다.
-   data state나 props에 변화가 있을 때마다 컴포넌트가 업데이트된다.
-   state는 `render()` 메소드를 사용하여 re-render되며, 업데이트된 state가 UI에 리턴된다.
-   이전의 가상 DOM과 새로운 가상 DOM을 비교하여 실제 DOM에 필요한 최소한의 변경 사항만 적용한다.
-   이 과정은 매우 효율적으로 수행되며, 필요 없는 업데이트를 방지하여 성능을 최적화한다.

#### Unmounting Phase

-   컴포넌트가 DOM 트리에서 unmount되기 직전에 `componentWillUnmount()` 메소드가 호출된다.
-   사용자 interaction 사이클의 모든 지점에서, 컴포넌트는 DOM 트리에 삽입되거나 상태가 변경되거나  
    생명 주기(life cycle)가 완료된다.

### Props

-   함수와 클래스 컴포넌트에 전달되는 매개변수를 가리킨다.
-   즉, 하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달하기 위해 사용하며,  
    속성의 값을 저장하는 객체를 가리킨다.
-   컴포넌트를 customize하고 configure하는 데 사용되며, 컴포넌트 트리에서 부모로부터 자식으로  
    전달된다. 이는 **부모 컴포넌트만 자식 컴포넌트로 정보를 전달할 수 있음**을 의미한다.
-   즉, 단방향 데이터 flow 개념이다.
-   본질적으로 `read-only`이며, 받는 컴포넌트에서는 값을 직접적으로 수정할 수 없다.

### State

-   state는 빌트인 객체로, 컴포넌트에 대한 정보를 담기 위해 사용된다.
-   컴포넌트의 상호 작용을 담당한다.
-   컴포넌트 state에 변화가 생기면 react는 컴포넌트를 re-render한다.
-   사용자 액션에 대한 반응이나 시스템에서 발생시킨 이벤트에 따라 state가 변화할 수 있다.
-   `props`가 본질적으로 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달한다면,  
    `state`는 컴포넌트의 내부 데이터를 바꾼다.

-   예를 들어 사용자가 검색창 input태그에 무언가를 입력한다면, 입력한 정보를 보고 싶어 한다.
-   이는 어플리케이션 어딘가에 표시되는 새로운 state를 represent한다.

### Hooks

-   React v16.8 이전까지 컴포넌트에 state와 state transition을 추가하는 것은 오직  
    class component에서만 가능했으며, function component는 stateless였다.
-   function component는 오직 JSX 요소만을 display할 수 있었다.
-   하지만 `Hooks API`를 통해 function component에도 state와 state transition을  
    추가할 수 있게 되었다.

-   hook은 function component 안에서 state나 컴포넌트 life cycle 메소드를  
    사용할 수 있게 해주는 함수다.
-   stateful 로직을 컴포넌트 rendering 로직으로부터 분리할 수 있게 해줌으로써,  
    다른 컴포넌트들에서 재사용하기 쉽게 만들어준다.
-   즉 모듈화 및 재사용성에서 큰 장점이 있다.

### useState

-   state를 관리할 수 있도록 해주는 hook이다.
-   function component는 useState에 의존하여 state 변수를 추가한다.
-   이미 존재하는 데이터에 변화를 주면, 이 변화가 state로 저장된다.

-   `useState()`에 초기 state 프로퍼티를 전달하면, 현재 state값과 이 값을 업데이트할  
    함수를 return해준다.

            const [state, stateUpdater] = useState(initialState);

-   간단한 사용 예시는 아래와 같다.

          import React, {useState} from 'react';
          const App = () => {
              const [count, setCount] = useState(0);
              const handleIncrementByTen = () => {
                  setCount(count + 10);
              }
              const handleDecrementByTen = () => {
                  setCount(count - 10);
              }
              const resetCountHandler = () => {
                  setCount(0);
              }
              return (
                  <div>
                      Initial Count: {count}
                      <hr />
                      <div>
                          <button type="button"
                              onClick={handleIncrementByTen}>
                              Increment by 10
                          </button>
                          <button type="button"
                              onClick={handleDecrementByTen}>
                              Decrement by 10
                          </button>
                          <button type="button"
                              onClick={resetCountHandler}>
                              Reset to Initial State
                          </button>
                      </div>
                  </div>
              );
          };
          export default App;

-   `useState()`에서 state 프로퍼티만을 선언할 수 있지만, 자료형은 원시자료형, 배열,  
    심지어 객체까지 모두 가능하다.

### state를 props로 전달하기

-   state는 정의된 컴포넌트 내 뿐만 아니라 props로 자식 컴포넌트에게 전달할 수도 있다.
-   자식 컴포넌트(function component일 경우)의 props 자리에 전달하면 된다.

### Conditional rendering with state

-   {}를 사용하여 조건문을 감싼다.
-   &&을 통해 앞의 조건식 또는 conditional state가 true일 경우에만 뒤의 표현식을 적용한다.

### useEffect

-   `useEffect`를 통해 외부에서 데이터를 `fetch`하거나, DOM 트리를 update하거나,  
    데이터를 구독(실시간 업데이트)할 수 있다.
-   이러한 operations들을 **side effect**라고 부른다.
-   `useEffect`는 function과 optional dependency를 받는다.

-   중요한 점은, `useEffect`가 기존의 `componentDidMount`, `componentDidUpdate`,  
    `componentWillUnmount`의 기능을 한 곳에서 할 수 있다는 점이다.
-   `useEffect(<function>, <dependency>)`

          useEffect(() => {
              // 이 콜백함수 구현은 DOM 업데이트, 외부 데이터 fetch, 데이터 구독 등을
              // 위한 것이다.
          }, [dependency]);

### useContext

-   state 데이터를 컴포넌트 트리에서 모든 층마다 props로 전달할 필요 없이 전체가 공유할  
    수 있도록 해준다.
-   deeply nested components에서 `useState`보다 훨씬 효율적이다.

          const Context = useContext(initialValue);

-   `<context.Provider value={{ 변수 }}></context.Provider>` 안에서 value에 작성한  
    변수의 값, 즉 state 데이터를 자유롭게 사용할 수 있다.
-   이 때 아래와 같이 가져와 return하는 JSX 안에서 사용한다.

          const {변수} = useContext(context);

### useRef

-   DOM 요소에 직접 접근할 수 있도록 해주며, re-render 시에도 state value가 유지되도록  
    해준다.
-   re-render 시에 state value를 유지하거나 값을 업데이트할 수 있는데, 업데이트 시  
    `useState`와 달리 re-render 메커니즘을 trigger하지 않는다.

### useReducer

        const [state, dispatch] = useReducer(reducer, initialState);

-   `reducer`에는 함수가 위치한다.
-   `useReducer`는 현재 상태와 `dispatch` 함수를 return한다.

-   이해를 위해 숙지해야 할 개념은 아래와 같다.
-   State: 변할 수 있는 데이터로, 꼭 객체일 필요는 없으며 배열이나 숫자일 수도 있다.
-   Dispatch: state를 바꿀 수 있게 해주는 함수로, state를 바꾸는 action을 trigger한다.
-   Reducer: state를 어떻게 바꿀지에 대한 비즈니스 로직을 handle하는 함수이다.
-   InitialState: 어플리케이션의 초기 상태이다.
-   Action: 프로퍼티의 집합으로 구성된 객체이다. Type는 필수 프로퍼티이다.
-   Payload: 네트워크 데이터 chunk 안에서 관심 있는 데이터를 가리킨다.

-   `useReducer`의 주요 목적은 복잡한 여러 개의 state를, state 관리 로직이  
    컴포넌트 view functionality와 분리될 수 있도록 관리하는 것이다.

### useMemo

-   React 어플리케이션의 퍼포먼스를 향상시키기 위한 Hook API이다.
-   memoization 기법을 사용한다.
-   두 가지의 성능 문제를 해결할 수 있다.
-   첫째, 불필요한 컴포넌트 re-rendering을 방지할 수 있다.

### useCallback

-   `useCallback` 또한 퍼포먼스를 향상시키기 위한 Hook API이다.
-   return하는 출력에 차이가 있다.
-   `useCallback`에서는 메모이제이션된 함수가 return되는 반면,  
    `useMemo`에서는 메모이제이션된 값이 return된다.

### React에서의 데이터 통신

-   기본적으로 HTTP 프로토콜에서는 JSON과 XML 2개의 형식으로 데이터를 주고 받는다.
-   현재 기준 JSON이 훨씬 더 활발히 사용되고 있다.

-   1. `fetch API` 사용

-   2. `axios` 사용

-   3. `React Query` 사용

    -   앞선 두 가지 방식은 간단하지만, React Query 사용 시 주의할 점이 있다.
    -   `index.js`에 `QueryClient`와 `QueryClientProvider`를 추가해야 한다.
    -   대신, fetch나 axios보다 간결한 코드로 데이터를 주고 받기 편하게 되어 있다.

### JSX (JavaScript Syntax Extension)

-   XML과 비슷한 JavaScript의 syntax extension이다.
-   기본적으로 브라우저는 JSX 구문을 해석하지 못하지만, `Babel Compiler`를 통해  
    JavaScript 구문으로 변환된다.
-   이때, Babel은 단순한 변환을 넘어 최적화까지 수행하므로 속도가 빠르다.
-   DOM(Document Object Model)과 밀접히 관련되어 있다.
-   React는 Virtual DOM(VDOM)을 사용한다.
-   VDOM은 원래 브라우저 DOM의 추상화된 버전이다.
-   React 컴포넌트는 변동 사항이 있는 노드만 re-render한다.

-   HTML과 달리 `class` 대신 `className`을, label태그에서 `for`대신 `htmlFor`을 사용한다.
-   Javascript 표현식을 사용할 경우 중괄호({})로 묶어준다.
-   태그들을 하나의 부모 태그로 묶어서 return해야 한다.
-   이때 사용할 수 있는 것들 중 하나가 바로 `<></>`(fragment tag)이다.
-   self-closing 태그를 사용하려면 반드시 `/`(슬래시)를 작성해야 한다.

          <br> 대신 <br /> 작성

-   UI 컴포넌트를 생성할 때 `React.createElement(Button, {}, '')`로도 만들 수 있지만,  
    JSX 구문을 활용하여 `<Button></Button>` 형태로 만드는 것이 더 권장된다.

### Event Handling

-   React에서의 이벤트 시스템은 SyntheticEvent라고 불린다.
-   onClick, onChange, onInput, ... 등 다양한 이벤트가 존재한다.

### JSX에서 객체에 반복문 사용

-   JavaScript의 객체에서는 for문으로 반복문을 수행할 수 없다.
-   대신, `Object.Keys()`를 활용하여 반복문을 수행한다.
-   ES2017부터는 `Object.values()`와 `Object.entries()`가 추가되었다.

-   `Object.Keys()`는 프로퍼티 배열을 리턴한다.
-   `Object.values()`는 프로퍼티별 값으로 이루어진 배열을 리턴한다.
-   `Object.entries()`는 `[key, value]`로 이루어진 2차원 배열을 리턴한다.

### React Router

-   클라이언트 단과 서버 단에서의 routing을 위한 라이브러리이다.
-   데이터 fetching에도 사용할 수 있지만, 우선 컴포넌트 navigation에 사용하도록 한다.
-   `useParams`와 `useNavigate` Hook을 통해 동적이고 프로그램적인 routing을 수행할 수 있다.

-   여러 개의 어플리케이션 컴포넌트, URL, 페이지 및 리소스로/로부터 내/외부적으로 모두  
    navigate할 수 있다.
-   기본적으로 React는 페이지 라우팅을 자체 라이브러리에 포함하지 않는다.
-   실제로 React의 원래 main goal은 single-page 웹 어플리케이션의 view를 디자인하는 것이다.
-   하지만 실제 웹 어플리케이션은 여러 개의 view를 필요로 할 수밖에 없으므로,  
    React Router와 같은 외부 라이브러리를 통해 컴포넌트 navigation을 수행해야 한다.

-   오픈 소스 패키지로서, 컴포넌트 기반의 라우팅을 위해 사용된다.
-   여러 개의 라우팅 feature로 구성되어 있다.

#### Router

-   React Router는 라우팅과 navigation을 가능하게 해주는 다양한 종류의 라우터를 제공한다.
-   자주 사용되는 React Router의 라우터는 아래와 같다.

-   `CreateBrowserRouter`

    -   웹 프로젝트에서 브라우저 라우터를 생성하기 위해 사용되는 함수이다.
    -   DOM History API를 활용하여, URL을 효율적으로 업데이트하고 히스토리 스택을 유지한다.
    -   loaders, actions, fetchers 등 data API로의 접근을 가능하게 해준다.

-   `RouterProvider`

    -   라우터 인스턴스를 범위 내 렌더링된 모든 컴포넌트에 공급하기 위해 디자인되었다.
    -   라우터가 어플리케이션의 navigation과 라우팅 요구를 효율적으로 관리하기 위해 사용될  
        수 있도록 보장한다.
    -   `router` prop을 매개변수로 요구하며, 이 prop이 RouterProvider 내에 렌더링되는  
        컴포넌트에 분배되는 router 인스턴스로 기능한다.
    -   모든 어플리케이션 컴포넌트가 라우터 인스턴스에 효율적으로 접근할 수 있도록  
        RouterProvider는 컴포넌트 트리의 최상단에 위치시켜야 한다.

-   `NativeRouter`
    -   `React Native`에서 React Router를 실행하기 위해 필요한 인터페이스다.

#### Components

-   React Router에서의 컴포넌트는 유연하고 동적인 라우팅 시스템을 만들 수 있게 해준다.
-   사용자가 UI와 상호작용함에 있어 navigation과 state를 관리하기 쉽게 도와준다.

-   `Link`

    -   사용자가 클릭 시 다른 컴포넌트 페이지로 이동할 수 있게 해 주는 컴포넌트 요소다.
    -   `react-router-dom`은 `<Link>` 태그를 `<a>`태그로 href와 함께 렌더링한다.

-   `NavLink`

    -   `<Link>` 태그로 기능하지만, 메뉴에서 활성화된 요소를 나타낼 수 있는 기능도 있다.

-   `Route`

    -   현재 위치를 기준으로 UI를 렌더링하기 위해 사용된다.
    -   props로 경로와 요소를 가지고 있다.
    -   `Route` 컴포넌트의 경로가 현재 URL과 매칭되면, 사용자의 클릭에 기반하여  
        요소를 렌더링한다.

-   `Routes`
    -   `Route`를 자식으로 가진다.
    -   UI 컴포넌트의 경로가 변화하면, `Routes`는 모든 자식 `Route`를 체크하여 사용자의  
        요청 또는 클릭한 경로와 가장 일치하는 요소를 결정하고 그 UI를 렌더링한다.

#### Hooks

-   `useLocation`

    -   현재 위치에서의 변화를 트래킹해야할 때마다 side effect를 수행한다.
    -   보통 현재 위치 객체를 리턴한다.

-   `UseParams`

    -   `<Route path>`와 매칭되는 현재 URL을 통해 브라우저로부터 파라미터를 받는다.
    -   동적인 파라미터의 키-밸류 pair들로 이루어진 객체를 리턴한다.

-   `UseNavigate`
    -   리액트 어플리케이션에서 서로 다른 route 사이에 navigate하는 데 사용된다.
    -   `history` 객체나 `Link` 컴포넌트 없이도 navigate할 수 있다.

### Dynamic route

-   변화하는 값을 나타내기 위해 placeholder를 사용하는 route를 가리킨다.
-   이 placeholder는 다양한 동적 컨텐츠를 다루기 위해 사용될 수 있다.
-   예를 들어, speakerId, productId, postId 등의 placeholder를 사용할 수 있다.
-   dynamic route 앞에는 콜론(:)을 사용하는 것이 일반적이다.
-   이 speakerId를 URL로부터 가져오기 위해 `useParams` Hook을 사용한다.

### useNavigate

-   기존에 사용하던 `useHistory`보다 더 직관적인 방식을 제공한다.
-   버튼 클릭이나 form 제출 등 사용자의 액션에 따른 응답으로 navigation을 시작할 수 있다.
-   URL을 직접적으로 수정하는 것 대신, `useNavigate`가 리턴하는 navigate 함수를 사용한다.

### Form

-   React에서는 form 컴포넌트에 두 가지 방식으로 접근할 수 있다.
-   controlled와 uncontrolled form component이다.

#### Controlled Form Components

-   React 컴포넌트가 사용자 input의 내부 state를 유지한다.
-   controlled form 컴포넌트의 이벤트 핸들러 함수는 SyntheticEvent 인스턴스를  
    accept한다. 이는 `onChange`, `onInput`, `onInvalid`, `onReset`, `onSubmit` 등이다.
-   이를 활용하여 form 데이터의 state를 제어할 수 있다.
-   예를 들어, `onChange`는 컴포넌트 form의 state값에 변화가 있을 때 감지한다.
-   이 변화는 타이핑일 수도 있고 form 인풋의 값을 대체하는 걸 수도 있다.

-   React가 추천하는 방식이다.
-   컴포넌트가 form의 행동을 tight하게 컨트롤하여, 사용자 및 개발자의 reactive 경험을 보장한다.
-   form으로부터 즉각적인 피드백을 받을 수 있다.

#### Uncontrolled Form Components

-   native DOM이 사용자 입력의 state를 직접적으로 유지하고 저장한다.
-   이는 form 요소들의 값을 DOM 안에 form 요소와의 reference와 함께 저장함으로써 가능하다.
-   이는 HTML 요소가 자신의 내부 state를 유지하는 관습적인 방식이다.

-   React 컴포넌트는 uncontrolled form 요소와 DOM 안의 기저에 존재하는 form 요소와의  
    reference를 유지함으로써 상호작용한다.

-   비록 controlled form이 더 권장되지만, uncontrolled form에도 장점이 있다.
-   복잡한 form 어플리케이션에서 사용자 입력마다 form UI를 re-render하는 것은  
    성능 측면에서 비효율적일 수 있다.  
    uncontrolled form을 사용하면 병목현상을 막을 수 있다.
-   form input으로 file 타입을 사용할 경우 더 적합한 방식이다.
-   React가 아닌 프로젝트를 마이그레이션할 경우 uncontrolled form이 더 빠르다.

### 유효성 검사

-   Data type: form의 각 필드마다 적절한 type을 입력했는지 검사해야 한다.
-   Consistency: 정규 표현식 등으로 비밀번호의 길이, 특수문자 포함 여부 등을 검사한다.
-   Data format: 날짜를 입력받을 경우 형식에 맞게 입력했는지 검사해야 한다.
-   Range and constraint: 특정 범위나 특정 제약조건을 따르도록 해야 한다. 이때에도  
    정규 표현식을 사용할 수 있다.

-   입력 시, 또는 제출(submit) 시 검사한다.

### Software Testing

#### Unit Testing

-   가장 작은 코드 조각이나 소프트웨어 또는 어플리케이션 개발의 단위(unit)를 테스트한다.
-   planning -> case scripting -> testing 의 3단계 순서로 진행된다.

#### Integration Testing

-   코드의 개별 단위가 그룹으로 결합되고 테스트된다.
-   서로 간의 효율적인 상호작용을 위한 테스트이다.

#### Performance Testing

-   어플리케이션의 속도와 효율성이 주어진 workload에 대해 테스트된다.
-   조기 병목현상을 식별하기 위해 사용된다.

#### Usability Testing

-   의도된 사용자가 직접 사용하여 어플리케이션 디자인에 대한 평가를 진행하고 피드백을 제공한다.

#### Acceptance Testing

-   클라이언트의 만족도를 검사한다.
-   고객의 요구사항을 기준으로 평가한다.

#### Regression Testing

-   새로운 기능의 도입으로 인한 코드의 변화가 이전에 테스트한 동작 기능성을 해치지 않는지 검사한다.
-   코드를 수정함으로써 생길 수 있는 오류나 의도치 않은 부작용을 방지할 수 있다.
-   모든 테스트 케이스를 다시 실행하여 새로운 버그가 없도록 한다.

### Jest

-   오픈 소스 Javascript testing framework이다.
-   실제로 React 개발팀에서 추천하는 테스트 도구이다.
-   `Node.js` test runner로서, Node 환경에서 수행한다.

-   `test()`, `it()`

    -   3개의 매개변수를 전달받는다.
    -   각각 테스트 케이스의 이름, 함수, (선택) timeout 이다.
    -   timeout은 테스트 케이스를 abort하기까지 얼마나 기다릴지이며, 기본 5초이다.

-   `describe()`

    -   관련된 테스트 케이스들을 묶어준다.
    -   2개의 매개변수를 전달받는다.
    -   테스트 그룹의 이름과, 테스트 케이스를 hold하는 콜백 함수들이다.

-   `beforeAll()`

    -   테스트 파일의 테스트 중 어느 것이라도 실행되기 전에 이 함수가 먼저 실행된다.
    -   promise객체나 generator가 함수로부터 리턴될 경우 Jest는 resolve되기까지 먼저 기다린다.
    -   함수와 timeout을 전달받는다.

-   `beforeEach()`

    -   각 테스트가 실행되기 전에 먼저 실행되는 함수다.
    -   마찬가지로 promise객체나 generator가 resolve될 때까지 기다린다.

-   `expect()`

    -   최소한 값이 특정 조건을 만족하는지 체크해야 하는데, 이 함수는 `matcher`을 통해  
        값을 조건적으로 체크할 수 있도록 해준다.
    -   하나의 테스트 케이스가 여러 개의 `expect()`를 가질 수도 있다.

              test("<test case name>", () => { ... expect(value); ... })

-   `Matchers`

    -   값의 유효성 검사를 위해 사용한다.

-   `Assertion`
    -   특정 코드에 대해 개발자가 만든 예측을 검증하기 위한 테스트 가능한 로직을 포함하는 표현식으로 정의된다.
    -   어플리케이션의 오류나 다른 결함을 식별할 수 있도록 해준다.

### React 컴포넌트 단위 테스트

-   React 어플리케이션에서 테스트해야하는 것은 주제나 기능에 따라 모두 다르다.
-   RTL을 Jest와 함께 사용하여 테스트한다.
-   RTL은 실제 사용자가 UI와 상호작용하는 것처럼 컴포넌트 단위를 테스트할 수 있도록 해준다.
-   Jest가 테스트 환경에서 테스트들을 찾아 실행하고 실패하는지 성공하는지 affirm해준다면,  
    RTL은 VDOM 상단의 기능함수들을 제공해준다.
-   `render()`를 통해 컴포넌트 렌더링을 시뮬레이션하거나, `fireEvent`를 통해 마치 사용자가 브라우저와 상호작용하는 것처럼 원하는 이벤트를 dispatch할 수 있다.
-   RTL은 `waitFor()` 메소드를 사용하여 비동기 코드들의 실행을 기다릴 수 있으며,  
    `expect()`를 통해 예측된 결과가 실제 결과와 일치하는지 결정할 수 있다.
-   `npx create-react-app`을 통해 React 프로젝트가 생성/설정되면 RTL을 따로 설치할 필요 없다.
-   RTL 안에 내장된 기능을 통해 DOM 노드와 직접 상호작용하는 테스트들을 작성할 수 있다.
-   즉, 실제로 리액트 컴포넌트를 렌더링하지 않고도 가능하다.

### RTL 쿼리

-   `getByRole()`

    -   role 속성(ex. button, link, checkbox, radio, heading)을 통해 요소를  
        locate 하기 위해 사용된다.
    -   컴포넌트의 접근성을 테스트하는 데 유용하다.

-   `getByLabelText()`

    -   for 속성을 통해 라벨 태그와 연결된 form 요소를 찾는 데 유용하다.

-   `getByPlaceholderText()`

    -   placeholder 속성을 통해 input 태그를 찾는 데 유용하다.

-   `getByText()`

    -   태그 안의 텍스트 내용으로 태그를 찾는 데 사용된다.
    -   버튼이나 링크를 그 안의 텍스트로 찾을 때에도 사용하면 좋다.

-   `getByDisplayValue()`

    -   form 태그를 이미 채워진 값을 갖고 있는 input이나 select 태그 등으로 찾을 때 유용하다.

-   `getByAltText()`

    -   alt 속성을 통해 이미지 태그를 찾을 때 유용하다.

-   `getByTitle()`

    -   title 속성을 통해 태그를 찾을 수 있다.

-   `getByTestId()`
    -   `data-testid` 속성을 갖고 있는 태그를 찾을 수 있다.

### TDD

-   테스트를 먼저 수행하는 개발 패러다임으로, 빠른 피드백을 목적으로 한다.
-   테스트를 작성하고 실행하며, 실패할 경우 테스트를 통과하기 위한 최소한의 코드만 작성한다.
-   테스트를 통과하게 되면 적절히 코드를 리팩토링한다.
-   이런 과정들이 계속하여 반복되며, 코드 구현 이전에 테스트를 작성하는 것에 집중하는 것은  
    개발자가 사용자의 관점에서 제품을 바라볼 수 있도록 해준다.

-   기존의 접근 방식처럼 코드 작성 후 마지막에 테스트를 진행하는 것은 코드 유지/보수에 더 큰  
    비용을 소모한다는 사실이 밝혀졌다.

### Code Refactoring

-   코드의 가독성을 높이고, 코드의 중복을 제거하고, 성능을 향상시키기 위해 주로 사용된다.
-   리팩토링 중 테스트를 적절히 수행함으로써 바뀐 코드가 전체 시스템에서 다르게 동작하는 일이  
    없도록 확실히 해야 한다.
-   수작업으로도 가능하지만, Jest, RTL, Enzyme나 React testing utilities 등을 통해  
    자동으로도 가능하다.

## Flask

### SQLAlchemy

-   3개의 vital layer로 구성된다.
-   engine, dialect, connection pool이다.

### SQLAlchemy Engine

-   데이터베이스와 연결하고 상호작용하기 전에 먼저 engine을 만들어야 한다.
-   가장 낮은 레이어이다.

### Connection pools

-   `create_engine()` 메소드를 사용하면 보통 connection pool 객체가 생성되고,  
    이후 데이터베이스 트랜잭션에 재사용된다.
-   `create_engine()`에서 파라미터로 pool의 성능을 최적화할 수 있다.
-   `pool_size`: pool이 handle할 수 있는 connection의 개수
-   `max_overflow`: pool이 지원하는 overflow connection의 개수
-   `pool_recycle`: pool의 connection 지속 시간을 초 단위로 설정 가능
-   `pool_timeout`: pool로부터 connection이 연결되는 것을 중단하기 전까지 기다릴 시간(초)

### API

-   Application Programming Interface의 약자이다.
-   주된 목적은 규칙, 방법, 프로토콜을 기반으로 서로 다른 시스템 간의 소통을 용이하게 하는 것이다.
-   private API와 public API가 있다.
-   private API는 내부 API라고도 불리며, 조직 내에서 매우 중요한 조직 데이터에 접근하기 위한 오픈 아키텍처 인터페이스이다.
-   public API는 조직 외부의 개발자가 공개된 조직 내 데이터나 서비스에 접근하여 개발에 사용할 수 있도록 하는 표준화된 인터페이스이다.
-   또 다른 형태의 API에는 Simple Object Access Protocol(SOAP), JavaScript Object Notation-Remote Procedure Call(JSON-RPC), Extensible Markup Language-Remote Procedure Call(XML-RPC), Representational State Transfer(REST) 등이 있다.
-   endpoint와 payload는 API 컴포넌트의 가장 중요한 요소다.
-   endpoint는 잘 정의된 route나 URL을 통해 서버의 리소스에 접근하는 것을 용이하게 해준다.
-   payload는 요청이나 응답과 함께 데이터를 보낼 수 있도록 해 준다.

### API Endpoint

-   RESTful endpoint URI를 위한 규칙 중 대표적인 3가지는 아래와 같다.

    -   1. 명사를 사용한다.
    -   2. 복수명사를 사용한다.
    -   3. 'collection/resource/collection' 규칙에 따른다.

### Payload

-   다양한 웹 어플리케이션 간의 정보 교환 시 관심을 두는 데이터를 payload라고 한다.
-   클라이언트-서버 커뮤니케이션에서 HTTP 요청과 응답의 body이다.
-   API 생태계에서 클라이언트가 요청을 보낼 때 요청의 body는 데이터이며, 이 데이터는 header/overhead와 payload로 구성된다.
-   header는 데이터의 source 또는 destination을 설명한다.
-   payload는 JSON 또는 XML 형식을 가지며 {}를 통해 인식된다.

          POST /venues HTTP/1.1
          Host: example.com
          Accept: application/json
          Content-Type: application/json
          Content-Length: 10
          {
              "id": 3,
              "name": "Conference Hall"
          }


          HTTP/1.1 200 OK
          Content-Type: application/json
          Content-Length: 10
          {
              "responseType": "OK",
              "data": {
                  "id": 3,
                  "name": "Conference Hall"
              }
          }

-   OK와 {} 안의 내용이 payload이다.

          HTTP/1.1 404 Not found
          Content-Type: application/json
          Content-Length: 0
          {
              "responseType": "Failed",
              "message": "Not found"
          }

### HTTP Request/Response

#### Request

-   모든 HTTP 요청은 request line으로 시작하며, 이는 HTTP 메소드 종류와 요청하는 리소스, 그리고 HTTP 프로토콜 버전을 나타낸다.
-   GET: 클라이언트가 서버에 리소스 요청
-   POST: 클라이언트가 서버 리소스에 데이터 제출
-   PUT: 클라이언트가 서버 리소스 수정
-   DELETE: 클라이언트가 서버 리소스 삭제

#### Response Code

-   1XX: Informational

    -   100: interim response. 클라이언트에게 요청을 계속하거나 이미 진행됐을 경우 응답을 무시하라고 알려주는 코드

-   2XX: Successful

    -   200: 서버가 성공적으로 요청을 처리했음을 나타냄 (OK)
    -   201: 서버가 성공적으로 요청을 처리했으며 리소스가 생성됐음을 나타냄 (Created)
    -   202: 요청을 받았으나 처리가 아직 완료되지 않은 상태를 나타냄 (Accepted)
    -   204: 서버가 성공적으로 요청을 처리했지만 return 내용이 없음을 나타냄 (No content)

-   3XX: Redirection

    -   301: 요청과 이후의 모든 요청이 response header의 새로운 로케이션으로 보내져야 함을 나타냄 (Moved Permanently)
    -   302: 요청이 일시적으로 response header의 새로운 로케이션으로 보내져야 함을 나타냄 (Found)

-   4XX: Client Error

    -   400: 서버가 클라이언트의 에러에 의해 요청을 처리할 수 없음을 나타냄 (Bad Request)
    -   401: 요청을 보내는 클라이언트가 권한이 없으며 인증이 필요함을 나타냄 (Unauthorized)
    -   403: 요청을 보내는 클라이언트가 접근 권한이 없음을 나타냄 (Forbidden)
    -   404: 서버가 요청된 리소스를 찾지 못했음을 나타냄 (Not Found)
    -   405: 서버가 메소드를 알고 있지만 타겟이 되는 리소스가 해당 메소드를 지원하지 않음을 나타냄 (Method Not Allowed)

-   5XX: Server Error
    -   500: 서버가 요청을 처리하는 도중 예기치 못한 오류를 맞닥뜨렸음을 나타냄 (Internal Server Error)
    -   502: 요청을 받는 게이트웨이로 기능하던 중 서버가 어플리케이션 서버로부터 잘못된 응답을 받았음을 나타냄 (Bad Gateway)
    -   503: 서버가 요청을 처리할 수 없음을 나타냄 (Service Unavailable)

### SQLAlchemy 관련

-   ORM 관련 메소드를 사용할 때 (클래스명).query.(메소드명)() 으로 사용할 수 있다.
-   이때, `filter_by()`의 경우 키워드 인자로 사용한다. (ex. `User.query.filter_by(id=id)`) 간단한 조건을 작성할 때 유용하다.
-   반면 `filter()`의 경우 SQL 문법을 사용한다. (ex. `User.query.filter(User.id == id)`) 복잡한 조건을 작성할 때 유용하다.

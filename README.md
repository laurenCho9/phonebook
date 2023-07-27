# phonebook

## 🚀 연락처 페이지 만들기 (Redux.ver)
> 1. 왼쪽에는 연락처 등록하는 form 이, 오른쪽에는 연락처 리스트와 search 창이 있다.
> 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
> 3. 리스트에 아이템이 몇개 있는지 보인다
> 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

## 리덕스 기본 세팅
### 설치
```powershall
npm install redux react-redux
```

### index.js의   <React.StrictMode> 를 <Provider> 로 바꾼다.
> App.js 컴포넌트를 감싸는 이유는 store를 제공해주기 위해서!
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
⬇️
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
그리고 src > redux(폴더생성) > store.js(파일생성) 한다. 

### store.js

```javascript
import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);
export default store;


```
> Redux Toolkit이 오늘 Redux를 사용하는 방법인 이유
> https://redux.js.org/introduction/why-rtk-is-redux-today

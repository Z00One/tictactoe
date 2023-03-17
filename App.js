import './App.css';

// REACT COMPONENT
function DefaultNav(props) {
  return (
    <div className='header'>
      <div className="inner">
        <div className='black-nav'>
          <h1>nav-bar</h1>
          <ul>
            <li><a href='javascript:void(0)'>{props.date.today}</a></li>
            <li><a href='javascript:void(0)'>처음</a></li>
            <li><a href='javascript:void(0)'>react를</a></li>
            <li><a href='javascript:void(0)'>시작한</a></li>
            <li><a href='javascript:void(0)'>{props.myName.name}입니다.</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  // REACT ELEMENT
  const userInfo = {
    name: "Z00One"
  };

  // 
  const setDate = new Date().getDate();
  const setMonth = new Date().getMonth() + 1;
  const today = setMonth + '/' + setDate;
  const date = {
    today: today
  };

  return <DefaultNav date={date} myName={userInfo} />;
}

export default App;
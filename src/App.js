
import './App.css'
import ShowCase from "./components/ShowCase";
import Skills from "./components/Skills";
import AllSkills from "./components/AllSkills";
import MyProject from "./components/MyProject";

function App() {
  return (
    <div>
      <ShowCase />
      <Skills title={'What i do best'} skill1={'React Js'} skill2={'React Native'} skill3={'Web Design'} />
      <Skills title={'Backend (mid-level)'} skill1={'Node js'} skill2={'Express js'} skill3={'Mongo Db'} />
      <AllSkills />
      <MyProject />

      <div className='footerDiv'>
        <p>ALL right Reserved BY Jahidul islam</p>
      </div>
    </div>
  );
}

export default App;

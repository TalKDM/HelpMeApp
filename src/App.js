import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import SignUp from './pages/SignUp';
import { useState } from 'react';
import UserPage from './pages/UserPage';
import HelpPage from './pages/HelpPage';
import MagenDavidLogo from './assets/img/starOfdavid.png'
import PoliceLogo from './assets/img/policeLogo.png'
import FireFightersLogo from './assets/img/FireFighters.png'

function App() {
  const [fullName,setFullName] = useState('');
  const [password,setPassword] = useState('');
  const [helper,setHelper] = useState({number: '101',name: 'Magen David Adom', telephone: '101',icon: MagenDavidLogo, status: false});
  const [menu,setMenu] = useState(false);

  const emergencyNumbers = [{
    number:'101',
    name: 'Magen David Adom',
    telephone: '101',
    icon: MagenDavidLogo,
    status: false
},
{
    number:'100',
    name: 'Police',
    telephone: '100',
    icon: PoliceLogo,
    status: false
},
{
    number:'102',
    name: 'Fire Fighters',
    telephone: '102',
    icon: FireFightersLogo,
    status: false
}
];


const openMenu = () => {
  setMenu(!menu)
}

const chooseHelp = (index) => {
  const help = emergencyNumbers[index]
  setHelper(help)
  openMenu();
}











  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp setFullName={setFullName} fullName={fullName} setPassword={setPassword} password={password}/>}/>
          <Route path={`/userPage/${fullName}`} element={<UserPage  setHelper={setHelper} helper={helper} emergencyNumbers={emergencyNumbers} menu={menu} openMenu={openMenu} chooseHelp={chooseHelp}/>} />
          <Route path='/HelpPage/' element={<HelpPage setHelper={setHelper} helper={helper} password={password} emergencyNumbers={emergencyNumbers} menu={menu} openMenu={openMenu} chooseHelp={chooseHelp} fullName={fullName}/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

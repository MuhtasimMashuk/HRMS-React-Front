import logo from './logo.svg';
import './App.css';
import EmpList from './Employee/EmpList';
import DeptList from './Dept/DeptList';
import DeptCreate from './Dept/DeptCreate';
import DesgList from './Desg/DesgList';
import EmpCreate from './Employee/EmpCreate';
import {useRoutes} from 'react-router-dom';
import DeptUpdate from './Dept/DeptUpdate';
import route from './router';


function App() {

  const gg = localStorage.getItem("isLoggin") || false
  const router = useRoutes(route(gg))

  return (
    <div className="App">

      {router}
     
        {/* <Switch>
          <Route path='/' exact> <EmpCreate/> </Route>
          <Route path='/emps' > <EmpList/></Route>
          <Route path='/deps' > <DeptList/></Route>
          <Route path='/desgs'> <DesgList/> </Route>
          <Route path ='/depcreate'> <DeptCreate/></Route>
          <Route path ="/depupdate/:id"> <DeptUpdate/></Route>
      </Switch> */}


      
    </div>
  );
}

export default App;

import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Image from './components/images/image.jpg';


function App() {
  return (
    <>
      <Nav 
      logo="LOGO" 
      freelencers="Freelencers" 
      job="Mes Emplois" 
      messages ="Messages" 
      search="Search"
      name="Ghislain Mitahi"
      />
      <Main/>
      <Sidebar 
      photo={Image}
      />
      
    </>
  );
}
export default App;

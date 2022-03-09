import Button from '../core/Button';
import { BiComment,BiUser,BiRightArrowAlt,BiBell,BiSearch} from "react-icons/bi";
const Nav = ({logo,freelencers,job,messages,num,name,}) => {
  return (
    <nav id="navbar">
          <ul className="menu first">
              <li> {logo} </li>
              <li> {freelencers} </li>
              <li> {job} </li>
              <li className="message">
              <span className="text">{messages}</span>
              <span className="message-icon">
              <BiComment/>{num}
              </span>
              </li>
          </ul>
          <ul className="menu">
             <li>
                <form className="search" action="">
                    <p className="search-icon" > <BiSearch/> </p> 
                    <input type="text" placeholder="Trouver un developpeur"/>
                    <p className="send-icon" ><BiRightArrowAlt/></p>
                </form>
             </li>
              <li className="name">
                 <p><BiUser/></p><a href=" ">{name}</a>
              </li>
              <li className="notification">
                 <BiBell/>
              </li>
              <li> 
                  <Button button="Ajouter projet" color="blue"/> 
              </li>
          </ul>
    </nav>
  )
}

export default Nav
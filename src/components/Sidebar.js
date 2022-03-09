import {BiRightArrowAlt} from "react-icons/bi";
import bell from './images/bell.png';
import lock from './images/icons8-lock-64.png'
import web from './images/icons8-web-96.png'
import user from './images/user (1).png'


const Sidebar = ({photo}) => {
  return (
      <section id="sidebar">
         <lu className="profile">
            <li className="phto">
               <img src={photo} alt="#" />
             </li>
             <li>
               <a href=" ">Ghislain Mitahi</a>
             </li>
             <li>
             <a href=" ">ghislainmitahi@gmail.com</a>
             </li>
         </lu>

         <ul className="menu">
             <li className="user">
                 <span> <img src={user} alt=""/> </span>
                 <p className="text">Mon profile</p>
                 <span className="icon"><BiRightArrowAlt/></span>
             </li>
             <li className="user">
                 <span><img src={lock} alt=""/></span>
                 <p className="text">Mot de passe & Securité</p>
                 <span className="icon"><BiRightArrowAlt/></span>
             </li>
             <li className="user">
                 <span><img src={bell} alt=""/></span>
                 <p className="text">Notification</p>
                 <span className="icon"><BiRightArrowAlt/></span>
             </li>
         </ul>

         <ul className="works">
         <li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li><li>
                 <p><img src={web} alt=""/></p>
                 <a href=" ">Website Developement</a>
                 <span>230</span>
             </li>
         </ul>
      </section>
  )
}

export default Sidebar
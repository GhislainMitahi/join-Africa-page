import React from 'react';
import Btn from '../core/Button';

const Main = () => {
  return (
    <main id="main">
        <div className="content">
           <h3>Ajouter un projet</h3>
          <div className ="content1 col">
            <form className="the-form">
              <div className="main-form main-form-and-orders">
                <div className ="title">
                  <h4>Titre</h4>
                  <p><input type="text" placeholder ="Ex: Site web d'information"/></p>
                </div>
                <div className="description">
                  <h4>Description</h4>
                  <textarea type="text" rows="8" placeholder="Ex: Site web d'information"></textarea>
                </div>
                <div className="task">
                  <h4>Tache à faire</h4>
                  <textarea type="text" rows="4" placeholder="Ex: Site web d'information"></textarea>
                </div>
                <div className="join">
                  <h4>joindre des fiches</h4>
                    <ul className="search-file">
                      <li className="search">
                        <input type="text" placeholder="Choisir un fichier"/>
                      </li>
                      <li className="li">Browse</li>
                      <li className="li">Upload</li>
                    </ul>
                    <ul>
                      <li> Cahier de charge</li>
                      <li>Porfolio.pdf</li>
                    </ul> 
                </div>
              </div>
              <div className="orders main-form-and-order">
              <h4>Exigences</h4>
                <ul>
                  <li>
                    <input type="text" placeholder="Ex.:Maitrise de Javascript"/>
                    <input type="text" placeholder="Ex.:Maitrise de Javascript"/>
                    <input type="text" placeholder="Ex.:Maitrise de Javascript"/>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <h3>Domaine d'integration</h3>
          <div className ="content2 col">
          <p>
            <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
          </p>
         <p>
            <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
          </p>
          <p>
            <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
          </p>
          <p>
            <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
              <h5>Web Development</h5>
              <ul>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
                <li>Site Web Complete</li>
              </ul>
          </p>
          </div>
          <h3>Condition de travail</h3>

          <div className ="content3 col">
            <p className ="pay-method">
            <h5>mode de paiement</h5>
              <ul>
                <li>Selectionner le mode de paiement</li>
                <li className="">
                  <p>Virement Bancaire</p>
                  <p>Paiement Mobile</p>
                  <p>Credit Card</p>
                </li>
                <li>Nous garantissons un remboursement si le travail n'est pas effectué correctement ou pas à temps</li>
              </ul>
            </p>
            <p className = "details-one">
              <ul>
                <li className = "budget">
                  <label htmlFor="budget">Budget</label>
                  <p>
                    <input type="text" id = "budget" placeholder="Entrer votre budget"/>

                    <select name="" id="pet-select">
                        <option value="usd">USD</option>
                        <option value="fdcf">FDCF</option>
                    </select>
                  </p>
                </li>
                <li className = "duration">
                  <label htmlFor="Duree">Durée</label>
                    <p>
                      <div>5</div>
                      <select name="" id="Duree">
                          <option value="usd">jours</option>
                          <option value="fdcf">mois</option>
                          <option value="fdcf">années</option>
                      </select>
                    </p>
                </li>           
                <li className = "start-duration">
                  <label htmlFor="start-duration">Durée de debut</label>
                    <p>
                      <input type="date" />
                    </p>
                </li>             
                <li className="type-of-project">
                <label>Type de projet</label>
                  <ul>
                    <li>Par heure</li>
                    <li>Forfaitaire</li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className = "details-two">
                <ul>
                  <li className="cuntry">
                    <h6>Pays</h6>
                    <div>
                    <input type="text" id = "pays" placeholder="Entrer votre pays"/>
                    <select name="" id="Duree">
                          <option value="france">France</option>
                          <option value="usa">USA</option>
                          <option value="miamie">Miamie</option>
                          <option value="ucraine">Ucraine</option>
                          <option value="russie">Russie</option>

                    </select>
                    </div>                 
                  </li>
                  <li className= "experience">
                  <h6>Noveau Experience</h6>
                    <div>
                  <input type="radio" id="time1" name="drone" value="huey"checked/>   
                      <label for="time1">1 an</label>
                      <input type="radio" id="time2" name="drone" value="ann"checked/>   
                      <label for="time2">2 - 4 ans</label>
                      <input type="radio" id="time3" name="drone" value="huey"checked/>   
                      <label for="time3">5 - 7 ans</label>
                      <input type="radio" id="time4" name="drone" value="huey"checked/>   
                      <label for="time4">8 ans +</label>
                      </div>
                  </li>
                  <li className= " langage">
                  <h6>Langages</h6>
                   <div>
                   <input type="checkbox" id="1" name="drone" value="huey"/>   
                      <label for="1">Français</label>
                      <input type="checkbox" id="2" name="drone" value="huey"/>   
                      <label for="2">Anglais</label>
                      <input type="checkbox" id="3" name="drone" value="huey"/>   
                      <label for="3">Kiswahili</label>
                   </div>
                  </li>
                </ul>
            </p>
          </div>
          <div className ="content4 col"><Btn button = "Ajouter un Projet"/></div>
        </div>
        <div className ="feature col">
            <ul className = "top">
              <li>Titre</li>
              <li>Description</li>
              <li>Categorie</li>
            <li>Budget</li>
            <li>Condition de travail</li>
            </ul>
        </div>
    </main>
  )
}

export default Main
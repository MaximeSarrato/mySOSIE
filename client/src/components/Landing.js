import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Bienvenue sur mySOSIE!</h3>

        <div className="row">
          <div className="col s4 left-align">
            <ul id="studentsDropdown" className="dropdown-content">
              <li>
                <Link to="/students/create">Ajouter un étudiant</Link>
              </li>
              <li>
                <a href="#!">Attribuer une promotion</a>
              </li>
            </ul>
            <a
              className="btn dropdown-button"
              href="#!"
              data-activates="studentsDropdown"
            >
              Etudiants<i className="material-icons right">arrow_drop_down</i>
            </a>
          </div>

          <div className="col s4 center-align">
            <ul id="promotionsDropdown" className="dropdown-content">
              <li>
                <Link to="/promotions/create">Créer une promotion</Link>
              </li>
              <li>
                <Link to="/promotions/list">Liste des promotions</Link>
              </li>
            </ul>
            <a
              className="btn dropdown-button"
              href="#!"
              data-activates="promotionsDropdown"
            >
              Promotions<i className="material-icons right">arrow_drop_down</i>
            </a>
          </div>

          <div className="col s4 right-align">
            <ul id="UEDropdown" className="dropdown-content">
              <li>
                <a href="#!">Créer une UE</a>
              </li>
            </ul>
            <a
              className="btn dropdown-button"
              href="#!"
              data-activates="UEDropdown"
            >
              UE<i className="material-icons right">arrow_drop_down</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

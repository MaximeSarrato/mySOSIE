import React from 'react';

import { Link } from 'react-router-dom';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  ButtonGroup
} from 'reactstrap';

function CategoriesMenu() {
  return (
    <div>
      <ButtonGroup>
        <UncontrolledDropdown>
          <DropdownToggle caret style={{ marginRight: '5px' }}>
            Etudiants
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag={Link} to="/students/create">
              Ajouter un étudiant
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Liste des étudiants</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown>
          <DropdownToggle caret style={{ marginRight: '5px' }}>
            Promotions
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag={Link} to="/promotions/create">
              Ajouter une promotion
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/promotions/list">
              Liste des promotions
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown>
          <DropdownToggle caret style={{ marginRight: '5px' }}>
            Unités d'enseignements
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
}

export default CategoriesMenu;

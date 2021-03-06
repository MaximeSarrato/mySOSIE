import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getStudentsFromPromotion,
  fetchPromotions,
  clearStudents,
  clearPromotions
} from '../actions';
import { Table } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// @TODO Fill the file with database entries
const DATA = require('../data/years');

class PromotionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: null,
      selectedPromotion: null,
      isYearSelected: false,
      isPromoSelected: false
    };
  }

  renderStudents() {
    const { students } = this.props;
    if (students) {
      return students.map(student => {
        return (
          <tr key={student._id}>
            <th scope="row">{student._id}</th>
            <td>{student.lastname}</td>
            <td>{student.firstname}</td>
          </tr>
        );
      });
    }
  }

  updateYearValue(value) {
    this.props.clearPromotions();

    if (value) {
      this.setState(
        { selectedYear: value, isYearSelected: true, selectedPromotion: null },
        () => {
          this.props.fetchPromotions(this.state.selectedYear.value);
        }
      );
    } else {
      this.setState({ selectedYear: value, isYearSelected: false });
    }
  }

  updatePromoValue(value) {
    if (value) {
      this.setState({ selectedPromotion: value, isPromoSelected: true }, () => {
        const id = this.state.selectedPromotion._id;
        this.props.getStudentsFromPromotion(id);
      });
    } else {
      this.setState({
        selectedPromotion: value,
        isPromoSelected: false
      });
      this.props.clearStudents();
    }
  }

  render() {
    return (
      <div className="section">
        <h1>Promotion list</h1>
        <Select
          name="form-field-finishingYear"
          value={this.state.selectedYear}
          options={DATA.YEARS}
          onChange={this.updateYearValue.bind(this)}
        />
        <Select
          style={{ marginTop: '10px' }}
          name="form-field-promotion"
          value={this.state.selectedPromotion}
          options={this.props.promotions || []}
          onChange={this.updatePromoValue.bind(this)}
          valueKey="name"
          labelKey="name"
        />
        {this.props.students ? (
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Prénom</th>
                <th>Nom</th>
              </tr>
            </thead>
            <tbody>{this.renderStudents()}</tbody>
          </Table>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ students, promotions }) {
  return { students, promotions };
}

export default connect(mapStateToProps, {
  getStudentsFromPromotion,
  fetchPromotions,
  clearStudents,
  clearPromotions
})(PromotionList);

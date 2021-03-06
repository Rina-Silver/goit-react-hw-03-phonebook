import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = uuidv4();
  inputNumberId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="PhonebookForm">
        <label htmlFor={this.inputNameId}>Name</label>
        <input
          id={this.inputNameId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
        <label htmlFor={this.inputNumberId}>Number</label>
        <input
          id={this.inputNumberId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />
        <button
          className="Phonebook__btn"
          type="submit"
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

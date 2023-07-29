import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './App.module.css';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  contactsArr = [];
  handleChange = evt => {
    const { name } = evt.target;
    const value = evt.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const isAdded = this.contactsArr.find(el => el.name === this.state.name);
    if (isAdded === undefined) {
      if (this.state.name === '' || this.state.number === '') {
        window.alert('Please, fill all fields.');
      } else {
        this.contactsArr.push({
          name: this.state.name,
          number: this.state.number,
          id: nanoid(),
        });

        this.setState({ contacts: this.contactsArr });
        evt.currentTarget.reset();
      }
    } else {
      window.alert(
        `Contact "${this.state.name}" is already in your phonebook. Please, try something else!`
      );
    }
  };
  handleSearch = evt => {
    const value = evt.target.value;
    this.setState({ filter: value });
  };
  handleDelete = evt => {
    const { id } = evt.target;
    const index = this.state.contacts.findIndex(el => el.id === id);
    this.contactsArr.splice(index, 1);
    this.setState({ contacts: this.contactsArr });
  };
  filterContacts = () => {
    if (this.state.filter === '') {
      this.contactsArr = this.state.contacts;
    } else {
      const filtredArr = this.state.contacts.filter(el =>
        el.name.toLowerCase().includes(this.state.filter)
      );
      this.contactsArr = filtredArr;
    }
  };
  render() {
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          />
        <h2>Contacts</h2>
        {this.filterContacts()}
        <Filter onChange={this.handleSearch} />
        <ContactList
          contacts={this.contactsArr}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export { App };

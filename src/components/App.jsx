import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './App.module.css';
class App extends Component {
  state = {
    contacts: [
      { name: 'rtyui', number: '234567', id: 'RsJ4u41qX7h8uAbppcn5K' },
      { name: 'jhgfds', number: '23467', id: 'oZxahPKniWO70cO05yUnj' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  contactsArr = [];
  handleChange = evt => {
    const { name } = evt.target;
    const value = evt.target.value;
    this.setState({ [name]: value });
    // console.log(this.state);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const isAdded = this.contactsArr.find(el => el.name === this.state.name);
    // console.log(isAdded);
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
        // console.log(this.state.contacts);
      }
    } else {
      window.alert(
        `Contact "${this.state.name}" is already in your phonebook. Please, try something else!`
      );
    }
  };
  handleSearch = evt => {
    const value = evt.target.value;
    console.log(value);
    this.setState({ filter: value });
    console.log(this.state.filter);
    if (this.state.filter === '') {
      console.log(this.contactsArr);
      this.setState({ contacts: this.contactsArr });
    } else {
      console.log(this.state.filter);
      const filtredArr = this.state.contacts.filter(el =>
        el.name.toLowerCase().includes(this.state.filter)
      );
      this.setState({ contacts: filtredArr });
      console.log(filtredArr);
      console.log(this.state.contacts);
    }
    // console.log(this.state);
  };
  handleDelete = evt => {
    const { id } = evt.target;
    const index = this.state.contacts.findIndex(el => el.id === id);
    // console.log(index);
    this.contactsArr.splice(index, 1);
    this.setState({ contacts: this.contactsArr });
    // console.log(this.contactsArr);
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
        <Filter onChange={this.handleSearch} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export { App };

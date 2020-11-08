import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../store/types';

import { addSearchTerm, searchSubmit } from '../store/actions';

interface IProps {
  searchSubmit: (searchValue: string) => void;
  addSearchTerm: (searchTerm: string) => void;
  searchKey: string;
  searchTerm: string;
}

const categories = [
  'Wallpapers',
  'Nature',
  'Current',
  'Events',
  'Architecture',
  'Film',
  'Animals',
  'Travel',
  'Fashion',
  'Spirituality',
  'Experimental',
  'People',
  'Health',
  'Arts & Culture',
];

class Search extends React.Component<IProps> {
  state = {
    inputValue: '',
  };

  onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    this.setState({ inputValue });
  };

  onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { inputValue } = this.state;

    if (inputValue.length > 1 && inputValue !== this.props.searchKey) {
      this.props.searchSubmit(inputValue);
      if (this.props.searchTerm.includes(inputValue) === false) {
        this.props.addSearchTerm(inputValue);
      }
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className='search'>
        <form action='submit' id='searchForm' onSubmit={this.onSearchSubmit}>
          <input
            className='search__input'
            placeholder='Search'
            type='search'
            onChange={this.onInputChange}
            value={inputValue}
          />
        </form>
        <ul className='categories'>
          {categories.map((topic, id) => {
            return (
              <li
                key={id}
                onClick={() => {
                  this.props.searchSubmit(topic);
                  if (this.props.searchTerm.includes(topic) === false) {
                    this.props.addSearchTerm(topic);
                  }
                }}
                className='categories__item'>
                {topic}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): { searchKey: string; searchTerm: string[] } => ({
  searchKey: state.searchKey,
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps, { searchSubmit, addSearchTerm })(Search);

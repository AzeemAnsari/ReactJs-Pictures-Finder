import React from 'react';
import unsplash from '../api/unsplash';
import Header from './Header';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Landing from './Landing';
import Footer from './Footer';

import { MainWrap } from './Styles';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term, perPage) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: perPage },
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <MainWrap>
        <Header />
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          {this.state.images.length ? (
            <ImageList images={this.state.images} />
          ) : (
            <Landing />
          )}
        </div>
        <Footer />
      </MainWrap>
    );
  }
}

export default App;

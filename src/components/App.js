import React from 'react';
import unsplash from '../api/unsplash';
import Header from './Header';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Landing from './Landing';
import Footer from './Footer';

import Masonry from 'react-masonry-css';

import { MainWrap } from './Styles';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = { images: [] };
  }

  onSearchSubmit = async (term, perPage) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: perPage },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1200: 3,
      992: 3,
      768: 2,
      576: 1,
    };
    return (
      <MainWrap>
        <Header />
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          {this.state.images.length ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid mt-2 mt-lg-4"
              columnClassName="masonry-grid_column"
            >
              {this.state.images.map((image) => (
                <ImageList key={image.id} {...image} />
              ))}
            </Masonry>
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

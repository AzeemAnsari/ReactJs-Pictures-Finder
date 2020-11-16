import React from 'react';

class SearchBar extends React.Component {
  state = { term: '', perPage: 10, inputError: false };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ inputError: false });
    if (this.state.term === '') {
      this.setState({ inputError: true });
    }
    this.props.onSubmit(this.state.term, this.state.perPage);
    // console.log(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="form-wrap mt-4">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-row flex-column flex-md-row justify-content-center">
            <div className="col col-lg-4 col-sm-5 mb-3 mb-md-0">
              <input
                type="text"
                placeholder="Search Image"
                className="form-control form-control-lg"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              {this.state.inputError ? (
                <p className="text-danger mb-0">This field cannot be empty!</p>
              ) : (
                ''
              )}
            </div>
            <div className="col col-lg-2 col-sm-3 mb-3 mb-md-0">
              <select
                className="form-control form-control-lg"
                onChange={(e) => this.setState({ perPage: e.target.value })}
              >
                <option value="10">No. of Results</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className="col col-md-1 text-center text-md-left mb-3 mb-md-0">
              <button type="Submit" className="btn btn-warning btn-lg">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

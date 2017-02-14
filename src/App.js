import React, { Component } from 'react';
import './App.css';
import DataGrid from 'react-data-grid'

var rows = [
            {id:"1",firstName:"John",lastName:"Smith",city:"Podunk",email:"js@dim.com"},
            {id:"2",firstName:"Jane",lastName:"Doe",city:"Nowhere",email:"jd@slimy.com"},
            {id:"3",firstName:"Frog",lastName:"Toad",city:"Hicksville",email:"ft@zoomy.com"}
            ]

var columns = [
  { key: 'id', name: 'id', width: 50 },
  { key: 'firstName', name: 'firstName' },
  { key: 'lastName', name: 'lastName'  },
  { key: 'city', name: 'city' },
  { key: 'email', name: 'email' }
]

const rowGetter = rowNumber => rows[rowNumber];

class App extends Component {
  render() {
    return (
      <DataGrid
      enableCellSelect={true}
      idProperty='id'
      dataSource={rows}
      columns={columns}
      rowGetter={rowGetter}
      rowsCount={rows.length}
      style={{height: 500}}
      //if you don't want to show a column menu to show/hide columns, use
      //withColumnMenu={false}
      />
      /*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */

    );
  }
}

export default App;

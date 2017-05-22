const React = require('react');
import './App.css';
const DataGrid = require('react-data-grid');
var update = require('react-addons-update');
const { Editors, Formatters } = require('react-data-grid-addons');
const { DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;

var rows = [
            {id:"1",firstName:"John",lastName:"Smith",city:"Podunk",
                coolness:"cool",email:"js@dim.com"},
            {id:"2",firstName:"Jane",lastName:"Doe",city:"Nowhere",
                coolness:"uncool",email:"jd@slimy.com"},
            {id:"3",firstName:"Frog",lastName:"Toad",city:"Hicksville",
                coolness:"cool",email:"ft@zoomy.com"}
            ];

const coolTypes = ['cool','uncool'];
//  { id: 'cool', value: 'cool', text: 'Cool', title: 'Cool' },
//  { id: 'uncool', value: 'uncool', text: 'Not Cool', title: 'Not Cool' }
//];
const CoolTypesEditor = <DropDownEditor options={coolTypes} />;
const CoolTypesFormatter = <DropDownFormatter options={coolTypes} value="cool" />;

const App = React.createClass({
  getInitialState() {
      this._columns = [
      { key: 'id', name: 'ID', width: 50 },
      { key: 'firstName', name: 'First Name', editable: true },
      { key: 'lastName', name: 'Last Name', editable: true  },
      { key: 'city', name: 'City', editable: true },
      { key: 'coolness', name: "Cool?", editor: CoolTypesEditor,
        formatter: CoolTypesFormatter },
      { key: 'email', name: 'Email', editable: true}
      ];
  return { rows: rows };
  },

  rowGetter(i) {
    return this.state.rows[i];
  },

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
//      let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  },

  render() {
    return (
      <DataGrid
      enableCellSelect={true}
      columns={this._columns}
      rowGetter={this.rowGetter}
      rowsCount={this.state.rows.length}
      minHeight={500}
      onGridRowsUpdated={this.handleGridRowsUpdated}
      //if you don't want to show a column menu to show/hide columns, use
      //withColumnMenu={false}
      />
    );
  }
})

export default App;
//module.exports = App

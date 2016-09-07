'use strict';

class Records extends BaseComponent {
    constructor(props) {
        super();
        this._bind('addRecord', 'credits', 'debits', 'balance', 'deleteRecord');
        this.state = {
            records: props.data
        };
    }

  deleteRecord(record) {
    var records = this.state.records.slice();
    var index = this.state.records.indexOf(record);
    records.splice(index, 1);
    this.setState({records: records});
  };

  credits () {
    return this.state.records.filter( (record) => {
      return record.amount >= 0;
    })
    .reduce( (prev, curr) => {
      return prev + parseFloat(curr.amount);
    }, 0);
  };

  debits () {
    return this.state.records.filter( (record) => {
      return record.amount > 0;
    })
    .reduce( (prev, curr) => {
      return prev + parseFloat(curr.amount);
    }, 0);
  };

  balance() {
    return this.debits() + this.credits()
  }

  defaultProps () {
    return {records: [] }
  };

  addRecord(record) {
    var records = this.state.records;
    records.push(record);
    this.setState({records: records});
  };

  render () {
    var records = this.state.records.map((record, index) => {
      return <Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord}/>
    })
    return (
    <div className= 'records'>
      <h2 className= 'title'>Records</h2>

    <div className= 'row'>
      <AmountBox type='success' amount={this.credits()} text='Credit'></AmountBox>
      <AmountBox type='danger' amount={this.debits()} text='Debit'></AmountBox>
      <AmountBox type='info' amount={this.balance()} text='Balance'></AmountBox>
    </div>

    <RecordForm handleNewRecord={this.addRecord} />
    <hr />
    <table className= 'table table-bordered'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
      <tbody>
        {records}
      </tbody>
    </table>
  </div>

    )
  }
}

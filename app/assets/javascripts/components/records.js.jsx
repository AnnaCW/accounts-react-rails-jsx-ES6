'use strict';

class Records extends BaseComponent {
    constructor(props) {
        super();
        this._bind('addRecord');
        this.state = {
            records: props.data
        };
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
      return <Record key={record.id} record={record} />
    })
    return (
    <div className = 'records'>
      <h2 className = 'title'>Records</h2>
      <RecordForm handleNewRecord={this.addRecord} />
      <table className = 'table table-bordered'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
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

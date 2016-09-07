'use strict';

class Records extends BaseComponent {
    constructor(props) {
        super();
        // this._bind('addRecord', 'credits', 'debits', 'balance', 'deleteRecord', 'handleEditRecord');
        this.state = {
            records: props.data
        };
    }

  defaultProps () {
    return {records: [] }
  };

  render () {
    var records = this.state.records.map((record, index) => {
      return <Record key={record.id} record={record} />
    })
    return (
    <div className = 'records'>
      <h2 className = 'title'>Records</h2>
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

'use strict';

class Record extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleDelete');
  }

  handleDelete(event) {
    event.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: "/records/" + this.props.record.id,
      dataType: 'JSON',
      success: ( () => {
        this.props.handleDeleteRecord(this.props.record);
      })
    });
  }

  render () {
    return (
    <tr>
      <td>{this.props.record.date}</td>
      <td>{this.props.record.title}</td>
      <td>{amountFormat(this.props.record.amount)}</td>
      <td><a className='btn btn-danger' onClick={this.handleDelete}>Delete</a></td>
    </tr>
    );
  }

}

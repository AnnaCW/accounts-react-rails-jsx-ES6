'use strict';

class Record extends BaseComponent {
  constructor(props) {
    super(props);
  }


  render () {
    return (
    <tr>
      <td>{this.props.record.date}</td>
      <td>{this.props.record.title}</td>
      <td>{amountFormat(this.props.record.amount)}</td>
    </tr>
    );
  }

}

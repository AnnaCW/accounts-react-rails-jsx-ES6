'use strict';

class AmountBox extends React.Component {
  render() {
    var panel = " panel panel-" + this.props.type;
    return (
      <div className='col-md-4'>
        <div className={panel}>
          <div className='panel-heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
            {amountFormat(this.props.amount)}
          </div>
        </div>
      </div>
    )
  }
}

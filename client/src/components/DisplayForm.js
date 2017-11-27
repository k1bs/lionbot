// import React, { Component } from 'react'
//
// class DisplayForm extends Component {
//   constructor () {
//     super()
//     this.state = {
//       buttonStatus: null //'formHide'
//     }
//     this.formClose = this.formClose.bind(this)
//     this.formOpen = this.formOpen.bind(this)
//   }
//
//   formClose (e) {
//     e.stopPropagation()
//     this.setState({
//       buttonStatus: 'formHide'
//     })
//   }
//
//   formOpen (e) {
//     this.setState({
//       buttonStatus: 'formShow'
//     })
//   }
//
//   render () {
//     return (
//       <button onClick={this.formOpen}>
//         <div id='addCommand' className={this.state.buttonStatus}>
//           <div className='formClose' onClick={this.formClose} />
//         </div>
//       </button>
//     )
//   }
// }
//
// export default DisplayForm

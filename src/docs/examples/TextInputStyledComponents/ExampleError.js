import React from 'react';
import TextInputStyledComponents from 'react-comps/TextInputStyledComponents';

/** Required TextBox with error */
// export default class ExampleOptional extends React.Component {
//   render () {
//     return (
//       <TextInput
//         htmlId="example-optional"
//         label="First Name"
//         name="firstname"
//         onChange={ () => {} }
//       />
//     );
//   }
// };

export default function ExampleError() {
  return (
    <TextInputStyledComponents
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={ () => {} }
      required
      error="First name is required"
    />
  )
}

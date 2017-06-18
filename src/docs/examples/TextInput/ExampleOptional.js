import React from 'react';
import TextInput from 'react-comps/TextInput';

/** Optional TextBox */
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

export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={ () => {} }
    />
  )
}

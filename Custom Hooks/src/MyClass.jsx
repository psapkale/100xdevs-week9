import React from 'react';

class MyClass extends React.Component {
   constructor(props) {
      console.log('in the constructor');
      super(props);
   }

   // flow down

   render() {
      console.log('rendered');
      return <div>From MyClass component</div>;
   }

   // flow down

   componentDidMount() {
      console.log('component mounted');
   }

   // flow down

   componentDidUpdate() {
      console.log('component rerendered due to something');
   }

   // flow down

   componentWillUnmount() {
      console.log('component will unmount now');
   }
}

export default MyClass;

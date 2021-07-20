import React, {useEffect} from 'react';
import axios from 'axios';

function MyComponent() {
  useEffect(() => {
    async function main() {
      const requestUrl = `/endpointA`;
      await axios.get(requestUrl).catch(console.log);
      window.sessionStorage.getItem('searchKey');
    }
    main();

  }, []);

  return <div>Hi</div>;
}

export default MyComponent;

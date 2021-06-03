/* Create a new custom hook called useAjax() to abstract the API calls
Using this hook in your component should make the calls to the server
This hook should:
Accept the URL to the API server, the REST method, and (when relevant) the BODY (JSON) of the request
Handle CORS Settings, Content-Type, Headers and possibly authentication
You should use axios to perform the actual AJAX calls */

import { useEffect, useState } from 'react';
/* The useEffect Hook lets you perform side effects in function components: */
/* The useState is a Hook that lets you add React state to function components.  */
import axios from 'axios'; /*React hooks for axios, with built-in support for server side rendering. */

const useAjax = () => { //AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. 
  const [options, request] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function ajax() {
      if (!options.url) return;
      const res = await axios(options);
      setResponse(res.data)
    }
    ajax();
  }, [options])
  return [request, response];
}
export default useAjax;
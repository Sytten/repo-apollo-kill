import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import axios from 'axios';

export const Plugin: ApolloServerPlugin = {
  serverWillStart() {
    console.log('STARTED');
    return {
      async serverWillStop() {
        console.log('CALLED');
        const data = await axios.get('https://api.spacexdata.com/v3/launches');
        console.log('NOT CALLED');
        console.log(data);
      },
    };
  },
};

import Baobab from 'baobab';

import api from './api';
import stamp from './stamp';

export const tree = new Baobab({
  api,
  stamp,
});

global.tree = tree;

export default tree;

/*jshint esversion: 6 */
/* jshint -W138 */

import { createStore } from 'redux';
import LoginView from './view-login.js';
import ChatView from './view-chat.js';



export default function app() {

  const store = createStore( (state = [], action) => { return state; });
  const $appContainer = $('#app');

  let session = { username: 'jupiter' };
  console.log(session);


  console.log('store : ', store);

  const render = () => {
    $appContainer.append(new ChatView(store));
    $('nav .username').html(session.username);
  };

  render();

}

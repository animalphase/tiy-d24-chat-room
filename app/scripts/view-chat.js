/*jshint esversion: 6 */
/* jshint -W138 */

import ajaxData from './ajax.js';
import MessageView from './view-message.js';

export default function ChatView(store) {
  let $viewContent =
     $(`<section class="view-chat">
          <section class="chat-messages"></section>
          <form class="form-chat-input">
            <input class="chat-message-body" type="text" name="" value="" placeholder="chat…">
            <button class="btn btn-submit-chat-message" type="submit" name="button">➕</button>
          </form>
        </section>`);

  let $messageArea = $viewContent.find('.chat-messages');
  let $input = $viewContent.find('.chat-message-body');
  let $btnSubmit = $viewContent.find('.btn-submit-chat-message');

  // getData('blog', displayBlogPost);


  const renderMessages = (data, status, xhr) => {
    console.log('got', data);
    $messageArea.html('');
    data.forEach( (message, i, array) => {
      $messageArea.append(MessageView(message));
    } );
  };
  ajaxData('GET', undefined, renderMessages);

  const assembleMessageData = () => {
    return {
      body: $('.chat-message-body').val()
    };
  };

  const tempSentResults = (data, status, xhr) => {
    console.log('sent', data);
  };

  $btnSubmit.on('click', (e) => {
    e.preventDefault();
    let messageBody = $input.val();
    if(messageBody !== '' && messageBody !== undefined) {
      ajaxData('POST', assembleMessageData(), tempSentResults);
      $input.val('');
    } else {
      console.log('message field empty');
    }
  });

  return $viewContent;
}

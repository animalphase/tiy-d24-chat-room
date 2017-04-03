/*jshint esversion: 6 */
/* jshint -W138 */

export default function MessageView(message) {
  console.log(message);
  let $viewContent =
     $(`<div class="message">
          <div class="messages-meta">
            <p class="message-author">${message.author}</p>
            <p class="message-timestamp">${message.timestamp}</p>
          </div>
          <p class="message-body">${message.body}</p>
        </div>`);
  return $viewContent;
}

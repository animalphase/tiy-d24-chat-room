/*jshint esversion: 6 */
/* jshint -W138 */

export default function ajaxData(ajaxType, data, callback) {
  const chatsUrl = 'http://tiny-za-server.herokuapp.com/collections/ce-d24-chat/';

  let ajaxSettings;

  switch(ajaxType) {

    case 'POST':
      ajaxSettings = {
        type: 'POST',
        contentType: 'application/json',
        url: chatsUrl,
        data: JSON.stringify(data)
      };
      break;

    case 'GET':
      ajaxSettings = {
        type: 'GET',
        dataType: 'json',
        url: chatsUrl
      };
      break;

  }

  $.ajax(ajaxSettings).then( (data, status, xhr) => {
    if(callback !== '' && callback !== undefined) {
      callback(data, status, xhr);
    }
  });

}

/*jshint esversion: 6 */
/* jshint -W138 */

export default function LoginView(store) {
  let $viewContent =
     $(`<section class="view-login">
          <form class="form-login">
            <input class="username" type="text" name="" value="" placeholder="username…">
            <button class="btn btn-login" type="submit" name="button">login</button>
          </form>
        </section>`);

  let $input = $viewContent.find('.username');
  let $btnSubmit = $viewContent.find('.btn-login');

  $btnSubmit.on('click', (e) => {
    e.preventDefault();
    console.log(e.target);
  });

  return $viewContent;
}

uses('io.IOException');

// {{{ FileNotFoundException
io.FileNotFoundException = define('io.FileNotFoundException', 'io.IOException', function FileNotFoundException($message) {
  lang.Throwable.call(this, $message);
});
// }}}

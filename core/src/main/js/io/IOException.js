uses('lang.Throwable');

// {{{ IOException
io.IOException = define('io.IOException', 'lang.Throwable', function IOException($message) {
  lang.Throwable.call(this, $message);
});
// }}}


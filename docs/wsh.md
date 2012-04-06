Windows Script Host
===================
Windows Script Host (WSH) is a language-independent scripting host for 
Windows Script compatible scripting engines. It is available on all stock
Windows installations.
See http://msdn.microsoft.com/en-us/library/ec0wcxh3(v=vs.85).aspx

Getting started
---------------

```sh
$ cscript /nologo tools/cscript.js Hello "World"
Hello World
```

```sh
$ cscript /nologo tools/cscript.js Hello 
*** Uncaught exception lang.IllegalArgumentException(Argument required)
  at Throwable("Argument required")
  at IllegalArgumentException("Argument required")
  at Hello.main(array[0])
  at Method.invoke(null, array[1])
  at __main()

```

Features not supported
----------------------

* Properties (`defineProperty() not supported`)

Known issues
------------

* `lang.Object::toString()` method is not reported

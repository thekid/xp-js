XP to JS compiler / XP JS microkernel
=====================================
This experiment tries to see whether the XP Framework could be based on
JavaScript runtimes in the future. Paired with the XP compiler, its PHP
language parser and the generator to emit JavaScript, and maybe together 
with porting some of PHP's string and array functions, we would be able 
to exchange the PHP platform we currently depend on for something else.

See also:

* http://news.planet-xp.net/article/452/2012/03/21/
* http://news.planet-xp.net/article/451/2012/03/11/
* http://news.planet-xp.net/article/449/2012/02/26/

Demo class
----------

```javascript
// {{{ Hello
Hello = define('Hello', 'lang.Object', function Hello () { });

Hello.main = function Hello$main(args) {
  if (args.length < 1) {
    throw new lang.IllegalArgumentException('Argument required');
  }
  util.cmd.Console.writeLine('Hello ', args[0]);
}
// }}}

```


NodeJS
------
Node.JS is the V8-based JavaScript engine which is becoming increasingly
popular. Even with its pre-1.0 status, sites such as GitHub use it in 
production.
See http://nodejs.org/

**Getting started**

```sh
$ node tools/node.js Hello "World"
Hello World
```

```sh
$ node tools/node.js Hello
*** Uncaught exception lang.IllegalArgumentException(Argument required)
  at IllegalArgumentException("Argument required") [line 5 of IllegalArgumentException.js]
  at Hello.main(array[0]) [line 6 of Hello.js]
  at Method.invoke(null, array[1]) [line 26 of Method.js]
  at __main() [line 194 of node.js]
```



Windows Script Host
-------------------
Windows Script Host (WSH) is a language-independent scripting host for 
Windows Script compatible scripting engines. It is available on all stock
Windows installations.
See http://msdn.microsoft.com/en-us/library/ec0wcxh3(v=vs.85).aspx

**Getting started**

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


Setting up the compiler
-----------------------
You need the branch "node" of my xp-language fork checked out:

```sh
$ git clone -b node git://github.com/thekid/xp-language.git xp.node
Cloning into xp.node...
[...]
```

Then, you need to add this to the `use` line in your **xp.ini** file. *This
file will usually be in ~/.xp/xp.ini or ~/bin/xp.ini.* Add the path to the
"compiler" subdirectory of the "xp.node" directory from above to the end
of this line, prefixed by the platform's path separator character. For 
example, this will work on Un*x platforms (in Windows, use semicolons):

```diff
-use=~/devel/xp/core:~/devel/xp/tools
+use=~/devel/xp/core:~/devel/xp/tools:~/devel/xp.node/compiler
```

You're all set to go.


Compiling
---------
To compile classes from XP language to XP JS, simply invoke the **xcc** 
command as follows:

```sh
$ xcc -e node Hello.xp
[.]
Done: 1/1 compiled, 0 failed
```

Then, run it as seen above.


Class path
----------
For a start just put all the classes in the current directory. Later on,
when you want to start sorting stuff out, you can place compiled classes 
anywhere in the class path. The class path is compiled from the paths 
listed in the `.pth` files (as with the XP Framework). To get an overview 
of all currently registered class paths, execute the entry point without 
arguments:

```sh
$ node tools/node.js
XP JS Microkernel 0.8.6 { Node 0.6.12 & V8 3.6.6.24 } @ Windows_NT 6.1.7600 (ia32)
Copyright (c) 2011-2012 the XP group
lang.FileSystemClassLoader<C:\cygwin\home\friebe\devel\xp-js\core\src\main\js>
lang.FileSystemClassLoader<C:\cygwin\home\friebe\devel\xp-js\test\src\main\js>
lang.FileSystemClassLoader<C:\cygwin\home\friebe\devel\xp-js\tools\src\main\js>
lang.FileSystemClassLoader<C:\cygwin\home\friebe\devel\xp-js>
```


Testing
-------
The classes provided in the microkernel are tested by unittests in the
directory with the same name. To run these tests, invoke the following
command:

```sh
$ node tools/node.js Unittest unittests.*
[........................................................................
..]

OK: 74 run, 74 succeeded, 0 failed
Memory used: 12960 kB
Time taken: 0.022 sec(s)
```

The tests are written in XP language. Any changes made to the `*.xp`
files need to be recompiled to JavaScript before executing. This can be 
accomplished by running `xcc -e node unittests/*.xp`.


Contributing
------------
If you would like to contribute, you can do it the GitHub way by opening
issues or pull requests. To see where help is needed, check the 
[implementation status document](https://github.com/thekid/xp-js/blob/master/status.md)


* * *


**Happy hacking!**

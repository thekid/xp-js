Implementation status
=====================
This gives an overview of the XP microkernel's status compared to the
XP Framework's core.

* * *

**If you would like to contribute, you can do it the GitHub way by opening
issues or pull requests.**

* * *


Implemented
-----------
These features behave the same:

* uses()
* lang.Generic root interface
* Object hierarchy
* Exception hierarchy
* Annotations
* Apidoc comments reflection
* Generic stringOf() method
* Object cloning
* Static initializers
* Stack traces (in node.js, WSH missing file / line)

Supported by compilation
------------------------
These features are realized in part by the compiler and supported by the core:

* Try/catch/finally
* ARM blocks
* Native methods - via https://github.com/kvz/phpjs

Incomplete features
-------------------
These features are not complete yet:

* Class Loader infrastructure - no .xar files
* Type system - no primitives, map and array types
* Class reflection
* Package reflection
* Interfaces - no runtime checks, inheritance missing
* Typesafe enums - abstract enums missing, reflection
* Type information for methods and their signature

Missing features
----------------
These features are not present:

* Generics
* Extension methods
* Public/private/protected
* Abstract
* Final
* Type checks
* Thrown exceptions metadata
* Runtime class definition
* Constructor reflection
* xp::null
* Declaring class reflection
* lang.types package
* Process execution
* Threading
* Runtime introspection
* Shutdown hooks
* Proxies - depend on runtime class definition

Not supported by compiler
-------------------------
These features are missing in the compiler:

* Lambdas
* Properties
* Operators
* Indexers
* Dynamic instanceof (`instanceof $t`)
* Silence operator

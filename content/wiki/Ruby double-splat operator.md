---
tags: ruby
---

New in Ruby 2.0, this is used to capture all keyword arguments, or use a hash as keyword arguments.

    irb(main):001:0> def foo(**opts)
    irb(main):002:1> opts
    irb(main):003:1> end
    => nil
    irb(main):004:0> foo(x:1, b:2)
    => {:x=>1, :b=>2}
    irb(main):005:0> def bar(x: 1, b: 2)
    irb(main):006:1> [x, b]
    irb(main):007:1> end
    => nil
    irb(main):008:0> bar
    => [1, 2]
    irb(main):009:0> bar(x:3,b:4)
    => [3, 4]
    irb(main):010:0> bar(x:3,z:4)
    ArgumentError: unknown keyword: z
            from (irb):10
            from /Users/greg/.rbenv/versions/2.0.0-p247/bin/irb:12:in `<main>'
    irb(main):011:0> def baz(arg, a: 1, b: 2)
    irb(main):012:1> [arg, a, b]
    irb(main):013:1> end
    => nil
    irb(main):014:0> baz('x')
    => ["x", 1, 2]
    irb(main):015:0> baz('x', b: 1)
    => ["x", 1, 1]
    irb(main):016:0> baz('x', {a:4})
    => ["x", 4, 2]
    irb(main):017:0> baz('x', {a:4, x:1})
    ArgumentError: unknown keyword: x
            from (irb):17
            from /Users/greg/.rbenv/versions/2.0.0-p247/bin/irb:12:in `<main>'
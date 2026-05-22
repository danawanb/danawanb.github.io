---
title: Parser by hand
publish_date: 2026-01-12
---

Last year, I stumbled upon this dude somehow writing a SQLite parser by hand in Rust: [Turso PR](https://github.com/tursodatabase/turso/pull/2381). Parsing probably sounds scary if you come from a high-level language, but the TL;DR is simple: parsing just generates the AST structure from tokens/code. As always in CS, the devil is in the details—so I decided to write my own parser.

Luckily, I found a book that fulfilled my appetite: [Writing An Interpreter In Go](https://interpreterbook.com/). It’s amazing, even though it’s tiny only 250 pages. As a self-taught engineer without a CS degree (I have an associate degree in Accounting), I found myself really enjoying this book because it’s super practical. I learned parsing by writing an interpreter in **Go** (my main backend language) and then replicating the same program in **Zig** (my current programming language besides Elixir).

Go isn’t a GC language, so memory is easy to understand. Zig, on the other hand, forces you to use an allocator for dynamic memory-like C, but safer, because the compiler catches mistakes. And honestly, even engineers with 4 yoe still mess up, so I didn’t stress if I made mistakes in Zig. It’s just a pet project anyway.

Implementing a hand-written parser made me realize I can accomplish way more than I thought. Understanding and building this stuff by hand might not be “hype” in 2026, but I think knowing the fundamentals of CS is still crucial if you want to be a 6.9x engineer, of course :).

[GitHub - danawanb/interpreter](https://github.com/danawanb/interpreter)

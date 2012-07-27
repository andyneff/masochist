---
title: 1 hour with Vim
tags: vim
---

I'm gradually starting to flesh out my `~/.vimrc` with useful stuff.

So far I've got:

    " search
    set hlsearch   " highlight search strings
    set incsearch  " incremental search ("find as you type")
    set ignorecase " ignore case when searching
    set smartcase  " except when search string includes a capital letter

    set number     " show line numbers in gutter
    set ruler      " show line/column info at bottom of buffer

    set guioptions-=T  " don't show toolbar

    " need per-mode defaults here (2 for Ruby, 4 for C etc)
    set shiftwidth=2 " spaces per tab (when shifting)
    set tabstop=2    " spaces per tab
    set expandtab    " always use spaces instead of tabs
    set smarttab     " <tab>

    set list     	 " show whitespace
    set listchars=eol:¶,tab:>-,extends:»,precedes:«,trail:•

    " ,e -- edit file, starting in same directory as current file
    map ,e :e <C-R>=expand("%:p:h") . "/" <CR>

    " emulate Command-T in TextMate
    map ,t :FuzzyFinderTextMate<CR>

Most of it pretty obvious stuff. The search stuff is definitely the best I've ever had in any editor. Stuff like line numbering is just obvious.

The toolbar is disabled because it just takes up screen real estate; you'll never touch it.

I've got some it set up to use (2) spaces instead of tabs for now seeing as I'm mostly editing [Ruby](/wiki/Ruby) stuff right now, but I'll eventually set up per-mode defaults and some nice way of overriding them temporarily. For example, I like to use 4 spaces per tab in my [C](/wiki/C) files, but I also contribute to projects where they use tabs instead, and each tab is 8 spaces wide.

The `list` stuff is nice unobtrusive highlighting of whitespace in the buffer, useful for spotting bad whitespace (trailing whitespace, for example). You can have Vim automatically clean such whitespace errors (same as you can with Emacs), but I've always preferred that my editor not do that kind of thing unless I explicitly ask it to.

Near the end, the `,e` mapping is a nice way of getting to the "open file" prompt, with the starting path preset to the directory of the file currently being edited. Got that one off a weblog comment somewhere; most definitely couldn't have figured it out myself yet.

Last of all there's a `,t` mapping which does the same as [TextMate](/wiki/TextMate)'s Command-T. It works and is very effective, but the way it's put together is pretty darn flakey. It depends intimately on the "Fuzzyfinder" plugin and will break if you're not using exactly the right version of each of the pieces. Also doesn't bomb out too gracefully if you point it at a directory that it doesn't like, and the `fuzzy_ignore` setting didn't work for me at all. So that's one piece of the puzzle that I'm hoping can be improved.

I installed "NERD Tree" as well, but there's not really much use for it when you're finding everything with `,t`.
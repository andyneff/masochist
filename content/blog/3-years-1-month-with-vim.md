---
title: 3 years, 1 month with Vim
tags: emacs vim
cache_breaker: 1
---

Back in January of 2009 I was feeling experimental. I was unhappy with [TextMate](/wiki/TextMate) and wanted to try a "real" editor. Not just in a dabbling kind of way, but in a use-it-the-way-it-was-meant-to-be-used way.

I started by trying [Emacs](/wiki/Emacs). The [first day was horrible](/blog/trying-emacs). I gritted by teeth and persisted for a week before [giving up](/blog/giving-up-on-emacs). Emacs itself is an amazing technical achievement, but it just wasn't for me.

[Vim](/wiki/Vim), on the other hand, was another story. Despite its alien modal-ness, I instantly liked it, and wrote some impressions after [0 minutes](/blog/0-minutes-with-vim), [10 minutes](/blog/10-minutes-with-vim), [20 minutes](/blog/20-minutes-with-vim), [an hour](/blog/1-hour-with-vim) and [and 2 hours](/blog/2-hours-with-vim).

After a while, I realized [I must have been a Vim user](/blog/i-guess-i-must-be-a-vim-user-now) and I experienced [the usual epiphany](/blog/the-vim-epiphany) when everything clicked.

So, today I was re-reading those old articles from my perspective of someone who has been a full-time Vim user now for 2 years and 10 months.

# On tabs

Back when I was starting one of the things that initially took some getting used to was the way Vim tabs weren't bound to documents, like they are in almost all other applications.

Within the first months of using Vim I pretty much stopped using tabs. They simply aren't so useful in a world where windows are just viewports into documents, and windows can contain multiple viewpoints, just as documents can appear in multiple viewpoints.

They're not even so useful to divide things up into projects (eg. all files from one project in one tab, and all from another in a different tab) because under the hood it's the same Vim instance and both tabs will have access to the shared buffer list.

I have one colleague that uses tabs in Vim all the time. To be honest, I don't really understand why.

Once you have a nimble way of switching between your open buffers, you stop even caring about the visual manifestation of your documents that tabs would give you in any other application. I used MiniBufExplorer for a long time because I thought I needed that visual representation. Earlier this year, I realized that I no longer needed it, and removed it; I hadn't looked at it or used it to switch among my dozens of open buffers for literally months. When I want to get a quick overview of all the buffers I have open, I just do `:ls`.

So what's the "nimble" way of switching between buffers that I mentioned? Well, there are various. If I just want to toggle back to the buffer I was last looking at I do `<CTRL-6>` (`:b#` also works). If I just want to go back through the jump list a couple levels I do `CTRL-o` (and back in with `CTRL-i` if I go too far by mistake). Finally, if I know it's a file I've already worked on at some point in the session I can use the [Command-T](/wiki/Command-T) buffer find.

# Being a Vim ninja

It's funny. I haven't "studied" Vim in as disciplined a fashion as I could have, and perhaps should have. Rather, I became competent at basic movement and editing and gradually picked up other bits and pieces of knowledge along the way. Usually a couple of times a week I'll learn something new and wish I'd found out about it sooner.

Nevertheless, I am pretty sure that I am what most would, mistakenly perhaps, call a Vim ninja. [I wrote](/blog/bringing-textmate-style-command-t-to-vim) a popular plug-in for Vim called [Command-T](/products/command-t). I can transform and wrangle text quickly and with a minimum of effort. People ask me for advice on Vim.

Fortuitously, without seeking it, I now find myself in the situation where my colleagues could also be called Vim ninjas.

The funny thing is, though, not all Vim ninjas are alike. We're not like the wizened old gurus that meditate on top of the mountain, knowing all. Rather, we are like young, inexperienced ninjas, fresh out of ninja college. We haven't yet mastered all the possible weapons and forms of our craft. There are some who have drilled long hours with staves (tabs), others with shuriken (macros), others with nunchaku (marks, jumps and changes).

Each of us knows that we've only mastered a tiny fragment of our craft, and beyond the basic fundamentals of our art (moving silently in the dark), there is little overlap in our knowledge. The one thing we have in common is that we can generally operate on text with fewer key presses, and with fewer "chords", than users of pretty much any other editor or IDE.

# The future

So it's been a fun 3 years and 1 month. Vim has made my work so much more enjoyable and effortless. Best of all, I know I've only scratched the surface.

Vim is one of those deeply rewarding technologies that pays you back when you invest the time and effort in learning it. I'm already looking forward to standing here in another 3 years and 1 month and reviewing how much Vim has helped me grow.
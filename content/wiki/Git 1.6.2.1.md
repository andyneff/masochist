---
tags: git
cache_breaker: 1
---

# Release announcement

As posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release GIT 1.6.2.1 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.2.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.2.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.2.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS//git-*-1.6.2.1-1.fc9.$arch.rpm	(RPM)

    ----------------------------------------------------------------

    GIT v1.6.2.1 Release Notes
    ==========================

    Fixes since v1.6.2
    ------------------

    * .gitignore learned to handle backslash as a quoting mechanism for
     comment introduction character "#".

    * timestamp output in --date=relative mode used to display timestamps that
     are long time ago in the default mode; it now uses "N years M months
     ago", and "N years ago".

    * git-add -i/-p now works with non-ASCII pathnames.

    * "git hash-object -w" did not read from the configuration file from the
     correct .git directory.

    * git-send-email learned to correctly handle multiple Cc: addresses.

# See also

-   [Updating to Git 1.6.2.1](/wiki/Updating_to_Git_1.6.2.1)

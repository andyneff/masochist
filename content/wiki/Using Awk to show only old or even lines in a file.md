---
tags: awk
---

You can use this sort of trick, combined with `grep`, to de-dupe repeated lines in a log file:

```shell
$ awk 'NR%2==0' file
$ awk 'NR%2==1' file
```
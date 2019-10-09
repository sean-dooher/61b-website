
REMOTEDIR = $(REMOTE_PREFIX)assets/js

DIST_FILES = $(wildcard *.js)

.PHONY: dist clean

include lib/urls.mk

default:
	echo "Specify action (dist or clean)."

dist:
	chmod a+r $(DIST_FILES)
	rsync -av $(DIST_FILES) $(REMOTEDIR)

clean:
	$(RM) *~

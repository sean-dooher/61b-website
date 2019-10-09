
REMOTEDIR = $(REMOTE_PREFIX)assets/css

DIST_FILES = $(wildcard *.css) highlight

.PHONY: dist clean

include lib/urls.mk

default:
	echo "Specify action (dist or clean)."

dist:
	chmod a+r $(DIST_FILES)
	rsync -av $(DIST_FILES) $(REMOTEDIR)

clean:
	$(RM) *~

.PHONY: dist

REMOTE_DIR = $(REMOTE_PREFIX)assets

dist:
	chmod a+r *
	rsync -av --exclude lib --exclude Makefile --exclude '*~' \
	    ../images $(REMOTE_DIR)

include lib/urls.mk

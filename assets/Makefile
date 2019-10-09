.PHONY: dist

REMOTE_DIR = $(REMOTE_PATH_PREFIX)

DIRS = assets assets/css assets/js 

dist:
	-ssh $(REMOTE_HOST) mkdir $(DIRS:%=$(REMOTE_DIR)/%)

include lib/urls.mk

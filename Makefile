.PHONY : deploy
pwd=$(shell pwd)
ifndef AWS
	AWS=aws
endif

deploy :
	$(AWS) s3 sync $(pwd) s3://input.minimesos.org --exclude "*" --include "content/*" --include "public/*"  --include "themes/*" --include  "config.toml"

default : deploy

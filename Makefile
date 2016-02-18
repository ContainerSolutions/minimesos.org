.PHONY : deploy
pwd=$(shell pwd)
ifndef AWS
	AWS=aws
endif

deploy :
	$(AWS) s3 sync $(pwd) s3://input.minimesos.org --exclude "*" --include "content/*" --include "themes/*" --include  "config.toml" --include "static/*" 

default : deploy

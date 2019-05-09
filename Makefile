PATH := $(shell yarn bin):$(PATH)
SHELL := /bin/bash -o pipefail

.PHONY: build test test-unit

clean:
	find ./src -name "*.js" ! -path "**/__tests__/resources/**" -delete
	find ./src -name "*.js.map" -delete
	find ./src -type d -empty -delete
	find ./test -name "*.js" ! -path "./test/resources/**" -delete
	find ./test -name "*.js.map" ! -path "./test/resources/**" -delete
	find ./test -type d -empty -delete

dependencies:
	yarn install

build:
	tsc
	dts-bundle-generator -o src/types.d.ts src/types.ts

check:
	tslint --project tsconfig.json

test:
	jest

watch-tests:
	jest --watchAll

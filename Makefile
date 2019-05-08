PATH := $(shell yarn bin):$(PATH)
SHELL := /bin/bash -o pipefail

.PHONY: build test test-unit

build:
	make check
	tsc
	dts-bundle-generator -o src/types.d.ts src/types.ts

check:
	tslint --project tsconfig.json

test:
	make test-unit

test-unit:
	jest

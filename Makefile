
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

rebuild: clean build

node_modules:
	@npm install

.PHONY: clean

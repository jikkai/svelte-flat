.PHONY: release

release:
	@npm run clean
	@npm run build:entry
	@npm run build:components
	@npm run build:css
	@npm run build:docs

dev:
	@npm run dev

help:
	@echo "Available commands:"
	@echo "  make init Setup project required for development"

init:
	rm -rf node_modules/ yarn*
	npm install && npm run link:shared

dev:
	docker compose up --build -d

down:
	docker compose down

lg_app:
	docker compose logs api --tail 100 --follow

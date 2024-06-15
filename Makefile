help:
	@echo "Available commands:"
	@echo "  make init Setup project required for development"

init:
	rm -rf node_modules/ yarn*
	npm install

start:
	docker compose up --build -d

dev:
	docker compose up -d

down:
	docker compose down

lg_app:
	docker compose logs api --tail 100 --follow

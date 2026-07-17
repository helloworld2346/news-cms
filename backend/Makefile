.PHONY: run dev build tidy test docker-up docker-down db-reset  
  
run:
	go run ./cmd/server  
  
dev: 
	air  
  
build:
	go build -o ./bin/server ./cmd/server  
  
tidy:  
	go mod tidy  
  
test:  
	go test ./...  
  
docker-up: 
	cd .. && docker compose up --build  
  
docker-down:  
	cd .. && docker compose down  
  
db-reset:
	docker compose -f ../docker-compose.yml exec postgres psql -U newscms -d newscms -c "DROP TABLE IF EXISTS users;"
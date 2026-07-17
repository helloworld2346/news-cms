FROM golang:1.25.1-alpine AS builder  
  
WORKDIR /app  
  
COPY go.mod go.sum ./  
RUN go mod download  
  
COPY . .  
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/bin/server ./cmd/server  
  
FROM alpine:3.20  
  
WORKDIR /app  
  
RUN apk add --no-cache tzdata ca-certificates  
  
COPY --from=builder /app/bin/server /app/server  
COPY --from=builder /app/migrations /app/migrations  
  
EXPOSE 8080  
  
ENTRYPOINT ["/app/server"]
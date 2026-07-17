package configs  
  
import (  
	"log"  
	"os"  
	"strings"  
	"time"  
  
	"github.com/joho/godotenv"  
)  
  
type Config struct {  
	AppEnv  string  
	AppPort string  
	AppName string  
  
	DBHost     string  
	DBPort     string  
	DBUser     string  
	DBPassword string  
	DBName     string  
	DBSSLMode  string  
  
	JWTSecret     string  
	JWTAccessTTL  time.Duration  
	JWTRefreshTTL time.Duration  
  
	RedisEnabled bool  
	RedisAddr    string  
  
	CORSAllowedOrigins []string  
}  
  
func Load() *Config {  
	if err := godotenv.Load(); err != nil {  
		log.Println("no .env file found, using system environment variables")  
	}  
  
	return &Config{  
		AppEnv:  getEnv("APP_ENV", "development"),  
		AppPort: getEnv("APP_PORT", "8080"),  
		AppName: getEnv("APP_NAME", "news-cms"),  
  
		DBHost:     getEnv("DB_HOST", "localhost"),  
		DBPort:     getEnv("DB_PORT", "5432"),  
		DBUser:     getEnv("DB_USER", "newscms"),  
		DBPassword: getEnv("DB_PASSWORD", "newscms"),  
		DBName:     getEnv("DB_NAME", "newscms"),  
		DBSSLMode:  getEnv("DB_SSLMODE", "disable"),  
  
		JWTSecret:     getEnv("JWT_SECRET", "change_me"),  
		JWTAccessTTL:  getDuration("JWT_ACCESS_TTL", 15*time.Minute),  
		JWTRefreshTTL: getDuration("JWT_REFRESH_TTL", 168*time.Hour),  
  
		RedisEnabled: getEnv("REDIS_ENABLED", "false") == "true",  
		RedisAddr:    getEnv("REDIS_ADDR", "localhost:6379"),  
  
		// mặc định cho dev Vite; nhiều origin phân tách bằng dấu phẩy  
		CORSAllowedOrigins: getSlice("CORS_ALLOWED_ORIGINS", []string{"http://localhost:5173"}),  
	}  
}  
  
func getEnv(key, fallback string) string {  
	if v, ok := os.LookupEnv(key); ok {  
		return v  
	}  
	return fallback  
}  
  
func getDuration(key string, fallback time.Duration) time.Duration {  
	if v, ok := os.LookupEnv(key); ok {  
		if d, err := time.ParseDuration(v); err == nil {  
			return d  
		}  
	}  
	return fallback  
}  
  
func getSlice(key string, fallback []string) []string {  
	if v, ok := os.LookupEnv(key); ok && strings.TrimSpace(v) != "" {  
		parts := strings.Split(v, ",")  
		out := make([]string, 0, len(parts))  
		for _, p := range parts {  
			if s := strings.TrimSpace(p); s != "" {  
				out = append(out, s)  
			}  
		}  
		return out  
	}  
	return fallback  
}
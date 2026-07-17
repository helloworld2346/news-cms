package service  
  
import (  
	"errors"  
  
	"github.com/helloworld2346/news-cms/backend/internal/auth/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/repository"  
	"github.com/helloworld2346/news-cms/backend/pkg/jwt"  
	"golang.org/x/crypto/bcrypt"  
)  
  
var ErrInvalidCredentials = errors.New("invalid username or password")  
  
type AuthService interface {  
	Login(req dto.LoginRequest) (*dto.TokenPair, error)  
	Refresh(refreshToken string) (*dto.TokenPair, error)  
	Me(userID uint) (*entity.User, error)  
}  
  
type authService struct {  
	repo repository.AuthRepository  
	jwt  *jwt.Manager  
}  
  
func NewAuthService(repo repository.AuthRepository, jwtMgr *jwt.Manager) AuthService {  
	return &authService{repo: repo, jwt: jwtMgr}  
}  
  
func (s *authService) Login(req dto.LoginRequest) (*dto.TokenPair, error) {  
	user, err := s.repo.FindByUsername(req.Username)  
	if err != nil || !user.IsActive {  
		return nil, ErrInvalidCredentials  
	}  
	if err := bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(req.Password)); err != nil {  
		return nil, ErrInvalidCredentials  
	}  
	return s.issueTokens(user.ID)  
}  
  
func (s *authService) Refresh(refreshToken string) (*dto.TokenPair, error) {  
	claims, err := s.jwt.Parse(refreshToken)  
	if err != nil || claims.Type != jwt.RefreshToken {  
		return nil, ErrInvalidCredentials  
	}  
	if _, err := s.repo.FindByID(claims.UserID); err != nil {  
		return nil, ErrInvalidCredentials  
	}  
	return s.issueTokens(claims.UserID)  
}  
  
func (s *authService) Me(userID uint) (*entity.User, error) {  
	return s.repo.FindByID(userID)  
}  
  
func (s *authService) issueTokens(userID uint) (*dto.TokenPair, error) {  
	access, err := s.jwt.GenerateAccess(userID)  
	if err != nil {  
		return nil, err  
	}  
	refresh, err := s.jwt.GenerateRefresh(userID)  
	if err != nil {  
		return nil, err  
	}  
	return &dto.TokenPair{  
		AccessToken:  access,  
		RefreshToken: refresh,  
		TokenType:    "Bearer",  
		ExpiresIn:    int64(s.jwt.AccessTTL().Seconds()),  
	}, nil  
}
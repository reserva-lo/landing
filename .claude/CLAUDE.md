# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Autarquico is an automated payroll platform for microenterprises. It uses a local-first Docker development approach with FastAPI (Python 3.11) backend and React + TypeScript frontend.

## Development Commands

All commands run via `make` and execute inside Docker containers:

```bash
# Start development
make setup                  # Initialize project and build containers
make dev                    # Start all services
make dev-build              # Rebuild and start containers
make stop                   # Stop all services
make clean                  # Remove all containers, volumes, and cache
make ps                     # Show container status

# Testing
make test                   # Run all backend tests
make test-unit              # Run unit tests only (exclude integration)
make test-watch             # Watch mode for continuous testing
make test-cov               # Tests with coverage report

# Single test (inside container)
docker compose exec backend pytest tests/test_auth.py::test_login -v
docker compose exec backend pytest -k "test_name" -v

# Code quality
make lint                   # Run ruff (Python) + ESLint (TypeScript)
make lint-fix               # Auto-fix linting issues
make format                 # Format code (ruff + prettier)
make type-check             # Run mypy + TypeScript checks

# Logs and debugging
make logs                   # All service logs
make logs-backend           # Backend only
make logs-frontend          # Frontend only
make shell-backend          # Python interactive shell
make shell-backend-bash     # Bash shell in backend container
make shell-frontend         # Node shell in frontend container
make shell-mongo            # MongoDB interactive shell

# Database
make seed                   # Seed database with sample data
make reset-db               # Reset database (delete all data)
make migrate                # Run database migrations
```

## Architecture

```
Frontend (React/TS)  ──►  Backend (FastAPI)  ──►  MongoDB + Redis
     :5173                    :8000               :27017   :6379
                                │
                                ▼
                            Keycloak (:8080)
                         (Auth/OAuth2/OIDC)
```

### Backend Structure (`backend/app/`)

- `main.py` - FastAPI app entry point with lifespan events (startup/shutdown)
- `config.py` - Environment-driven settings (Pydantic `BaseSettings`)
- `database.py` - MongoDB connection with class-based singleton (`Database` class)
- `core/` - Authentication infrastructure
  - `auth_provider.py` - Abstract base for auth providers (User, UserToken models)
  - `keycloak_provider.py` - Keycloak implementation with JWT validation
  - `auth_service.py` - Auth service layer
  - `auth.py` - FastAPI dependencies for route protection
  - `exceptions/` - Error handling and Sentry integration
- `routes/` - API endpoints (auth, companies, feature_flags, todos)
- `routers/` - Additional API endpoints (organizations)
- `models/` - Pydantic schemas and MongoDB document models
- `services/` - Business logic layer
  - `company_service.py` - Company management
  - `organization_service.py` - Organization setup
  - `feature_flag.py` - Feature flag system

### Frontend Structure (`frontend/src/`)

- `auth/` - Authentication infrastructure
  - `KeycloakProvider.tsx` - Keycloak initialization and lifecycle
  - `AuthContext.tsx` - Auth state management
  - `authApi.ts` - Auth API calls (login, signup, token refresh)
  - `tokenStorage.ts` - Token persistence
  - `types.ts` - Auth type definitions
- `config/auth.ts` - Keycloak and API configuration
- `pages/` - Route components (Login, SignupPage, Dashboard, Onboarding, OrganizationSetupPage)
- `hooks/useAuth.ts` - Auth state hook
- `api/client.ts` - Axios client with error interceptor
- `exceptions/` - Frontend error handling

### Key Patterns

- **Auth flow**: Frontend uses keycloak-js → Backend validates tokens against Keycloak server
  - Frontend: Keycloak handles OAuth2/OIDC flow, stores tokens in localStorage
  - Backend: Validates JWT tokens via JWKS endpoint, extracts user info and roles
  - Provider pattern: `AuthProvider` base class allows switching auth systems
- **Async MongoDB**: Motor client with `Database` class singleton in `database.py`
  - Connection managed in FastAPI lifespan events
  - Use `Database.get_database()` to get db instance
  - Test fixtures create isolated test database
- **Service layer**: Routes delegate to services for business logic
  - Routes handle HTTP concerns (validation, responses)
  - Services handle domain logic and database operations
- **Config**: Environment-driven via Pydantic `BaseSettings` in `config.py`
  - Settings loaded from env vars or `.env` file
  - All configuration accessed via `settings` singleton

## Testing

Backend uses pytest with async support:
- Tests in `backend/tests/`
- Fixtures in `conftest.py` handle:
  - Test database setup/teardown (isolated test DB per run)
  - Mock users with different roles (owner, manager, employee)
  - Mock auth providers and tokens
  - Sample data factories
- Mark integration tests with `@pytest.mark.integration`
- Async tests automatically handled via `pytest-asyncio`

## Service URLs (Development)

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Keycloak Admin: http://localhost:8080/admin (admin/admin)
- MongoDB Express: http://localhost:8081 (with `make dev-tools`)

## Development Philosophy

This project follows craft-oriented development principles outlined in `CODING_STYLE.md`:
- **Receptive Architecture**: Let abstractions emerge from concrete implementations
- **Experimental Iteration**: Prototype and refactor fearlessly
- **Essential Simplicity**: Favor composition over complex abstractions
- **Organic Timing**: Build patterns after 2-3 concrete examples exist

Key takeaways:
- Start simple, add complexity only when patterns are clear
- SOLID principles (especially Open/Closed, Liskov Substitution, Dependency Inversion)
- Test-driven approach with comprehensive test coverage
- Code should read like prose - prioritize clarity over cleverness

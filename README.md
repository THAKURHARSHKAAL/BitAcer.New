# Bitacer Land Verification System

Full-stack property verification platform with React + Tailwind frontend and Node.js/Express + MongoDB backend.

## Structure
- `frontend/` React app
- `backend/` API server

## Backend setup
1. `cd backend && npm install`
2. Copy `.env.example` to `.env` and fill values.
3. `npm run dev`

## Frontend setup
1. `cd frontend && npm install`
2. Set `VITE_API_URL=http://localhost:5000/api` in `.env`
3. `npm run dev`

## Key capabilities
- JWT auth (signup/login)
- Property registration with document upload
- SHA-256 hash generation for property identity
- Duplicate ownership prevention with unique indices
- Admin review and approve/reject workflow
- MetaMask wallet capture + optional Ethereum hash write

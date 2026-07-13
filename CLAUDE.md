# CLAUDE.md

This file guides Claude Code when working in this repository.

## Project

Personal portfolio site built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4.
Linting/formatting via Biome (ESLint has been removed).

- `npm run start` — dev server
- `npm run build` — typecheck (`tsc -b`) + production build
- `npm run lint` — Biome lint
- `npm run preview` — preview production build

## Git Workflow

This project follows a big-tech-style git workflow, even though it's a personal repo.

### Branch naming

```
<type>/<short-description>
```

Types: `feature/`, `fix/` (or `bugfix/`), `hotfix/`, `chore/`, `refactor/`, `docs/`.

Examples:
- `feature/dark-mode-toggle`
- `fix/cv-pdf-download`
- `chore/remove-eslint`

### Commit messages — Conventional Commits

```
<type>(<scope>): <short summary>

<optional body — explain why, not what>

<optional footer — breaking changes, issue refs>
```

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`.

Examples:
```
feat(auth): add Google OAuth login
fix(cv): resolve pdf download link on Safari
chore(deps): remove eslint, migrate linting to biome
```

Rules:
- One commit = one logical change.
- Imperative mood ("add", not "added"/"adds").
- No direct commits to `main` — branch → PR → review → merge.
- Prefer squash merge to keep `main` history clean.

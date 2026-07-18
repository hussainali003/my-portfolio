# CLAUDE.md

This file guides Claude Code when working in this repository.

## Project

Personal portfolio site built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4.
Linting/formatting via Biome (ESLint has been removed).

- `npm start` — dev server
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

## Issue workflow

Follow this exact sequence when picking up a GitHub issue in this repo. Never commit directly to `main` — always via a branch and PR.

1. `git pull` on `main` before starting anything.
2. Run `npm run lint` and `npm run check-ts` on the freshly pulled code. If either reports pre-existing errors, stop and fix those first — do not start the requested issue on top of a broken base.
3. Once the base is clean, read the GitHub issue (`gh issue view <number>`) to understand the actual problem before writing any code.
4. Create a new branch off `main` for the fix.
5. Implement the fix on that branch.
6. Verify the fix actually works before doing anything else:
   - If it can be checked programmatically (run the dev server, exercise the affected flow, run any relevant script), do that yourself and report the result.
   - If it can't be verified this way (e.g. needs a real browser or a manual visual check), stop and ask the user to test it manually. Do not proceed past this step until they explicitly confirm it passed.
7. Only after verification has passed (self-verified, or the user has explicitly said the test passed), run `npm run lint`, `npm run check-ts`, and `npm run build`.
8. Commit the change.
9. Push and open a PR whose body includes `Fixes #<issue-number>` (or `Closes`/`Resolves`) so the issue auto-closes when the PR merges.

**Never commit before step 6/7 is satisfied.** If the user is doing the manual testing, wait for their explicit go-ahead before running the final checks and committing — do not commit speculatively.
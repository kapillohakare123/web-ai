# ✅ Branch Naming Convention

To keep our Git history clean and collaborative, follow the branch naming strategy below.

---

## 🔧 Format

Use **lowercase letters** and **hyphens (-)** for spacing.

---

## 🚀 Allowed Types

| Type        | When to Use                               | Example                       |
| ----------- | ----------------------------------------- | ----------------------------- |
| `feature/`  | New feature or enhancement                | `feature/user-authentication` |
| `bugfix/`   | Fixing a bug (non-urgent)                 | `bugfix/fix-login-error`      |
| `hotfix/`   | Urgent fixes directly on production       | `hotfix/missing-env-variable` |
| `refactor/` | Code structure improvement (no new logic) | `refactor/model-logic`        |
| `test/`     | Adding/fixing tests                       | `test/ml-integration-tests`   |
| `chore/`    | Maintenance, configs, tooling             | `chore/update-dependencies`   |
| `docs/`     | Documentation changes                     | `docs/api-endpoint-notes`     |
| `release/`  | Code related to a version release         | `release/v1.0.0`              |

---

## 💡 Tips

- ✅ Use `hyphen-case` (not camelCase or snake_case)
- ✅ Keep names **concise but descriptive**
- ✅ Optionally include task/issue ID: `feature/123-login-page`
- ❌ Avoid vague names like `update-stuff`, `final-version`

---

## 🌳 Example Branch Names

- `feature/add-payment-gateway`
- `bugfix/fix-404-on-dashboard`
- `docs/setup-instructions`
- `test/integration-tests`
- `release/v1.0.0`

---

## 🔁 Workflow

1. Start a new branch:

```bash
git checkout -b feature/login-ui
```

2. Push your branch:

```bash
git push origin feature/login-ui
```

3. Open a pull request (PR) with a meaningful title and description.

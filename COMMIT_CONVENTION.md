# ✅ Commit Message Convention

Clear and concise commit messages help to:

- Understand the project history
- Generate changelogs automatically
- Improve team collaboration

---

## 🧱 Structure

```
(scope): short summary

[optional body]

[optional footer(s)]
```

> ✅ Use present tense and keep the subject line under 72 characters.

---

## 🎯 Allowed Commit Types

| Type       | Purpose                      | Example                                  |
| ---------- | ---------------------------- | ---------------------------------------- |
| `feat`     | New feature                  | `feat(api): add prediction route`        |
| `fix`      | Bug fix                      | `fix(login): handle 403 error`           |
| `docs`     | Documentation changes        | `docs(readme): update setup guide`       |
| `style`    | Formatting, no code change   | `style(ui): align button`                |
| `refactor` | Code change (no feature/bug) | `refactor(core): simplify model loading` |
| `test`     | Add or fix tests             | `test(api): add test for predict route`  |
| `chore`    | Misc maintenance tasks       | `chore(deps): update scikit-learn`       |
| `ci`       | CI/CD configuration          | `ci(github): add build workflow`         |
| `perf`     | Performance improvements     | `perf(ml): reduce load time`             |

---

## 💬 Examples

```bash
feat(auth): implement JWT-based login
fix(api): handle empty input for prediction
docs(contributing): add branch naming rules
style(app): reformat with Black
refactor(ml): move logic to helper function
test(api): add test for /mock endpoint
chore: update pip dependencies
ci: enable GitHub Actions for PR checks
```

---

## 🧠 Tips

- ✅ Use clear, specific messages.
- ✅ Use the appropriate type.
- ✅ Group related changes into one commit.
- ❌ Avoid vague messages like `fix bug` or `changes done`.

---

## 🚀 Recommended Commit Flow

1. Stage files:

   ```bash
   git add .
   ```

2. Commit using a conventional message:

   ```bash
   git commit -m "feat(api): add /predict route with model logic"
   ```

3. Push changes:

   ```bash
   git push origin feature/your-feature-name
   ```

---

## 🔧 Optional Tools

To enforce this convention automatically:

- 🪝 Use **Husky** + **Commitlint**.
- 🧪 Use **cz** via **Commitizen**.

# Alomni-UI Commit Guideline

## Commit Convention :

```
<type>: [optional scope]: <description>

[optional body]

[optional footer(s)]
```

- Any line of the commit message cannot be longer 150 characters!

### Type :

- **fix**: for bug fixes
- **feat**: for new features
- **docs**: for documentation changes only
- **style**: for changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: for a code change that neither fixes a bug nor adds a feature
- **perf**: for a code change that improves performance
- **test**: for adding missing or correcting existing tests
- **chore**: for changes to the build process or auxiliary tools and libraries such as documentation generation

### Optional Scope :

- Any additional information
- Use nouns

### Description :

- Short message
- Written in the imperative - use **add** instead of **adds** or **added**

### Optional Body :

- Free form
- Explain changes you've made

### Optional Footer(s) :

- Word token used
- Examples : Resolves #10, Development-Method: Pair Programming, With: James

### Breaking Changes

- Use a **!** in front of the type e.g. **feat!**
- Start the body with **BREAKING CHANGE:** with a space after it, then explain the breaking change

---
name: creating-skills
description: >
  Generates complete Antigravity skill directories following the B.L.A.S.T. and
  Axionea structural standards. Use when the user asks to "create a skill",
  "build a skill", "add a skill", "make an agent skill", or describes a
  reusable capability they want to encode as a skill. Produces SKILL.md with
  correct YAML frontmatter, optional resources/, scripts/, and examples/ folders.
---

# Antigravity Skill Creator

## When to use this skill
- User asks to create, build, or add a skill
- User describes a reusable capability or recurring workflow to encode
- User says "I want the agent to always do X" or "Make a skill for Y"

## Pre-Creation Checklist

Before writing any files, confirm:

```
[ ] Skill name decided (gerund form, lowercase, hyphens, max 64 chars)
[ ] Scope defined: company-wide or project-specific?
[ ] Trigger keywords/phrases identified
[ ] Optional folders needed? (scripts/ / examples/ / resources/)
[ ] Resources/files to include already exist or need to be created?
```

**Scope determines the path:**
- Company-wide → `skills/company/<skill-name>/`
- Project-specific → `skills/projects/<project-name>/`

---

## Output Structure

```
<skill-name>/
├── SKILL.md          ← Required. Main logic and router.
├── scripts/          ← Optional. Helper scripts (Python, Bash).
├── examples/         ← Optional. Reference implementations.
└── resources/        ← Optional. Templates, JSON configs, assets.
```

---

## SKILL.md Template

```markdown
---
name: [gerund-form-name]
description: >
  [Third-person description. State what it does and WHEN to trigger it.
  Include specific keywords a user might say. Max 1024 chars.]
---

# [Skill Title]

## When to use this skill
- [Trigger phrase or scenario 1]
- [Trigger phrase or scenario 2]

## Workflow
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

## Instructions
[Specific logic, rules, or code snippets]

## Resources
- [Link to scripts/ or resources/ if applicable]
```

---

## YAML Frontmatter Rules

| Field | Rule |
|---|---|
| `name` | Gerund form (`testing-code`, `managing-databases`). Lowercase, hyphens only. No "claude" or "anthropic". Max 64 chars. |
| `description` | Third person. Specific triggers included. Max 1024 chars. |

---

## Writing Principles

- **Concise:** Under 500 lines. The agent is smart — don't over-explain.
- **Progressive Disclosure:** Link to secondary files for deep detail (`[See ADVANCED.md](ADVANCED.md)`). Max one level deep.
- **Paths:** Always `/` forward slashes, never `\`.
- **Formatting by task freedom:**
  - Bullet points → high-freedom (heuristics, guidelines)
  - Code blocks → medium-freedom (templates)
  - Exact bash commands → low-freedom (fragile operations)

---

## Complexity Guidance

**Simple skill** (single SKILL.md):
- One focused task
- No external files needed
- Under 200 lines

**Standard skill** (SKILL.md + resources/):
- Requires JSON config, design tokens, or static reference data
- SKILL.md acts as router to resource files

**Complex skill** (SKILL.md + scripts/ + examples/):
- Involves runnable scripts or code generation
- Include at least one working example in `examples/`
- Scripts must be self-contained with `--help` flags documented

---

## After Creation

1. Add the skill to `README.md` in the Axionea root under the Skills table
2. If project-specific: reference it in the project's own `SKILL.md` or `gemini.md`
3. Test by triggering the skill with the exact keywords from the `description`

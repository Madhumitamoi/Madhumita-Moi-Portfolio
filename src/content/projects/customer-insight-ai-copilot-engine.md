---
title: AI Product Manager Copilot
order: 1
summary: A prototype for turning scattered customer feedback into evidence-backed themes, priorities and editable product briefs.
year: "2026"
status: Technical prototype
tags: [AI, Product, Backend]
featured: true
github: https://github.com/Madhumitamoi/AI-PM-Copilot
outcome: The architecture exists; I’m now working toward one trustworthy end-to-end workflow.
---

## The problem I’m exploring

Product managers rarely receive customer feedback in one tidy place. It arrives through support tickets, interviews, surveys, reviews, community conversations and email. Before it can inform a roadmap, someone has to collect it, remove repetition, find recurring problems and explain why a decision is worth making.

That work is slow, difficult to audit and easy to separate from the original customer evidence.

AI Product Manager Copilot explores a more useful workflow: bring the feedback together, surface possible themes, let a product manager verify the evidence and turn an approved opportunity into an editable first-draft PRD.

## The workflow

<div class="architecture" aria-label="AI Product Manager Copilot workflow">
  <span>Collect feedback</span><b>→</b><span>Review themes</span><b>→</b><span>Prioritize</span><b>→</b><span>Draft a PRD</span>
</div>

The AI is not meant to own the roadmap. Its job is to reduce repetitive synthesis while keeping the decision—and the ability to question the output—with the product manager.

## What exists today

The repository is a technical prototype, not a finished product. It currently demonstrates:

- A basic dashboard and API structure.
- Manual feedback submission and storage.
- Batch theme extraction with a fallback when the model is unavailable.
- Experimental semantic search.
- Early metric-mapping and PRD-template output.
- A local development setup with automated tests.

These pieces prove parts of the architecture, but the complete feedback-to-PRD journey does not yet work through the interface.

## What the MVP needs to become

The first useful version is deliberately one complete workflow rather than a long list of integrations:

- Add feedback manually, through a CSV, or from one authenticated source.
- Review themes together with counts, excerpts and the feedback behind them.
- Rename, merge, split, dismiss or approve an AI-generated theme.
- Compare opportunities using visible inputs and adjustable weights.
- Generate an evidence-backed PRD from an approved opportunity.
- Edit, save, version and export that draft as Markdown.

A first-time user should be able to complete this journey with a sample dataset without reading API documentation or touching the database.

## The principles behind it

- **Evidence before recommendation.** Every theme and product brief should lead back to supporting feedback.
- **Human review is required.** AI output should be editable, rejectable and never treated as a decision by default.
- **Explain the score.** Priorities should show their inputs, assumptions and rationale.
- **Do not invent business impact.** Revenue, churn or conversion effects need real customer data or a clear assumptions label.
- **Privacy belongs in the product.** Sensitive information should be minimized before feedback reaches an external model.
- **Finish the core loop first.** More connectors are not useful if the central workflow cannot be trusted.

## The difficult part

Generating a plausible theme is easy. Generating one that a product manager can defend is harder.

Different language can describe the same problem, while similar comments can point to entirely different causes. A neat-looking score can also create false confidence when its inputs are arbitrary. That is why evidence links, transparent scoring and human correction are part of the product rather than optional safeguards.

The earlier product document included ambitious claims about time savings, prioritization accuracy and business impact. Those have now been removed or relabelled as hypotheses. None of them should be presented as outcomes until they are measured with real users.

## Where I’m taking it next

The immediate milestone is to restore engineering truth: reliable builds, honest documentation, complete feedback listing and tests that do not silently skip required integrations.

After that, I want to build the first usable vertical slice—feedback import, persisted themes and evidence, human review, transparent opportunity scoring and an editable PRD—then test it with a small group of product managers.

The question is not whether a model can generate more text. It is whether the product can help someone make a faster decision without losing the evidence or overstating what the system knows.

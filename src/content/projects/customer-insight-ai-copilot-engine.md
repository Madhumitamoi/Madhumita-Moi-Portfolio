---
title: Customer Insight AI Copilot Engine
order: 1
summary: An experiment in turning scattered customer feedback into themes, evidence and clearer product decisions.
year: "2026"
status: In progress
tags: [AI, Backend, Product]
featured: true
---

## What I’m building

Customer feedback rarely arrives in one tidy place. It is spread across reviews, support conversations, surveys and direct messages. The useful signal is often buried under repetition and noise.

I’m exploring a system that brings that feedback together, identifies recurring themes and helps a product team decide what deserves a closer look. The goal is not to let an AI make the decision. It is to reduce the manual sorting required before a person can make one.

## The basic flow

<div class="architecture" aria-label="Customer insight processing flow">
  <span>Feedback</span><b>→</b><span>Normalize</span><b>→</b><span>Detect themes</span><b>→</b><span>Review insights</span>
</div>

The proposed pipeline stores normalized feedback in PostgreSQL, uses an OpenAI-compatible model for theme extraction, and uses embeddings with pgvector to find semantically related comments. A web dashboard presents themes together with the original feedback that supports them.

## MVP scope

- Import a small set of customer-feedback sources.
- Group related feedback into understandable themes.
- Search for semantically similar comments.
- Keep every generated theme traceable to its source feedback.
- Let a person correct, merge or reject generated themes.
- Turn an accepted theme into a lightweight product recommendation.

The wider PRD also explores metric mapping and automatic PRD generation. Those are useful directions, but they come after the core feedback analysis can be evaluated reliably.

## Architecture direction

The current technical direction uses a React and Next.js interface, a REST API layer, PostgreSQL with pgvector, an OpenAI-compatible model, and Docker for a reproducible local setup.

Keeping ingestion, theme detection, search and recommendations separate makes it possible to change one part of the pipeline without rebuilding the entire product.

## The difficult part

Generating a plausible theme is easy. Generating one that a product manager can trust is harder.

Similar comments may describe different problems, and different language may point to the same underlying issue. Model output can also lose context or sound more certain than the evidence allows. That makes traceability and human review part of the product rather than an optional safety layer.

Customer feedback can contain names, account details and other sensitive information. Before this becomes more than a local experiment, it needs explicit data-retention rules, redaction, deletion controls and clear tenant boundaries.

## What I’m working through next

- Building a small labelled dataset to evaluate theme quality.
- Defining when the system should return “not enough evidence.”
- Adding feedback correction and confidence signals.
- Testing privacy-safe ingestion and deletion flows.
- Deciding which integrations are genuinely useful for the first version.

This project is still evolving. The interesting work is not making the model generate more text—it is making the output easier to question, verify and use.

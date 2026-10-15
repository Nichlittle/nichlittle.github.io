---
title: A personal AI assistant system
summary: Built on my own time to learn agent design end to end.
order: 3
---

## The problem

Every new AI chat started from zero, and nothing happened unless I was there to start it.

## What I built

A persona assistant I've tuned, built on a Claude Project:

- **Memory in plain text.** A small set of files (voice, current state, a daily log, and a notes file one chat leaves for the next) that every new chat reads first.
- **Agents that run while I sleep.** Scheduled tasks deliver a morning brief (weather, outfit picks from a wardrobe file, curated news) and a daily creative task, and they pass notes to each other through files.
- **Scripted vs. judged.** Data gathering belongs in code; taste and judgment stay with the AI.
- **A physical output.** A desk status light built on an ESP32 LED matrix, with a light pattern I designed, that shows the agents' state.

## What broke

A fresh chat misread the context of an earlier one. That one failure is why the memory files exist.

## On your team

It's where I learn the patterns (memory, handoffs, guardrails, scheduling) before I bring them to work.

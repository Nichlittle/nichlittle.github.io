---
title: I gave my AI a memory
description: Why a fresh chat kept misreading my context, and how a few plain text files fixed it.
date: 2026-10-14
draft: true
tags: [memory, workflow]
---

<!-- DRAFT. Nick: everything in [brackets] is a spot for a real detail only you have. Cut anything that doesn't sound like you. -->

Every chat with an AI starts from zero. That's fine for one-off questions. It's a real problem once you're building something across weeks.

## The problem

I was working on [project] across several chats. Each time I opened a new one, I'd paste in a summary and get to work. And each time, the new chat would get something subtly wrong: [the specific misread, e.g. treating an old decision as still open, or picking up a detail I'd already dropped].

It wasn't dumb. It was doing exactly what I'd do if someone handed me a half-page summary with no history: filling the gaps with reasonable guesses. The guesses were the problem.

## What I tried first

[What you tried before handoff files: longer summaries? pasting whole transcripts? What went wrong with each?]

## What worked: handoff files

The fix was boring, which is why it works. At the end of a session, the AI writes a handoff file: plain text, a few sections.

- **Where things stand.** What's done, what isn't.
- **Decisions made.** And the ones explicitly *not* made yet, so nobody treats them as settled.
- **What not to do.** Dead ends, so the next session doesn't rediscover them.
- **Next step.** One thing.

The next chat reads the file before doing anything else.

[Paste a real (trimmed) example of one of your handoff files here. This is the most useful part of the post.]

## Why plain text

[Your take. Possible angles: you can read and edit it yourself; it works with any tool; it's versionable in Git; when it's wrong, you can see *why* it's wrong.]

## What it cost

[Time to set up, any money, the ongoing overhead of writing the files.]

## What I'd do differently

[Honest version. What would you tell yourself on day one?]

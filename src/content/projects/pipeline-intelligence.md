---
title: Pipeline intelligence agents
summary: Agents that find the right customers and the right moment, from data the company already had.
order: 1
---

## The problem

In public-safety sales, timing and relationships drive pipeline: when grant money opens up, which customers will vouch for you, and which channels actually close. The answers were scattered across CRM records, monthly exports and public grant calendars, and finding them depended on memory and manual digging.

## What I built

A set of connected agents and repeatable workflows on top of the CRM:

- **Event-host agent (scheduled, weekly).** Scans the CRM against criteria tuned on past events that worked, picks customers who'd make strong hosts for peer-led regional events, maps the nearby agencies they could invite, and delivers a ranked, call-ready shortlist with the reasoning behind each pick. Draft-only; a person approves before anything goes to sales.
- **Data-quality layer.** The same agent flags mislocated, duplicated, stale or incomplete records on every run, so the CRM gets cleaner as a side effect of using it.
- **Grant-window research.** Maps public-safety grant application windows across state programs from public sources, double-checks each date, and projects unpublished cycles with a confidence rating, alongside where grant-funded wins have already happened.
- **Attribution analysis.** Reworks default CRM attribution with exclusion rules, a lag that matches the real sales cycle, and an honest bucket for untrustworthy sources, rerun from scratch whenever a rule changes.
- **Monthly impact reporting.** Joins product usage with account data, filters to decision-makers, segments by activity, and feeds personalized monthly impact emails to customer administrators through the marketing automation platform. Built-in checks catch match-rate problems; it caught a silent data-type mismatch that had been dropping accounts.
- **Board and weekly reporting.** Pulls CRM and analytics data into weekly summaries and board slides, with reporting rules that prevent common distortions (created vs. closed in the same period, medians for skewed data).

## Results

Event sourcing went from a quarterly hunt to a weekly shortlist. Grant research that would take days took one session. Attribution became defensible and changed where the budget goes. Monthly reporting became repeatable, with data quality monitored instead of assumed.

## What broke

The data underneath. Mislocated agencies, duplicate contacts and type mismatches between systems. Each one I found became an automatic check.

## On your team

Any team with a messy CRM and a sales cycle tied to outside timing (budgets, grants, renewals) could run this pattern.

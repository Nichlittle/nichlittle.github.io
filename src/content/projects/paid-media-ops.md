---
title: AI-run paid media operations
summary: Claude connected to the ad platform through MCP to audit, fix, launch and measure.
order: 2
---

## The problem

A year of paid social had sprawled across inconsistent campaigns, conversion tracking was counting page visits instead of real leads, and the server-side connection to the CRM had quietly stopped working. The platform was optimizing toward a signal that meant nothing.

## What I built

- **Account audit via MCP.** Pulled every campaign into one view, normalized cost by landing-page visit and audience vertical, and flagged problems a dashboard hides: conversion goals that were never tracked, retargeting pools so small people saw ads dozens of times. Output: a ranked pause / rebuild / scale list.
- **Conversion tracking rebuild.** Mapped each funnel form to its own conversion event, sent server-side from the CRM, and fixed what was blocking delivery (consent gating, duplicate legacy events, mislabeled types).
- **CRM-fed audiences.** CRM segments by vertical used as lookalike seeds, exclusions (stop paying to reach existing customers) and custom audiences.
- **Campaign builds with closed-loop attribution.** Role- and location-targeted campaigns built through the platform with verified targeting, one creative per ad, and standardized tracking tags, so leads land in the CRM already attributed to the ad that produced them.
- **Naming standard and bulk cleanup.** Claude inferred each campaign's purpose from its setup, flagged hygiene problems, and applied an approved naming standard through the API.
- **Organic social measurement.** Two years of post-level history scored on medians at a fixed post age, so one viral post doesn't distort the trend.

## Results

The worst campaign was paused the day the audit found it. Campaigns now optimize toward real submissions. Leads arrive pre-attributed, and a misattributed lead was traced and fixed within the hour.

## What broke

Tracking that looked fine and wasn't. The biggest find was that the old "conversions" were page loads.

## On your team

Any team running paid social on a small staff can get an ops analyst's worth of auditing and cleanup this way.

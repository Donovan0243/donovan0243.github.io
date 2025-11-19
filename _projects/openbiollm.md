---
layout: page
title: OpenBioLLM
description: Multi-agent biomedical LLM stack for genomic question answering.
img: assets/img/project_preview/openbiollm.png
importance: 1
category: QDHeC
---

OpenBioLLM is an end-to-end research prototype that extends our SIGIR-AP 2025 paper, **“Beyond GeneGPT: A Multi-Agent Architecture with Open-Source LLMs for Enhanced Genomic Question Answering.”** The project focuses on reliable biomedical assistance across genomic curation, variant interpretation, and patient-facing reporting.

## Highlights

- Modular multi-agent controller coordinating retrieval, reasoning, and response agents.
- Hybrid retrieval layer that combines curated genomic corpora with PubMed-scale sparse indexes.
- Safety guardrails for hallucination detection and terminology normalization.

## Tech stack

| Layer            | Details |
| ---------------- | ------- |
| Inference        | Mix of open-source LLMs (Llama-3 variants) with LoRA adapters for genomics. |
| Retrieval        | Pyserini BM25 + ColBERT reranking fine-tuned on biomedical QA. |
| Orchestration    | Lightweight Python microservices with FastAPI + Celery for agent pipelines. |
| Evaluation       | Custom benchmark derived from ClinVar and NCBI disease ontologies. |

## Current status

We are preparing an open-source release that includes dataset curation scripts, evaluation harness, and reproducible experiment configs. Contributions are welcome—please reach out if you would like to collaborate on biomedical reasoning or domain-specific safety filters.


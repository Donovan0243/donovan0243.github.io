---
layout: page
title: OpenBioLLM
description: An Open-Source Multi-Agent Framework for Genomic Question Answering
img: assets/img/project_preview/openbiollm.png
importance: 1
category: QDHeC
---

OpenBioLLM is a fully reproducible multi-agent framework that coordinates open-source LLMs with NCBI genomic APIs to deliver faster, more accurate, and interpretable genomic QA. The agent routing stack outperforms monolithic LLM setups while remaining easy to debug and extend.

{% include figure.liquid path="assets/img/project_img/openbiollm_intro.png" class="img-fluid rounded z-depth-1 my-4" alt="OpenBioLLM Introduction" %}

---

### 🏛️ Core Architecture and Design

OpenBioLLM orchestrates four agent families—Router, Tool Agents, Evaluator, and Generator:

| Agent | Function Description |
| :--- | :--- |
| **Router** | Chooses the next agent to invoke using the query, history, and evaluator feedback. |
| Tool Agents | Specialized workers (Eutils, BLAST, Web Search) that connect to external databases and search tools. |
| Evaluator | Decides whether the evidence collected so far is sufficient or more tools are needed. |
| Generator | Synthesizes conclusions from all previous agents and produces the final answer. |

{% include figure.liquid path="assets/img/project_img/openbiollm_workflow.png" class="img-fluid rounded z-depth-1 my-4" alt="OpenBioLLM Workflow" %}

---

### 🚀 Key Enhancements and Performance Advantages

OpenBioLLM achieves significant improvements over monolithic LLM approaches across several dimensions:

#### 1. Performance
The framework achieved higher accuracy on key genomic QA benchmarks, outperforming a monolithic LLM agent:

* **GeneTuring Tasks**: Achieved an average accuracy of **0.849**.
* **GeneHop Tasks**: Achieved an average accuracy of **0.830**.

#### 2. Efficiency
The multi-agent, optimized tool routing design substantially improved execution speed:

* **GeneTuring Latency Contrast**: Reduced from $48.5\text{s}$ to $23.9\text{s}$.
* **GeneHop Latency Contrast**: Reduced from $92.4\text{s}$ to $55.0\text{s}$.

#### 3. Key Insight
OpenBioLLM revealed that **smaller specialized agents can outperform larger ones** ("too smart" effect).

* **Optimal Configuration**: The experiments showed the **32B pipeline + 14B tools** configuration yielded the best trade-off.

---

### ✨ Interpretability and Scalability

The multi-agent design provides crucial advantages lacking in monolithic models:

* **Traceability**: The entire workflow is traceable and debuggable via LangSmith.
* **Scalability**: The design allows for the easy addition of new tool agents to expand capabilities.


---


### 🔗 Project Links

- [GitHub Repository](https://github.com/ielab/OpenBioLLM)
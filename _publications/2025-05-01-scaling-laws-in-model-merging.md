---
title: "Scaling Laws in Model Merging: Investigating the Scaling Behavior of Merging LoRA Models"
collection: publications
category: theses
permalink: /publication/2025-05-01-scaling-laws-in-model-merging
excerpt: "BSc Thesis"
date: 2025-05-01
venue: "Georgia Institute of Technology, BSc Thesis (PURA Award)"
citation: "B. Ecsedi. (2025). &quot;Scaling Laws in Model Merging: Investigating the Scaling Behavior of Merging LoRA Models.&quot; BSc Thesis, Georgia Institute of Technology."
authors: "Boglarka Ecsedi"
image: scaling.png
thumb_contain: true
paperurl: "https://hdl.handle.net/1853/78278"
abstract: |
    As foundation models grow in size and complexity, parameter-efficient fine-tuning approaches like LoRA have emerged as effective solutions for adapting these models to specific tasks. Model merging offers a resource-efficient paradigm for combining knowledge from multiple expert models without requiring access to original training data, but faces challenges with catastrophic interference when scaling beyond a few models. This study systematically evaluates how different merging techniques (Task Arithmetic, TIES, DARE, KnOTS, and combinations) perform when scaling the merge from 2 to 8 tasks, exploring optimal hyperparameter configurations for controlling interference. Using two different ViT architectures (B/32 and L/14) across 8 diverse vision datasets, I comprehensively evaluate all 247 possible combinations of expert models. The results demonstrate that KnOTS-enhanced methods exhibit significantly better multi-task performance as the number of merged models increases, consistently outperforming baselines across all model cardinalities which becomes even more pronounced with scale, KnOTS-TIES achieveing a 4.07% improvement compared to TIES with the ViT-B/32 architecture. Analysis of hyperparameter trends reveals that as merge size increases, optimal scaling coefficients for Task Arithmetic and TIES decrease, while KnOTS-TIES maintains higher coefficients and becomes more selective with its top-K intervention. These findings suggest that orthogonal decomposition methods like KnOTS can significantly mitigate performance decay when merging multiple LoRA models by better preserving task-specific knowledge.
bibtex: |
    @article{ecsedi2025scaling,
      title={Scaling Laws in Model Merging: Investigating the Scaling Behavior of Merging LoRA Models},
      author={Ecsedi, Boglarka},
      year={2025},
      publisher={Georgia Institute of Technology}
    }
---

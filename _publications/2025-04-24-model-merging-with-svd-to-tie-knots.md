---
title: "Model merging with SVD to Tie the KnOTS"
collection: publications
category: conferences
permalink: /publication/2025-04-24-model-merging-with-svd-to-tie-knots
excerpt: "Poster"
date: 2025-04-24
venue: "The Thirteenth International Conference on Learning Representations (ICLR 2025)"
citation: "George Stoica, Pratik Ramesh, Boglarka Ecsedi, Leshem Choshen, Judy Hoffman. (2025). &quot;Model merging with SVD to Tie the KnOTS.&quot; Poster Presentation, The Thirteenth International Conference on Learning Representations (ICLR 2025), April 24-28, 2025."
authors: "George Stoica, Pratik Ramesh, Boglarka Ecsedi, Leshem Choshen, Judy Hoffman"
image: 2024Knots.gif
poster_image: knots-poster.png
paperurl: "https://arxiv.org/abs/2410.19735"
codeurl: "https://github.com/gstoica27/knots"
pressurl: "https://sites.gatech.edu/research/iclr-2025/"
abstract: |
  Recent model merging methods demonstrate that the parameters of fully-finetuned models specializing in distinct tasks can be combined into one model capable of solving all tasks without retraining. Yet, this success does not transfer well when merging LoRA finetuned models. We study this phenomenon and observe that the weights of LoRA finetuned models showcase a lower degree of alignment compared to their fully-finetuned counterparts. We hypothesize that improving this alignment is key to obtaining better LoRA model merges, and propose KnOTS to address this problem. KnOTS uses the SVD to jointly transform the weights of different LoRA models into an aligned space, where existing merging methods can be applied. In addition, we introduce a new benchmark that explicitly evaluates whether merged models are general models. Notably, KnOTS consistently improves LoRA merging by up to 4.3% across several vision and language benchmarks, including our new setting.
bibtex: |
  @inproceedings{stoica2025knots,
    title={Model Merging with SVD to tie the KnOTS},
    author={George Stoica* and Pratik Ramesh* and Boglarka Ecsedi and Leshem Choshen and Judy Hoffman},
    booktitle={International Conference on Learning Representations (ICLR)},
    year={2025}
  }
---

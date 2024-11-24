# Local LLM

Install transformers, accelerate, and you're off to the races with HuggingFace.

You'll need cuda for Nvidia GPUs.

qwen-vl-utils when using Qwen2-VL.

Optimum as well. https://huggingface.co/docs/optimum/en/installation

## Open Source LLM Models

- Llama 3.1
- best coding model (Deepseek)
- best open-source Multimodal language model (Qwen2-VL)
	- Qwen2-VL 72B: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct
- two of best open-source anything models (Yi-lightning and also Qwen again)

Deepseek has recently announced a model that outperforms o1-preview, open source. That'll be wonderful to check out.

## HuggingFace local runs

https://huggingface.co/docs/transformers/en/llm_tutorial

Accelerate for multiple GPUs: https://huggingface.co/docs/accelerate/en/index

Distributed inference using Accelerate for multiple GPUs: https://huggingface.co/docs/accelerate/en/usage_guides/distributed_inference

when you use any model, the model weights will be downloaded to [USER]/.cache/huggingface/hub/ (unless you change the default download path). and you can delete them from there if you want to clean up for extra disk space

## Qwen2-VL

https://github.com/QwenLM/Qwen2-VL

Qwen2-VL-72B, Int8: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int8

The minimum VRAM is 75 GB, goes up to 85 when using 6111 input (tokens, I assume), and 99 on 14k input tokens.

72B Int4 https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int4, uses only 85 GB VRAM even on 30k input tokens
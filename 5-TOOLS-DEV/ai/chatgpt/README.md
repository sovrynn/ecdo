# ChatGPT

## Contents

- `gen-repo-text.py`: Script for accumulating repo content into textual input files for use in making custom GPTs.
- `prompts.md`: Various ChatGPT ECDO-related prompts.

## ChatGPT File uploads [1]

How many files can I upload at once per GPT?: *"Up to 20 files per GPT for the lifetime of that GPT. Keep in mind there are file size restrictions and usage caps per user/org."*

File usage caps:
- All files uploaded to a GPT or a ChatGPT conversation have a hard limit of 512MB per file.
- All text and document files uploaded to a GPT or to a ChatGPT conversation are capped at 2M tokens per file. This limitation does not apply to spreadsheets.
- For CSV files or spreadsheets, the file size cannot exceed approximately 50MB, depending on the size of each row.
- For images, there's a limit of 20MB per image.
- Additionally, there are usage caps:
	- Each end-user is capped at 10GB.

How do I delete files I upload?: Files uploaded to Advanced Data Analysis are deleted within a duration that varies based on your plan. If you are encountering your file usage cap, you can also delete files from recent chats or from any GPTs that you built, as these share caps.

## GPT Token Counts [2]

Recall the 2M token per file count.

A deterministic formula is not provided.

Rules of thumb:
- 1 token ~= 4 chars in English
- 1 token ~= ¾ words
- 100 tokens ~= 75 words
- 1-2 sentence ~= 30 tokens
- 1 paragraph ~= 100 tokens
- 1,500 words ~= 2048 tokens

## ChatGPT Support emails

Emails: support@openai.com, privacy@openai.com, legal@openai.com

## Citations

1. GPT File uploads: https://help.openai.com/en/articles/8555545-file-uploads-faq
2. Token Count: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
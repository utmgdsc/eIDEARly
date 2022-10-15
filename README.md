# Guide to Setting up and Using Markdown for Learning Materials

- Step 1. npm install @mdx-js/runtime@2.0.0-next.9 or do npm install --force @mdx-js/runtime@2.0.0-next.9 in case of errors.
- Step 2. Pull the contents of this repository. 
- Step 3. Add: import MDX from "@mdx-js/runtime" at the top of your file.
- Step 4. Assign text to a variable. For example: const test = `# My first markdown test` **use "``" to enclose the string.
- Step 5. To render, call <Markdown mdx = {test} />
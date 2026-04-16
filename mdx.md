Summary
The serialize function used to compile MDX in next-mdx-remote is vulnerable to arbitrary code execution due to insufficient sanitization of MDX content. This vulnerability, CVE-2026-0969, is fixed in next-mdx-remote 6.0.0.

Background
next-mdx-remote is an open-source TypeScript library that allows MDX content from various sources to be rendered dynamically on the client or server.

Details
Allowing untrusted user MDX content with JavaScript expressions enabled may lead to remote code execution (RCE) due to improper sanitization. As of version 6.0.0, next-mdx-remote introduces a breaking change that disables JavaScript expressions by default (blockJS: true) for both serialize and compileMDX functions. When JavaScript expressions are enabled (blockJS: false), the new blockDangerousJS: true option (enabled by default) provides best-effort protection against dangerous operations like eval, Function, process, require, and other globals that could lead to arbitrary code execution.

Remediation
Deployments allowing untrusted user inputs to the compileMDX or serialize function from the next-mdx-remote library in a server environment should evaluate the risk associated with this issue and consider upgrading to next-mdx-remote 6.0.0.

Acknowledgement
This issue was identified by Gagyeong Kim from Sejong University.

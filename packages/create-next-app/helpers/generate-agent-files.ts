import fs from 'fs'
import path from 'path'

/**
 * Generate AGENTS.md, CLAUDE.md, and GEMINI.md in the project root.
 * AGENTS.md contains the instructions, CLAUDE.md and GEMINI.md reference it using @ syntax.
 */
export function generateAgentFiles(root: string): void {
  const agentsMdContent = `<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in \`node_modules/next/dist/docs/\` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
`

  const claudeMdContent = `@AGENTS.md
`

  const geminiMdContent = `@AGENTS.md
`

  const agentsMdPath = path.join(root, 'AGENTS.md')
  const claudeMdPath = path.join(root, 'CLAUDE.md')
  const geminiMdPath = path.join(root, 'GEMINI.md')

  fs.writeFileSync(agentsMdPath, agentsMdContent, 'utf-8')
  fs.writeFileSync(claudeMdPath, claudeMdContent, 'utf-8')
  fs.writeFileSync(geminiMdPath, geminiMdContent, 'utf-8')
}

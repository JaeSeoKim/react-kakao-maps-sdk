#!/usr/bin/env node

import { promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")

const baseUrl = "https://react-kakao-maps-sdk.jaeseokim.dev"
const docsDir = path.join(repoRoot, "docs", "docs")
const outputPath = path.join(repoRoot, "llms.txt")

function toPosixPath(value) {
  return value.split(path.sep).join("/")
}

function toDocRoute(relativeDocsPath) {
  const withoutExtension = relativeDocsPath.replace(/\.(md|mdx)$/, "")
  const withoutIndex = withoutExtension.endsWith("/index")
    ? withoutExtension.slice(0, -"/index".length)
    : withoutExtension
  return `/docs/${withoutIndex}`
}

function extractTitle(markdownContent) {
  const normalizedContent = markdownContent.replace(/\r\n/g, "\n")
  const lines = normalizedContent.split("\n")

  if (lines[0] !== "---") return null

  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index]
    if (line === "---") return null

    const match = line.match(/^title:\s*(.+)\s*$/)
    if (!match) continue

    let title = match[1].trim()
    const hasMatchingSingleQuotes =
      title.startsWith("'") && title.endsWith("'")
    const hasMatchingDoubleQuotes =
      title.startsWith('"') && title.endsWith('"')

    if (hasMatchingSingleQuotes || hasMatchingDoubleQuotes) {
      title = title.slice(1, -1)
    }

    return title
  }

  return null
}

async function collectMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)))
      continue
    }

    if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

async function main() {
  const docsDirStat = await fs.stat(docsDir).catch(() => null)
  if (!docsDirStat || !docsDirStat.isDirectory()) {
    throw new Error(`Docs directory not found: ${docsDir}`)
  }

  const markdownFiles = await collectMarkdownFiles(docsDir)
  markdownFiles.sort((left, right) =>
    toPosixPath(path.relative(docsDir, left)).localeCompare(
      toPosixPath(path.relative(docsDir, right)),
    ),
  )

  const generatedAt = new Date().toISOString()

  let output = ""
  output += "# react-kakao-maps-sdk Docs\n\n"
  output += "This file is auto-generated for LLM ingestion.\n"
  output += `Source: ${baseUrl}/docs/intro\n`
  output += `Generated from docs/docs on ${generatedAt}.\n`
  output += `Total markdown files: ${markdownFiles.length}.\n\n`

  output += "## File Index\n"

  const fileEntries = await Promise.all(
    markdownFiles.map(async (absolutePath) => {
      const relativePathFromRepo = toPosixPath(path.relative(repoRoot, absolutePath))
      const relativePathFromDocs = toPosixPath(path.relative(docsDir, absolutePath))
      const docUrl = `${baseUrl}${toDocRoute(relativePathFromDocs)}`
      const rawContent = await fs.readFile(absolutePath, "utf8")
      const title = extractTitle(rawContent)

      return {
        docUrl,
        relativePathFromRepo,
        rawContent: rawContent.replace(/\r\n/g, "\n"),
        title,
      }
    }),
  )

  for (const entry of fileEntries) {
    if (entry.title) {
      output += `- ${entry.relativePathFromRepo} | ${entry.docUrl} | ${entry.title}\n`
      continue
    }

    output += `- ${entry.relativePathFromRepo} | ${entry.docUrl}\n`
  }

  output += "\n## Content\n\n"

  for (const entry of fileEntries) {
    output += `### ${entry.relativePathFromRepo}\n`
    output += `DOC_URL: ${entry.docUrl}\n\n`
    output += `${entry.rawContent.trimEnd()}\n\n\n`
  }

  await fs.writeFile(outputPath, output, "utf8")

  console.log(
    `Generated ${toPosixPath(path.relative(repoRoot, outputPath))} from ${markdownFiles.length} files.`,
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})

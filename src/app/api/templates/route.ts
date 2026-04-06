import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'templates-store.json')

async function readDB() {
  try {
    const raw = await fs.promises.readFile(DB_PATH, 'utf8')
    return JSON.parse(raw)
  } catch (e) {
    return []
  }
}

async function writeDB(data: any) {
  await fs.promises.mkdir(path.dirname(DB_PATH), { recursive: true })
  await fs.promises.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
}

function checkApiKey(req: Request) {
  // Optional protection: if TEMPLATES_API_KEY is set, require matching header
  const required = process.env.TEMPLATES_API_KEY
  if (!required) return true
  const key = req.headers.get('x-api-key') || ''
  return key === required
}

export async function GET(req: Request) {
  if (!checkApiKey(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const data = await readDB()
  return NextResponse.json({ templates: data })
}

export async function POST(req: Request) {
  if (!checkApiKey(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    if (!body?.templates) return NextResponse.json({ error: 'missing templates' }, { status: 400 })
    await writeDB(body.templates)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'invalid body' }, { status: 400 })
  }
}

export async function DELETE(req: Request) {
  if (!checkApiKey(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  await writeDB([])
  return NextResponse.json({ ok: true })
}

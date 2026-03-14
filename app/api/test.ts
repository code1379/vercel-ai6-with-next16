import { generateText } from 'ai';
import { codex5_3 } from '@/utils/model';


// export async function GET() {
//     const resps = await generateText({
//         model: codex5_3,
//         prompt: 'Write a vegetarian lasagna recipe for 4 people.',
//     });

//     return JSON.stringify(resps)
// }


import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ ok: true })
}

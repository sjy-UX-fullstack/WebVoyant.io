import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the AI business growth analyst for WebVoyant Tech (webvoyant.io), a web development and AI product studio from India.

Given a business name, industry, and primary goal, produce a sharp, specific, instantly-useful digital growth plan for that business. Be concrete and India-market aware. No fluff, no generic advice like "use social media" — every point must be actionable and tied to their industry and goal.

Return STRICT JSON only, no markdown fences:
{
  "headline": "one punchy line addressed to the business, mentioning their name",
  "quick_wins": [
    { "title": "3-6 word title", "detail": "1-2 sentences, specific to their industry and goal" }
  ],
  "what_to_build": [
    { "item": "the thing WebVoyant would build", "why": "one sentence on the payoff", "price_range": "realistic INR range", "timeline": "days/weeks" }
  ],
  "closing_line": "one persuasive sentence inviting them to claim the free Rs 25,000 growth consultation"
}

Rules: exactly 4 quick_wins, exactly 2-3 what_to_build items. Price ranges: business website Rs 25k-80k, e-commerce Rs 50k-1.5L, web/mobile app Rs 1L-3L, AI product Rs 3L+, lead-gen microsite + ads setup Rs 30k-60k. Keep total response under 350 words.`;

export async function POST(req: Request) {
  try {
    const { business, industry, goal } = await req.json();

    if (!business || !industry || !goal) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const userMsg = `Business name: ${String(business).slice(0, 100)}
Industry: ${String(industry).slice(0, 100)}
Primary goal: ${String(goal).slice(0, 200)}`;

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://www.webvoyant.io",
        "X-Title": "WebVoyant AI Business Scan",
      },
      body: JSON.stringify({
        model: "anthropic/claude-haiku-4.5",
        max_tokens: 1200,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMsg },
        ],
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    const data = await res.json();
    let text: string = data.choices?.[0]?.message?.content ?? "";
    text = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(
      { error: "Could not generate the scan. Please try again." },
      { status: 500 },
    );
  }
}

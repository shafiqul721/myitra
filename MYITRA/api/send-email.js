// api/send-email.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { to, subject, html } = req.body || {};
    if (!to || !subject || !html) {
      return res.status(400).json({ error: "Missing to / subject / html" });
    }

    const API_KEY = process.env.RESEND_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: "Missing server API key" });
    }

    const payload = {
      from: "MYITRA <onboarding@resend.dev>",
      to,
      subject,
      html
    };

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json();
    if (!r.ok) {
      console.error("Resend error:", data);
      return res.status(502).json({ error: "Resend API error", detail: data });
    }

    return res.status(200).json({ ok: true, id: data.id || data });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ error: "Server error", detail: String(err) });
  }
}

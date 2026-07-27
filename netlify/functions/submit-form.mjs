const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  const scriptUrl = Netlify.env.get("GOOGLE_SCRIPT_URL");
  if (!scriptUrl) {
    return new Response(JSON.stringify({ error: "Form destination is not configured" }), {
      status: 503,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const data = await request.json();

    if (data.website) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    const name = String(data.firstName || data.name || "").trim();
    const email = String(data.email || "").trim();
    const formType = String(data.formType || "").trim();

    if (!name || !EMAIL_PATTERN.test(email) || !data.consent || !formType) {
      return new Response(JSON.stringify({ error: "Invalid submission" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const payload = new URLSearchParams({
      formType,
      name,
      email,
      postcodeOrLocation: String(data.postcode || data.location || "").trim(),
      roleOrOrganisationType: String(data.role || data.organisationType || "").trim(),
      organisation: String(data.organisation || "").trim(),
      message: String(data.message || "").trim(),
      consent: String(data.consent),
      source: "geniusbrigadeaustralia.netlify.app",
    });

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: payload.toString(),
      redirect: "follow",
    });

    const body = await response.text();
    if (!response.ok || !body.includes('"ok":true')) {
      throw new Error("Google Sheet rejected the submission");
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    console.error("Form submission error", error);
    return new Response(JSON.stringify({ error: "Unable to save submission" }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }
};

export const config = { path: "/.netlify/functions/submit-form" };

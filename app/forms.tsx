"use client";

import { FormEvent, useState } from "react";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

async function submitForm(event: FormEvent<HTMLFormElement>, formName: string) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  data.set("form-name", formName);
  const body = new URLSearchParams();
  data.forEach((value, key) => body.append(key, String(value)));

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) throw new Error("Submission failed");
}

export function FoundingFamilyForm() {
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setState("submitting");
    try {
      await submitForm(event, "founding-family");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>Welcome aboard.</h3>
        <p>Your details have been saved. Your first mission briefing will be in your inbox soon.</p>
        <button type="button" onClick={() => setState("idle")}>Add another family</button>
      </div>
    );
  }

  return (
    <form className="join-form" name="founding-family" method="POST" data-netlify="true" data-netlify-honeypot="website" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="founding-family" />
      <div className="field-row">
        <label>
          First name <span aria-hidden="true">*</span>
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          Postcode <small>Optional</small>
          <input name="postcode" type="text" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{4}" maxLength={4} />
          <em>Helps us bring workshops and activations to your area.</em>
        </label>
        <label>
          I am a… <span aria-hidden="true">*</span>
          <select name="role" defaultValue="" required>
            <option value="" disabled>Choose one</option>
            <option>Parent or carer</option>
            <option>Grandparent</option>
            <option>Educator</option>
            <option>Community organisation</option>
            <option>Curious human</option>
          </select>
        </label>
      </div>
      <label className="consent-field">
        <input name="consent" type="checkbox" value="Yes" required />
        <span>I agree to Glamabyte using my details to provide Genius Brigade resources, Founding Family updates and requests for feedback. I understand I can unsubscribe at any time.</span>
      </label>
      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      {state === "error" && <p className="form-error" role="alert">We couldn&apos;t save your details. Please try again or email hello@glamabyte.com.au.</p>}
      <button className="button form-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Saving…" : "Become a founding family"} {state !== "submitting" && <ArrowIcon />}
      </button>
      <p className="privacy-notice">
        <strong>Privacy collection notice:</strong> Glamabyte Pty Ltd collects the information in this form to manage Founding Family participation, provide requested resources and invite feedback. Postcode is optional. If you do not provide the required information, we cannot register your interest. We handle your information in accordance with our{" "}
        <a href="https://glamabyte.com.au/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}

export function CommunityInterestForm() {
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setState("submitting");
    try {
      await submitForm(event, "community-interest");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success form-success-light" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Interest registered.</h2>
        <p>Thank you. Your details have been saved and we&apos;ll be in touch as workshops and activations take shape in your area.</p>
        <button type="button" onClick={() => setState("idle")}>Submit another response</button>
      </div>
    );
  }

  return (
    <form className="join-form connect-form" name="community-interest" method="POST" data-netlify="true" data-netlify-honeypot="website" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="community-interest" />
      <div className="field-row">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          Organisation <span aria-hidden="true">*</span>
          <input name="organisation" type="text" required />
        </label>
        <label>
          Suburb or postcode <span aria-hidden="true">*</span>
          <input name="location" type="text" autoComplete="postal-code" required />
        </label>
      </div>
      <label>
        Organisation type <span aria-hidden="true">*</span>
        <select name="organisationType" defaultValue="" required>
          <option value="" disabled>Choose one</option>
          <option>School or early learning service</option>
          <option>Library</option>
          <option>Council</option>
          <option>Community group</option>
          <option>Family-focused organisation</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        What would you like to bring to your community? <small>Optional</small>
        <textarea name="message" rows={5} />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" value="Yes" required />
        <span>I agree to Glamabyte using my details to respond to this enquiry and send relevant partnership updates. I understand I can unsubscribe at any time.</span>
      </label>
      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      {state === "error" && <p className="form-error" role="alert">We couldn&apos;t save your details. Please try again or email hello@glamabyte.com.au.</p>}
      <button className="button form-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Saving…" : "Register your interest"} {state !== "submitting" && <ArrowIcon />}
      </button>
      <p className="privacy-notice">
        <strong>Privacy collection notice:</strong> Glamabyte Pty Ltd collects the information in this form to respond to your partnership interest and keep you informed about relevant workshops and activations. We handle your information in accordance with our{" "}
        <a href="https://glamabyte.com.au/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}

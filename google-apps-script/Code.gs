const SPREADSHEET_ID = "1Cfn1cmdAicr7dua9d4XsI9x6RFXF2xO5m9Vk2lOO2vU";
const SHEET_NAME = "Sheet1";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = e.parameter || {};
    const name = clean_(data.name);
    const email = clean_(data.email);
    const formType = clean_(data.formType);
    const consent = clean_(data.consent);

    if (!name || !email || !formType || consent !== "Yes") {
      return json_({ ok: false, error: "Invalid submission" });
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return json_({ ok: false, error: "Sheet not found" });
    }

    sheet.appendRow([
      new Date(),
      formType,
      name,
      email,
      clean_(data.postcodeOrLocation),
      clean_(data.roleOrOrganisationType),
      clean_(data.organisation),
      clean_(data.message),
      consent,
    ]);

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "Unable to save submission" });
  } finally {
    lock.releaseLock();
  }
}

function clean_(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

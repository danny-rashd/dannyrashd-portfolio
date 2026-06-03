import fs from "fs";
import path from "path";
import { resumeConfig } from "../../lib/data";

export default function handler(req, res) {
  const now = new Date();
  const switchDate = new Date(resumeConfig.switchDate);
  const file = now >= switchDate ? resumeConfig.after : resumeConfig.before;

  const filePath = path.join(process.cwd(), "public", path.basename(file));

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Resume not found" });
  }

  const buffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="Danial_Rashid_Resume.pdf"');
  res.send(buffer);
}

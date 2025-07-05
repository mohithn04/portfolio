const fs = require('fs');
const path = require('path');

// Load .env file for local development
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');

  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    lines.forEach(line => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          process.env[key.trim()] = value.trim();
        }
      }
    });

    console.log('Environment variables loaded from .env file');
    console.log('HUGO_RESUME_GOOGLE_DRIVE_LINK:', process.env.HUGO_RESUME_GOOGLE_DRIVE_LINK ? 'Set' : 'Not set');
    console.log('HUGO_RESUME_PASSWORD:', process.env.HUGO_RESUME_PASSWORD ? 'Set' : 'Not set');
  } else {
    console.log('No .env file found');
  }
}

module.exports = loadEnv;

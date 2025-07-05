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
  } else {
    console.log('No .env file found');
  }
}

module.exports = loadEnv;

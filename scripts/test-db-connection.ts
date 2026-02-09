import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

async function testConnection() {
  console.log('Testing database connection...');
  console.log('URL:', process.env.DATABASE_URL);
  console.log('Token exists:', !!process.env.TURSO_AUTH_TOKEN);
  
  try {
    const result = await db.execute("SELECT name FROM sqlite_master WHERE type='table'");
    console.log('\nTables found:', result.rows.length);
    result.rows.forEach(row => console.log('  -', row.name));
  } catch (error) {
    console.error('Error:', error);
  }
}

testConnection();

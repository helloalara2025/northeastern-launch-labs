import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { projects } from './drizzle/schema.ts';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

async function main() {
  // Update all existing projects to teamType = 'innovation'
  // since the 8 projects already in the DB are all Innovation Teams
  const existingIds = ['T-06', 'T-07', 'T-11', 'T-12', 'T-16', 'T-17', 'T-18', 'T-19'];
  
  for (const pid of existingIds) {
    await db.update(projects)
      .set({ teamType: 'innovation' })
      .where(eq(projects.projectId, pid));
    console.log(`Updated ${pid} -> teamType: innovation`);
  }

  console.log('\nAll existing projects updated to teamType: innovation');
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});

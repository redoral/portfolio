import { Metadata } from 'next';
import Home from './components/Home';

export const metadata: Metadata = {
  title: 'Red Oral',
};

async function getStats() {
  const githubStats = await fetch('https://api.github.com/users/redoral/repos');
  return githubStats.json();
}

export default async function Page() {
  const stats = await getStats();

  return <Home stats={stats.length} />;
}

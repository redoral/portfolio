import { Metadata } from 'next';
import HomePage from './components/home-page';

export const metadata: Metadata = {
  title: 'Red Oral'
};

async function getStats() {
  const githubStats = await fetch('https://api.github.com/users/redoral/repos');
  return githubStats.json();
}

export default async function Page() {
  const stats = await getStats();

  return <HomePage stats={stats.length} />;
}

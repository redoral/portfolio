import React from 'react';
import { Metadata } from 'next';
import Projects from '@/app/components/projects';
import About from './components/about';

export const metadata: Metadata = {
  title: 'Red Oral',
};

async function getStats() {
  const githubStats = await fetch('https://api.github.com/users/redoral/repos');
  return githubStats.json();
}

export default async function Page() {
  const stats = await getStats();

  return (
    <>
      <About stats={stats} />
      <Projects />
    </>
  );
}

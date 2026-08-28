/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopNav } from './components/TopNav';
import { MainNav } from './components/MainNav';
import { Hero } from './components/Hero';
import { QuickAccess } from './components/QuickAccess';
import { ContentGrid } from './components/ContentGrid';
import { FooterBanner } from './components/FooterBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <TopNav />
      <MainNav />
      <main className="flex-grow">
        <Hero />
        <QuickAccess />
        <ContentGrid />
      </main>
      <FooterBanner />
    </div>
  );
}

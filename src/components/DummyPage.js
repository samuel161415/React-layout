// @/components/DummyPage.js
import React from 'react';
import Layout from './layout';
// import TopComponent from './TopComponent';
// import BottomComponent from './BottomComponent';
import TopComponent from './ui/pageContents/TopComponent';
import BottomComponent from './ui/pageContents/BottomComponent';

export default function DummyPage({ title }) {
  return (
    <Layout pageTitle={title}>
      <div className="min-h-screen flex flex-col max-md:py-5">
        <TopComponent title={title} />
        <BottomComponent />
      </div>
    </Layout>
  );
}

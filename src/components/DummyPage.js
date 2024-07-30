// @/components/DummyPage.js
import React from 'react';
import Layout from './Layout';
// import TopComponent from './TopComponent';
// import BottomComponent from './BottomComponent';
import TopComponent from './pageContents/TopComponent';
import BottomComponent from './pageContents/BottomComponent';

export default function DummyPage({ title }) {
  return (
    <Layout pageTitle={title}>
      <div className="min-h-screen flex flex-col">
        <TopComponent title={title} />
        <BottomComponent />
      </div>
    </Layout>
  );
}

import React from 'react';
import AppAppBar from './AppAppBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppAppBar /> {/* 공통 헤더 */}
      <main>{children}</main> {/* 각 페이지의 내용 */}
      <Footer /> {/* 공통 푸터 */}
    </>
  );
}

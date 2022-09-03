import { ReactNode } from 'react';
import PopularCommunitiesList from '@/components/community/popular-communities-list';
import Header from '../header/header';
import TrendingTagsList from '@/components/common/trending-tags-list';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_300px]  max-w-[1000px] mx-auto gap-x-5 mt-0 lg:mt-5">
      <main className="">{children}</main>
      <div className="sticky h-fit top-[92px] space-y-5 lg:block hidden">
        <TrendingTagsList />
        <PopularCommunitiesList />
      </div>
    </div>
  </>
);

export default MainLayout;

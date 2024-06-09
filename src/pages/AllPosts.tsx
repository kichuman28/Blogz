import React from 'react';
import { HomeNavbar } from '../components/HomeNavbar';
import { posts } from '../pages/DummyData';
import PostComponent from '../components/PostComponent';
import TrendingArticles from '../components/TrendingArticles';
import TopDiscussions from '../components/TopDiscussions';

const AllPosts: React.FC = () => {
  return (
    <>
      <div className="font-sans w-dvw overflow-hidden">
        <HomeNavbar />
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-8">
            {posts.map(post => (
              <PostComponent key={post.postId} post={post} />
            ))}
          </div>
          <div className="lg:w-1/4 hidden lg:block">
            <TrendingArticles />
            <TopDiscussions />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPosts;

import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Post</h1>

        <div className="navContent">
          <div className="navContent">
            <Link to="/">
              帖子列表
            </Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
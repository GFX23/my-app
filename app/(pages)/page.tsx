import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my Next.js app!</p>
      <nav>
        <ul>
          <li>
            <Link href="/calculator">
              Calculator
            </Link>
          </li>
          <li>
            <Link href="/expenses">
              Expenses
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
export enum AppRoutes {
  HOME = '/',
  PLATFORM = '/platform',
  SOLUTIONS = '/solutions',
  POSSIBILITIES = '/possibilities',
  HOW_IT_WORKS = '/how-it-works',
  RESOURCES = '/resources',
  ABOUT = '/about',
  BOOK_DEMO = '/book-demo'
}

export interface NavItem {
  label: string;
  path: AppRoutes;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

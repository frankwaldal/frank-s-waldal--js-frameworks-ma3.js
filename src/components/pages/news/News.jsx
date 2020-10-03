import React from 'react';

import Heading from '../../layoutElements/Heading';
import NewsList from './NewsList';

export default function News() {
  return (
    <>
      <Heading content='News' />
      <NewsList />
    </>
  )
}

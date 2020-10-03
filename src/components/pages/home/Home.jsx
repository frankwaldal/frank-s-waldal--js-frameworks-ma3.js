import React from 'react';

import Heading from '../../layoutElements/Heading';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <>
      <Heading content='Home' />
      <HomeContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus velit a mattis aliquam. Curabitur a tellus dignissim, hendrerit dui id, ullamcorper orci. Duis pulvinar, magna a consequat vestibulum, enim tellus placerat urna, at posuere elit augue sed arcu. Maecenas semper diam at facilisis tincidunt.</p>
        <p>Vivamus ante augue, fringilla in diam ut, ullamcorper facilisis elit. Cras quis dui at mauris bibendum vehicula. Sed feugiat eros nulla, ut dictum risus mattis quis. Integer in tristique nibh, vel cursus orci. Nunc eu cursus dolor, ut condimentum ex. Proin pharetra dictum urna.</p>
      </HomeContent>
    </>
  )
}

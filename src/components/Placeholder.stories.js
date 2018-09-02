/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Placeholder from './Placeholder'

storiesOf('componentes/Placeholder', module)
.addDecorator(story => (
  <div style={{ background: 'red', padding: '20px' }}>
    {story()}
  </div>
))
.add('10x10', () => <Placeholder w='10' h='10' />)
.add('100x100', () => <Placeholder onClick={action('Placeholder clicked!')} w='100' h='100' />)

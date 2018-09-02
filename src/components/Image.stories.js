/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import Image from './Image'

storiesOf('componentes/Image', module)
  .add('with image', () => <Image src='https://via.placeholder.com/350x150' />)

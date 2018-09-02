/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Welcome from './Welcome';

storiesOf('Bem-vindo', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const req = require.context('../', true, /\.stories\.js$/)
function loadStories(){
  req.keys().forEach(
    filename => req(filename)
  )
}
configure(loadStories, module)

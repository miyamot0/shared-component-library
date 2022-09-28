/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StandardEntryFieldDate } from '../../src/components';

const labelSelector = '[data-cy=entry-field-input-date]';

describe('StandardEntryFieldDate.cy.ts', () => {
  it('Should render and behavior as normal', () => {
    const label = 'This is the input box';
    const currentValue = undefined;
    const type = 0;

    const dispatch = cy.spy().as('onChangeSpy')

    cy.mount(
      <StandardEntryFieldDate
        label={label}
        currentValue={currentValue}
        type={type}
        dispatch={dispatch}
      />
    );

    cy.get(labelSelector).first().contains(label);

    cy.get('input[type=date]').first().type('2022-09-21', { force: true })
    cy.get('@onChangeSpy').should('have.been.called');
  });
});

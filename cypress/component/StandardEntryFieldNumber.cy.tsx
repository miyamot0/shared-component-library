/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StandardEntryFieldNumber } from '../../src/components';

const labelSelector = '[data-cy=entry-field-input-number]';

describe('StandardEntryFieldNumber.cy.ts', () => {
  it('Should render and behavior as normal', () => {
    const label = 'This is the input box';
    const currentValue = undefined;
    const type = 0;

    const dispatch = cy.spy().as('onChangeSpy')

    const newInput = '1';

    cy.mount(
      <StandardEntryFieldNumber
        label={label}
        currentValue={currentValue}
        type={type}
        dispatch={dispatch}
      />
    );

    cy.get(labelSelector).first().contains(label);

    cy.get('input[type=number]').first().type(newInput)
    cy.get('input[type=number]').first().should('have.value', newInput)
    cy.get('@onChangeSpy').should('have.been.called');
  });
});

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StandardEntryFieldEmail } from '../../src/components';

const labelSelector = '[data-cy=entry-field-input-email]';

describe('StandardEntryFieldEmail.cy.ts', () => {
  it('Should render and behavior as normal', () => {
    const label = 'This is the input box';
    const currentValue = undefined;
    const type = 0;

    const dispatch = cy.spy().as('onChangeSpy')

    const newInput = '1';

    cy.mount(
      <StandardEntryFieldEmail
        label={label}
        currentValue={currentValue}
        type={type}
        dispatch={dispatch}
      />
    );

    cy.get(labelSelector).first().contains(label);

    cy.get('input[type=email]').first().type(newInput)
    cy.get('input[type=email]').first().should('have.value', newInput)
    cy.get('@onChangeSpy').should('have.been.called');
  });
});

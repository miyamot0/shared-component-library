/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StandardEntryFieldSelectMultiple } from '../../src/components';

const labelSelector = 'label.select-label';

describe('StandardEntryFieldSelectMultiple.cy.ts', () => {
  it('Should render and behavior as normal', () => {
    const label = 'This is the input box';
    const currentValue = undefined;
    const type = 0;

    const dispatch = cy.spy().as('onChangeSpy')
    const options = [
      { value: "a", label: "a" },
      { value: "b", label: "b" },
    ]

    const indexOfPick = 1;

    cy.mount(
      <StandardEntryFieldSelectMultiple
        label={label}
        options={options}
        currentValue={currentValue}
        type={type}
        dispatch={dispatch}
      />
    );

    cy.get(labelSelector).first().contains(label);

    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(indexOfPick)
      .click(0, 0, { force: true })

    cy.get('@onChangeSpy').should('have.been.called');
  });
});

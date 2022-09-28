/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { StandardFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css'

/** StandardEntryFieldTextArea

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldTextArea({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element {
    return (
        <>
            <label><span data-cy={'entry-field-input-textarea'}>{label}:</span></label>
            <textarea
                data-cy={'entry-field-input-textarea-entry'}
                required
                onChange={(e) => {
                    dispatch({
                        type: type,
                        payload: e.target.value,
                    });
                }}
                value={currentValue} />
        </>
    );
}
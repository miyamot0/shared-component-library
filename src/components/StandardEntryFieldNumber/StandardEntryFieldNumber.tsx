/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { NumericFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css'

/** StandardEntryFieldNumber

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {string} min enum related to dispatch/reducer
 * @param {string} max enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldNumber({ label, currentValue, type, min = "0", max = "80", dispatch }: NumericFieldEntryProps): JSX.Element {
    return (
        <>
            <label><span data-cy={'entry-field-input-number'}>{label}:</span></label>
            <input
                required
                type="number"
                min={min}
                max={max}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                        type: type,
                        payload: e.target.value,
                    });
                }}
                value={currentValue} />
        </>
    );
}
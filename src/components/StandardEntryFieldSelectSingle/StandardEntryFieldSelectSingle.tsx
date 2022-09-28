/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Select from "react-select";
import { SelectFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css'

/** StandardEntryFieldSelectSingle

 * @param {string} label value to display
 * @param {any[]} options options to display
 * @param {SingleOptionType | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldSelectSingle({ label, options, currentValue, type, dispatch }: SelectFieldEntryProps): JSX.Element {
    return (
        <>
            <label htmlFor="single-field" className="select-label">
                {label}:
            </label>
            <Select
                name={"single-field"}
                inputId={"single-field"}
                options={options}
                onChange={(option) => {
                    dispatch({
                        type: type,
                        payload: option,
                    });
                }}
                value={currentValue}
            />
        </>
    );
}
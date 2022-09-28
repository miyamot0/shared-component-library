/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Select from "react-select";
import { MultipleSelectFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css'

/** StandardEntryFieldSelectMultiple

 * @param {SingleOptionType} label value to display
 * @param {any[]} options options to display
 * @param {SingleOptionType | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldSelectMultiple({ label, options, currentValue, type, dispatch }: MultipleSelectFieldEntryProps): JSX.Element {
    return (
        <>
            <label htmlFor="multi-field" className="select-label">
                {label}:
            </label>
            <Select
                name={"multi-field"}
                inputId={"multi-field"}
                options={options}
                onChange={(option) => {
                    dispatch({
                        type: type,
                        payload: option,
                    });
                }}
                value={currentValue}
                isMulti={true}
            />
        </>
    );
}
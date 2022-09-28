/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="react" />
import { SelectFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css';
/** StandardEntryFieldSelectMultiple

 * @param {string} label value to display
 * @param {any[]} options options to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldSelectMultiple({ label, options, currentValue, type, dispatch }: SelectFieldEntryProps): JSX.Element;

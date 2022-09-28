/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="react" />
import { StandardFieldEntryProps } from "../../interfaces/ComponentInterfaces";
import './../../styles/styles.css';
/** StandardEntryFieldTextArea

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
export default function StandardEntryFieldTextArea({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element;

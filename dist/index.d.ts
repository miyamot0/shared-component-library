/// <reference types="react" />
import { MultiValue, SingleValue } from 'react-select';

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare type SingleOptionType = {
    label: string;
    value: string;
};

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare type DispatchPayloads = MultiValue<SingleOptionType> | SingleValue<SingleOptionType> | string;
declare type DispatchType = ({ type, payload }: {
    type: number;
    payload: DispatchPayloads;
}) => void;
interface StandardFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    type: number;
    dispatch: DispatchType;
}
interface SelectFieldEntryProps {
    label: string | undefined;
    options: SingleOptionType[];
    currentValue: SingleOptionType | undefined;
    type: number;
    dispatch: DispatchType;
}
interface MultipleSelectFieldEntryProps {
    label: string | undefined;
    options: SingleOptionType[];
    currentValue: MultiValue<SingleOptionType> | undefined;
    type: number;
    dispatch: DispatchType;
}
interface NumericFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
    type: number;
    dispatch: DispatchType;
}

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldText
 *
 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldText({ label, currentValue, type, dispatch, }: StandardFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldDate

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {Function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldDate({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldEmail

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldEmail({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldNumber

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {string} min enum related to dispatch/reducer
 * @param {string} max enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldNumber({ label, currentValue, type, min, max, dispatch }: NumericFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldPassword

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldPassword({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldTextArea

 * @param {string} label value to display
 * @param {string | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldTextArea({ label, currentValue, type, dispatch }: StandardFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldSelectSingle

 * @param {string} label value to display
 * @param {any[]} options options to display
 * @param {SingleOptionType | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldSelectSingle({ label, options, currentValue, type, dispatch }: SelectFieldEntryProps): JSX.Element;

/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** StandardEntryFieldSelectMultiple

 * @param {SingleOptionType} label value to display
 * @param {any[]} options options to display
 * @param {SingleOptionType | undefined} currentValue value to display
 * @param {number} type enum related to dispatch/reducer
 * @param {function} dispatch dispatch callback
 * @returns {JSX.Element}
 */
declare function StandardEntryFieldSelectMultiple({ label, options, currentValue, type, dispatch }: MultipleSelectFieldEntryProps): JSX.Element;

export { StandardEntryFieldDate, StandardEntryFieldEmail, StandardEntryFieldNumber, StandardEntryFieldPassword, StandardEntryFieldSelectMultiple, StandardEntryFieldSelectSingle, StandardEntryFieldText, StandardEntryFieldTextArea };

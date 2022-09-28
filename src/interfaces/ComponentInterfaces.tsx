/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface StandardFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    type: number;
    dispatch: any;
}

export interface SelectFieldEntryProps {
    label: string | undefined;
    options: any[];
    currentValue: string | undefined;
    type: number;
    dispatch: any;
}

export interface NumericFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
    type: number;
    dispatch: any;
}
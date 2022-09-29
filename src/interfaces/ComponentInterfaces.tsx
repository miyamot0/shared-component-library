/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MultiValue, SingleValue } from "react-select";
import { SingleOptionType } from "../types/SharedComponentTypes";

//export type DispatchPayloads = MultiValue<SingleOptionType> |
//    SingleValue<SingleOptionType> |
//    string;

export type DispatchType = ({ type, payload }: {
    type: number;
    payload: string | undefined | null | SingleOptionType | SingleValue<SingleOptionType> | MultiValue<SingleOptionType>;
}) => void

export interface StandardFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    type: number;
    dispatch: DispatchType;
}

export interface SelectFieldEntryProps {
    label: string | undefined;
    options: SingleOptionType[];
    currentValue: SingleOptionType | undefined;
    type: number;
    dispatch: DispatchType;
}

export interface MultipleSelectFieldEntryProps {
    label: string | undefined;
    options: SingleOptionType[];
    currentValue: MultiValue<SingleOptionType> | undefined;
    type: number;
    dispatch: DispatchType;
}

export interface NumericFieldEntryProps {
    label: string | undefined;
    currentValue: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
    type: number;
    dispatch: DispatchType;
}
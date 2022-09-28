/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="react" />
import { MultiValue } from "react-select";
import { SingleOptionType } from "./types/SharedComponentTypes";
/** standardEntryFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardEntryFieldText(label: string, currentValue: string, type: number, dispatch: any): JSX.Element;
/** standardEmailFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardEmailFieldText(label: string, currentValue: string, type: number, dispatch: any): JSX.Element;
/** standardPasswordFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardPasswordFieldText(label: string, currentValue: string, type: number, dispatch: any): JSX.Element;
/** standardEntryFieldTextArea
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardEntryFieldTextArea(label: string, currentValue: string, type: number, dispatch: any): JSX.Element;
/** standardEntryFieldNumber
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardEntryFieldNumber(label: string, currentValue: number, type: number, dispatch: any): JSX.Element;
/** standardEntryFieldDate
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardEntryFieldDate(label: string, currentValue: string, type: number, dispatch: any): JSX.Element;
/**
 *
 * @param label
 * @param options
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardSelectField(label: string, options: any, currentValue: SingleOptionType, type: number, dispatch: any): JSX.Element;
/** standardSelectFieldMulti
 *
 * @param label
 * @param options
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export declare function standardSelectFieldMulti(label: string, options: any, currentValue: MultiValue<SingleOptionType>, type: number, dispatch: any): JSX.Element;
/** standardErrorField
 *
 * @param formError
 * @returns
 */
export declare function standardErrorField({ formError }: {
    formError: string | undefined | null;
}): JSX.Element;

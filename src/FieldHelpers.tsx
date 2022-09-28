/** @license
 *
 * Copyright (c) Shawn P. Gilroy, Louisiana State University.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Select, { MultiValue } from "react-select";
import { SingleOptionType } from "./types/SharedComponentTypes";

/** standardEntryFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardEntryFieldText(
  label: string,
  currentValue: string,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <input
        required
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></input>
    </label>
  );
}

/** standardEmailFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardEmailFieldText(
  label: string,
  currentValue: string,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <input
        required
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></input>
    </label>
  );
}

/** standardPasswordFieldText
 *
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardPasswordFieldText(
  label: string,
  currentValue: string,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <input
        required
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></input>
    </label>
  );
}

/** standardEntryFieldTextArea
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardEntryFieldTextArea(
  label: string,
  currentValue: string,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <textarea
        required
        onChange={(e) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></textarea>
    </label>
  );
}

/** standardEntryFieldNumber
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardEntryFieldNumber(
  label: string,
  currentValue: number,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <input
        required
        type="number"
        min="0"
        max="80"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></input>
    </label>
  );
}

/** standardEntryFieldDate
 *
 * @param label
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardEntryFieldDate(
  label: string,
  currentValue: string,
  type: number,
  dispatch: any
) {
  return (
    <label>
      <span>{label}:</span>
      <input
        required
        type="date"
        onChange={(e) => {
          dispatch({
            type: type,
            payload: e.target.value,
          });
        }}
        value={currentValue}
      ></input>
    </label>
  );
}

/**
 *
 * @param label
 * @param options
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardSelectField(
  label: string,
  options: any,
  currentValue: SingleOptionType,
  type: number,
  dispatch: any
) {
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

/** standardSelectFieldMulti
 *
 * @param label
 * @param options
 * @param currentValue
 * @param type
 * @param dispatch
 * @returns
 */
export function standardSelectFieldMulti(
  label: string,
  options: any,
  currentValue: MultiValue<SingleOptionType>,
  type: number,
  dispatch: any
) {
  return (
    <>
      <label htmlFor="multi-field" className="select-label">
        {label}:
      </label>
      <Select
        name={"multi-field"}
        inputId={"multi-field"}
        options={options}
        onChange={(option: MultiValue<SingleOptionType>) => {
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

/** standardErrorField
 *
 * @param formError
 * @returns
 */
export function standardErrorField({ formError }: { formError: string | undefined | null; }) {
  if (formError === undefined) {
    return <></>;
  } else {
    return <p className="error">{formError}</p>;
  }
}

import { useCallback, useReducer } from "react";

/**
 * @typedef {(data: string) => string?} FormValidate
 */

/**
 * @typedef InputState
 * @property {string} value
 * @property {boolean} isTouched
 */

/**
 * @template T
 * @typedef InputData
 * @property {string=} error
 * @property {boolean} isInvalid
 * @property {InputPreparedProps<T>} props
 */

/**
 * @template T
 * @typedef {{[p in keyof T]: FormValidate}} FormValidatorMap
 */

/**
 * @template T
 * @typedef {{[p in keyof T]: InputState}} FormState
 */

/**
 * @template T
 * @typedef {{[p in keyof T]: InputData<T>}} FormData
 */

/**
 * @typedef BaseAction
 * @property {string=} name
 */

/**
 * @typedef _ChangeAction
 * @property {typeof CHANGE_ACTION} type
 * @property {string} value
 * @typedef {BaseAction & _ChangeAction} ChangeAction
 */

/**
 * @typedef _CommonAction
 * @property {typeof RESET_ACTION|typeof BLUR_ACTION|typeof CHECK_ACTION} type
 * @typedef {BaseAction & _CommonAction} CommonAction
 */

/**
 * @template T
 * @typedef InputPreparedProps
 * @property {keyof T} name
 * @property {string} value
 * @property {React.FocusEventHandler<HTMLInputElement>} onBlur
 * @property {React.FocusEventHandler<HTMLInputElement>} onChange
 */

const CHANGE_ACTION = "CHANGE";
const RESET_ACTION = "RESET";
const BLUR_ACTION = "BLUR";
const CHECK_ACTION = "CHECK";

/**
 * @param {InputState} inputState
 * @returns {InputState}
 */
const resetInputState = (inputState) => ({
  ...inputState,
  value: "",
  isTouched: false,
});

/**
 * @template T
 * @param {InputState} inputState
 * @param {FormValidate} validate
 * @param {InputPreparedProps<T>} props
 * @returns {InputData<T>}
 */
const getInputData = (inputState, validate, props) => {
  const error = validate(inputState.value);
  return {
    props,
    error,
    isInvalid: error && inputState.isTouched,
  };
};

/**
 * @template T
 * @param {FormState<T>} state
 * @param {ChangeAction|CommonAction} action
 * @returns {FormState<T>}
 */
const formReducer = (state, action) => {
  const name = action.name;
  if (action.type === CHANGE_ACTION) {
    return {
      ...state,
      [name]: { ...state[name], value: action.value, isTouched: true },
    };
  }
  if (action.type === BLUR_ACTION) {
    return { ...state, [name]: { ...state[name], isTouched: true } };
  }
  if (action.type === CHECK_ACTION) {
    return Object.fromEntries(
      Object.entries(state).map(([name, v]) => [
        /** @type {any} */ (name),
        { ...v, isTouched: true },
      ]),
    );
  }
  if (action.type === RESET_ACTION) {
    return Object.fromEntries(
      Object.entries(state).map(([name, v]) => [
        /** @type {any} */ (name),
        resetInputState(v),
      ]),
    );
  }
  return state;
};

/**
 * @template T
 * @param {FormValidatorMap<T>} validatorMap
 * @returns {FormState<T>}
 */
const createFormState = (validatorMap) => {
  /** @type {any} */
  const state = Object.fromEntries(
    Object.entries(validatorMap).map(([k]) => [
      k,
      { value: "", isTouched: false },
    ]),
  );
  return state;
};

/**
 * @template T
 * @param {FormValidatorMap<T>} validatorMap
 */
const useForm = (validatorMap) => {
  const [state, formDispatch] = useReducer(
    /**
     * @typedef {React.ReducerState<typeof formReducer<T>>} _FormReducerState
     * @typedef {React.ReducerAction<typeof formReducer<T>>} _FormReducerAction
     * @type {React.Reducer<_FormReducerState, _FormReducerAction>}
     */
    (formReducer),
    validatorMap,
    createFormState,
  );

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const changeHandler = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    formDispatch({ type: CHANGE_ACTION, name, value });
  }, []);

  /** @type {React.FocusEventHandler<HTMLInputElement>} */
  const blurHandler = useCallback((e) => {
    const name = e.target.name;
    formDispatch({ type: BLUR_ACTION, name });
  }, []);

  const checkHandler = useCallback(() => {
    formDispatch({ type: CHECK_ACTION });
  }, []);

  const resetHandler = useCallback(() => {
    formDispatch({ type: RESET_ACTION });
  }, []);

  /** @type {{[p in keyof T]: ReturnType<typeof getInputData<T>>}} */
  const data = Object.fromEntries(
    Object.entries(state).map((/** @type {any} */ [key, v]) => [
      key,
      getInputData(v, validatorMap[key], {
        name: key,
        value: v.value,
        onChange: changeHandler,
        onBlur: blurHandler,
      }),
    ]),
  );

  const formIsValid = Object.values(data)
    .map((v) => !v.error)
    .every(Boolean);

  const formIsSubmitable =
    Object.values(state)
      .map((v) => !v.isTouched)
      .some(Boolean) || formIsValid;

  return {
    state,
    data,
    formIsValid,
    formIsSubmitable,
    checkHandler,
    resetHandler,
  };
};

export default useForm;

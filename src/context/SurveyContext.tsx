import React, { useReducer, useContext, createContext, Dispatch } from "react";

/**
 * store types
 */
type QuestionType = {
  content: string;
  options: string[];
};

type SurveyState = {
  title: string;
  description: string;
  question: QuestionType[];
};

type SurveyAction =
  | {
      type: "SAVE_SURVEY";
      title: string;
      description: string;
      question: QuestionType[];
    }
  | { type: "RESET_SURVEY" };

type SurveyDispatch = Dispatch<SurveyAction>;

// 초기값
const initialState: SurveyState = {
  title: "",
  description: "",
  question: [{ content: "", options: [""] }],
};
const SurveyStateContext = createContext<SurveyState>(initialState);
const SurveyDispatchContext = createContext<SurveyDispatch>(() => null);

// reducer
function reducer(state: SurveyState, action: SurveyAction): SurveyState {
  switch (action.type) {
    case "SAVE_SURVEY":
      return {
        ...state,
        title: action.title,
        description: action.description,
        question: action.question,
      };
    case "RESET_SURVEY":
      return initialState;
    default:
      throw new Error("에러");
  }
}

// 컨텍스트 컴포넌트
export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    question: [{ content: "", options: [""] }],
  });

  return (
    <SurveyStateContext.Provider value={state}>
      <SurveyDispatchContext.Provider value={dispatch}>
        {children}
      </SurveyDispatchContext.Provider>
    </SurveyStateContext.Provider>
  );
}

//  커스텀 훅
export function useSurveyState(): SurveyState {
  const state = useContext(SurveyStateContext);
  if (!state) throw new Error("SurveyState 에러");
  return state;
}

export function useSurveyDispatch(): SurveyDispatch {
  const dispatch = useContext(SurveyDispatchContext);
  if (!dispatch) throw new Error("SurveyProvider 에러");
  return dispatch;
}

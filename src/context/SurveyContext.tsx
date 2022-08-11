import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언
type QuestionType = {
  content: string;
  options: string[];
};

// 상태를 위한 타입
type SurveyState = {
  title: string;
  description: string;
  question: QuestionType[];
};

// 모든 액션들을 위한 타입
type SurveyAction =
  | { type: "GET_SURVEY" }
  | {
      type: "SET_SURVEY";
      title: string;
      description: string;
      question: QuestionType[];
    }
  | { type: "RESET_SURVEY" };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type SurveyDispatch = Dispatch<SurveyAction>;

const initialState: SurveyState = {
  title: "",
  description: "",
  question: [{ content: "", options: [""] }],
};

// Context 만들기
const SurveyStateContext = createContext<SurveyState>(initialState);

const SurveyDispatchContext = createContext<SurveyDispatch>(() => null);

// 리듀서
function reducer(state: SurveyState, action: SurveyAction): SurveyState {
  switch (action.type) {
    case "SET_SURVEY":
      return {
        ...state,
        title: action.title,
        description: action.description,
        question: action.question,
      };
    case "RESET_SURVEY":
      return initialState;
    case "GET_SURVEY":
      return {
        ...state,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    question: [],
  });

  return (
    <SurveyStateContext.Provider value={state}>
      <SurveyDispatchContext.Provider value={dispatch}>
        {children}
      </SurveyDispatchContext.Provider>
    </SurveyStateContext.Provider>
  );
}

// 커스텀 Hooks
export function useSurveyState(): SurveyState {
  const state = useContext(SurveyStateContext);
  if (!state) throw new Error("Cannot find SurveyProvider");
  return state;
}

export function useSurveyDispatch(): SurveyDispatch {
  const dispatch = useContext(SurveyDispatchContext);
  if (!dispatch) throw new Error("Cannot find SurveyProvider");
  return dispatch;
}

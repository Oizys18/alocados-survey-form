import React, { useState, useCallback, useEffect } from "react";
import {
  SurveyState,
  useSurveyDispatch,
  useSurveyState,
} from "@context/SurveyContext";

import * as SC from "./SurveyForm.styles";
import { Input, Button, Divider } from "@base";
import SurveyQuestion from "@components/SurveyQuestion";

const SurveyForm = () => {
  const state = useSurveyState();
  const dispatch = useSurveyDispatch();

  const [formInputs, setFormInputs] = useState<SurveyState>({
    title: "",
    description: "",
    questions: [{ content: "", options: [""] }],
  });

  const setSurvey = useCallback(
    () => dispatch({ type: "SAVE_SURVEY", ...formInputs }),
    [dispatch, formInputs]
  );
  const resetSurvey = useCallback(
    () => dispatch({ type: "RESET_SURVEY" }),
    [dispatch]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleQuestionInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
      const { name, value } = e.target;
      setFormInputs((prev) => ({
        ...prev,
        questions: prev.questions.map((question, qIndex) => {
          if (qIndex === questionIndex && question.content !== value) {
            return {
              ...question,
              content: value,
            };
          }
          return question;
        }),
      }));
    },
    []
  );

  const handleOptionInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, questionIndex: Number) => {
      const { name, value } = e.target;
      setFormInputs((prev) => ({
        ...prev,
        questions: prev.questions.map((item, itemIndex) => {
          if (
            itemIndex === questionIndex &&
            item.options[Number(name)] !== value
          ) {
            return {
              ...item,
              options: item.options.map((option, oIndex) => {
                if (oIndex === Number(name)) {
                  return value;
                }
                return option;
              }),
            };
          }
          return item;
        }),
      }));
    },
    []
  );

  const handleAddQuestion = useCallback(() => {
    setFormInputs({
      ...formInputs,
      questions: [...formInputs.questions, { content: "", options: [""] }],
    });
  }, [formInputs]);

  const handleAddOption = useCallback(
    (questionIndex: Number) => {
      setFormInputs({
        ...formInputs,
        questions: formInputs.questions.map((question, qIndex) => {
          if (qIndex === questionIndex) {
            return {
              ...question,
              options: [...question.options, ""],
            };
          }
          return question;
        }),
      });
    },
    [formInputs]
  );

  const handleRemoveOption = useCallback(
    (questionIndex: Number, optionIndex: Number) => {
      setFormInputs({
        ...formInputs,
        questions: formInputs.questions.map((question, qIndex) => {
          if (qIndex === questionIndex) {
            return {
              ...question,
              options: question.options.filter((option, oIndex) => {
                return oIndex !== optionIndex;
              }),
            };
          }
          return question;
        }),
      });
    },
    [formInputs]
  );

  const handleResetSurvey = useCallback(() => {
    resetSurvey();
    setFormInputs({
      title: "",
      description: "",
      questions: [{ content: "", options: [""] }],
    });
  }, [resetSurvey]);

  const handleLoadSurvey = useCallback(() => {
    if (state.title === "") {
      alert(`저장된 설문이 없습니다.`);
    } else {
      setFormInputs(state);
    }
  }, [state]);

  const handleSaveSurvey = useCallback(() => {
    if (!formInputs.title) {
      alert("설문 제목을 입력해주세요.");
      return;
    } else if (!formInputs.description) {
      alert("설명을 입력해주세요.");
      return;
    } else if (!formInputs.questions.length) {
      alert("질문을 최소 한 개 이상 입력해주세요.");
      return;
    } else if (
      formInputs.questions.some((question) => {
        return !question.content;
      })
    ) {
      alert("질문 내용을 입력해주세요.");
      return;
    } else if (
      formInputs.questions.some((question) => {
        return !question.options.length;
      })
    ) {
      alert("질문 옵션을 최소 한 개 이상 입력해주세요");
      return;
    } else if (
      formInputs.questions.some((question) => {
        return question.options.some((option) => {
          return !option;
        });
      })
    ) {
      alert("옵션 내용을 입력해주세요.");
      return;
    } else {
      setSurvey();
    }
  }, [formInputs, setSurvey]);

  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.Title>설문 만들기</SC.Title>
        <Input.Filled
          placeholder="설문 제목"
          value={formInputs.title}
          name="title"
          onChange={handleInputChange}
        />
        <Input.Filled
          placeholder="설명"
          value={formInputs.description}
          name="description"
          onChange={handleInputChange}
        />
        <Divider />
        {formInputs.questions
          ? formInputs.questions.map((question, questionIndex) => {
              return (
                <SurveyQuestion
                  key={`question-${questionIndex}`}
                  question={question}
                  questionIndex={questionIndex}
                  handleAddOption={handleAddOption}
                  handleRemoveOption={handleRemoveOption}
                  handleOptionInputChange={handleOptionInputChange}
                  handleQuestionInputChange={handleQuestionInputChange}
                />
              );
            })
          : null}

        <Button.Block
          text="질문 추가"
          short
          color="#6B4FFF"
          onClick={handleAddQuestion}
        />
        <Divider />
        <SC.ButtonContainer>
          <Button.Text text="불러오기" onClick={handleLoadSurvey} />
          <Button.Text text="초기화" onClick={handleResetSurvey} />
        </SC.ButtonContainer>
        <Button.Block text="저장" color="#6B4FFF" onClick={handleSaveSurvey} />
      </SC.Container>
    </SC.Wrapper>
  );
};

export default React.memo(SurveyForm);

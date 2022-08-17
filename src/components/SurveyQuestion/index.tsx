import React from "react";
import { QuestionType } from "@context/SurveyContext";
import * as SC from "./SurveyQuestion.styles";
import { Input, Button, Divider } from "@base";
import SurveyOption from "@components/SurveyOption";

type SurveyQuestionProps = {
  question: QuestionType;
  questionIndex: number;
  handleQuestionInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number
  ) => void;
  handleOptionInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number
  ) => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
  handleAddOption: (questionIndex: number) => void;
};
const SurveyQuestion = ({
  question,
  questionIndex,
  handleQuestionInputChange,
  handleOptionInputChange,
  handleRemoveOption,
  handleAddOption,
}: SurveyQuestionProps) => {
  const onQuestionChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleQuestionInputChange(e, questionIndex),
    [handleQuestionInputChange, questionIndex]
  );
  const onAddOption = React.useCallback(
    () => handleAddOption(questionIndex),
    [handleAddOption, questionIndex]
  );
  console.log("question", question);
  return (
    <SC.Question key={`question-${questionIndex}`}>
      <Input.Filled
        placeholder="질문"
        value={question.content}
        name={questionIndex.toString()}
        onChange={onQuestionChange}
      />
      {question.options.map((option, optionIndex) => {
        return (
          <SurveyOption
            key={`option-${questionIndex}-${optionIndex}`}
            questionIndex={questionIndex}
            optionIndex={optionIndex}
            option={option}
            handleRemoveOption={handleRemoveOption}
            handleOptionInputChange={handleOptionInputChange}
          />
        );
      })}
      <Button.Block
        text="옵션 추가"
        short
        color="#6B4FFF"
        onClick={onAddOption}
      />
      <Divider />
    </SC.Question>
  );
};
export default React.memo(SurveyQuestion);

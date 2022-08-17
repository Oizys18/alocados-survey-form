import React from "react";
import { Input, Button, Divider } from "@base";
import * as SC from "./SurveyOption.styles";

type SurveyOptionProps = {
  questionIndex: number;
  optionIndex: number;
  option: string;
  handleOptionInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number
  ) => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
};

const SurveyOption = ({
  questionIndex,
  optionIndex,
  option,
  handleRemoveOption,
  handleOptionInputChange,
}: SurveyOptionProps) => {
  const onOptionChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleOptionInputChange(e, questionIndex),
    [handleOptionInputChange, questionIndex]
  );
  const onRemoveOption = React.useCallback(
    () => handleRemoveOption(questionIndex, optionIndex),
    [handleRemoveOption, questionIndex, optionIndex]
  );
  console.log("option", option);
  return (
    <SC.Option>
      <Input.Dense
        placeholder="옵션"
        value={option}
        name={optionIndex.toString()}
        onChange={onOptionChange}
      />
      <Button.Block
        text="삭제"
        short
        color="#F72585"
        onClick={onRemoveOption}
      />
    </SC.Option>
  );
};

export default React.memo(SurveyOption);

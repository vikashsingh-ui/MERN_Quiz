import React from "react";
import { CheckBox } from "components";

export default {
  title: "vikash_s_application1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };

import { SelectOption } from "../../ui/Select";
import { removeDuplicates } from "../../utils";
import { MemberProps } from "../Member";

export function getJobTitlesOptions(members: MemberProps[]): SelectOption[] {
  let jobTitles = members.map((member) => member.jobTitle);
  jobTitles = removeDuplicates(jobTitles);

  return jobTitles.map<SelectOption>((jobTitle) => ({
    value: jobTitle,
    text: jobTitle,
    selected: false,
  }));
}

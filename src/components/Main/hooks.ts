import { useEffect, useState } from "react";
import { MemberProps } from "../Member/interfaces";
import { SelectOption } from "../../ui/Select";
import { HttpClient } from "../../http/http-client";
import { normalizeMembersToSelectOptions } from "./utils";

export const useMain = () => {
  const { members, jobTitlesOptions, loading } = useQueryMembers();
  const { search, handleSearch } = useSearch();
  const { selectedOptions, handleFilter } = useFilter();

  const filteredMembers = members
    .filter((member) => {
      const fullName = `${member.firstName} ${member.lastName}`;
      return fullName.toLowerCase().includes(search.toLowerCase());
    })
    .filter((member) => {
      if (!selectedOptions.length) {
        return true;
      }

      return selectedOptions.includes(member.jobTitle);
    });

  return {
    members: filteredMembers,
    jobTitlesOptions,
    search,
    loading,
    handleSearch,
    handleFilter,
  };
};

export const useQueryMembers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [members, setMembers] = useState<MemberProps[]>([]);
  const [jobTitlesOptions, setJobTitlesOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const membersData = await HttpClient.emitateGet<MemberProps[]>(
          "fake-url"
        );
        const jobTitlesOptions = normalizeMembersToSelectOptions(membersData);
        setMembers(membersData);
        setJobTitlesOptions(jobTitlesOptions);
      } catch (err) {
        console.error(err);
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return {
    members,
    jobTitlesOptions,
    loading,
    error,
  };
};

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  return {
    search,
    handleSearch,
  };
};

export const useFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleFilter = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
  };

  return {
    selectedOptions,
    handleFilter,
  };
};

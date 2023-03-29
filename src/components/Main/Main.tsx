import { FC } from 'react';
import { MemberList } from '../MemberList';
import { Skeleton } from '../Skeleton';
import { Select } from '../../ui/Select';
import { Search } from '../../ui/Search';
import { MainProps } from './interfaces';
import { useMain, } from './hooks';
import './Main.css';

export const Main: FC<MainProps> = ({ className }) => {
  const { 
    search, 
    jobTitlesOptions, 
    members,
    loading,
    handleSearch, 
    handleFilter
  } = useMain();

  return (
    <section className={className}>
      <h1 className="main-header">Members</h1>

      <div className="main-search-panel">
        <div className="field">
          <label className="field-label" htmlFor="search">
            Search by first and last name
          </label>
          <br />
          <Search
            id="search"
            className="field-search"
            placeholder="Search"
            disabled={loading}
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="filter">
            Filter by job title
            <span className="field-label-hint">
              (ctrl/cmd/shift + click to select multiple)
            </span>
          </label>
          <br />
          <Select 
            id="filter"
            className="field-select"
            disabled={loading}
            options={jobTitlesOptions} 
            multiple
            onChange={handleFilter}
          />
        </div>
      </div>

      { loading ? 
        <Skeleton className="main-member-list" size={15} /> : 
        <MemberList className="main-member-list" data={members} /> 
      }
    </section>
  );
};
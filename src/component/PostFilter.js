import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter,query:e.target.value})}

            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
                defaultValue='Cортировка'
                options={[
                    {value: 'name', name: 'По имени'},
                    {value: 'surename', name: 'По фамилии'},
                    {value: 'date', name: 'По дате'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
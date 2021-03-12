/*
import React, {useState} from "react";

function CheckBox(){

    const [checkedItems, setCheckedItems] = useState(new Set());


    const Issue = () => {
        return (
            <input type="checkbox" />
        );
    };

    const IssueList = () => {
        const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
        return (
        <>
            <input type="checkbox" />
            <li>
            {issues.map((issue, index) => (
                <Issue key={index} />
            ))}
            </li>
        </>
        );
        
    };

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
          checkedItems.add(id);
          setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
          checkedItems.delete(id);
          setCheckedItems(checkedItems);
        }
      };

      const [bChecked, setChecked] = useState(false);

      const checkHandler = ({ target }) => {
        setChecked(!bChecked);
        checkedItemHandler(issue.id, target.checked);
      };
      
      // 컴포넌트 쌓여진 부분 생략
      <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />;


    const [isAllChecked, setIsAllChecked] = useState(false);

    const allCheckedHandler = (isChecked) => {
    if (isChecked) {
        setCheckedItems(new Set(issues.map(({ id }) => id)));
        setIsAllChecked(true);
    } else {
        checkedItems.clear();
        setCheckedItems(setCheckedItems);
        setIsAllChecked(false);
    }
    };



}

export default CheckBox;
*/